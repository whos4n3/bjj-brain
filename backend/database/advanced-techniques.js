// Additional advanced techniques to reach 65+ techniques total
const advancedTechniques = [
  // GUARD VARIATIONS
  {
    name: "Spider Guard Setup",
    description: "Open guard variation using sleeve grips and foot placement on biceps for control and attacks.",
    difficulty: "INTERMEDIATE",
    position: "SPIDER_GUARD",
    trainingType: "GI_ONLY",
    bodyTypes: ["AVERAGE", "TALLER"],
    steps: [
      {
        stepNumber: 1,
        description: "From open guard, grip both of opponent's sleeves at the wrists",
        keyPoints: ["Strong sleeve grips", "Four fingers inside"],
        commonMistakes: ["Weak grips", "Wrong grip position"]
      },
      {
        stepNumber: 2,
        description: "Place your feet on their biceps with your toes pointing outward",
        keyPoints: ["Feet on biceps", "Toes out for stability"],
        commonMistakes: ["Feet too low", "Toes pointing wrong direction"]
      },
      {
        stepNumber: 3,
        description: "Create tension by pulling with your hands and pushing with your feet",
        keyPoints: ["Opposite forces", "Maintain tension"],
        commonMistakes: ["No tension", "Inconsistent pressure"]
      }
    ],
    tags: ["spider-guard", "gi", "open-guard", "control"]
  },
  {
    name: "De La Riva Guard Setup",
    description: "Popular open guard using hook behind the leg and collar/sleeve control.",
    difficulty: "INTERMEDIATE",
    position: "DE_LA_RIVA",
    trainingType: "BOTH",
    bodyTypes: ["SHORTER", "AVERAGE"],
    steps: [
      {
        stepNumber: 1,
        description: "From open guard, hook your right leg behind their left leg",
        keyPoints: ["Deep hook behind knee", "Control their base"],
        commonMistakes: ["Shallow hook", "Wrong leg"]
      },
      {
        stepNumber: 2,
        description: "Grip their opposite sleeve with your left hand",
        keyPoints: ["Cross grip", "Pull them forward"],
        commonMistakes: ["Same side grip", "No pull"]
      },
      {
        stepNumber: 3,
        description: "Place your left foot on their right hip for distance control",
        keyPoints: ["Foot on hip", "Control distance"],
        commonMistakes: ["No distance control", "Wrong foot placement"]
      }
    ],
    tags: ["de-la-riva", "open-guard", "hook", "control"]
  },
  {
    name: "Butterfly Guard Sweep",
    description: "Sweep from butterfly guard using underhooks and elevation.",
    difficulty: "INTERMEDIATE",
    position: "BUTTERFLY_GUARD",
    trainingType: "BOTH",
    bodyTypes: ["SHORTER", "AVERAGE", "TALLER"],
    steps: [
      {
        stepNumber: 1,
        description: "From butterfly guard, get double underhooks on opponent's arms",
        keyPoints: ["Deep underhooks", "Control both arms"],
        commonMistakes: ["Shallow hooks", "Only one underhook"]
      },
      {
        stepNumber: 2,
        description: "Choose a side and lift with that butterfly hook while pulling with underhooks",
        keyPoints: ["Coordinate lift and pull", "Drive through your foot"],
        commonMistakes: ["Not coordinating", "Weak foot drive"]
      },
      {
        stepNumber: 3,
        description: "Fall in the direction of the sweep while maintaining underhooks",
        keyPoints: ["Follow through", "Don't let go"],
        commonMistakes: ["Not following through", "Losing underhooks"]
      }
    ],
    tags: ["butterfly-guard", "sweep", "underhooks", "elevation"]
  },

  // HALF GUARD TECHNIQUES
  {
    name: "Half Guard Knee Shield",
    description: "Defensive half guard position using knee as a barrier.",
    difficulty: "BEGINNER",
    position: "HALF_GUARD",
    trainingType: "BOTH",
    bodyTypes: ["SHORTER", "AVERAGE", "TALLER"],
    steps: [
      {
        stepNumber: 1,
        description: "From bottom half guard, frame with your top hand against their shoulder",
        keyPoints: ["Strong frame", "Create distance"],
        commonMistakes: ["Weak frame", "No distance"]
      },
      {
        stepNumber: 2,
        description: "Bring your knee up between you and your opponent",
        keyPoints: ["Knee creates barrier", "On your side"],
        commonMistakes: ["Flat on back", "Knee too low"]
      },
      {
        stepNumber: 3,
        description: "Use the knee shield to prevent them from flattening you out",
        keyPoints: ["Active barrier", "Stay mobile"],
        commonMistakes: ["Passive defense", "Getting flat"]
      }
    ],
    tags: ["half-guard", "defense", "knee-shield", "frame"]
  },
  {
    name: "Half Guard Underhook Sweep",
    description: "Sweep from half guard using underhook and hip movement.",
    difficulty: "INTERMEDIATE",
    position: "HALF_GUARD",
    trainingType: "BOTH",
    bodyTypes: ["SHORTER", "AVERAGE", "TALLER"],
    steps: [
      {
        stepNumber: 1,
        description: "From half guard, get an underhook on the near side",
        keyPoints: ["Deep underhook", "Control their shoulder"],
        commonMistakes: ["Shallow underhook", "No shoulder control"]
      },
      {
        stepNumber: 2,
        description: "Drive your underhook up and create an angle",
        keyPoints: ["Lift with underhook", "Get on your side"],
        commonMistakes: ["Not lifting", "Staying flat"]
      },
      {
        stepNumber: 3,
        description: "Sweep them toward the underhook side while scooting out",
        keyPoints: ["Hip movement", "Follow the underhook"],
        commonMistakes: ["No hip movement", "Wrong direction"]
      }
    ],
    tags: ["half-guard", "sweep", "underhook", "angle"]
  },

  // KNEE ON BELLY TECHNIQUES
  {
    name: "Knee on Belly Control",
    description: "Dominant top position using knee pressure on opponent's belly.",
    difficulty: "INTERMEDIATE",
    position: "KNEE_ON_BELLY",
    trainingType: "BOTH",
    bodyTypes: ["SHORTER", "AVERAGE", "TALLER"],
    steps: [
      {
        stepNumber: 1,
        description: "From side control, bring your near knee onto their belly",
        keyPoints: ["Knee on solar plexus", "Weight distribution"],
        commonMistakes: ["Knee too high", "All weight on knee"]
      },
      {
        stepNumber: 2,
        description: "Grip their far collar and near side pants",
        keyPoints: ["Control collar and pants", "Strong grips"],
        commonMistakes: ["Weak grips", "Wrong controls"]
      },
      {
        stepNumber: 3,
        description: "Stay mobile and adjust your position based on their escapes",
        keyPoints: ["Stay mobile", "React to their movement"],
        commonMistakes: ["Being static", "Not adjusting"]
      }
    ],
    tags: ["knee-on-belly", "control", "pressure", "mobility"]
  },

  // WRESTLING TECHNIQUES
  {
    name: "Double Leg Takedown",
    description: "Fundamental wrestling takedown attacking both legs simultaneously.",
    difficulty: "INTERMEDIATE",
    position: "TAKEDOWN",
    trainingType: "BOTH",
    bodyTypes: ["SHORTER", "AVERAGE", "TALLER"],
    steps: [
      {
        stepNumber: 1,
        description: "Change levels and shoot in with a penetration step",
        keyPoints: ["Low level change", "Deep penetration"],
        commonMistakes: ["Not getting low enough", "Shallow penetration"]
      },
      {
        stepNumber: 2,
        description: "Wrap both arms around both of their legs",
        keyPoints: ["Both arms around both legs", "Tight grip"],
        commonMistakes: ["Only one leg", "Loose grip"]
      },
      {
        stepNumber: 3,
        description: "Drive forward and up while lifting their legs",
        keyPoints: ["Drive through them", "Lift their legs"],
        commonMistakes: ["Not driving", "Not lifting"]
      },
      {
        stepNumber: 4,
        description: "Take them down by driving them backward or to the side",
        keyPoints: ["Choose your direction", "Follow through"],
        commonMistakes: ["No direction", "Not following through"]
      }
    ],
    tags: ["takedown", "double-leg", "wrestling", "legs"]
  },
  {
    name: "Arm Drag to Back Take",
    description: "Technique to get behind opponent by controlling and redirecting their arm.",
    difficulty: "INTERMEDIATE",
    position: "TAKEDOWN",
    trainingType: "BOTH",
    bodyTypes: ["SHORTER", "AVERAGE", "TALLER"],
    steps: [
      {
        stepNumber: 1,
        description: "Grip opponent's wrist with one hand and their tricep with the other",
        keyPoints: ["Control wrist and tricep", "Same arm"],
        commonMistakes: ["Wrong grips", "Different arms"]
      },
      {
        stepNumber: 2,
        description: "Pull their arm across their body while stepping to their back",
        keyPoints: ["Pull arm across", "Step behind them"],
        commonMistakes: ["Not pulling across", "Wrong step"]
      },
      {
        stepNumber: 3,
        description: "Circle behind them while maintaining arm control",
        keyPoints: ["Get to their back", "Keep arm control"],
        commonMistakes: ["Losing control", "Not getting behind"]
      },
      {
        stepNumber: 4,
        description: "Secure back control or take them down",
        keyPoints: ["Secure the position", "Get hooks in"],
        commonMistakes: ["Not securing", "Letting them turn"]
      }
    ],
    tags: ["arm-drag", "back-take", "wrestling", "redirect"]
  },

  // SUBMISSION VARIATIONS
  {
    name: "Ezekiel Choke from Mount",
    description: "Gi choke from mount using sleeve grip and forearm pressure.",
    difficulty: "INTERMEDIATE",
    position: "MOUNT",
    trainingType: "GI_ONLY",
    bodyTypes: ["SHORTER", "AVERAGE", "TALLER"],
    steps: [
      {
        stepNumber: 1,
        description: "From mount, slide one hand into your own sleeve, near the wrist",
        keyPoints: ["Deep in your own sleeve", "Four fingers inside"],
        commonMistakes: ["Shallow grip", "Wrong sleeve"]
      },
      {
        stepNumber: 2,
        description: "Slide that hand under their neck, with your forearm across their throat",
        keyPoints: ["Forearm on throat", "Deep under neck"],
        commonMistakes: ["Not deep enough", "Wrong arm position"]
      },
      {
        stepNumber: 3,
        description: "Grab your own sleeve with your other hand and pull",
        keyPoints: ["Grip your sleeve", "Pull for pressure"],
        commonMistakes: ["Can't find sleeve", "No pressure"]
      },
      {
        stepNumber: 4,
        description: "Apply pressure by pulling your sleeve hand while driving down with your forearm",
        keyPoints: ["Combine pulling and pushing", "Steady pressure"],
        commonMistakes: ["Only one direction", "Too much force"]
      }
    ],
    tags: ["ezekiel", "choke", "mount", "gi", "sleeve"]
  },
  {
    name: "Guillotine Choke Standing",
    description: "Standing guillotine choke setup and finish.",
    difficulty: "INTERMEDIATE",
    position: "STANDING",
    trainingType: "BOTH",
    bodyTypes: ["AVERAGE", "TALLER"],
    steps: [
      {
        stepNumber: 1,
        description: "As opponent shoots for takedown, wrap your arm around their neck",
        keyPoints: ["React quickly", "Deep around neck"],
        commonMistakes: ["Too slow", "Shallow grip"]
      },
      {
        stepNumber: 2,
        description: "Lock your hands together in a gable grip under their chin",
        keyPoints: ["Tight gable grip", "Under the chin"],
        commonMistakes: ["Wrong grip", "Too low"]
      },
      {
        stepNumber: 3,
        description: "Lift your hips up while squeezing your arms together",
        keyPoints: ["Hip drive", "Squeeze arms"],
        commonMistakes: ["No hip drive", "Only using arms"]
      },
      {
        stepNumber: 4,
        description: "Jump guard or sprawl while maintaining the choke",
        keyPoints: ["Maintain choke", "Choose your transition"],
        commonMistakes: ["Losing choke", "Bad transition"]
      }
    ],
    tags: ["guillotine", "choke", "standing", "takedown-defense"]
  },

  // ADVANCED GUARD ATTACKS
  {
    name: "Omoplata from Guard",
    description: "Shoulder lock submission using leg positioning to control opponent's arm.",
    difficulty: "ADVANCED",
    position: "CLOSED_GUARD",
    trainingType: "BOTH",
    bodyTypes: ["AVERAGE", "TALLER"],
    steps: [
      {
        stepNumber: 1,
        description: "From closed guard, control opponent's wrist and bring it across their body",
        keyPoints: ["Control wrist", "Arm across centerline"],
        commonMistakes: ["Losing wrist control", "Not getting arm across"]
      },
      {
        stepNumber: 2,
        description: "Open your guard and swing your leg over their back and arm",
        keyPoints: ["Leg over back", "Trap their arm"],
        commonMistakes: ["Leg too low", "Not trapping arm"]
      },
      {
        stepNumber: 3,
        description: "Sit up and adjust your leg position to isolate their arm",
        keyPoints: ["Sit up tall", "Isolate the arm"],
        commonMistakes: ["Staying flat", "Arm not isolated"]
      },
      {
        stepNumber: 4,
        description: "Control their posture and apply pressure to their shoulder",
        keyPoints: ["Control their head", "Gentle pressure"],
        commonMistakes: ["No head control", "Too much force"]
      }
    ],
    tags: ["omoplata", "shoulder-lock", "guard", "advanced"]
  },
  {
    name: "Rubber Guard Setup",
    description: "Flexible guard position controlling opponent's posture with leg over shoulder.",
    difficulty: "ADVANCED",
    position: "RUBBER_GUARD",
    trainingType: "BOTH",
    bodyTypes: ["AVERAGE", "TALLER"],
    steps: [
      {
        stepNumber: 1,
        description: "From closed guard, break their posture and control their head",
        keyPoints: ["Break posture down", "Control head"],
        commonMistakes: ["Can't break posture", "No head control"]
      },
      {
        stepNumber: 2,
        description: "Bring your leg over their shoulder and grab your own shin",
        keyPoints: ["Leg over shoulder", "Grab your shin"],
        commonMistakes: ["Not flexible enough", "Can't reach shin"]
      },
      {
        stepNumber: 3,
        description: "Use this position to control their posture and set up attacks",
        keyPoints: ["Control posture", "Look for attacks"],
        commonMistakes: ["Just holding", "No progression"]
      }
    ],
    tags: ["rubber-guard", "flexibility", "posture-control", "advanced"]
  },

  // NORTH-SOUTH TECHNIQUES
  {
    name: "North-South Choke",
    description: "Submission from north-south position using arm positioning.",
    difficulty: "INTERMEDIATE",
    position: "NORTH_SOUTH",
    trainingType: "BOTH",
    bodyTypes: ["SHORTER", "AVERAGE", "TALLER"],
    steps: [
      {
        stepNumber: 1,
        description: "From north-south position, slide your arm under their neck",
        keyPoints: ["Deep under neck", "Bicep on one side"],
        commonMistakes: ["Not deep enough", "Wrong arm position"]
      },
      {
        stepNumber: 2,
        description: "Bring your other arm around their head and lock your hands",
        keyPoints: ["Around their head", "Lock hands together"],
        commonMistakes: ["Can't lock hands", "Wrong arm path"]
      },
      {
        stepNumber: 3,
        description: "Drive your weight down while squeezing your arms together",
        keyPoints: ["Weight down", "Squeeze arms"],
        commonMistakes: ["Not using weight", "Not squeezing"]
      }
    ],
    tags: ["north-south", "choke", "submission", "pressure"]
  },

  // TURTLE POSITION TECHNIQUES
  {
    name: "Turtle Back Take",
    description: "Taking the back from opponent's turtle position.",
    difficulty: "INTERMEDIATE",
    position: "TURTLE",
    trainingType: "BOTH",
    bodyTypes: ["SHORTER", "AVERAGE", "TALLER"],
    steps: [
      {
        stepNumber: 1,
        description: "From opponent's turtle, get one arm under their armpit (seatbelt grip)",
        keyPoints: ["Deep underhook", "Seatbelt position"],
        commonMistakes: ["Shallow underhook", "Wrong grip"]
      },
      {
        stepNumber: 2,
        description: "Get your other arm over their shoulder and lock your hands",
        keyPoints: ["Over the shoulder", "Lock hands"],
        commonMistakes: ["Can't get over shoulder", "No hand lock"]
      },
      {
        stepNumber: 3,
        description: "Insert your near-side hook while maintaining upper body control",
        keyPoints: ["Get first hook", "Keep upper control"],
        commonMistakes: ["Losing upper control", "Can't get hook"]
      },
      {
        stepNumber: 4,
        description: "Roll to your back while inserting the second hook",
        keyPoints: ["Roll smoothly", "Get both hooks"],
        commonMistakes: ["Losing position", "Only one hook"]
      }
    ],
    tags: ["turtle", "back-take", "seatbelt", "hooks"]
  },

  // COUNTER TECHNIQUES
  {
    name: "Armbar Counter to Hitchhiker Escape",
    description: "Escaping an armbar by turning in the direction of the submission.",
    difficulty: "INTERMEDIATE",
    position: "COUNTER",
    trainingType: "BOTH",
    bodyTypes: ["SHORTER", "AVERAGE", "TALLER"],
    steps: [
      {
        stepNumber: 1,
        description: "As opponent applies armbar, grab your own gi pants or belt",
        keyPoints: ["Grab your own gi", "Protect the arm"],
        commonMistakes: ["Grabbing opponent", "No protection"]
      },
      {
        stepNumber: 2,
        description: "Turn in toward their legs, rotating your body",
        keyPoints: ["Turn toward legs", "Full body rotation"],
        commonMistakes: ["Turning away", "Only turning arm"]
      },
      {
        stepNumber: 3,
        description: "Stack them while keeping your arm bent and protected",
        keyPoints: ["Stack their shoulders", "Keep arm bent"],
        commonMistakes: ["Not stacking", "Straightening arm"]
      },
      {
        stepNumber: 4,
        description: "Pass their guard while maintaining the stack",
        keyPoints: ["Pass to side control", "Stay stacked"],
        commonMistakes: ["Not passing", "Losing stack"]
      }
    ],
    tags: ["counter", "armbar-escape", "hitchhiker", "stack"]
  },

  // ADVANCED POSITIONS
  {
    name: "50/50 Guard Position",
    description: "Leg entanglement position with equal control for both practitioners.",
    difficulty: "ADVANCED",
    position: "GUARD_PASS",
    trainingType: "BOTH",
    bodyTypes: ["SHORTER", "AVERAGE", "TALLER"],
    steps: [
      {
        stepNumber: 1,
        description: "From open guard, hook your leg inside their leg",
        keyPoints: ["Inside leg hook", "Control their leg"],
        commonMistakes: ["Outside hook", "No leg control"]
      },
      {
        stepNumber: 2,
        description: "Mirror their position so both of you have the same leg configuration",
        keyPoints: ["Mirror position", "Equal entanglement"],
        commonMistakes: ["Not mirroring", "Unequal position"]
      },
      {
        stepNumber: 3,
        description: "Work for upper body control and advantageous positioning",
        keyPoints: ["Upper body control", "Look for advantages"],
        commonMistakes: ["Only focusing on legs", "No upper control"]
      }
    ],
    tags: ["50/50", "leg-entanglement", "advanced", "guard"]
  },

  // SCRAMBLE TECHNIQUES
  {
    name: "Scramble to Single Leg",
    description: "Transitioning from scramble situation to single leg takedown.",
    difficulty: "INTERMEDIATE",
    position: "SCRAMBLE",
    trainingType: "BOTH",
    bodyTypes: ["SHORTER", "AVERAGE", "TALLER"],
    steps: [
      {
        stepNumber: 1,
        description: "During scramble, identify opponent's leg position",
        keyPoints: ["Stay calm", "Look for opportunities"],
        commonMistakes: ["Panicking", "Not seeing opportunities"]
      },
      {
        stepNumber: 2,
        description: "Shoot in on their near leg when they're off balance",
        keyPoints: ["Time the shot", "Target near leg"],
        commonMistakes: ["Bad timing", "Wrong leg"]
      },
      {
        stepNumber: 3,
        description: "Secure the leg with both arms and drive through",
        keyPoints: ["Both arms on leg", "Drive forward"],
        commonMistakes: ["One arm only", "Not driving"]
      }
    ],
    tags: ["scramble", "single-leg", "transition", "timing"]
  }
];

module.exports = { advancedTechniques };