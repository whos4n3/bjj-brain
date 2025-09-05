const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcryptjs');
const { advancedTechniques } = require('./advanced-techniques');
const { additionalTechniques } = require('./additional-techniques');

const prisma = new PrismaClient();

const comprehensiveTechniques = [
  // FUNDAMENTAL TECHNIQUES
  {
    name: "Hip Escape (Shrimp)",
    description: "Fundamental escaping movement used to create space and escape from bad positions by moving the hips away from the opponent.",
    difficulty: "FUNDAMENTAL",
    position: "ESCAPE",
    trainingType: "BOTH",
    bodyTypes: ["SHORTER", "AVERAGE", "TALLER"],
    steps: [
      {
        stepNumber: 1,
        description: "Start in defensive position with arms protecting your chest and neck",
        keyPoints: ["Keep elbows close to body", "Protect neck"],
        commonMistakes: ["Exposing neck", "Arms too wide"]
      },
      {
        stepNumber: 2,
        description: "Bridge explosively by pushing your hips up toward the ceiling",
        keyPoints: ["Explosive movement", "Drive through heels"],
        commonMistakes: ["Weak bridge", "Not using legs"]
      },
      {
        stepNumber: 3,
        description: "As opponent's weight shifts forward, turn to your side",
        keyPoints: ["Time the turn", "Use opponent's momentum"],
        commonMistakes: ["Turning too early", "Not waiting for weight shift"]
      },
      {
        stepNumber: 4,
        description: "Place your bottom arm as a frame against opponent's hip or leg",
        keyPoints: ["Strong frame", "Prevent opponent from following"],
        commonMistakes: ["Weak frame", "Wrong placement"]
      },
      {
        stepNumber: 5,
        description: "Push off explosively with your legs while sliding your hips away",
        keyPoints: ["Explosive push", "Slide hips back"],
        commonMistakes: ["Not using legs", "Small movement"]
      }
    ],
    tags: ["fundamental", "escape", "movement", "hip-movement"]
  },
  {
    name: "Technical Stand Up",
    description: "Safe method to return to standing position from the ground while maintaining defensive posture and distance.",
    difficulty: "FUNDAMENTAL",
    position: "STANDING",
    trainingType: "BOTH",
    bodyTypes: ["SHORTER", "AVERAGE", "TALLER"],
    steps: [
      {
        stepNumber: 1,
        description: "Sit with one leg extended and one leg bent, supporting yourself on your back hand",
        keyPoints: ["Stable base", "Strong posting hand"],
        commonMistakes: ["Weak base", "Wrong hand position"]
      },
      {
        stepNumber: 2,
        description: "Keep your front hand up for defense and distance management",
        keyPoints: ["Defensive posture", "Distance control"],
        commonMistakes: ["Dropping guard", "Getting too close"]
      },
      {
        stepNumber: 3,
        description: "Rock forward and place your front foot down",
        keyPoints: ["Smooth transition", "Balance"],
        commonMistakes: ["Losing balance", "Rushing movement"]
      },
      {
        stepNumber: 4,
        description: "Push off your back hand while bringing your back leg through",
        keyPoints: ["Coordinated movement", "Drive through posting hand"],
        commonMistakes: ["Not coordinating", "Weak push off"]
      }
    ],
    tags: ["fundamental", "stand-up", "self-defense", "distance"]
  },
  {
    name: "Sprawl Defense",
    description: "Fundamental takedown defense technique where you sprawl your legs back to avoid being taken down.",
    difficulty: "FUNDAMENTAL",
    position: "STANDING",
    trainingType: "BOTH",
    bodyTypes: ["SHORTER", "AVERAGE", "TALLER"],
    steps: [
      {
        stepNumber: 1,
        description: "Feel opponent's level change or shot attempt",
        keyPoints: ["Stay alert", "Watch for signals"],
        commonMistakes: ["Not watching opponent", "Late reaction"]
      },
      {
        stepNumber: 2,
        description: "Drop your hips down and back",
        keyPoints: ["Low hip position", "Weight back"],
        commonMistakes: ["Staying high", "Weight forward"]
      },
      {
        stepNumber: 3,
        description: "Throw your legs back explosively while keeping chest up",
        keyPoints: ["Explosive movement", "Chest up", "Legs far back"],
        commonMistakes: ["Slow movement", "Chest down", "Not going far back"]
      },
      {
        stepNumber: 4,
        description: "Place hands on opponent's shoulders or head to control",
        keyPoints: ["Control opponent", "Prevent forward motion"],
        commonMistakes: ["No hand control", "Wrong placement"]
      }
    ],
    tags: ["fundamental", "takedown-defense", "sprawl", "wrestling"]
  },

  // GUARD TECHNIQUES
  {
    name: "Closed Guard Armbar",
    description: "Classic armbar submission from closed guard, one of the most fundamental submissions in BJJ.",
    difficulty: "BEGINNER",
    position: "CLOSED_GUARD",
    trainingType: "BOTH",
    bodyTypes: ["SHORTER", "AVERAGE", "TALLER"],
    steps: [
      {
        stepNumber: 1,
        description: "From closed guard, control opponent's right wrist with your left hand",
        keyPoints: ["Strong grip", "Control the arm"],
        commonMistakes: ["Weak grip", "Wrong hand placement"]
      },
      {
        stepNumber: 2,
        description: "Place your right hand on their left shoulder/bicep area",
        keyPoints: ["Control posture", "Prevent them from pulling back"],
        commonMistakes: ["Not controlling posture", "Wrong placement"]
      },
      {
        stepNumber: 3,
        description: "Open your guard and place your right foot on their left hip",
        keyPoints: ["Maintain control", "Use hip as pivot point"],
        commonMistakes: ["Losing control", "Wrong foot placement"]
      },
      {
        stepNumber: 4,
        description: "Swing your left leg over their head while pulling their arm across",
        keyPoints: ["Smooth transition", "Keep arm controlled"],
        commonMistakes: ["Losing arm control", "Leg too low"]
      },
      {
        stepNumber: 5,
        description: "Pinch your knees together and extend your hips for the submission",
        keyPoints: ["Tight knee squeeze", "Hip extension"],
        commonMistakes: ["Loose knees", "Not extending hips"]
      }
    ],
    tags: ["guard", "submission", "armbar", "fundamental"]
  },
  {
    name: "Triangle Choke from Guard",
    description: "Powerful submission using your legs to create a triangle around opponent's neck and arm.",
    difficulty: "INTERMEDIATE",
    position: "CLOSED_GUARD",
    trainingType: "BOTH",
    bodyTypes: ["AVERAGE", "TALLER"],
    steps: [
      {
        stepNumber: 1,
        description: "From closed guard, control both of opponent's wrists",
        keyPoints: ["Strong grip control", "Pull hands down"],
        commonMistakes: ["Letting hands go high", "Weak grips"]
      },
      {
        stepNumber: 2,
        description: "Open guard and place right foot on left hip, left foot on right bicep",
        keyPoints: ["Control distance", "Create angle"],
        commonMistakes: ["Both feet on hips", "Wrong angle"]
      },
      {
        stepNumber: 3,
        description: "Push their right arm across their body while pulling their head down",
        keyPoints: ["Arm across centerline", "Control head"],
        commonMistakes: ["Not getting arm across", "Losing head control"]
      },
      {
        stepNumber: 4,
        description: "Throw your right leg over their shoulder and around their neck",
        keyPoints: ["High on neck", "Deep leg placement"],
        commonMistakes: ["Leg too low", "Not deep enough"]
      },
      {
        stepNumber: 5,
        description: "Lock your ankle behind your knee and squeeze while pulling their head",
        keyPoints: ["Tight triangle", "Pull head down"],
        commonMistakes: ["Loose triangle", "Not pulling head"]
      }
    ],
    tags: ["guard", "submission", "triangle", "choke"]
  },

  // MOUNT TECHNIQUES
  {
    name: "Armbar from Mount",
    description: "High-percentage armbar submission from the dominant mount position.",
    difficulty: "BEGINNER",
    position: "MOUNT",
    trainingType: "BOTH",
    bodyTypes: ["SHORTER", "AVERAGE", "TALLER"],
    steps: [
      {
        stepNumber: 1,
        description: "From mount, isolate opponent's arm by pinning their wrist to the ground",
        keyPoints: ["Pin wrist firmly", "Choose the arm closest to you"],
        commonMistakes: ["Not securing the arm", "Wrong arm selection"]
      },
      {
        stepNumber: 2,
        description: "Post your opposite hand on the ground next to their head",
        keyPoints: ["Strong base", "Don't lose balance"],
        commonMistakes: ["Posting too far", "Weak base"]
      },
      {
        stepNumber: 3,
        description: "Swing your leg over their head while maintaining control of the arm",
        keyPoints: ["Keep arm controlled", "Smooth transition"],
        commonMistakes: ["Losing arm", "Rushing the movement"]
      },
      {
        stepNumber: 4,
        description: "Sit back and secure the arm between your legs",
        keyPoints: ["Clamp legs together", "Control the wrist"],
        commonMistakes: ["Loose legs", "Wrong wrist position"]
      },
      {
        stepNumber: 5,
        description: "Lift your hips and extend the arm for the submission",
        keyPoints: ["Hip drive", "Controlled extension"],
        commonMistakes: ["Not lifting hips", "Going too fast"]
      }
    ],
    tags: ["mount", "submission", "armbar", "top-control"]
  },
  {
    name: "Cross Collar Choke from Mount",
    description: "Fundamental gi choke from mount using the opponent's collar grips.",
    difficulty: "BEGINNER",
    position: "MOUNT",
    trainingType: "GI_ONLY",
    bodyTypes: ["SHORTER", "AVERAGE", "TALLER"],
    steps: [
      {
        stepNumber: 1,
        description: "From mount, slide your right hand deep into their left collar, thumb inside",
        keyPoints: ["Deep grip", "Four fingers inside collar"],
        commonMistakes: ["Shallow grip", "Wrong hand position"]
      },
      {
        stepNumber: 2,
        description: "Slide your left hand into their right collar, also thumb inside",
        keyPoints: ["Cross your arms", "Deep on both sides"],
        commonMistakes: ["Not crossing arms", "Grip too high"]
      },
      {
        stepNumber: 3,
        description: "Pull your elbows down toward the ground while expanding your chest",
        keyPoints: ["Elbows to ground", "Expand chest"],
        commonMistakes: ["Elbows out", "Not using chest"]
      },
      {
        stepNumber: 4,
        description: "Drive your weight down while maintaining the squeeze",
        keyPoints: ["Use body weight", "Maintain pressure"],
        commonMistakes: ["Not using weight", "Losing pressure"]
      }
    ],
    tags: ["mount", "submission", "choke", "gi", "collar-choke"]
  },

  // SIDE CONTROL TECHNIQUES
  {
    name: "Americana from Side Control",
    description: "Shoulder lock submission using figure-four grip on the opponent's arm.",
    difficulty: "BEGINNER",
    position: "SIDE_CONTROL",
    trainingType: "BOTH",
    bodyTypes: ["SHORTER", "AVERAGE", "TALLER"],
    steps: [
      {
        stepNumber: 1,
        description: "From side control, isolate their far arm by pinning their wrist to the ground",
        keyPoints: ["Pin wrist near their head", "Strong control"],
        commonMistakes: ["Wrong wrist position", "Weak pin"]
      },
      {
        stepNumber: 2,
        description: "Slide your hand under their arm and grab their wrist from underneath",
        keyPoints: ["Slide deep under", "Secure wrist grip"],
        commonMistakes: ["Not going deep enough", "Losing wrist control"]
      },
      {
        stepNumber: 3,
        description: "Use your other hand to grab your own wrist, creating a figure-four",
        keyPoints: ["Tight figure-four", "Both hands connected"],
        commonMistakes: ["Loose connection", "Wrong grip"]
      },
      {
        stepNumber: 4,
        description: "Lift their elbow up while keeping their wrist pinned to the ground",
        keyPoints: ["Elbow goes up", "Wrist stays down"],
        commonMistakes: ["Wrist comes up", "Not lifting elbow enough"]
      }
    ],
    tags: ["side-control", "submission", "americana", "shoulder-lock"]
  },
  {
    name: "Kimura from Side Control",
    description: "Reverse shoulder lock submission with figure-four grip, opposite direction of Americana.",
    difficulty: "INTERMEDIATE",
    position: "SIDE_CONTROL",
    trainingType: "BOTH",
    bodyTypes: ["SHORTER", "AVERAGE", "TALLER"],
    steps: [
      {
        stepNumber: 1,
        description: "From side control, wait for opponent to frame against your chest or neck",
        keyPoints: ["Wait for the frame", "Don't force the arm up"],
        commonMistakes: ["Forcing the position", "Taking any arm"]
      },
      {
        stepNumber: 2,
        description: "Underhook their framing arm at the wrist with your far-side hand",
        keyPoints: ["Deep underhook", "Control the wrist"],
        commonMistakes: ["Shallow underhook", "Wrong hand"]
      },
      {
        stepNumber: 3,
        description: "Reach over their arm and grab your own wrist, creating figure-four",
        keyPoints: ["Figure-four grip", "Tight connection"],
        commonMistakes: ["Loose grip", "Wrong hand position"]
      },
      {
        stepNumber: 4,
        description: "Step over their head and lift their arm up behind their back",
        keyPoints: ["Step high over head", "Gentle lifting motion"],
        commonMistakes: ["Step too low", "Cranking too hard"]
      }
    ],
    tags: ["side-control", "submission", "kimura", "shoulder-lock"]
  },

  // BACK CONTROL TECHNIQUES
  {
    name: "Rear Naked Choke",
    description: "The most fundamental submission from back control, using arm positioning to create a blood choke.",
    difficulty: "FUNDAMENTAL",
    position: "BACK_CONTROL",
    trainingType: "BOTH",
    bodyTypes: ["SHORTER", "AVERAGE", "TALLER"],
    steps: [
      {
        stepNumber: 1,
        description: "From back control with both hooks in, slide your choking arm under their chin",
        keyPoints: ["Deep under chin", "Bicep on one side, forearm on other"],
        commonMistakes: ["Not deep enough", "Wrong arm position"]
      },
      {
        stepNumber: 2,
        description: "Place your other hand on the back of their head",
        keyPoints: ["Palm on back of head", "Create tight grip"],
        commonMistakes: ["Hand too high", "Loose grip"]
      },
      {
        stepNumber: 3,
        description: "Connect your hands by grasping your bicep with your support hand",
        keyPoints: ["Grab your own bicep", "Tight connection"],
        commonMistakes: ["Grabbing wrong spot", "Loose connection"]
      },
      {
        stepNumber: 4,
        description: "Squeeze your elbows together while expanding your chest",
        keyPoints: ["Elbows come together", "Expand chest"],
        commonMistakes: ["Only using arms", "Not squeezing elbows"]
      }
    ],
    tags: ["back-control", "submission", "choke", "rnc", "blood-choke"]
  },
  {
    name: "Bow and Arrow Choke",
    description: "Gi choke from back control using collar grip and leg positioning for maximum leverage.",
    difficulty: "INTERMEDIATE",
    position: "BACK_CONTROL",
    trainingType: "GI_ONLY",
    bodyTypes: ["AVERAGE", "TALLER"],
    steps: [
      {
        stepNumber: 1,
        description: "From back control, get a deep grip in their far-side collar with your choking hand",
        keyPoints: ["Four fingers inside collar", "Deep grip"],
        commonMistakes: ["Shallow grip", "Wrong collar"]
      },
      {
        stepNumber: 2,
        description: "Grab their far-side pants leg with your other hand",
        keyPoints: ["Strong pants grip", "Control the leg"],
        commonMistakes: ["Weak grip", "Wrong leg"]
      },
      {
        stepNumber: 3,
        description: "Fall to your side while maintaining both grips",
        keyPoints: ["Roll to choking-hand side", "Keep both grips"],
        commonMistakes: ["Rolling wrong way", "Losing grips"]
      },
      {
        stepNumber: 4,
        description: "Pull their leg toward you while driving your forearm into their neck",
        keyPoints: ["Create bow shape", "Use leg for leverage"],
        commonMistakes: ["Not using leg", "Wrong angle"]
      }
    ],
    tags: ["back-control", "submission", "choke", "gi", "bow-and-arrow"]
  },

  // GUARD PASSES
  {
    name: "Double Under Pass",
    description: "Fundamental guard pass involving control of both legs and pressure passing.",
    difficulty: "INTERMEDIATE",
    position: "GUARD_PASS",
    trainingType: "BOTH",
    bodyTypes: ["SHORTER", "AVERAGE", "TALLER"],
    steps: [
      {
        stepNumber: 1,
        description: "From inside closed guard, open their guard and get double underhooks on their legs",
        keyPoints: ["Deep underhooks", "Control both legs"],
        commonMistakes: ["Shallow hooks", "Only one leg"]
      },
      {
        stepNumber: 2,
        description: "Stack them up by lifting their legs and driving forward with your shoulder",
        keyPoints: ["Lift legs high", "Shoulder pressure"],
        commonMistakes: ["Not lifting enough", "No pressure"]
      },
      {
        stepNumber: 3,
        description: "Walk your legs back to create pressure and control",
        keyPoints: ["Legs far back", "Maintain shoulder pressure"],
        commonMistakes: ["Staying too close", "Losing pressure"]
      },
      {
        stepNumber: 4,
        description: "Circle around to side control while maintaining pressure",
        keyPoints: ["Slow controlled movement", "Never lose pressure"],
        commonMistakes: ["Moving too fast", "Losing control"]
      }
    ],
    tags: ["guard-pass", "pressure", "double-under", "stack"]
  },
  {
    name: "Toreando Pass",
    description: "Dynamic guard pass involving gripping the pants and moving around the guard.",
    difficulty: "INTERMEDIATE",
    position: "GUARD_PASS",
    trainingType: "BOTH",
    bodyTypes: ["AVERAGE", "TALLER"],
    steps: [
      {
        stepNumber: 1,
        description: "From standing in open guard, grip both of their pants at the knees",
        keyPoints: ["Strong pants grips", "Good posture"],
        commonMistakes: ["Weak grips", "Bad posture"]
      },
      {
        stepNumber: 2,
        description: "Push their knees down and to one side while staying mobile",
        keyPoints: ["Push knees down", "Stay on your toes"],
        commonMistakes: ["Not pushing down", "Being static"]
      },
      {
        stepNumber: 3,
        description: "Circle around to the opposite side while maintaining leg control",
        keyPoints: ["Quick movement", "Don't let go of legs"],
        commonMistakes: ["Too slow", "Losing leg control"]
      },
      {
        stepNumber: 4,
        description: "Drop down into side control once you clear their legs",
        keyPoints: ["Drop your weight", "Secure the position"],
        commonMistakes: ["Standing too long", "Not securing position"]
      }
    ],
    tags: ["guard-pass", "toreando", "speed", "leg-control"]
  },

  // SWEEPS
  {
    name: "Scissor Sweep",
    description: "Fundamental sweep from closed guard using leg positioning to off-balance opponent.",
    difficulty: "BEGINNER",
    position: "SWEEP",
    trainingType: "BOTH",
    bodyTypes: ["SHORTER", "AVERAGE", "TALLER"],
    steps: [
      {
        stepNumber: 1,
        description: "From closed guard, grab their opposite sleeve and same-side collar",
        keyPoints: ["Strong grips", "Control their posture"],
        commonMistakes: ["Weak grips", "Wrong grip placement"]
      },
      {
        stepNumber: 2,
        description: "Open your guard and place your top leg across their belt line",
        keyPoints: ["Leg high on their body", "Maintain grips"],
        commonMistakes: ["Leg too low", "Losing grips"]
      },
      {
        stepNumber: 3,
        description: "Place your bottom leg behind their same-side ankle",
        keyPoints: ["Hook behind ankle", "Create scissors position"],
        commonMistakes: ["Wrong leg position", "No ankle control"]
      },
      {
        stepNumber: 4,
        description: "Pull with your arms while scissoring your legs to sweep them over",
        keyPoints: ["Coordinate arms and legs", "Fall toward their trapped ankle"],
        commonMistakes: ["Not coordinating", "Wrong direction"]
      }
    ],
    tags: ["sweep", "guard", "scissor", "fundamental"]
  },
  {
    name: "Hip Bump Sweep",
    description: "Aggressive sweep from closed guard using hip movement to create momentum.",
    difficulty: "BEGINNER",
    position: "SWEEP",
    trainingType: "BOTH",
    bodyTypes: ["SHORTER", "AVERAGE", "TALLER"],
    steps: [
      {
        stepNumber: 1,
        description: "From closed guard, sit up and grab around their back with one arm",
        keyPoints: ["Sit up tall", "Strong grip around back"],
        commonMistakes: ["Staying flat", "Weak grip"]
      },
      {
        stepNumber: 2,
        description: "Post your other hand on the ground behind you for base",
        keyPoints: ["Strong posting hand", "Good balance"],
        commonMistakes: ["Weak post", "Poor balance"]
      },
      {
        stepNumber: 3,
        description: "Bump your hips forward into their chest while pulling them forward",
        keyPoints: ["Explosive hip bump", "Pull them off balance"],
        commonMistakes: ["Weak hip movement", "Not pulling"]
      },
      {
        stepNumber: 4,
        description: "As they post to stop from falling, quickly sweep them to that side",
        keyPoints: ["Time the sweep", "Use their momentum"],
        commonMistakes: ["Too early", "Fighting their base"]
      }
    ],
    tags: ["sweep", "guard", "hip-bump", "timing"]
  },

  // TAKEDOWNS
  {
    name: "Hip Toss",
    description: "Fundamental judo throw adapted for BJJ, using hip placement and leverage.",
    difficulty: "INTERMEDIATE",
    position: "TAKEDOWN",
    trainingType: "BOTH",
    bodyTypes: ["SHORTER", "AVERAGE"],
    steps: [
      {
        stepNumber: 1,
        description: "From standing position, get an underhook and collar tie",
        keyPoints: ["Deep underhook", "Control their head"],
        commonMistakes: ["Shallow underhook", "No head control"]
      },
      {
        stepNumber: 2,
        description: "Step in close and turn your hips perpendicular to theirs",
        keyPoints: ["Close distance", "Hip placement is key"],
        commonMistakes: ["Too far away", "Wrong hip angle"]
      },
      {
        stepNumber: 3,
        description: "Load them onto your hips by lifting with your legs",
        keyPoints: ["Use legs to lift", "Get them off balance"],
        commonMistakes: ["Using only back", "Not getting them up"]
      },
      {
        stepNumber: 4,
        description: "Rotate your body and throw them over your hip",
        keyPoints: ["Full body rotation", "Follow through"],
        commonMistakes: ["Incomplete rotation", "Dropping them"]
      }
    ],
    tags: ["takedown", "hip-toss", "judo", "throw"]
  },
  {
    name: "Single Leg Takedown",
    description: "Wrestling takedown attacking one leg and driving through for the finish.",
    difficulty: "INTERMEDIATE",
    position: "TAKEDOWN",
    trainingType: "BOTH",
    bodyTypes: ["SHORTER", "AVERAGE", "TALLER"],
    steps: [
      {
        stepNumber: 1,
        description: "Change levels and shoot in on one of their legs",
        keyPoints: ["Low level change", "Penetration step"],
        commonMistakes: ["Not changing levels", "Shooting from too far"]
      },
      {
        stepNumber: 2,
        description: "Wrap both arms around their leg and drive your shoulder into their thigh",
        keyPoints: ["Both arms around leg", "Shoulder pressure"],
        commonMistakes: ["One arm only", "No shoulder contact"]
      },
      {
        stepNumber: 3,
        description: "Lift their leg up while driving forward with your body",
        keyPoints: ["Lift the leg", "Drive through them"],
        commonMistakes: ["Not lifting", "Pushing instead of driving"]
      },
      {
        stepNumber: 4,
        description: "Trip their standing leg or continue driving until they fall",
        keyPoints: ["Attack standing leg", "Maintain forward pressure"],
        commonMistakes: ["Ignoring other leg", "Losing forward pressure"]
      }
    ],
    tags: ["takedown", "single-leg", "wrestling", "drive"]
  },

  // ESCAPES
  {
    name: "Bridge and Roll Escape from Mount",
    description: "Fundamental escape from mount using bridging and rolling mechanics.",
    difficulty: "FUNDAMENTAL",
    position: "ESCAPE",
    trainingType: "BOTH",
    bodyTypes: ["SHORTER", "AVERAGE", "TALLER"],
    steps: [
      {
        stepNumber: 1,
        description: "From bottom mount, trap one of their arms against your chest",
        keyPoints: ["Secure the arm", "Pull it tight to your body"],
        commonMistakes: ["Not securing arm", "Loose grip"]
      },
      {
        stepNumber: 2,
        description: "Hook your foot behind their ankle on the same side as the trapped arm",
        keyPoints: ["Deep ankle hook", "Same side coordination"],
        commonMistakes: ["Shallow hook", "Wrong side"]
      },
      {
        stepNumber: 3,
        description: "Bridge explosively by driving your hips up toward the ceiling",
        keyPoints: ["Explosive bridge", "Drive through your heels"],
        commonMistakes: ["Weak bridge", "Not using legs"]
      },
      {
        stepNumber: 4,
        description: "Roll toward the trapped arm while maintaining the bridge",
        keyPoints: ["Roll to trapped side", "Keep bridging"],
        commonMistakes: ["Rolling wrong way", "Collapsing bridge"]
      }
    ],
    tags: ["escape", "mount", "bridge", "fundamental"]
  },
  {
    name: "Elbow Escape from Side Control",
    description: "Systematic escape from side control using elbow and hip movement.",
    difficulty: "FUNDAMENTAL",
    position: "ESCAPE",
    trainingType: "BOTH",
    bodyTypes: ["SHORTER", "AVERAGE", "TALLER"],
    steps: [
      {
        stepNumber: 1,
        description: "From bottom side control, get your near elbow to the ground",
        keyPoints: ["Elbow creates space", "Strong frame"],
        commonMistakes: ["Elbow not on ground", "Weak frame"]
      },
      {
        stepNumber: 2,
        description: "Shrimp your hips away while maintaining the elbow frame",
        keyPoints: ["Hip movement", "Keep elbow connection"],
        commonMistakes: ["Not shrimping", "Losing elbow"]
      },
      {
        stepNumber: 3,
        description: "Bring your far knee toward your elbow to create a guard frame",
        keyPoints: ["Knee to elbow", "Create barrier"],
        commonMistakes: ["Knee goes wrong direction", "No connection"]
      },
      {
        stepNumber: 4,
        description: "Continue shrimping until you can get your knee between you and them",
        keyPoints: ["Keep moving hips", "Get knee shield"],
        commonMistakes: ["Stopping too early", "Not getting knee in"]
      }
    ],
    tags: ["escape", "side-control", "elbow", "shrimp"]
  }
];

