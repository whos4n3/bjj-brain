const express = require('express');
const { body, query, validationResult } = require('express-validator');
const { PrismaClient } = require('@prisma/client');
const { auth, requireRole, optionalAuth } = require('../middleware/auth');

const router = express.Router();
const prisma = new PrismaClient();

// Validation rules
const createTechniqueValidation = [
  body('name').isLength({ min: 1, max: 200 }).trim(),
  body('description').isLength({ min: 10, max: 2000 }).trim(),
  body('difficulty').isIn(['FUNDAMENTAL', 'BEGINNER', 'INTERMEDIATE', 'ADVANCED', 'EXPERT']),
  body('position').isIn([
    'STANDING', 'CLINCH', 'TAKEDOWN', 'CLOSED_GUARD', 'OPEN_GUARD', 
    'HALF_GUARD', 'BUTTERFLY_GUARD', 'DE_LA_RIVA', 'SPIDER_GUARD', 
    'RUBBER_GUARD', 'SIDE_CONTROL', 'MOUNT', 'BACK_CONTROL', 
    'KNEE_ON_BELLY', 'NORTH_SOUTH', 'TURTLE', 'SCRAMBLE', 
    'GUARD_PASS', 'SWEEP', 'ESCAPE', 'SUBMISSION', 'COUNTER'
  ]),
  body('trainingType').isIn(['GI_ONLY', 'NOGI_ONLY', 'BOTH']),
  body('bodyTypes').isArray().custom((value) => {
    return value.every(type => ['SHORTER', 'AVERAGE', 'TALLER'].includes(type));
  }),
  body('steps').isArray().isLength({ min: 1, max: 20 }),
  body('steps.*.description').isLength({ min: 1, max: 500 }),
  body('steps.*.keyPoints').optional().isArray(),
  body('steps.*.commonMistakes').optional().isArray()
];

