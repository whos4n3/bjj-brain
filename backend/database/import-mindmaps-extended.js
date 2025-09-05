const { PrismaClient } = require('../../node_modules/@prisma/client');
const prisma = new PrismaClient();

const additionalTechniques = [
  // More Gracie Barra Fundamentals from Image 1
  {
    name: "Hip Escape (Shrimp)",
    description: "Fundamental escaping movement used to create space and escape from bad positions by moving the hips away from the opponent.",
    category: "ESCAPE",
    position: "MOUNT",
    difficulty: "FUNDAMENTAL",
    tags: ["hip movement", "space creation", "fundamental"],
    steps: [
      "Start in defensive position with arms protecting your chest and neck",
      "Bridge explosively by pushing your hips up toward the ceiling",
      "As opponent's weight shifts forward, turn to your side",
      "Place your bottom arm as a frame against opponent's hip or leg",
      "Push off explosively with your legs while sliding your hips away from opponent",
      "Continue sliding until you create enough space to insert your knee",
      "Work to recover half guard or full guard position"
    ]
  },
  {
    name: "Technical Stand Up",
    description: "Safe method to return to standing position from the ground while maintaining defensive posture and distance.",
    category: "ESCAPE",
    position: "STANDING",
    difficulty: "FUNDAMENTAL",
    tags: ["stand up", "distance management", "fundamental"],
    steps: [
      "Sit with one leg extended and one leg bent, supporting yourself on your back hand",
      "Keep your front hand up for defense and distance management",
      "Rock forward and place your front foot down",
      "Push off your back hand while bringing your back leg through",
      "Stand up while maintaining defensive posture and distance",
      "Keep hands up and be ready to sprawl or engage"
    ]
  },
  {
    name: "Sprawl Defense",
    description: "Fundamental takedown defense technique where you sprawl your legs back to avoid being taken down.",
    category: "ESCAPE",
    position: "STANDING",
    difficulty: "FUNDAMENTAL", 
    tags: ["takedown defense", "sprawl", "fundamental"],
    steps: [
      "Feel opponent's level change or shot attempt",
      "Drop your hips down and back",
      "Throw your legs back explosively while keeping chest up",
      "Place hands on opponent's shoulders or head to control",
      "Drive forward with your hips to flatten opponent",
      "Look to circle away or take opponent's back"
    ]
  },
  {
    name: "Guard Recovery",
    description: "Technique to recover closed guard from various bad positions using proper hip movement and timing.",
    category: "GUARD",
    position: "HALF_GUARD",
    difficulty: "BEGINNER",
    tags: ["guard recovery", "hip movement", "defensive"],
    steps: [
      "Create initial frames to prevent opponent from advancing position",
      "Use hip escape movement to create space between you and opponent",
      "Work to get your knee to the center line",
      "Once space is created, shoot your leg through to establish guard",
      "Close your guard and establish proper grips",
      "Look to off-balance opponent and work for sweeps or submissions"
    ]
  },

  // More Judo Techniques from Image 4
  {
    name: "Osoto Gari (Major Outer Reap)",
    description: "Classical judo throw where you reap the opponent's leg from the outside while driving them backward.",
    category: "TAKEDOWN",
    position: "STANDING",
    difficulty: "BEGINNER",
    tags: ["judo", "foot sweep", "reaping"],
    steps: [
      "Establish proper gripping with sleeve and lapel control",
      "Step in close to opponent's side with your outside foot",
      "Drive opponent backward while breaking their posture",
      "Sweep opponent's outside leg with your outside leg",
      "Continue driving forward and down to complete the throw",
      "Follow through to maintain control for ground position"
    ]
  },
  {
    name: "Kouchi Gari (Minor Inner Reap)",
    description: "Judo foot technique that reaps the opponent's supporting leg from the inside to create an off-balance.",
    category: "TAKEDOWN", 
    position: "STANDING",
    difficulty: "BEGINNER",
    tags: ["judo", "foot sweep", "timing"],
    steps: [
      "Get proper sleeve and lapel grips on your opponent",
      "Create forward motion to get opponent stepping",
      "As opponent steps forward with their lead leg, attack it immediately",
      "Hook your foot around the back of their ankle",
      "Pull with your hands while reaping backward with your foot",
      "Drive opponent down and follow to secure top position"
    ]
  },
  {
    name: "Seoi Nage (Shoulder Throw)",
    description: "Classic judo shoulder throw where you load opponent onto your back and throw them over your shoulder.",
    category: "TAKEDOWN",
    position: "STANDING", 
    difficulty: "INTERMEDIATE",
    tags: ["judo", "shoulder throw", "kuzushi"],
    steps: [
      "Establish strong sleeve and lapel grips",
      "Step in deep with your right foot, turning your back to opponent",
      "Load opponent onto your back by pulling down on their sleeve",
      "Bend your knees and get low for proper leverage",
      "Drive up with your legs while pulling down on the sleeve",
      "Throw opponent over your shoulder, following through to the ground"
    ]
  },
  {
    name: "Harai Goshi (Sweeping Hip Throw)",
    description: "Dynamic hip throw where you sweep opponent's legs while driving with your hip.",
    category: "TAKEDOWN",
    position: "STANDING",
    difficulty: "INTERMEDIATE", 
    tags: ["judo", "hip throw", "sweeping"],
    steps: [
      "Get proper grip fighting advantage with sleeve and back control",
      "Step in deep and turn perpendicular to opponent",
      "Place your hip against opponent's hip/thigh area",
      "Sweep opponent's legs with your leg while driving with your hip",
      "Pull down strongly with your grips to complete the rotation",
      "Follow opponent to the ground to secure dominant position"
    ]
  },

  // More Advanced Techniques from Image 7
  {
    name: "Baseball Bat Choke",
    description: "Highly effective choke from side control using a baseball bat-like grip on the opponent's collar.",
    category: "SUBMISSION",
    position: "SIDE_CONTROL",
    difficulty: "INTERMEDIATE",
    tags: ["choke", "gi", "pressure"],
    steps: [
      "Establish dominant side control position",
      "Reach across and grip opponent's far collar with your bottom hand",
      "Bring your top hand to the same collar, creating a baseball bat grip",
      "Drive your weight down while pulling up on the collar",
      "Apply pressure by expanding your chest and driving down",
      "Maintain position until opponent taps or goes unconscious"
    ]
  },
  {
    name: "Bread Cutter Choke",
    description: "Devastating choke from side control or north-south using the collar to cut across the neck.",
    category: "SUBMISSION",
    position: "SIDE_CONTROL",
    difficulty: "INTERMEDIATE",
    tags: ["choke", "gi", "cutting"],
    steps: [
      "From side control, establish deep collar grip with your bottom hand",
      "Thread your top hand deep into the opposite collar",
      "Position your forearms to create a cutting motion across the neck",
      "Drive your weight down to prevent escape while tightening grip",
      "Pull with both hands creating a sawing motion across the throat",
      "Apply steady pressure until opponent submits"
    ]
  },
  {
    name: "Loop Choke from Guard",
    description: "Sneaky choke from closed guard using opponent's own collar to create a loop around their neck.",
    category: "SUBMISSION", 
    position: "CLOSED_GUARD",
    difficulty: "ADVANCED",
    tags: ["choke", "gi", "closed guard"],
    steps: [
      "From closed guard, break opponent's posture and control their head",
      "Feed one hand deep into opponent's collar on one side",
      "Use your other hand to grab the opposite collar",
      "Create a loop by pulling the collar across opponent's neck",
      "Hip escape to the side to tighten the angle of the choke",
      "Apply pressure by pulling both collars while extending your body"
    ]
  },
  {
    name: "Wrist Control to Armbar Setup",
    description: "Systematic approach to setting up armbar submissions through methodical wrist control.",
    category: "SUBMISSION",
    position: "CLOSED_GUARD",
    difficulty: "INTERMEDIATE",
    tags: ["armbar", "wrist control", "setup"],
    steps: [
      "From closed guard, establish two-on-one wrist control",
      "Break opponent's posture by pulling their arm across your body",
      "Pivot your hips to create the proper angle for armbar",
      "Thread your leg over opponent's head while controlling the wrist",
      "Pinch your knees together to secure opponent's arm",
      "Slowly extend your hips to apply pressure to the elbow joint"
    ]
  },

  // Leg Lock Techniques from Image 3
  {
    name: "50/50 Entry to Heel Hook",
    description: "Modern leg entanglement system leading to heel hook submission opportunities.",
    category: "SUBMISSION",
    position: "OPEN_GUARD", 
    difficulty: "ADVANCED",
    tags: ["leg locks", "heel hook", "50/50"],
    steps: [
      "From open guard, secure opponent's leg and establish initial control",
      "Insert your inside leg to create the 50/50 leg entanglement",
      "Control opponent's heel with both hands in proper heel hook grip",
      "Secure your legs to prevent opponent from rolling or escaping",
      "Create space by pushing opponent's knee away with your free foot",
      "Apply heel hook by rotating the heel while keeping opponent's leg straight",
      "Control the submission by managing distance and rotation pressure"
    ]
  },
  {
    name: "Single Leg X to Ankle Lock",
    description: "Effective leg control position that provides multiple submission and sweep opportunities.",
    category: "SUBMISSION",
    position: "OPEN_GUARD",
    difficulty: "ADVANCED", 
    tags: ["leg locks", "ankle lock", "single leg x"],
    steps: [
      "From open guard or scramble, capture opponent's leg in single leg X",
      "Secure the position by hooking opponent's leg with both of your legs",
      "Control opponent's ankle and establish proper grip for ankle lock",
      "Isolate the ankle joint by controlling both the foot and calf",
      "Apply pressure by arching your back and driving forward with your hips",
      "Maintain control to prevent opponent from rolling or standing"
    ]
  },
  {
    name: "Ashi Garami to Toe Hold",
    description: "Traditional leg entanglement leading to toe hold submission through controlled ankle manipulation.",
    category: "SUBMISSION",
    position: "OPEN_GUARD",
    difficulty: "INTERMEDIATE",
    tags: ["leg locks", "toe hold", "ashi garami"],
    steps: [
      "Establish ashi garami leg position by controlling opponent's leg",
      "Secure opponent's ankle and foot with both hands",
      "Position your legs to prevent opponent from rolling or escaping",
      "Grip the top of opponent's foot with your outside hand",
      "Place your inside hand on opponent's ankle for control",
      "Apply toe hold by twisting the foot while maintaining ankle control",
      "Gradually increase pressure while monitoring opponent's response"
    ]
  },

  // Additional Sweeps and Transitions
  {
    name: "Flower Sweep",
    description: "Classic sweep from closed guard using sleeve and collar control to off-balance and sweep opponent.",
    category: "SWEEP",
    position: "CLOSED_GUARD",
    difficulty: "BEGINNER",
    tags: ["sweep", "closed guard", "fundamental"],
    steps: [
      "From closed guard, establish sleeve and collar grips",
      "Pull opponent forward to break their posture and balance",
      "Plant your foot on opponent's hip on the collar grip side",
      "Use your grips to pull opponent over your planted foot",
      "Open your guard and pivot your body to complete the sweep",
      "Follow through to mount or side control position"
    ]
  },
  {
    name: "Scissor Sweep",
    description: "Fundamental sweep using a scissoring leg motion to unbalance and sweep the opponent from guard.",
    category: "SWEEP", 
    position: "OPEN_GUARD",
    difficulty: "BEGINNER",
    tags: ["sweep", "open guard", "fundamental"],
    steps: [
      "From open guard, control opponent's sleeve and establish collar grip",
      "Place one foot on opponent's hip and the other behind their knee",
      "Pull with your grips while extending the leg on the hip",
      "Simultaneously bring the leg behind the knee forward in scissor motion",
      "Drive through the sweep to bring opponent to the ground",
      "Follow up immediately to secure mount or side control"
    ]
  },
  {
    name: "Butterfly Hook Sweep",
    description: "Dynamic sweep from butterfly guard using hooks and grips to elevate and sweep opponent.",
    category: "SWEEP",
    position: "OPEN_GUARD", 
    difficulty: "INTERMEDIATE",
    tags: ["sweep", "butterfly guard", "hooks"],
    steps: [
      "Establish butterfly guard with both hooks in and underhook control",
      "Get opponent to lean forward by pulling with your underhook",
      "Drive up with your butterfly hook while pulling with your grips",
      "Use your opposite hand to post on the ground for base",
      "Continue the lifting motion to sweep opponent over your head",
      "Come up to establish side control or mount position"
    ]
  }
];