async function importComprehensiveTechniques() {
  console.log('🚀 Starting comprehensive techniques import...');

  try {
    // Get or create admin user to assign as submitter
    let admin = await prisma.user.findUnique({
      where: { email: 'admin@bjjbrain.com' }
    });

    if (!admin) {
      // Create admin user if doesn't exist
      const adminPassword = await bcrypt.hash('admin123', 12);
      admin = await prisma.user.create({
        data: {
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
    }

    // Combine all technique arrays
    const allTechniques = [...comprehensiveTechniques, ...advancedTechniques, ...additionalTechniques];
    console.log(`📚 Importing ${allTechniques.length} techniques...`);

    for (const techniqueData of allTechniques) {
      const { steps, tags, ...techniqueInfo } = techniqueData;

      // Create the technique
      const technique = await prisma.technique.create({
        data: {
          ...techniqueInfo,
          submittedById: admin.id,
          status: 'APPROVED'
        }
      });

      // Create technique steps
      for (const stepData of steps) {
        await prisma.techniqueStep.create({
          data: {
            ...stepData,
            techniqueId: technique.id
          }
        });
      }

      // Create tags and link to technique
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
            techniqueId: technique.id,
            tagId: tag.id
          }
        });
      }

      console.log(`✅ Created: ${technique.name}`);
    }

    console.log(`🎉 Successfully imported ${allTechniques.length} techniques!`);
    console.log(`📊 Total techniques in database: ${await prisma.technique.count()}`);

  } catch (error) {
    console.error('❌ Error importing techniques:', error);
    throw error;
  } finally {
    await prisma.$disconnect();
  }
}

// Run the import if this file is executed directly
if (require.main === module) {
  importComprehensiveTechniques()
    .catch((error) => {
      console.error(error);
      process.exit(1);
    });
}

module.exports = { comprehensiveTechniques, importComprehensiveTechniques };