const { PrismaClient } = require('../../node_modules/@prisma/client');
const bcrypt = require('bcryptjs');

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Starting database seed...');

  try {
    // Create admin user
    const adminPassword = await bcrypt.hash('admin123', 12);
    
    const admin = await prisma.user.upsert({
      where: { email: 'admin@bjjbrain.com' },
      update: {},
      create: {
        email: 'admin@bjjbrain.com',
        username: 'admin',
        passwordHash: adminPassword,
        firstName: 'BJJ',
        lastName: 'Admin',
        skillLevel: 'BLACK_BELT',
        bodyType: 'AVERAGE',
        trainingFocus: 'BOTH',
        role: 'ADMIN',
        isVerified: true,
        beltRank: 'Black Belt',
        yearsTraining: 15
      }
    });

    console.log('✅ Admin user created');

    // Create demo users
    const demoUsers = await Promise.all([
      prisma.user.upsert({
        where: { email: 'beginner@bjjbrain.com' },
        update: {},
        create: {
          email: 'beginner@bjjbrain.com',
          username: 'whitebelt_warrior',
          passwordHash: await bcrypt.hash('demo123', 12),
          firstName: 'John',
          lastName: 'Newbie',
          skillLevel: 'WHITE_BELT',
          bodyType: 'AVERAGE',
          trainingFocus: 'GI_ONLY',
          beltRank: 'White Belt',
          yearsTraining: 1,
          gymName: 'Local BJJ Academy'
        }
      }),
      prisma.user.upsert({
        where: { email: 'competitor@bjjbrain.com' },
        update: {},
        create: {
          email: 'competitor@bjjbrain.com',
          username: 'purple_belt_competitor',
          passwordHash: await bcrypt.hash('demo123', 12),
          firstName: 'Sarah',
          lastName: 'Competitor',
          skillLevel: 'PURPLE_BELT',
          bodyType: 'SHORTER',
          trainingFocus: 'BOTH',
          beltRank: 'Purple Belt',
          yearsTraining: 6,
          gymName: 'Elite Competition Team'
        }
      })
    ]);

    console.log('✅ Demo users created');

    // Create sample techniques
    const techniques = [
      {
        name: 'Guillotine Choke from Standing',
        description: 'A high-percentage submission technique when opponent shoots for a takedown with their head exposed. This choke can be finished from standing or after jumping to guard.',
        difficulty: 'INTERMEDIATE',
        position: 'STANDING',
        category: 'SUBMISSION',
        steps: [
          {
            stepNumber: 1,
            description: 'As opponent shoots for takedown, immediately wrap your arm around their neck',
            keyPoints: ['Move quickly before they complete takedown', 'Get deep grip around neck'],
            commonMistakes: ['Being too slow', 'Not getting deep enough grip']
          },
          {
            stepNumber: 2,
            description: 'Lock your hands together in a gable grip under their chin',
            keyPoints: ['Squeeze hands together tightly', 'Keep forearm against their throat'],
            commonMistakes: ['Locking hands too low', 'Not squeezing tight enough']
          },
          {
            stepNumber: 3,
            description: 'Lift your hips up and squeeze your arms together',
            keyPoints: ['Drive hips forward', 'Pull up with your arms'],
            commonMistakes: ['Forgetting to lift hips', 'Only using arm strength']
          },
          {
            stepNumber: 4,
            description: 'Jump guard or take them down while maintaining the choke',
            keyPoints: ['Keep choke tight during transition', 'Control their posture'],
            commonMistakes: ['Loosening choke during transition', 'Poor guard entry']
          }
        ],
        tags: ['submission', 'fundamental', 'high-percentage', 'takedown']
      },
      {
        name: 'Sprawl and Underhook Defense',
        description: 'The fundamental takedown defense technique. A high-percentage way to defend against most takedown attempts while maintaining good position.',
        difficulty: 'FUNDAMENTAL',
        position: 'STANDING',
        category: 'ESCAPE',
        steps: [
          {
            stepNumber: 1,
            description: 'As soon as you see the takedown attempt, shoot your legs back explosively',
            keyPoints: ['React immediately', 'Get legs far back', 'Stay on your toes'],
            commonMistakes: ['Reacting too late', 'Not going back far enough']
          },
          {
            stepNumber: 2,
            description: 'Drive your hips down onto their back to flatten them out',
            keyPoints: ['Heavy hip pressure', 'Chest over their back', 'Stay balanced'],
            commonMistakes: ['Not getting heavy enough', 'Going too far forward']
          },
          {
            stepNumber: 3,
            description: 'Insert an underhook on the side where their head is positioned',
            keyPoints: ['Deep underhook', 'Control their arm', 'Maintain hip pressure'],
            commonMistakes: ['Shallow underhook', 'Lifting hips too early']
          },
          {
            stepNumber: 4,
            description: 'Drive forward and work to front headlock or takedown',
            keyPoints: ['Drive through them', 'Control head and arm', 'Stay aggressive'],
            commonMistakes: ['Being passive', 'Letting them recover']
          }
        ],
        tags: ['fundamental', 'takedown', 'high-percentage']
      },
      {
        name: 'Elevator Sweep from Takedown',
        description: 'An advanced counter-attack technique that turns a defensive position into an offensive opportunity. Requires precise timing and technique.',
        difficulty: 'ADVANCED',
        position: 'STANDING',
        category: 'SWEEP',
        steps: [
          {
            stepNumber: 1,
            description: 'As opponent completes takedown, secure underhooks on both sides',
            keyPoints: ['Get underhooks before they settle', 'Stay close to their body'],
            commonMistakes: ['Being too late', 'Getting arms trapped']
          },
          {
            stepNumber: 2,
            description: 'Bridge up explosively as they try to settle their weight',
            keyPoints: ['Explosive bridge', 'Drive them forward', 'Time with their movement'],
            commonMistakes: ['Weak bridge', 'Poor timing', 'Not being explosive']
          },
          {
            stepNumber: 3,
            description: 'Hook their leg with your leg (elevator hook) during the bridge',
            keyPoints: ['Deep leg hook', 'Use momentum', 'Keep underhooks tight'],
            commonMistakes: ['Shallow hook', 'Losing underhooks', 'Not using momentum']
          },
          {
            stepNumber: 4,
            description: 'Roll them over using the leg hook and your momentum',
            keyPoints: ['Complete the roll', 'End up on top', 'Maintain control'],
            commonMistakes: ['Stopping halfway', 'Losing control', 'Not following through']
          }
        ],
        tags: ['sweep', 'takedown']
      },
      {
        name: 'Armbar from Closed Guard',
        description: 'One of the most fundamental submissions in Brazilian Jiu-Jitsu. A high-percentage technique that every practitioner should master.',
        difficulty: 'BEGINNER',
        position: 'CLOSED_GUARD',
        category: 'SUBMISSION',
        steps: [
          {
            stepNumber: 1,
            description: 'From closed guard, control opponent\'s sleeve and break their posture',
            keyPoints: ['Strong grip on sleeve', 'Pull them down', 'Keep guard closed'],
            commonMistakes: ['Weak sleeve grip', 'Not breaking posture first']
          },
          {
            stepNumber: 2,
            description: 'Swim your hand across to grab their opposite collar',
            keyPoints: ['Deep collar grip', 'Swim under their arm', 'Keep them broken down'],
            commonMistakes: ['Shallow collar grip', 'Letting them posture up']
          },
          {
            stepNumber: 3,
            description: 'Open guard and pivot your body perpendicular to them',
            keyPoints: ['Full body turn', 'Keep grips tight', 'Get perpendicular'],
            commonMistakes: ['Not turning enough', 'Losing grips', 'Going too fast']
          },
          {
            stepNumber: 4,
            description: 'Throw your leg over their head and secure the armbar position',
            keyPoints: ['High leg over head', 'Pinch knees together', 'Control their wrist'],
            commonMistakes: ['Low leg position', 'Not controlling wrist', 'Loose leg control']
          }
        ],
        tags: ['submission', 'fundamental', 'guard']
      }
    ];

    // Create techniques with steps
    const createdTechniques = [];
    for (let i = 0; i < techniques.length; i++) {
      const techniqueData = techniques[i];
      
      const technique = await prisma.technique.create({
        data: {
          name: techniqueData.name,
          description: techniqueData.description,
          difficulty: techniqueData.difficulty,
          position: techniqueData.position,
          category: techniqueData.category || 'SUBMISSION',
          tags: techniqueData.tags,
          userId: admin.id
        }
      });

      // Create technique steps
      for (let j = 0; j < techniqueData.steps.length; j++) {
        const step = techniqueData.steps[j];
        await prisma.techniqueStep.create({
          data: {
            techniqueId: technique.id,
            stepNumber: j + 1,
            instruction: step.description
          }
        });
      }

      createdTechniques.push(technique);
    }

    console.log('✅ Sample techniques created');
    console.log('🎉 Database seeded successfully!');
    console.log('\n📝 Login credentials:');
    console.log('Admin: admin@bjjbrain.com / admin123');
    console.log('Beginner: beginner@bjjbrain.com / demo123');
    console.log('Competitor: competitor@bjjbrain.com / demo123');

  } catch (error) {
    console.error('❌ Error seeding database:', error);
    throw error;
  }
}

main()
  .catch((e) => {
    console.error('❌ Seed failed:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
