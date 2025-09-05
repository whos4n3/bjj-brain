const { PrismaClient } = require('../../node_modules/@prisma/client');
const bcrypt = require('bcryptjs');

const prisma = new PrismaClient();

async function main() {
  console.log('🗺️ Importing techniques from mind maps...');

  try {
    // Get admin user
    const admin = await prisma.user.findFirst({
      where: { email: 'admin@bjjbrain.com' }
    });

    if (!admin) {
      throw new Error('Admin user not found. Please run the seed script first.');
    }

    // Comprehensive techniques extracted from all 7 mind maps
    const mindMapTechniques = [
      
      // FROM IMAGE 1: Gracie Barra Fundamentals Program
      {
        name: 'Straight Punch Defense',
        description: 'Basic self-defense technique against straight punches',
        category: 'ESCAPE',
        position: 'STANDING',
        difficulty: 'FUNDAMENTAL',
        tags: ['self-defense', 'standing', 'defense'],
        steps: [
          'Block or parry the incoming punch',
          'Create distance and assess the situation',
          'Counter with appropriate technique if necessary'
        ]
      },
      {
        name: 'Ground Headlock Escape',
        description: 'Escape technique when caught in a headlock on the ground',
        category: 'ESCAPE',
        position: 'SIDE_CONTROL',
        difficulty: 'FUNDAMENTAL',
        tags: ['escape', 'headlock', 'ground'],
        steps: [
          'Bridge to create space',
          'Use your bottom arm to push their hip',
          'Turn to your knees and escape'
        ]
      },
      {
        name: 'Standing Headlock Escape',
        description: 'Basic escape from standing headlock position',
        category: 'ESCAPE',
        position: 'STANDING',
        difficulty: 'FUNDAMENTAL',
        tags: ['escape', 'headlock', 'standing'],
        steps: [
          'Step behind attacker\'s leg',
          'Grab their leg and lift',
          'Take them down while escaping the headlock'
        ]
      },
      {
        name: 'Mount Escape - Elbow Escape',
        description: 'Basic escape from mount using elbow technique',
        category: 'ESCAPE',
        position: 'MOUNT',
        difficulty: 'BEGINNER',
        tags: ['mount', 'escape', 'elbow'],
        steps: [
          'Protect your neck and frame with elbows',
          'Bridge and shrimp to create space',
          'Insert knee and recover guard'
        ]
      },
      {
        name: 'Side Control Escape - Hip Escape',
        description: 'Fundamental escape from side control using hip movement',
        category: 'ESCAPE',
        position: 'SIDE_CONTROL',
        difficulty: 'BEGINNER',
        tags: ['side-control', 'escape', 'hip-movement'],
        steps: [
          'Frame against opponent\'s neck and hip',
          'Bridge and shrimp away',
          'Insert knee and recover guard'
        ]
      },
      {
        name: 'Back Control Escape - Hand Fighting',
        description: 'Escape from back control by fighting the hands',
        category: 'ESCAPE',
        position: 'BACK_CONTROL',
        difficulty: 'INTERMEDIATE',
        tags: ['back-control', 'escape', 'hand-fighting'],
        steps: [
          'Fight the hands to prevent choke',
          'Turn towards the choking arm',
          'Escape to guard or standing'
        ]
      },

      // FROM IMAGE 2: Gracie Barra Flow Chart
      {
        name: 'Sprawl',
        description: 'Fundamental takedown defense technique',
        category: 'ESCAPE',
        position: 'STANDING',
        difficulty: 'FUNDAMENTAL',
        tags: ['takedown-defense', 'sprawl', 'wrestling'],
        steps: [
          'Shoot hips back explosively',
          'Drive hands down on opponent\'s shoulders',
          'Sprawl legs back and flatten opponent'
        ]
      },
      {
        name: 'Guillotine Choke',
        description: 'Front choke applied when opponent shoots for takedown',
        category: 'SUBMISSION',
        position: 'STANDING',
        difficulty: 'INTERMEDIATE',
        tags: ['submission', 'choke', 'guillotine'],
        steps: [
          'Wrap arm around opponent\'s neck',
          'Lock hands in gable grip',
          'Lift hips and squeeze for submission'
        ]
      },
      {
        name: 'Hip Toss',
        description: 'Standing throw using hip placement',
        category: 'TAKEDOWN',
        position: 'STANDING',
        difficulty: 'INTERMEDIATE',
        tags: ['takedown', 'throw', 'hip-toss'],
        steps: [
          'Get underhooks or collar tie',
          'Step in close to opponent',
          'Use hip as fulcrum to throw'
        ]
      },
      {
        name: 'Bear Hug Defense',
        description: 'Defense against rear bear hug attack',
        category: 'ESCAPE',
        position: 'STANDING',
        difficulty: 'FUNDAMENTAL',
        tags: ['self-defense', 'bear-hug', 'escape'],
        steps: [
          'Lower your center of gravity',
          'Step to side and turn',
          'Create distance and counter'
        ]
      },
      {
        name: 'Collar Drag',
        description: 'Takedown using collar grip and pulling motion',
        category: 'TAKEDOWN',
        position: 'STANDING',
        difficulty: 'INTERMEDIATE',
        tags: ['takedown', 'collar-drag', 'wrestling'],
        steps: [
          'Grip opponent\'s collar',
          'Pull and step to side',
          'Take opponent\'s back or take down'
        ]
      },

      // FROM IMAGE 3: Leg Lock Flow Chart
      {
        name: 'Ashi Garami',
        description: 'Fundamental leg entanglement position',
        category: 'SUBMISSION',
        position: 'OPEN_GUARD',
        difficulty: 'ADVANCED',
        tags: ['leg-locks', 'ashi-garami', 'entanglement'],
        steps: [
          'Control opponent\'s leg with your legs',
          'Create proper angles for attack',
          'Apply straight ankle lock or heel hook'
        ]
      },
      {
        name: 'Outside Ashi Garami',
        description: 'Outside variation of ashi garami leg entanglement',
        category: 'SUBMISSION',
        position: 'OPEN_GUARD',
        difficulty: 'ADVANCED',
        tags: ['leg-locks', 'outside-ashi', 'advanced'],
        steps: [
          'Establish outside leg position',
          'Control hip and leg',
          'Attack with various leg submissions'
        ]
      },
      {
        name: '50/50 Guard',
        description: 'Symmetrical leg entanglement position',
        category: 'GUARD',
        position: 'OPEN_GUARD',
        difficulty: 'ADVANCED',
        tags: ['50-50', 'leg-entanglement', 'guard'],
        steps: [
          'Establish symmetrical leg position',
          'Control opponent\'s posture',
          'Attack legs or transition to other positions'
        ]
      },
      {
        name: 'Straight Ankle Lock',
        description: 'Basic leg submission targeting the ankle',
        category: 'SUBMISSION',
        position: 'OPEN_GUARD',
        difficulty: 'INTERMEDIATE',
        tags: ['ankle-lock', 'leg-submission', 'fundamental'],
        steps: [
          'Control opponent\'s leg',
          'Position forearm across ankle',
          'Arch back and apply pressure'
        ]
      },
      {
        name: 'Heel Hook',
        description: 'Advanced leg submission attacking the heel',
        category: 'SUBMISSION',
        position: 'OPEN_GUARD',
        difficulty: 'ADVANCED',
        tags: ['heel-hook', 'dangerous', 'advanced'],
        steps: [
          'Secure heel with cupping grip',
          'Control hip and leg',
          'Apply rotational pressure (DANGEROUS - expert supervision required)'
        ]
      },
      {
        name: 'Knee Bar',
        description: 'Leg submission targeting the knee joint',
        category: 'SUBMISSION',
        position: 'OPEN_GUARD',
        difficulty: 'INTERMEDIATE',
        tags: ['knee-bar', 'leg-submission', 'joint-lock'],
        steps: [
          'Isolate opponent\'s leg',
          'Position leg across your hips',
          'Arch back to hyperextend knee'
        ]
      },

      // FROM IMAGE 4: Judo Techniques
      {
        name: 'Osoto Gari',
        description: 'Major outer reap - fundamental judo throw',
        category: 'TAKEDOWN',
        position: 'STANDING',
        difficulty: 'BEGINNER',
        tags: ['judo', 'throw', 'reap'],
        steps: [
          'Get proper grips on gi',
          'Step to outside of opponent\'s leg',
          'Reap leg while pulling forward and down'
        ]
      },
      {
        name: 'Ippon Seoi Nage',
        description: 'One-arm shoulder throw',
        category: 'TAKEDOWN',
        position: 'STANDING',
        difficulty: 'INTERMEDIATE',
        tags: ['judo', 'shoulder-throw', 'seoi-nage'],
        steps: [
          'Get deep under opponent\'s arm',
          'Turn in close to opponent',
          'Throw over shoulder with hip drive'
        ]
      },
      {
        name: 'Ouchi Gari',
        description: 'Major inner reap technique',
        category: 'TAKEDOWN',
        position: 'STANDING',
        difficulty: 'BEGINNER',
        tags: ['judo', 'inner-reap', 'foot-sweep'],
        steps: [
          'Step close to opponent',
          'Hook inside of opponent\'s leg',
          'Reap leg while driving forward'
        ]
      },
      {
        name: 'Harai Goshi',
        description: 'Sweeping hip throw',
        category: 'TAKEDOWN',
        position: 'STANDING',
        difficulty: 'INTERMEDIATE',
        tags: ['judo', 'hip-throw', 'sweep'],
        steps: [
          'Get strong grips',
          'Step in and turn',
          'Sweep with leg while driving with hips'
        ]
      },
      {
        name: 'Uki Goshi',
        description: 'Floating hip throw',
        category: 'TAKEDOWN',
        position: 'STANDING',
        difficulty: 'BEGINNER',
        tags: ['judo', 'hip-throw', 'fundamental'],
        steps: [
          'Get arm around opponent\'s waist',
          'Step in close',
          'Lift and throw over hip'
        ]
      },

      // FROM IMAGE 6: Clean BJJ Hierarchy
      {
        name: 'Omoplata Sweep',
        description: 'Sweep using omoplata setup from guard',
        category: 'SWEEP',
        position: 'CLOSED_GUARD',
        difficulty: 'INTERMEDIATE',
        tags: ['omoplata', 'sweep', 'guard'],
        steps: [
          'Set up omoplata from guard',
          'When opponent resists, use momentum',
          'Sweep to top position'
        ]
      },
      {
        name: 'Triangle Choke',
        description: 'Fundamental submission from guard using legs',
        category: 'SUBMISSION',
        position: 'CLOSED_GUARD',
        difficulty: 'INTERMEDIATE',
        tags: ['triangle', 'choke', 'fundamental'],
        steps: [
          'Control opponent\'s arm across body',
          'Shoot leg over shoulder',
          'Lock triangle and squeeze'
        ]
      },
      {
        name: 'Spider Guard',
        description: 'Open guard using grips on opponent\'s sleeves',
        category: 'GUARD',
        position: 'OPEN_GUARD',
        difficulty: 'INTERMEDIATE',
        tags: ['spider-guard', 'grips', 'control'],
        steps: [
          'Grip opponent\'s sleeves',
          'Place feet on biceps',
          'Control distance and posture'
        ]
      },
      {
        name: 'Collar Choke from Guard',
        description: 'Cross collar choke from closed guard',
        category: 'SUBMISSION',
        position: 'CLOSED_GUARD',
        difficulty: 'BEGINNER',
        tags: ['collar-choke', 'gi', 'fundamental'],
        steps: [
          'Get deep grips on opponent\'s collar',
          'Pull elbows apart',
          'Use legs to help apply pressure'
        ]
      },
      {
        name: 'De La Riva Guard',
        description: 'Open guard with hook behind opponent\'s leg',
        category: 'GUARD',
        position: 'OPEN_GUARD',
        difficulty: 'INTERMEDIATE',
        tags: ['de-la-riva', 'hook', 'sweep'],
        steps: [
          'Hook behind opponent\'s leg',
          'Control opposite sleeve',
          'Off-balance for sweeps or transitions'
        ]
      },
      {
        name: 'Deep Half Guard',
        description: 'Half guard variation with deep underhook',
        category: 'GUARD',
        position: 'HALF_GUARD',
        difficulty: 'INTERMEDIATE',
        tags: ['half-guard', 'underhook', 'sweep'],
        steps: [
          'Get deep underhook from half guard',
          'Control opponent\'s leg',
          'Sweep or take back'
        ]
      },

      // FROM IMAGE 7: Comprehensive BJJ Map
      {
        name: 'Bow and Arrow Choke',
        description: 'Back control choke using collar and leg',
        category: 'SUBMISSION',
        position: 'BACK_CONTROL',
        difficulty: 'INTERMEDIATE',
        tags: ['bow-arrow', 'choke', 'back-control'],
        steps: [
          'From back control, grip collar',
          'Use leg to create leverage',
          'Pull collar while pushing with leg'
        ]
      },
      {
        name: 'Knee on Belly',
        description: 'Dominant position with knee pressure',
        category: 'TRANSITION',
        position: 'KNEE_ON_BELLY',
        difficulty: 'BEGINNER',
        tags: ['knee-on-belly', 'pressure', 'control'],
        steps: [
          'Place knee on opponent\'s belly',
          'Control head and hips',
          'Apply downward pressure'
        ]
      },
      {
        name: 'Berimbolo',
        description: 'Advanced sweep to back-take from de la riva',
        category: 'SWEEP',
        position: 'OPEN_GUARD',
        difficulty: 'ADVANCED',
        tags: ['berimbolo', 'advanced', 'back-take'],
        steps: [
          'Set up de la riva guard',
          'Invert and roll under opponent',
          'Come up behind for back control'
        ]
      },
      {
        name: 'Rubber Guard',
        description: 'Flexible guard using high leg position',
        category: 'GUARD',
        position: 'CLOSED_GUARD',
        difficulty: 'ADVANCED',
        tags: ['rubber-guard', 'flexibility', 'advanced'],
        steps: [
          'Get high guard position',
          'Use extreme flexibility',
          'Control posture and attack submissions'
        ]
      },
      {
        name: 'Butterfly Sweep',
        description: 'Sweep using butterfly hooks',
        category: 'SWEEP',
        position: 'OPEN_GUARD',
        difficulty: 'BEGINNER',
        tags: ['butterfly', 'sweep', 'hooks'],
        steps: [
          'Get butterfly hooks under opponent',
          'Control upper body',
          'Lift and sweep to side'
        ]
      },
      {
        name: 'X-Guard',
        description: 'Guard position with crossed legs under opponent',
        category: 'GUARD',
        position: 'OPEN_GUARD',
        difficulty: 'INTERMEDIATE',
        tags: ['x-guard', 'legs', 'sweep'],
        steps: [
          'Get under opponent with crossed legs',
          'Control balance',
          'Sweep in different directions'
        ]
      },
      {
        name: 'Single Leg X',
        description: 'Guard attacking one leg with both of yours',
        category: 'GUARD',
        position: 'OPEN_GUARD',
        difficulty: 'INTERMEDIATE',
        tags: ['single-leg-x', 'leg-attack', 'sweep'],
        steps: [
          'Isolate opponent\'s leg',
          'Wrap both legs around it',
          'Off-balance and sweep'
        ]
      },
      {
        name: 'Worm Guard',
        description: 'Lapel guard using opponent\'s gi',
        category: 'GUARD',
        position: 'OPEN_GUARD',
        difficulty: 'ADVANCED',
        tags: ['worm-guard', 'lapel', 'gi'],
        steps: [
          'Feed opponent\'s lapel through legs',
          'Create complex entanglement',
          'Attack sweeps and submissions'
        ]
      },
      {
        name: 'Lasso Guard',
        description: 'Guard using arm wrapped around opponent\'s arm',
        category: 'GUARD',
        position: 'OPEN_GUARD',
        difficulty: 'INTERMEDIATE',
        tags: ['lasso', 'arm-wrap', 'control'],
        steps: [
          'Thread leg around opponent\'s arm',
          'Control with grips',
          'Off-balance for sweeps'
        ]
      },
      {
        name: 'Loop Choke',
        description: 'Choke using collar grip and loop motion',
        category: 'SUBMISSION',
        position: 'CLOSED_GUARD',
        difficulty: 'INTERMEDIATE',
        tags: ['loop-choke', 'collar', 'gi'],
        steps: [
          'Get deep collar grip',
          'Create loop with other hand',
          'Apply pressure for choke'
        ]
      },
      {
        name: 'Baseball Bat Choke',
        description: 'Choke using baseball bat grip on collar',
        category: 'SUBMISSION',
        position: 'SIDE_CONTROL',
        difficulty: 'INTERMEDIATE',
        tags: ['baseball-bat', 'choke', 'side-control'],
        steps: [
          'Get baseball bat grip on collar',
          'Drive weight down',
          'Apply choking pressure'
        ]
      },
      {
        name: 'North-South Choke',
        description: 'Choke from north-south position',
        category: 'SUBMISSION',
        position: 'MOUNT',
        difficulty: 'INTERMEDIATE',
        tags: ['north-south', 'choke', 'position'],
        steps: [
          'Move to north-south position',
          'Wrap arms around opponent\'s head',
          'Apply pressure for choke'
        ]
      },
      {
        name: 'Darce Choke',
        description: 'No-gi choke using arm-in configuration',
        category: 'SUBMISSION',
        position: 'SIDE_CONTROL',
        difficulty: 'INTERMEDIATE',
        tags: ['darce', 'no-gi', 'choke'],
        steps: [
          'Get arm around opponent\'s neck and arm',
          'Lock hands together',
          'Apply pressure for submission'
        ]
      },
      {
        name: 'Anaconda Choke',
        description: 'Front choke variation similar to darce',
        category: 'SUBMISSION',
        position: 'SIDE_CONTROL',
        difficulty: 'INTERMEDIATE',
        tags: ['anaconda', 'choke', 'front'],
        steps: [
          'Wrap arm around opponent\'s head and arm',
          'Roll to side',
          'Apply choking pressure'
        ]
      },
      {
        name: 'Ezekiel Choke',
        description: 'Choke using sleeve grip from mount',
        category: 'SUBMISSION',
        position: 'MOUNT',
        difficulty: 'BEGINNER',
        tags: ['ezekiel', 'mount', 'sleeve'],
        steps: [
          'From mount, grip your own sleeve',
          'Thread arm under opponent\'s neck',
          'Apply pressure for choke'
        ]
      },
      {
        name: 'Clock Choke',
        description: 'Choke from turtle position using collar',
        category: 'SUBMISSION',
        position: 'BACK_CONTROL',
        difficulty: 'INTERMEDIATE',
        tags: ['clock-choke', 'turtle', 'collar'],
        steps: [
          'From turtle, get collar grip',
          'Walk feet around like clock hands',
          'Apply choking pressure'
        ]
      }
    ];

    console.log(`📥 Importing ${mindMapTechniques.length} techniques from mind maps...`);

    // Create techniques with steps
    let createdCount = 0;
    for (const techniqueData of mindMapTechniques) {
      // Check if technique already exists
      const existingTechnique = await prisma.technique.findFirst({
        where: {
          name: techniqueData.name
        }
      });

      if (existingTechnique) {
        console.log(`⏭️  Skipping existing technique: ${techniqueData.name}`);
        continue;
      }

      const technique = await prisma.technique.create({
        data: {
          name: techniqueData.name,
          description: techniqueData.description,
          category: techniqueData.category,
          position: techniqueData.position,
          difficulty: techniqueData.difficulty,
          tags: techniqueData.tags,
          userId: admin.id
        }
      });

      // Create steps
      if (techniqueData.steps && techniqueData.steps.length > 0) {
        await Promise.all(
          techniqueData.steps.map((step, index) =>
            prisma.techniqueStep.create({
              data: {
                techniqueId: technique.id,
                stepNumber: index + 1,
                instruction: step
              }
            })
          )
        );
      }

      createdCount++;
      console.log(`✅ Created: ${technique.name} (${technique.category})`);
    }

    console.log(`🎉 Successfully imported ${createdCount} new techniques from mind maps!`);
    console.log(`📊 Total techniques now in database: ${await prisma.technique.count()}`);

  } catch (error) {
    console.error('❌ Error importing mind map techniques:', error);
    throw error;
  }
}

main()
  .catch((e) => {
    console.error('❌ Import failed:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });