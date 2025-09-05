// Additional techniques to reach 65+ total techniques
const additionalTechniques = [
  // JUDO THROWS
  {
    name: "Osoto Gari (Major Outer Reaping)",
    description: "Classic judo throw attacking opponent's leg from behind while maintaining balance.",
    difficulty: "INTERMEDIATE",
    position: "TAKEDOWN",
    trainingType: "BOTH",
    bodyTypes: ["AVERAGE", "TALLER"],
    steps: [
      {
        stepNumber: 1,
        description: "Get a collar and sleeve grip on your opponent",
        keyPoints: ["High collar grip", "Strong sleeve control"],
        commonMistakes: ["Low collar grip", "Weak sleeve grip"]
      },
      {
        stepNumber: 2,
        description: "Step in close and off-balance them to their rear corner",
        keyPoints: ["Close distance", "Break their balance"],
        commonMistakes: ["Too far away", "Not breaking balance"]
      },
      {
        stepNumber: 3,
        description: "Sweep their far leg with your leg while driving forward",
        keyPoints: ["Sweep through their leg", "Drive with your body"],
        commonMistakes: ["Weak sweep", "Not driving forward"]
      }
    ],
    tags: ["judo", "throw", "osoto-gari", "reaping"]
  },
  {
    name: "Seoi Nage (Shoulder Throw)",
    description: "Fundamental judo throw loading opponent onto your back and throwing over your shoulder.",
    difficulty: "INTERMEDIATE",
    position: "TAKEDOWN",
    trainingType: "BOTH",
    bodyTypes: ["SHORTER", "AVERAGE"],
    steps: [
      {
        stepNumber: 1,
        description: "Get underhook and collar grip, step in close",
        keyPoints: ["Deep underhook", "Close entry"],
        commonMistakes: ["Shallow underhook", "Too far away"]
      },
      {
        stepNumber: 2,
        description: "Turn your back to them and load them onto your hips",
        keyPoints: ["Full turn", "Load them up"],
        commonMistakes: ["Partial turn", "Not loading properly"]
      },
      {
        stepNumber: 3,
        description: "Throw them over your shoulder with explosive hip drive",
        keyPoints: ["Explosive movement", "Follow through"],
        commonMistakes: ["Weak hip drive", "Not following through"]
      }
    ],
    tags: ["judo", "throw", "seoi-nage", "shoulder"]
  },

  // NO-GI SPECIFIC TECHNIQUES
  {
    name: "D'Arce Choke",
    description: "No-gi choke using arm triangle configuration from various positions.",
    difficulty: "INTERMEDIATE",
    position: "SUBMISSION",
    trainingType: "NOGI_ONLY",
    bodyTypes: ["AVERAGE", "TALLER"],
    steps: [
      {
        stepNumber: 1,
        description: "From side control or north-south, wait for opponent to frame",
        keyPoints: ["Wait for the frame", "Don't force it"],
        commonMistakes: ["Forcing the position", "Wrong timing"]
      },
      {
        stepNumber: 2,
        description: "Thread your arm under their arm and around their neck",
        keyPoints: ["Deep under arm", "Around the neck"],
        commonMistakes: ["Not deep enough", "Wrong path"]
      },
      {
        stepNumber: 3,
        description: "Grab your bicep with your other hand and apply pressure",
        keyPoints: ["Tight grip", "Squeeze and lift"],
        commonMistakes: ["Loose grip", "No pressure"]
      }
    ],
    tags: ["darce", "choke", "no-gi", "arm-triangle"]
  },
  {
    name: "Anaconda Choke",
    description: "No-gi choke similar to D'Arce but with different arm configuration.",
    difficulty: "INTERMEDIATE",
    position: "SUBMISSION",
    trainingType: "NOGI_ONLY",
    bodyTypes: ["AVERAGE", "TALLER"],
    steps: [
      {
        stepNumber: 1,
        description: "From front headlock position, thread arm under their arm",
        keyPoints: ["Good front headlock", "Deep arm threading"],
        commonMistakes: ["Poor headlock", "Shallow threading"]
      },
      {
        stepNumber: 2,
        description: "Connect your hands and roll to your back",
        keyPoints: ["Lock hands together", "Roll smoothly"],
        commonMistakes: ["Can't lock hands", "Awkward roll"]
      },
      {
        stepNumber: 3,
        description: "Squeeze while extending your body",
        keyPoints: ["Tight squeeze", "Body extension"],
        commonMistakes: ["Weak squeeze", "Not extending"]
      }
    ],
    tags: ["anaconda", "choke", "no-gi", "front-headlock"]
  },

  // MORE GUARD VARIATIONS
  {
    name: "X-Guard Sweep",
    description: "Sweep from X-Guard position using leverage and off-balancing.",
    difficulty: "INTERMEDIATE",
    position: "SWEEP",
    trainingType: "BOTH",
    bodyTypes: ["SHORTER", "AVERAGE"],
    steps: [
      {
        stepNumber: 1,
        description: "From seated guard, get one leg between their legs (X-Guard)",
        keyPoints: ["Leg between their legs", "Hook their leg"],
        commonMistakes: ["Wrong leg position", "No hook"]
      },
      {
        stepNumber: 2,
        description: "Control their opposite leg with your other leg",
        keyPoints: ["Control other leg", "Create instability"],
        commonMistakes: ["No leg control", "Still stable"]
      },
      {
        stepNumber: 3,
        description: "Lift with your X-Guard leg while pulling them forward",
        keyPoints: ["Lift with leg", "Pull with arms"],
        commonMistakes: ["Not lifting", "Not pulling"]
      }
    ],
    tags: ["x-guard", "sweep", "leverage", "off-balance"]
  },
  {
    name: "Deep Half Guard Sweep",
    description: "Sweep from deep half guard using underhook and leg positioning.",
    difficulty: "INTERMEDIATE",
    position: "SWEEP",
    trainingType: "BOTH",
    bodyTypes: ["SHORTER", "AVERAGE", "TALLER"],
    steps: [
      {
        stepNumber: 1,
        description: "From deep half guard, get deep underhook on far side",
        keyPoints: ["Deep underhook", "Control their back"],
        commonMistakes: ["Shallow underhook", "No back control"]
      },
      {
        stepNumber: 2,
        description: "Drive your underhook up while scooting your hips out",
        keyPoints: ["Drive underhook up", "Hip movement"],
        commonMistakes: ["Not driving up", "Static hips"]
      },
      {
        stepNumber: 3,
        description: "Sweep them toward the underhook side",
        keyPoints: ["Sweep toward underhook", "Use momentum"],
        commonMistakes: ["Wrong direction", "No momentum"]
      }
    ],
    tags: ["deep-half", "sweep", "underhook", "hip-movement"]
  },

  // LEG ATTACKS (BASIC)
  {
    name: "Straight Ankle Lock",
    description: "Basic leg submission attacking the ankle joint.",
    difficulty: "INTERMEDIATE",
    position: "SUBMISSION",
    trainingType: "BOTH",
    bodyTypes: ["SHORTER", "AVERAGE", "TALLER"],
    steps: [
      {
        stepNumber: 1,
        description: "Control opponent's leg and isolate their foot",
        keyPoints: ["Secure leg control", "Isolate the foot"],
        commonMistakes: ["Poor leg control", "Not isolating foot"]
      },
      {
        stepNumber: 2,
        description: "Place their ankle in your armpit with forearm across their achilles",
        keyPoints: ["Ankle in armpit", "Forearm on achilles"],
        commonMistakes: ["Wrong ankle position", "Poor forearm placement"]
      },
      {
        stepNumber: 3,
        description: "Arch your back while pulling their leg toward you",
        keyPoints: ["Arch your back", "Pull the leg"],
        commonMistakes: ["No back arch", "Not pulling"]
      }
    ],
    tags: ["ankle-lock", "leg-attack", "submission", "achilles"]
  },

  // WRESTLING TECHNIQUES
  {
    name: "Underhooks Control",
    description: "Wrestling position using double underhooks for control and takedowns.",
    difficulty: "BEGINNER",
    position: "CLINCH",
    trainingType: "BOTH",
    bodyTypes: ["SHORTER", "AVERAGE", "TALLER"],
    steps: [
      {
        stepNumber: 1,
        description: "Get double underhooks on your opponent",
        keyPoints: ["Deep underhooks", "Control their back"],
        commonMistakes: ["Shallow underhooks", "No back control"]
      },
      {
        stepNumber: 2,
        description: "Keep your head positioned to one side",
        keyPoints: ["Head to the side", "Avoid head-to-head"],
        commonMistakes: ["Head-to-head", "Poor head position"]
      },
      {
        stepNumber: 3,
        description: "Drive forward and look for takedown opportunities",
        keyPoints: ["Forward pressure", "Look for openings"],
        commonMistakes: ["No pressure", "Not looking for opportunities"]
      }
    ],
    tags: ["underhooks", "wrestling", "clinch", "control"]
  },
  {
    name: "Collar Tie Control",
    description: "Wrestling grip controlling opponent's head and posture.",
    difficulty: "BEGINNER",
    position: "CLINCH",
    trainingType: "BOTH",
    bodyTypes: ["SHORTER", "AVERAGE", "TALLER"],
    steps: [
      {
        stepNumber: 1,
        description: "Get your hand behind their head/neck",
        keyPoints: ["Behind the head", "Good grip"],
        commonMistakes: ["Too high on head", "Weak grip"]
      },
      {
        stepNumber: 2,
        description: "Pull their head down while controlling distance",
        keyPoints: ["Pull head down", "Control distance"],
        commonMistakes: ["Not pulling down", "Getting too close"]
      },
      {
        stepNumber: 3,
        description: "Use collar tie to set up other attacks",
        keyPoints: ["Set up attacks", "Stay mobile"],
        commonMistakes: ["Just holding", "Being static"]
      }
    ],
    tags: ["collar-tie", "wrestling", "head-control", "setup"]
  },

  // ADVANCED SUBMISSIONS
  {
    name: "Loop Choke from Guard",
    description: "Sneaky choke from guard using opponent's own collar.",
    difficulty: "INTERMEDIATE",
    position: "CLOSED_GUARD",
    trainingType: "GI_ONLY",
    bodyTypes: ["AVERAGE", "TALLER"],
    steps: [
      {
        stepNumber: 1,
        description: "From closed guard, reach around their neck and grab their far collar",
        keyPoints: ["Deep collar grip", "Around the neck"],
        commonMistakes: ["Shallow grip", "Wrong collar"]
      },
      {
        stepNumber: 2,
        description: "Use your other hand to grab their near collar",
        keyPoints: ["Both collar grips", "Cross your arms"],
        commonMistakes: ["Only one grip", "Not crossing arms"]
      },
      {
        stepNumber: 3,
        description: "Roll to your side while maintaining the grips",
        keyPoints: ["Roll to side", "Keep grips tight"],
        commonMistakes: ["Staying flat", "Losing grips"]
      }
    ],
    tags: ["loop-choke", "guard", "gi", "collar"]
  },

  // MOUNT ESCAPES
  {
    name: "Upa Escape from Mount",
    description: "Bridge and roll escape from mount, fundamental escape technique.",
    difficulty: "FUNDAMENTAL",
    position: "ESCAPE",
    trainingType: "BOTH",
    bodyTypes: ["SHORTER", "AVERAGE", "TALLER"],
    steps: [
      {
        stepNumber: 1,
        description: "From bottom mount, trap one arm against your chest",
        keyPoints: ["Secure the arm", "Pull tight"],
        commonMistakes: ["Not securing arm", "Loose grip"]
      },
      {
        stepNumber: 2,
        description: "Hook their ankle on the same side with your foot",
        keyPoints: ["Hook the ankle", "Same side coordination"],
        commonMistakes: ["Wrong side", "No ankle hook"]
      },
      {
        stepNumber: 3,
        description: "Bridge explosively while rolling toward trapped side",
        keyPoints: ["Explosive bridge", "Roll to trapped side"],
        commonMistakes: ["Weak bridge", "Wrong direction"]
      }
    ],
    tags: ["upa", "mount-escape", "bridge", "fundamental"]
  },

  // SIDE CONTROL ESCAPES
  {
    name: "Ghost Escape from Side Control",
    description: "Modern escape from side control by going to turtle and spinning out.",
    difficulty: "INTERMEDIATE",
    position: "ESCAPE",
    trainingType: "BOTH",
    bodyTypes: ["SHORTER", "AVERAGE"],
    steps: [
      {
        stepNumber: 1,
        description: "From bottom side control, turn to turtle position",
        keyPoints: ["Turn to turtle", "Protect your neck"],
        commonMistakes: ["Staying flat", "Exposing neck"]
      },
      {
        stepNumber: 2,
        description: "Spin out toward their legs while staying low",
        keyPoints: ["Spin toward legs", "Stay low"],
        commonMistakes: ["Spinning wrong way", "Getting too high"]
      },
      {
        stepNumber: 3,
        description: "Come up behind them or secure guard",
        keyPoints: ["Get behind them", "Secure position"],
        commonMistakes: ["Not following through", "Losing position"]
      }
    ],
    tags: ["ghost-escape", "side-control", "turtle", "spin"]
  },

  // CLOSED GUARD ATTACKS
  {
    name: "Cross Collar Choke from Guard",
    description: "Fundamental gi choke from closed guard using cross grips.",
    difficulty: "BEGINNER",
    position: "CLOSED_GUARD",
    trainingType: "GI_ONLY",
    bodyTypes: ["SHORTER", "AVERAGE", "TALLER"],
    steps: [
      {
        stepNumber: 1,
        description: "From closed guard, get deep grip in their right collar with left hand",
        keyPoints: ["Four fingers deep", "Thumb inside"],
        commonMistakes: ["Shallow grip", "Thumb outside"]
      },
      {
        stepNumber: 2,
        description: "Get second grip in their left collar with right hand",
        keyPoints: ["Cross your arms", "Deep on both sides"],
        commonMistakes: ["Not crossing", "Shallow second grip"]
      },
      {
        stepNumber: 3,
        description: "Pull elbows down while opening guard and pushing with legs",
        keyPoints: ["Elbows down", "Push with legs"],
        commonMistakes: ["Elbows out", "Not using legs"]
      }
    ],
    tags: ["cross-collar", "choke", "guard", "gi"]
  },

  // BACK CONTROL ATTACKS
  {
    name: "Clock Choke from Back Control",
    description: "Gi choke from back control using collar grip and body positioning.",
    difficulty: "INTERMEDIATE",
    position: "BACK_CONTROL",
    trainingType: "GI_ONLY",
    bodyTypes: ["AVERAGE", "TALLER"],
    steps: [
      {
        stepNumber: 1,
        description: "From back control, get deep grip in their far collar",
        keyPoints: ["Deep collar grip", "Four fingers in"],
        commonMistakes: ["Shallow grip", "Wrong collar"]
      },
      {
        stepNumber: 2,
        description: "Walk your body around like a clock hand",
        keyPoints: ["Walk around their body", "Maintain back control"],
        commonMistakes: ["Not walking around", "Losing back control"]
      },
      {
        stepNumber: 3,
        description: "Apply pressure with your forearm when you reach the side",
        keyPoints: ["Forearm pressure", "Use body weight"],
        commonMistakes: ["No pressure", "Not using weight"]
      }
    ],
    tags: ["clock-choke", "back-control", "gi", "collar"]
  },

  // GUARD RETENTION
  {
    name: "Knee Shield Guard",
    description: "Defensive guard position using knee as a barrier against pressure passing.",
    difficulty: "BEGINNER",
    position: "HALF_GUARD",
    trainingType: "BOTH",
    bodyTypes: ["SHORTER", "AVERAGE", "TALLER"],
    steps: [
      {
        stepNumber: 1,
        description: "From half guard, bring your top knee up as a shield",
        keyPoints: ["Knee up high", "Create barrier"],
        commonMistakes: ["Knee too low", "No barrier"]
      },
      {
        stepNumber: 2,
        description: "Frame with your hands to maintain distance",
        keyPoints: ["Strong frames", "Keep distance"],
        commonMistakes: ["Weak frames", "Getting flattened"]
      },
      {
        stepNumber: 3,
        description: "Stay mobile and work to recover full guard",
        keyPoints: ["Stay mobile", "Work to recover"],
        commonMistakes: ["Being static", "Not recovering"]
      }
    ],
    tags: ["knee-shield", "guard-retention", "defense", "barrier"]
  },

  // TAKEDOWN DEFENSE
  {
    name: "Whizzer Defense",
    description: "Defensive technique against underhooks using overhook control.",
    difficulty: "INTERMEDIATE",
    position: "STANDING",
    trainingType: "BOTH",
    bodyTypes: ["SHORTER", "AVERAGE", "TALLER"],
    steps: [
      {
        stepNumber: 1,
        description: "When opponent gets underhook, immediately get overhook (whizzer)",
        keyPoints: ["Quick reaction", "Deep overhook"],
        commonMistakes: ["Too slow", "Shallow overhook"]
      },
      {
        stepNumber: 2,
        description: "Control their head with your other hand",
        keyPoints: ["Control the head", "Prevent them from driving"],
        commonMistakes: ["No head control", "Let them drive"]
      },
      {
        stepNumber: 3,
        description: "Use whizzer to prevent takedowns and look for counters",
        keyPoints: ["Strong whizzer", "Look for counters"],
        commonMistakes: ["Weak whizzer", "Just defending"]
      }
    ],
    tags: ["whizzer", "overhook", "takedown-defense", "counter"]
  },

  // OPEN GUARD ATTACKS
  {
    name: "Lasso Guard Sweep",
    description: "Sweep from lasso guard using sleeve control and leg positioning.",
    difficulty: "INTERMEDIATE",
    position: "OPEN_GUARD",
    trainingType: "GI_ONLY",
    bodyTypes: ["AVERAGE", "TALLER"],
    steps: [
      {
        stepNumber: 1,
        description: "From open guard, thread your leg through their arm (lasso)",
        keyPoints: ["Leg through arm", "Control the sleeve"],
        commonMistakes: ["Can't get lasso", "Lose sleeve grip"]
      },
      {
        stepNumber: 2,
        description: "Control their opposite collar with your free hand",
        keyPoints: ["Collar control", "Break their posture"],
        commonMistakes: ["No collar grip", "Poor posture break"]
      },
      {
        stepNumber: 3,
        description: "Sweep them toward the lasso side",
        keyPoints: ["Sweep to lasso side", "Use leg leverage"],
        commonMistakes: ["Wrong direction", "No leverage"]
      }
    ],
    tags: ["lasso-guard", "sweep", "gi", "sleeve-control"]
  },

  // TURTLE ATTACKS
  {
    name: "Crucifix from Turtle",
    description: "Control position from turtle that immobilizes opponent's arms.",
    difficulty: "INTERMEDIATE",
    position: "TURTLE",
    trainingType: "BOTH",
    bodyTypes: ["AVERAGE", "TALLER"],
    steps: [
      {
        stepNumber: 1,
        description: "From turtle top position, isolate one of their arms",
        keyPoints: ["Isolate the arm", "Control it"],
        commonMistakes: ["Not isolating", "Losing control"]
      },
      {
        stepNumber: 2,
        description: "Thread your leg over their arm and under their body",
        keyPoints: ["Leg over arm", "Control their movement"],
        commonMistakes: ["Wrong leg position", "No control"]
      },
      {
        stepNumber: 3,
        description: "Secure the crucifix and look for submission opportunities",
        keyPoints: ["Secure position", "Look for attacks"],
        commonMistakes: ["Unstable position", "No follow-up"]
      }
    ],
    tags: ["crucifix", "turtle", "control", "arm-isolation"]
  },

  // STANDING TECHNIQUES
  {
    name: "Foot Sweep (Deashi Barai)",
    description: "Timing-based foot sweep from judo adapted for BJJ.",
    difficulty: "INTERMEDIATE",
    position: "TAKEDOWN",
    trainingType: "BOTH",
    bodyTypes: ["SHORTER", "AVERAGE", "TALLER"],
    steps: [
      {
        stepNumber: 1,
        description: "Get opponent moving forward or to the side",
        keyPoints: ["Get them moving", "Time the movement"],
        commonMistakes: ["Static opponent", "Bad timing"]
      },
      {
        stepNumber: 2,
        description: "Sweep their advancing foot with your foot",
        keyPoints: ["Sweep the moving foot", "Timing is crucial"],
        commonMistakes: ["Wrong foot", "Poor timing"]
      },
      {
        stepNumber: 3,
        description: "Follow through with upper body control",
        keyPoints: ["Upper body follow-through", "Complete the throw"],
        commonMistakes: ["No follow-through", "Incomplete throw"]
      }
    ],
    tags: ["foot-sweep", "judo", "timing", "deashi-barai"]
  },

  // SUBMISSION ESCAPES
  {
    name: "Stack Defense vs Triangle",
    description: "Defense against triangle choke by stacking opponent's shoulders.",
    difficulty: "INTERMEDIATE",
    position: "COUNTER",
    trainingType: "BOTH",
    bodyTypes: ["SHORTER", "AVERAGE", "TALLER"],
    steps: [
      {
        stepNumber: 1,
        description: "As soon as triangle is applied, stand up if possible",
        keyPoints: ["Get your feet", "Create height"],
        commonMistakes: ["Staying down", "No height"]
      },
      {
        stepNumber: 2,
        description: "Stack their shoulders toward the ground",
        keyPoints: ["Stack their shoulders", "Use your weight"],
        commonMistakes: ["Not stacking", "No weight"]
      },
      {
        stepNumber: 3,
        description: "Pass to side control while maintaining the stack",
        keyPoints: ["Pass their guard", "Keep stacking"],
        commonMistakes: ["Not passing", "Losing stack"]
      }
    ],
    tags: ["stack-defense", "triangle-defense", "counter", "escape"]
  }
];

module.exports = { additionalTechniques };