// Get all techniques with filtering and pagination
router.get('/', optionalAuth, [
  query('page').optional().isInt({ min: 1 }),
  query('limit').optional().isInt({ min: 1, max: 100 }),
  query('difficulty').optional().isIn(['FUNDAMENTAL', 'BEGINNER', 'INTERMEDIATE', 'ADVANCED', 'EXPERT']),
  query('position').optional().isString(),
  query('trainingType').optional().isIn(['GI_ONLY', 'NOGI_ONLY', 'BOTH']),
  query('bodyType').optional().isIn(['SHORTER', 'AVERAGE', 'TALLER']),
  query('search').optional().isLength({ min: 1, max: 100 }),
  query('sortBy').optional().isIn(['name', 'difficulty', 'successRate', 'viewCount', 'createdAt']),
  query('sortOrder').optional().isIn(['asc', 'desc'])
], async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ 
        error: 'Validation failed',
        details: errors.array()
      });
    }

    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 20;
    const offset = (page - 1) * limit;

    // Build where clause
    const where = {
      status: 'APPROVED' // Only show approved techniques
    };

    if (req.query.difficulty) {
      where.difficulty = req.query.difficulty;
    }

    if (req.query.position) {
      where.position = req.query.position;
    }

    if (req.query.trainingType) {
      where.trainingType = req.query.trainingType;
    }

    if (req.query.bodyType) {
      where.bodyTypes = {
        has: req.query.bodyType
      };
    }

    if (req.query.search) {
      where.OR = [
        { name: { contains: req.query.search, mode: 'insensitive' } },
        { description: { contains: req.query.search, mode: 'insensitive' } }
      ];
    }

    // Build orderBy
    const sortBy = req.query.sortBy || 'name';
    const sortOrder = req.query.sortOrder || 'asc';
    const orderBy = { [sortBy]: sortOrder };

    // Get techniques
    const [techniques, totalCount] = await Promise.all([
      prisma.technique.findMany({
        where,
        orderBy,
        skip: offset,
        take: limit,
        include: {
          submittedBy: {
            select: {
              id: true,
              username: true,
              skillLevel: true
            }
          },
          steps: {
            orderBy: { stepNumber: 'asc' }
          },
          tags: {
            include: {
              tag: true
            }
          },
          _count: {
            select: {
              favorites: true,
              transitionsFrom: true,
              transitionsTo: true
            }
          },
          // Include user's favorite status if authenticated
          ...(req.user && {
            favorites: {
              where: { userId: req.user.id },
              select: { id: true }
            }
          })
        }
      }),
      prisma.technique.count({ where })
    ]);

    // Format response
    const formattedTechniques = techniques.map(technique => ({
      ...technique,
      isFavorited: req.user ? technique.favorites?.length > 0 : false,
      favorites: undefined, // Remove favorites array from response
      tags: technique.tags.map(tt => tt.tag)
    }));

    // Calculate personalized recommendations if user is authenticated
    if (req.user) {
      // Add recommendation scores based on user profile
      formattedTechniques.forEach(technique => {
        let recommendationScore = 0;
        
        // Body type match
        if (technique.bodyTypes.includes(req.user.bodyType)) {
          recommendationScore += 30;
        }
        
        // Skill level appropriateness
        const skillLevels = ['FUNDAMENTAL', 'BEGINNER', 'INTERMEDIATE', 'ADVANCED', 'EXPERT'];
        const userSkillIndex = skillLevels.indexOf(req.user.skillLevel.replace('_BELT', '').replace('WHITE', 'BEGINNER').replace('BLUE', 'INTERMEDIATE').replace('PURPLE', 'ADVANCED').replace('BROWN', 'EXPERT').replace('BLACK', 'EXPERT'));
        const techniqueSkillIndex = skillLevels.indexOf(technique.difficulty);
        
        if (Math.abs(userSkillIndex - techniqueSkillIndex) <= 1) {
          recommendationScore += 20;
        }
        
        // Training type match
        if (technique.trainingType === req.user.trainingFocus || technique.trainingType === 'BOTH') {
          recommendationScore += 10;
        }
        
        technique.recommendationScore = recommendationScore;
      });
    }

    const totalPages = Math.ceil(totalCount / limit);

    res.json({
      techniques: formattedTechniques,
      pagination: {
        currentPage: page,
        totalPages,
        totalCount,
        hasNextPage: page < totalPages,
        hasPrevPage: page > 1
      },
      filters: {
        difficulty: req.query.difficulty,
        position: req.query.position,
        trainingType: req.query.trainingType,
        bodyType: req.query.bodyType,
        search: req.query.search
      }
    });

  } catch (error) {
    console.error('Get techniques error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Get single technique by ID
router.get('/:id', optionalAuth, async (req, res) => {
  try {
    const { id } = req.params;

    const technique = await prisma.technique.findUnique({
      where: { id },
      include: {
        submittedBy: {
          select: {
            id: true,
            username: true,
            skillLevel: true,
            beltRank: true
          }
        },
        steps: {
          orderBy: { stepNumber: 'asc' }
        },
        tags: {
          include: {
            tag: true
          }
        },
        transitionsFrom: {
          include: {
            toTechnique: {
              select: {
                id: true,
                name: true,
                difficulty: true,
                position: true
              }
            }
          }
        },
        transitionsTo: {
          include: {
            fromTechnique: {
              select: {
                id: true,
                name: true,
                difficulty: true,
                position: true
              }
            }
          }
        },
        _count: {
          select: {
            favorites: true
          }
        },
        // Include user's favorite status if authenticated
        ...(req.user && {
          favorites: {
            where: { userId: req.user.id },
            select: { id: true }
          }
        })
      }
    });

    if (!technique) {
      return res.status(404).json({ error: 'Technique not found' });
    }

    // Check if user can view this technique
    if (technique.status !== 'APPROVED' && 
        (!req.user || (req.user.id !== technique.submittedById && !['MODERATOR', 'ADMIN'].includes(req.user.role)))) {
      return res.status(404).json({ error: 'Technique not found' });
    }

    // Increment view count
    await prisma.technique.update({
      where: { id },
      data: { viewCount: { increment: 1 } }
    });

    // Format response
    const formattedTechnique = {
      ...technique,
      isFavorited: req.user ? technique.favorites?.length > 0 : false,
      favorites: undefined,
      tags: technique.tags.map(tt => tt.tag),
      transitions: {
        from: technique.transitionsFrom,
        to: technique.transitionsTo
      },
      transitionsFrom: undefined,
      transitionsTo: undefined
    };

    res.json({ technique: formattedTechnique });

  } catch (error) {
    console.error('Get technique error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Create new technique
router.post('/', auth, createTechniqueValidation, async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ 
        error: 'Validation failed',
        details: errors.array()
      });
    }

    const {
      name,
      description,
      difficulty,
      position,
      trainingType,
      bodyTypes,
      steps,
      videoUrl,
      thumbnailUrl,
      tags = []
    } = req.body;

    // Create technique with steps in a transaction
    const technique = await prisma.$transaction(async (prisma) => {
      // Create the technique
      const newTechnique = await prisma.technique.create({
        data: {
          name,
          description,
          difficulty,
          position,
          trainingType,
          bodyTypes,
          videoUrl,
          thumbnailUrl,
          submittedById: req.user.id,
          status: req.user.role === 'ADMIN' ? 'APPROVED' : 'PENDING_REVIEW'
        }
      });

      // Create technique steps
      if (steps && steps.length > 0) {
        await prisma.techniqueStep.createMany({
          data: steps.map((step, index) => ({
            techniqueId: newTechnique.id,
            stepNumber: index + 1,
            description: step.description,
            keyPoints: step.keyPoints || [],
            commonMistakes: step.commonMistakes || [],
            imageUrl: step.imageUrl
          }))
        });
      }

      // Add tags if provided
      if (tags && tags.length > 0) {
        for (const tagName of tags) {
          // Find or create tag
          const tag = await prisma.tag.upsert({
            where: { name: tagName },
            update: {},
            create: {
              name: tagName,
              category: 'CONCEPT' // Default category
            }
          });

          // Link tag to technique
          await prisma.techniqueTag.create({
            data: {
              techniqueId: newTechnique.id,
              tagId: tag.id
            }
          });
        }
      }

      return newTechnique;
    });

    res.status(201).json({
      message: 'Technique created successfully',
      technique: {
        ...technique,
        status: technique.status === 'PENDING_REVIEW' ? 
          'Your technique has been submitted for review' : 
          'Technique approved and published'
      }
    });

  } catch (error) {
    console.error('Create technique error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Toggle favorite technique
router.post('/:id/favorite', auth, async (req, res) => {
  try {
    const { id } = req.params;

    // Check if technique exists
    const technique = await prisma.technique.findUnique({
      where: { id, status: 'APPROVED' }
    });

    if (!technique) {
      return res.status(404).json({ error: 'Technique not found' });
    }

    // Check if already favorited
    const existingFavorite = await prisma.userTechniqueFavorite.findUnique({
      where: {
        userId_techniqueId: {
          userId: req.user.id,
          techniqueId: id
        }
      }
    });

    let isFavorited;
    if (existingFavorite) {
      // Remove favorite
      await prisma.$transaction([
        prisma.userTechniqueFavorite.delete({
          where: { id: existingFavorite.id }
        }),
        prisma.technique.update({
          where: { id },
          data: { favoriteCount: { decrement: 1 } }
        })
      ]);
      isFavorited = false;
    } else {
      // Add favorite
      await prisma.$transaction([
        prisma.userTechniqueFavorite.create({
          data: {
            userId: req.user.id,
            techniqueId: id,
            notes: req.body.notes
          }
        }),
        prisma.technique.update({
          where: { id },
          data: { favoriteCount: { increment: 1 } }
        })
      ]);
      isFavorited = true;
    }

    res.json({
      message: isFavorited ? 'Technique added to favorites' : 'Technique removed from favorites',
      isFavorited
    });

  } catch (error) {
    console.error('Toggle favorite error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Get user's favorite techniques
router.get('/favorites/me', auth, async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 20;
    const offset = (page - 1) * limit;

    const [favorites, totalCount] = await Promise.all([
      prisma.userTechniqueFavorite.findMany({
        where: { userId: req.user.id },
        orderBy: { createdAt: 'desc' },
        skip: offset,
        take: limit,
        include: {
          technique: {
            include: {
              submittedBy: {
                select: {
                  id: true,
                  username: true,
                  skillLevel: true
                }
              },
              tags: {
                include: {
                  tag: true
                }
              }
            }
          }
        }
      }),
      prisma.userTechniqueFavorite.count({
        where: { userId: req.user.id }
      })
    ]);

    const formattedFavorites = favorites.map(fav => ({
      id: fav.id,
      notes: fav.notes,
      favoritedAt: fav.createdAt,
      technique: {
        ...fav.technique,
        tags: fav.technique.tags.map(tt => tt.tag),
        isFavorited: true
      }
    }));

    const totalPages = Math.ceil(totalCount / limit);

    res.json({
      favorites: formattedFavorites,
      pagination: {
        currentPage: page,
        totalPages,
        totalCount,
        hasNextPage: page < totalPages,
        hasPrevPage: page > 1
      }
    });

  } catch (error) {
    console.error('Get favorites error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;