async function importAdditionalTechniques() {
  console.log('Starting import of additional techniques from mind maps...');
  
  try {
    // Find or create admin user
    let adminUser = await prisma.user.findFirst({
      where: { email: 'admin@bjjbrain.com' }
    });
    
    if (!adminUser) {
      adminUser = await prisma.user.create({
        data: {
          email: 'admin@bjjbrain.com',
          firstName: 'Admin',
          lastName: 'User',
          passwordHash: 'hashed_password_here'
        }
      });
    }

    let importedCount = 0;
    let duplicateCount = 0;

    for (const technique of additionalTechniques) {
      try {
        // Check if technique already exists
        const existingTechnique = await prisma.technique.findFirst({
          where: {
            name: technique.name
          }
        });

        if (existingTechnique) {
          console.log(`⚠️  Technique "${technique.name}" already exists, skipping...`);
          duplicateCount++;
          continue;
        }

        // Create the technique
        const createdTechnique = await prisma.technique.create({
          data: {
            name: technique.name,
            description: technique.description,
            category: technique.category,
            position: technique.position,
            difficulty: technique.difficulty,
            tags: technique.tags,
            userId: adminUser.id
          }
        });

        // Create technique steps if they exist
        if (technique.steps && technique.steps.length > 0) {
          for (let i = 0; i < technique.steps.length; i++) {
            await prisma.techniqueStep.create({
              data: {
                techniqueId: createdTechnique.id,
                stepNumber: i + 1,
                instruction: technique.steps[i]
              }
            });
          }
        }

        console.log(`✅ Imported: ${technique.name} (${technique.category})`);
        importedCount++;

      } catch (error) {
        console.error(`❌ Error importing ${technique.name}:`, error.message);
      }
    }

    console.log('\n📊 Import Summary:');
    console.log(`✅ Successfully imported: ${importedCount} techniques`);
    console.log(`⚠️  Duplicates skipped: ${duplicateCount}`);
    console.log(`📋 Total processed: ${additionalTechniques.length}`);

  } catch (error) {
    console.error('❌ Import failed:', error);
  } finally {
    await prisma.$disconnect();
  }
}

// Run the import
if (require.main === module) {
  importAdditionalTechniques();
}

module.exports = { importAdditionalTechniques };