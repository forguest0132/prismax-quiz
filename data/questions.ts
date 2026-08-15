export interface Question {
  id: number;
  category: 
    | 'Core_Mission'
    | 'VLA_Physical_AI'
    | 'Consensus_Validation'
    | 'Validator_Roles'
    | 'Teleoperation_Data'
    | 'Trivia_Community'
    | 'Network_Architecture'
    | 'AI_Safety_Standards';
  question: string;
  options: string[];
  correctAnswers: number[];
  isMultiple?: boolean;
}

export const ALL_QUESTIONS: Question[] = [
  // ==========================================
  // Category 1: Core_Mission (Questions 1 - 19)
  // ==========================================
  {
    id: 1,
    category: 'Core_Mission',
    question: 'What is the primary mission of the PrismaX Network?',
    options: ['Decentralized data consensus for Physical AI & Robotics', 'Decentralized text chat hosting', 'Cryptocurrency cloud mining', 'Social media ad generation'],
    correctAnswers: [0]
  },
  {
    id: 2,
    category: 'Core_Mission',
    question: 'Which AI domain does PrismaX specifically advance?',
    options: ['Physical / Embodied AI', 'Basic spreadsheet automation', 'Legacy SEO tools', 'Graphic design filters'],
    correctAnswers: [0]
  },
  {
    id: 3,
    category: 'Core_Mission',
    question: 'Why is standard web-scraped data insufficient for training humanoid robotics?',
    options: ['It lacks spatial dimensions, physical force, and real-time physics data', 'Web images have lower resolution', 'Text is too fast for robots to read', 'There are no videos online'],
    correctAnswers: [0]
  },
  {
    id: 4,
    category: 'Core_Mission',
    question: 'What is "Embodied AI" in the PrismaX framework?',
    options: ['AI systems with a physical body that interact with the real world', 'Software without sensors', 'Text-only chatbots', 'Stock market trading bots'],
    correctAnswers: [0]
  },
  {
    id: 5,
    category: 'Core_Mission',
    question: 'What problem does PrismaX solve in the Physical AI industry?',
    options: ['Data scarcity, unverified robotic trajectories, and centralized silos', 'High smartphone screen prices', 'Server cooling fan noise', 'Lack of office desks'],
    correctAnswers: [0]
  },
  {
    id: 6,
    category: 'Core_Mission',
    question: 'Which of the following are core pillars of the PrismaX vision? (Multiple answers apply)',
    options: ['Decentralized Data Provenance', 'Physical AI Consensus', 'Community Verification Incentives', 'Centralized Database Lock-in'],
    correctAnswers: [0, 1, 2],
    isMultiple: true
  },
  {
    id: 7,
    category: 'Core_Mission',
    question: 'How does PrismaX democratize robotic intelligence development?',
    options: ['By providing an open, verifiable global data and consensus layer', 'By selling exclusive hardware licenses', 'By shutting down open-source models', 'By charging per robot limb'],
    correctAnswers: [0]
  },
  {
    id: 8,
    category: 'Core_Mission',
    question: 'What makes Physical AI data unique compared to traditional AI data?',
    options: ['It encodes physical dynamics, torque, depth, and kinematic feedback', 'It only consists of 2D pixels', 'It contains only plain audio clips', 'It does not require timestamps'],
    correctAnswers: [0]
  },
  {
    id: 9,
    category: 'Core_Mission',
    question: 'PrismaX bridges the gap between which two emerging technologies?',
    options: ['Robotics (Physical AI) and Decentralized Web3 Networks', 'Printing Presses and Steam Engines', 'Analog Radios and Cassettes', 'Telegraphs and Morse Code'],
    correctAnswers: [0]
  },
  {
    id: 10,
    category: 'Core_Mission',
    question: 'What does PrismaX aim to prevent in the future of general-purpose robotics?',
    options: ['Monopolistic control of robotic training data by centralized mega-corps', 'Cheaper robot manufacturing', 'Faster learning speeds', 'Global community collaboration'],
    correctAnswers: [0]
  },
  {
    id: 11,
    category: 'Core_Mission',
    question: 'What constitutes the "Consensus Layer" in PrismaX?',
    options: ['The decentralized validation process ensuring high dataset quality', 'A private database cluster', 'An email verification server', 'A manual spreadsheet'],
    correctAnswers: [0]
  },
  {
    id: 12,
    category: 'Core_Mission',
    question: 'Which hardware devices benefit directly from PrismaX consensus data?',
    options: ['Humanoid robots, robotic arms, and autonomous systems', 'Basic calculators', 'Standard CRT televisions', 'Digital watches'],
    correctAnswers: [0]
  },
  {
    id: 13,
    category: 'Core_Mission',
    question: 'What is the philosophy behind "Test Today, Validate Tomorrow"?',
    options: ['Continuous skill sharpening and proactive verification of AI datasets', 'Postponing work indefinitely', 'Skipping validation steps', 'Only testing finished robots in 2050'],
    correctAnswers: [0]
  },
  {
    id: 14,
    category: 'Core_Mission',
    question: 'Why is decentralized coordination ideal for robotic data collection?',
    options: ['It scales globally across diverse real-world environments', 'It limits data to one laboratory', 'It reduces the number of contributors', 'It requires no verification'],
    correctAnswers: [0]
  },
  {
    id: 15,
    category: 'Core_Mission',
    question: 'In PrismaX, what is a "Dataset Quality Standard"?',
    options: ['A verifiable threshold of trajectory precision and sensory alignment', 'Arbitrary file size minimums', 'The file extension name', 'The time of day it was uploaded'],
    correctAnswers: [0]
  },
  {
    id: 16,
    category: 'Core_Mission',
    question: 'How do robotic developers benefit from PrismaX verified data?',
    options: ['Faster sim-to-real transfer and reliable robot policy training', 'Automatic free hardware', 'Slower training cycles', 'Reduced model safety'],
    correctAnswers: [0]
  },
  {
    id: 17,
    category: 'Core_Mission',
    question: 'Which entities participate in the PrismaX ecosystem? (Multiple answers apply)',
    options: ['Data Contributors', 'Consensus Validators', 'Robotics Developers', 'Legacy Fax Operators'],
    correctAnswers: [0, 1, 2],
    isMultiple: true
  },
  {
    id: 18,
    category: 'Core_Mission',
    question: 'What is the end goal of physical AI consensus?',
    options: ['Flawless real-world robotic execution with zero catastrophic errors', 'Generating fictional stories', 'Mining bitcoin blocks', 'Designing vector wallpapers'],
    correctAnswers: [0]
  },
  {
    id: 19,
    category: 'Core_Mission',
    question: 'PrismaX is positioned as the foundational data layer for:',
    options: ['Next-generation Autonomous Robots & Embodied Intelligence', 'Basic calculator firmware', 'Standard blogging engines', 'Single-player mobile games'],
    correctAnswers: [0]
  },

  // ==========================================
  // Category 2: VLA_Physical_AI (Questions 20 - 38)
  // ==========================================
  {
    id: 20,
    category: 'VLA_Physical_AI',
    question: 'What does "VLA" stand for in modern robotics AI?',
    options: ['Vision-Language-Action', 'Variable-Logic-Algorithm', 'Virtual-Learning-Automaton', 'Vector-Linear-Array'],
    correctAnswers: [0]
  },
  {
    id: 21,
    category: 'VLA_Physical_AI',
    question: 'How does a VLA model process instructions into physical movements?',
    options: ['It takes visual inputs + natural language commands and outputs action tokens', 'It translates English into Spanish', 'It generates 3D printable CAD files', 'It compiles C++ code only'],
    correctAnswers: [0]
  },
  {
    id: 22,
    category: 'VLA_Physical_AI',
    question: 'Which modalities are synchronized in a VLA trajectory? (Multiple answers apply)',
    options: ['RGB / Depth Camera Streams', 'Natural Language Prompts', 'End-Effector Pose & Gripper States', 'Radio FM Frequencies'],
    correctAnswers: [0, 1, 2],
    isMultiple: true
  },
  {
    id: 23,
    category: 'VLA_Physical_AI',
    question: 'What is an "Action Token" in a robotic foundation model?',
    options: ['A discretized representation of motor velocities or joint angles', 'A digital cryptocurrency reward', 'An API authentication key', 'A physical robot sticker'],
    correctAnswers: [0]
  },
  {
    id: 24,
    category: 'VLA_Physical_AI',
    question: 'Why are spatial coordinate frames critical in VLA training?',
    options: ['To ensure the robot grasps objects at accurate real-world 3D positions', 'To make video playback smoother', 'To increase color saturation', 'To render 2D fonts'],
    correctAnswers: [0]
  },
  {
    id: 25,
    category: 'VLA_Physical_AI',
    question: 'What is "Imitation Learning" in Physical AI?',
    options: ['Training models on expert human teleoperation demonstrations', 'Robots copying other robots randomly', 'Copying text from Wikipedia', 'Mimicking animal sounds'],
    correctAnswers: [0]
  },
  {
    id: 26,
    category: 'VLA_Physical_AI',
    question: 'What constitutes an "End-Effector" on a robotic manipulator?',
    options: ['The gripper, hand, or tool at the end of the robotic arm', 'The power supply socket', 'The base wheels', 'The network antenna'],
    correctAnswers: [0]
  },
  {
    id: 27,
    category: 'VLA_Physical_AI',
    question: 'Which of the following causes "Covariate Shift" during robotic deployment?',
    options: ['Small execution errors compounding over time leading to unseen states', 'Changing the robot background color', 'Switching the web browser tab', 'Restarting the computer monitor'],
    correctAnswers: [0]
  },
  {
    id: 28,
    category: 'VLA_Physical_AI',
    question: 'Why is Multi-Camera synchronization mandatory in high-tier VLA datasets?',
    options: ['To prevent occlusion and provide accurate 3D spatial depth', 'To capture artistic angles', 'To increase upload file count', 'To test different video codecs'],
    correctAnswers: [0]
  },
  {
    id: 29,
    category: 'VLA_Physical_AI',
    question: 'What does 6-DoF (Degrees of Freedom) represent in robotic manipulation?',
    options: ['Position (X, Y, Z) and Orientation (Roll, Pitch, Yaw)', 'Six different motor colors', 'Six processor cores', 'Six camera lenses'],
    correctAnswers: [0]
  },
  {
    id: 30,
    category: 'VLA_Physical_AI',
    question: 'How do VLA models handle task generalization?',
    options: ['By understanding semantic language prompts and applying learned physical skills to new objects', 'By memorizing one single trajectory forever', 'By requiring hardcoded coordinates every time', 'By restarting after every action'],
    correctAnswers: [0]
  },
  {
    id: 31,
    category: 'VLA_Physical_AI',
    question: 'What is "Proprioception" in robotics?',
    options: ['The robot’s internal sensing of its own joint positions and force', 'The wireless signal strength', 'The camera’s auto-focus speed', 'The ambient room temperature'],
    correctAnswers: [0]
  },
  {
    id: 32,
    category: 'VLA_Physical_AI',
    question: 'What role does "Tactile Feedback" play in advanced Physical AI models?',
    options: ['Informing the model about contact force and slip detection', 'Playing acoustic music', 'Lighting up indicator LEDs', 'Calculating crypto gas fees'],
    correctAnswers: [0]
  },
  {
    id: 33,
    category: 'VLA_Physical_AI',
    question: 'Which component represents the "Vision" aspect in VLA pipelines? (Multiple answers apply)',
    options: ['RGB camera frames', 'Point clouds from depth sensors', 'Semantic segmentation masks', 'Audio waveform logs'],
    correctAnswers: [0, 1, 2],
    isMultiple: true
  },
  {
    id: 34,
    category: 'VLA_Physical_AI',
    question: 'What is "Diffusion Policy" in robot action prediction?',
    options: ['Generating smooth, continuous motor trajectories using diffusion models', 'Blurring camera images', 'Scattering light in the lab', 'Spreading network traffic across servers'],
    correctAnswers: [0]
  },
  {
    id: 35,
    category: 'VLA_Physical_AI',
    question: 'Why is high-frequency action prediction (e.g., 20Hz - 50Hz) needed for robots?',
    options: ['To allow real-time reactive corrections during physical manipulation', 'To show smoother UI animations', 'To burn more electricity', 'To test CPU cooling'],
    correctAnswers: [0]
  },
  {
    id: 36,
    category: 'VLA_Physical_AI',
    question: 'What is "Sim-to-Real" transfer?',
    options: ['Deploying policies trained in physics simulators onto physical robots', 'Converting real robots into 3D games', 'Exporting simulation videos to YouTube', 'Replacing robot batteries'],
    correctAnswers: [0]
  },
  {
    id: 37,
    category: 'VLA_Physical_AI',
    question: 'What is the main challenge of the "Reality Gap" in Sim-to-Real?',
    options: ['Simulators cannot perfectly model complex friction, deformability, and sensor noise', 'Computer screens are 2D', 'Simulator software is too expensive', 'Virtual robots are too small'],
    correctAnswers: [0]
  },
  {
    id: 38,
    category: 'VLA_Physical_AI',
    question: 'How does PrismaX validate that a VLA dataset is physically plausible?',
    options: ['Through multi-validator kinematic checks and trajectory smoothness verification', 'By inspecting the file name extension', 'By checking the uploader’s follower count', 'By skipping numerical verification'],
    correctAnswers: [0]
  },

  // ==========================================
  // Category 3: Consensus_Validation (Questions 39 - 57)
  // ==========================================
  {
    id: 39,
    category: 'Consensus_Validation',
    question: 'What is the primary function of a PrismaX Validator?',
    options: ['Reviewing, verifying, and scoring Physical AI robotic data', 'Writing robot user manuals', 'Selling hardware parts', 'Managing social media groups'],
    correctAnswers: [0]
  },
  {
    id: 40,
    category: 'Consensus_Validation',
    question: 'How is consensus reached on a submitted dataset in PrismaX?',
    options: ['Multiple independent validators evaluate and converge on a quality threshold', 'A single administrator clicks approve', 'The first person to open the file decides', 'Random automated dice rolls'],
    correctAnswers: [0]
  },
  {
    id: 41,
    category: 'Consensus_Validation',
    question: 'What happens if a validator submits random or malicious ratings?',
    options: ['Their accuracy score declines and consensus weight is penalized', 'They are promoted immediately', 'They receive double rewards', 'Their reviews are automatically marked as verified'],
    correctAnswers: [0]
  },
  {
    id: 42,
    category: 'Consensus_Validation',
    question: 'Which factors determine dataset acceptance in PrismaX? (Multiple answers apply)',
    options: ['Kinematic trajectory smoothness', 'Sensor-language temporal alignment', 'Physical safety compliance', 'The font size used in documentation'],
    correctAnswers: [0, 1, 2],
    isMultiple: true
  },
  {
    id: 43,
    category: 'Consensus_Validation',
    question: 'What is "Temporal Misalignment" in multi-modal validation?',
    options: ['When camera frames and robot arm joint states are out of sync in time', 'When the validator lives in a different time zone', 'When the computer clock is slow', 'When the quiz is taken at night'],
    correctAnswers: [0]
  },
  {
    id: 44,
    category: 'Consensus_Validation',
    question: 'What is a "Sybil Attack" in a decentralized validation network?',
    options: ['An attacker creating multiple fake accounts to manipulate consensus', 'A physical robot hardware failure', 'A network power outage', 'A broken camera cable'],
    correctAnswers: [0]
  },
  {
    id: 45,
    category: 'Consensus_Validation',
    question: 'How does PrismaX mitigate Sybil attacks during validation?',
    options: ['Stake-weighted consensus, reputation scoring, and cryptographic identity', 'Allowing unlimited anonymous accounts to vote', 'Disabling all password requirements', 'Removing validator logs'],
    correctAnswers: [0]
  },
  {
    id: 46,
    category: 'Consensus_Validation',
    question: 'What is the "Consensus Threshold" in PrismaX?',
    options: ['The minimum percentage of agreement required among validators to accept data', 'The maximum file size per upload', 'The speed of the validator’s internet', 'The number of hours a node runs'],
    correctAnswers: [0]
  },
  {
    id: 47,
    category: 'Consensus_Validation',
    question: 'Why is multi-validator consensus superior to single-auditor verification?',
    options: ['It eliminates single points of failure, human bias, and corruption', 'It makes the review process infinitely slow', 'It prevents anyone from seeing the data', 'It requires no computers'],
    correctAnswers: [0]
  },
  {
    id: 48,
    category: 'Consensus_Validation',
    question: 'What is a "Gold Standard" validation benchmark?',
    options: ['A verified dataset with known ground truth used to test validator accuracy', 'A physical gold coin awarded to winners', 'An expensive software subscription', 'A server built of gold'],
    correctAnswers: [0]
  },
  {
    id: 49,
    category: 'Consensus_Validation',
    question: 'What metric represents validator performance in PrismaX?',
    options: ['Validation Accuracy (%) and Consensus Reliability Score', 'Number of open browser tabs', 'Desktop monitor resolution', 'Length of account username'],
    correctAnswers: [0]
  },
  {
    id: 50,
    category: 'Consensus_Validation',
    question: 'Which step comes FIRST in the data validation lifecycle?',
    options: ['Automated kinematic parsing & sanity checking', 'Final on-chain settlement', 'Community photocard generation', 'Archiving old logs'],
    correctAnswers: [0]
  },
  {
    id: 51,
    category: 'Consensus_Validation',
    question: 'What happens when a dataset has borderline consensus scores?',
    options: ['It is routed to senior validators or specialist reviewers for escalation', 'It is permanently deleted instantly', 'It is accepted without checks', 'It is posted to social media'],
    correctAnswers: [0]
  },
  {
    id: 52,
    category: 'Consensus_Validation',
    question: 'How are validator weights adjusted over time?',
    options: ['Dynamically based on historical consensus precision and review fidelity', 'Randomly every 24 hours', 'Alphabetically by username', 'Based on geographical location only'],
    correctAnswers: [0]
  },
  {
    id: 53,
    category: 'Consensus_Validation',
    question: 'What is "Kinematic Anomaly Detection"?',
    options: ['Identifying impossible physical acceleration or joint teleportation in data', 'Detecting software viruses in images', 'Measuring web page load speed', 'Checking internet router ping'],
    correctAnswers: [0]
  },
  {
    id: 54,
    category: 'Consensus_Validation',
    question: 'Why must robotic task completion be verified by consensus?',
    options: ['To ensure the training policy only learns successful, goal-reaching actions', 'To make dataset files smaller', 'To reduce training color contrast', 'To change audio volume'],
    correctAnswers: [0]
  },
  {
    id: 55,
    category: 'Consensus_Validation',
    question: 'Which of the following constitute validation failure reasons? (Multiple answers apply)',
    options: ['Excessive sensor occlusion hiding key manipulation steps', 'Unrealistic physical jerks and force spikes', 'Missing language task annotation', 'Using dark mode on the website'],
    correctAnswers: [0, 1, 2],
    isMultiple: true
  },
  {
    id: 56,
    category: 'Consensus_Validation',
    question: 'What is the role of cryptographic signatures in validation batches?',
    options: ['Proving that a specific validator evaluated and committed to their score', 'Making image files transparent', 'Compressing audio recordings', 'Speeding up monitor refresh rates'],
    correctAnswers: [0]
  },
  {
    id: 57,
    category: 'Consensus_Validation',
    question: 'What guarantees that validator decisions remain tamper-evident?',
    options: ['Immutable decentralized ledger logs and cryptographic hashes', 'Encrypted local text files on desktop', 'Paper certificates in the office', 'Unrecorded voice calls'],
    correctAnswers: [0]
  },

  // ==========================================
  // Category 4: Validator_Roles (Questions 58 - 76)
  // ==========================================
  {
    id: 58,
    category: 'Validator_Roles',
    question: 'What is the highest tier assigned to perfect 8/8 quiz performers?',
    options: ['FOUNDING VALIDATOR', 'AI EXPLORER', 'GUEST VISITOR', 'NOVICE AUDITOR'],
    correctAnswers: [0]
  },
  {
    id: 59,
    category: 'Validator_Roles',
    question: 'What badge is given to the Founding Validator tier in the Gateway?',
    options: ['THE FIRST 100', 'AMPLIFIER', 'INNOVATOR TIER', 'VLA SPECIALIST'],
    correctAnswers: [0]
  },
  {
    id: 60,
    category: 'Validator_Roles',
    question: 'Which rank is awarded for achieving a 6/8 or 7/8 score?',
    options: ['TRUSTED VALIDATOR', 'AI EXPLORER', 'CHIEF ARCHITECT', 'SYSTEM OBSERVER'],
    correctAnswers: [0]
  },
  {
    id: 61,
    category: 'Validator_Roles',
    question: 'What badge corresponds to the "Trusted Validator" tier?',
    options: ['VLA SPECIALIST', 'THE FIRST 100', 'INNOVATOR TIER', 'AMPLIFIER'],
    correctAnswers: [0]
  },
  {
    id: 62,
    category: 'Validator_Roles',
    question: 'What rank is assigned for scoring 4/8 or 5/8 in the knowledge test?',
    options: ['CORE CONTRIBUTOR', 'FOUNDING VALIDATOR', 'TRUSTED VALIDATOR', 'AMPLIFIER'],
    correctAnswers: [0]
  },
  {
    id: 63,
    category: 'Validator_Roles',
    question: 'What badge is paired with the "Core Contributor" rank?',
    options: ['INNOVATOR TIER', 'VLA SPECIALIST', 'THE FIRST 100', 'AMPLIFIER'],
    correctAnswers: [0]
  },
  {
    id: 64,
    category: 'Validator_Roles',
    question: 'What role is assigned to participants with an accuracy under 4/8?',
    options: ['AI EXPLORER', 'FOUNDING VALIDATOR', 'CORE CONTRIBUTOR', 'TRUSTED VALIDATOR'],
    correctAnswers: [0]
  },
  {
    id: 65,
    category: 'Validator_Roles',
    question: 'What badge represents the "AI Explorer" rank?',
    options: ['AMPLIFIER', 'THE FIRST 100', 'VLA SPECIALIST', 'INNOVATOR TIER'],
    correctAnswers: [0]
  },
  {
    id: 66,
    category: 'Validator_Roles',
    question: 'What does the Founding Validator rank signify?',
    options: ['Flawless Physical AI Consensus Accuracy & early leadership', 'Basic profile registration', 'Casual forum browsing', 'Zero validation activity'],
    correctAnswers: [0]
  },
  {
    id: 67,
    category: 'Validator_Roles',
    question: 'How can an AI Explorer advance to higher validator tiers?',
    options: ['By studying Physical AI standards and improving quiz and validation accuracy', 'By changing profile pictures', 'By waiting passively', 'By deleting previous accounts'],
    correctAnswers: [0]
  },
  {
    id: 68,
    category: 'Validator_Roles',
    question: 'What is the purpose of the downloadable Validator Pass?',
    options: ['To provide a verifiable credential and shareable badge of consensus skill', 'To serve as a store receipt', 'To replace a passport', 'To buy computer monitors'],
    correctAnswers: [0]
  },
  {
    id: 69,
    category: 'Validator_Roles',
    question: 'Which attributes are displayed on the PrismaX Validator Pass? (Multiple answers apply)',
    options: ['Participant Avatar & Username', 'Assigned Rank & Badge', 'Validation Accuracy Score & Percentage', 'Personal Bank Details'],
    correctAnswers: [0, 1, 2],
    isMultiple: true
  },
  {
    id: 70,
    category: 'Validator_Roles',
    question: 'What evaluation note is shown for Founding Validators on their pass?',
    options: ['"Flawless Physical AI Consensus Accuracy ⚡"', '"Consensus Quality Master 🔥"', '"Strong grasp of Physical AI Standards"', '"Ecosystem Learner & Trainee"'],
    correctAnswers: [0]
  },
  {
    id: 71,
    category: 'Validator_Roles',
    question: 'What evaluation note is displayed for Trusted Validators?',
    options: ['"Consensus Quality Master 🔥"', '"Flawless Physical AI Consensus Accuracy ⚡"', '"Strong grasp of Physical AI Standards"', '"Ecosystem Learner & Trainee"'],
    correctAnswers: [0]
  },
  {
    id: 72,
    category: 'Validator_Roles',
    question: 'What evaluation note is displayed for Core Contributors?',
    options: ['"Strong grasp of Physical AI Standards"', '"Consensus Quality Master 🔥"', '"Flawless Physical AI Consensus Accuracy ⚡"', '"Ecosystem Learner & Trainee"'],
    correctAnswers: [0]
  },
  {
    id: 73,
    category: 'Validator_Roles',
    question: 'What evaluation note is displayed for AI Explorers?',
    options: ['"Ecosystem Learner & Trainee"', '"Consensus Quality Master 🔥"', '"Strong grasp of Physical AI Standards"', '"Flawless Physical AI Consensus Accuracy ⚡"'],
    correctAnswers: [0]
  },
  {
    id: 74,
    category: 'Validator_Roles',
    question: 'Why do community members share their Validator Pass on social media?',
    options: ['To prove their expertise, inspire peers, and expand ecosystem reach', 'To print paper posters', 'To bypass website firewalls', 'To reset their password'],
    correctAnswers: [0]
  },
  {
    id: 75,
    category: 'Validator_Roles',
    question: 'What security badge icon is displayed at the top of every generated Pass?',
    options: ['VERIFIED shield check', 'LOCKED padlock', 'PENDING hourglass', 'CROSS warning'],
    correctAnswers: [0]
  },
  {
    id: 76,
    category: 'Validator_Roles',
    question: 'How are tiered validator roles utilized inside the broader PrismaX network?',
    options: ['Higher tiers receive higher consensus review weight and specialist tasks', 'All tiers are treated identically with zero distinction', 'Higher tiers are restricted from viewing data', 'Tiers only change username colors'],
    correctAnswers: [0]
  },

  // ==========================================
  // Category 5: Teleoperation_Data (Questions 77 - 95)
  // ==========================================
  {
    id: 77,
    category: 'Teleoperation_Data',
    question: 'What is "Teleoperation" in robotic data collection?',
    options: ['A human operator controlling a robot remotely to record demonstration trajectories', 'Robots watching television shows', 'Automated telephone switching', 'Making satellite internet calls'],
    correctAnswers: [0]
  },
  {
    id: 78,
    category: 'Teleoperation_Data',
    question: 'Which devices are commonly used by human teleoperators? (Multiple answers apply)',
    options: ['VR Headsets with motion controllers', 'Exoskeleton gloves with haptic feedback', 'Leader-Follower robotic arm rigs', 'Standard TV remotes'],
    correctAnswers: [0, 1, 2],
    isMultiple: true
  },
  {
    id: 79,
    category: 'Teleoperation_Data',
    question: 'Why is human teleoperation data considered "Gold Standard" for imitation learning?',
    options: ['It provides natural human dexterity, intuition, and real physics interaction', 'It is completely generated by computer code', 'It takes zero time to record', 'It does not require sensors'],
    correctAnswers: [0]
  },
  {
    id: 80,
    category: 'Teleoperation_Data',
    question: 'What is a "Kinematic Trajectory" in teleoperation logs?',
    options: ['A time-series sequence of 3D positions, velocities, and orientations of robot joints', 'A single photograph of a robot', 'The user manual PDF', 'The robot factory invoice'],
    correctAnswers: [0]
  },
  {
    id: 81,
    category: 'Teleoperation_Data',
    question: 'What is "Haptic Feedback" in teleoperation rigs?',
    options: ['Transmitting physical resistance and touch forces back to the human operator', 'Playing stereo sound effects', 'Lighting up indicator LEDs', 'Showing subtitles on screen'],
    correctAnswers: [0]
  },
  {
    id: 82,
    category: 'Teleoperation_Data',
    question: 'Why must teleoperation data record gripper state (open/close percentage)?',
    options: ['To accurately teach the model when to grasp, hold, and release objects', 'To measure battery drainage', 'To adjust camera brightness', 'To test mechanical sounds'],
    correctAnswers: [0]
  },
  {
    id: 83,
    category: 'Teleoperation_Data',
    question: 'What is "Latency" in teleoperation and why is low latency crucial?',
    options: ['Delay between operator movement and robot response; low latency prevents clumsy collisions', 'The length of the USB cable', 'The weight of the robot', 'The screen refresh rate'],
    correctAnswers: [0]
  },
  {
    id: 84,
    category: 'Teleoperation_Data',
    question: 'What is "Demonstration Diversity" in physical dataset curation?',
    options: ['Collecting actions across varied lighting, table heights, objects, and backgrounds', 'Using only one identical wooden block', 'Recording in total darkness only', 'Restricting demonstrations to 1 second'],
    correctAnswers: [0]
  },
  {
    id: 85,
    category: 'Teleoperation_Data',
    question: 'Why are multi-angle perspectives recorded during teleoperation?',
    options: ['To train robots with robust 3D perception immune to self-occlusion', 'To make promotional trailers', 'To waste hard drive storage', 'To test different video players'],
    correctAnswers: [0]
  },
  {
    id: 86,
    category: 'Teleoperation_Data',
    question: 'What is a "Sub-goal" in a robotic teleoperation episode?',
    options: ['An intermediate milestone (e.g., reach cup, grasp handle, lift) within a task', 'Turning off the robot', 'The end of the working day', 'Restarting the computer'],
    correctAnswers: [0]
  },
  {
    id: 87,
    category: 'Teleoperation_Data',
    question: 'What is "Data Augmentation" for robotic visual inputs?',
    options: ['Applying slight color jitter, rotation, or crops to make visual models robust', 'Drawing fake robots on images', 'Deleting every second frame', 'Converting color videos to black-and-white only'],
    correctAnswers: [0]
  },
  {
    id: 88,
    category: 'Teleoperation_Data',
    question: 'What is "Dead reckoning" error in mobile robot trajectory logging?',
    options: ['Accumulated drift in position estimation from wheel slip over time', 'A completely dead battery', 'A broken camera lens', 'An unplugged network cable'],
    correctAnswers: [0]
  },
  {
    id: 89,
    category: 'Teleoperation_Data',
    question: 'Why are failed demonstrations sometimes useful if labeled properly?',
    options: ['They teach models what NOT to do through negative reinforcement learning', 'They make the dataset look larger', 'They test the delete button', 'They take less memory'],
    correctAnswers: [0]
  },
  {
    id: 90,
    category: 'Teleoperation_Data',
    question: 'What is "Zero-Shot" transfer in Physical AI?',
    options: ['A robot successfully executing a task in a novel environment without prior training on that specific setup', 'Shooting zero photos', 'Failing a task immediately', 'Having zero robots in the lab'],
    correctAnswers: [0]
  },
  {
    id: 91,
    category: 'Teleoperation_Data',
    question: 'Which sensor measures angular velocity in teleoperation tracking? (Multiple answers apply)',
    options: ['Gyroscope (IMU)', 'Optical Tracking Sensors', 'Accelerometer', 'Microphone diaphragm'],
    correctAnswers: [0, 1, 2],
    isMultiple: true
  },
  {
    id: 92,
    category: 'Teleoperation_Data',
    question: 'What does "Frame Rate (FPS)" synchronization ensure in multi-modal logs?',
    options: ['That camera frames and joint torque readings align at the exact millisecond', 'That videos play in slow motion', 'That file sizes stay below 1MB', 'That monitors stay awake'],
    correctAnswers: [0]
  },
  {
    id: 93,
    category: 'Teleoperation_Data',
    question: 'Why is teleoperation data collection expanding beyond lab environments?',
    options: ['To capture the messiness and unpredictability of real-world homes and factories', 'Because labs are too quiet', 'To avoid using electricity', 'To reduce internet bandwidth'],
    correctAnswers: [0]
  },
  {
    id: 94,
    category: 'Teleoperation_Data',
    question: 'What is "Bimanual Manipulation" in teleoperation recordings?',
    options: ['Coordinating two robotic arms simultaneously to perform complex tasks', 'Operating a robot with feet', 'Controlling two robots in different cities', 'Typing on two keyboards'],
    correctAnswers: [0]
  },
  {
    id: 95,
    category: 'Teleoperation_Data',
    question: 'How does PrismaX incentivize teleoperators worldwide?',
    options: ['Through transparent Web3 tokenized reward distribution based on data quality', 'By giving out physical certificates only', 'By charging teleoperators an hourly fee', 'By lottery tickets'],
    correctAnswers: [0]
  },

  // ==========================================
  // Category 6: Trivia_Community (Questions 96 - 114)
  // ==========================================
  {
    id: 96,
    category: 'Trivia_Community',
    question: 'What is the official name of the weekly PrismaX community trivia?',
    options: ['Trivia Tango', 'Consensus Carnival', 'Robotics Rumble', 'Matrix Marathon'],
    correctAnswers: [0]
  },
  {
    id: 97,
    category: 'Trivia_Community',
    question: 'How often does Trivia Tango take place?',
    options: ['Weekly', 'Once every five years', 'Only on leap years', 'Twice every decade'],
    correctAnswers: [0]
  },
  {
    id: 98,
    category: 'Trivia_Community',
    question: 'What is the core purpose of the PrismaX Trivia Knowledge app?',
    options: ['An interactive prep hub to train validators and community members for Trivia Tango', 'An e-commerce clothing store', 'A video streaming service', 'A food delivery menu'],
    correctAnswers: [0]
  },
  {
    id: 99,
    category: 'Trivia_Community',
    question: 'How many randomized questions are presented per quiz session in the app?',
    options: ['8 Questions', '50 Questions', '1 Question', '100 Questions'],
    correctAnswers: [0]
  },
  {
    id: 100,
    category: 'Trivia_Community',
    question: 'What rule ensures high question variety in the PrismaX Quiz Gateway?',
    options: ['Questions are drawn dynamically with maximum 1 question per category', 'All 8 questions are always from Category 1', 'Questions are fixed and never change', 'Questions are repeated 8 times'],
    correctAnswers: [0]
  },
  {
    id: 101,
    category: 'Trivia_Community',
    question: 'Which interactive features are included in the quiz app? (Multiple answers apply)',
    options: ['Instant answer validation with color-coded feedback', 'Custom avatar upload & DiceBear fallback', 'Confetti celebration animation upon completion', 'Mandatory subscription payment popups'],
    correctAnswers: [0, 1, 2],
    isMultiple: true
  },
  {
    id: 102,
    category: 'Trivia_Community',
    question: 'What indicator appears on questions requiring multiple selections?',
    options: ['A slim italic note: "*(Multiple answers may apply)"', 'A flashing red siren', 'A popup warning box', 'No indicator at all'],
    correctAnswers: [0]
  },
  {
    id: 103,
    category: 'Trivia_Community',
    question: 'What technology powers the 1-click photocard generation in the app?',
    options: ['Client-side html-to-image canvas rendering at 3x pixel ratio', 'Server screenshot scraping', 'Manual photo editing by staff', 'Browser print screen'],
    correctAnswers: [0]
  },
  {
    id: 104,
    category: 'Trivia_Community',
    question: 'What visual aesthetic was chosen for the PrismaX Trivia UI?',
    options: ['Warm robotic sand/bronze gradient with frosted glassmorphism', 'Neon purple retro arcade', 'Pitch black terminal only', 'Bright cartoon rainbow'],
    correctAnswers: [0]
  },
  {
    id: 105,
    category: 'Trivia_Community',
    question: 'Where can participants share their completed Validator Pass with 1-click?',
    options: ['Directly to X (formerly Twitter) with pre-filled score metrics', 'To an analog fax machine', 'To a local text printer only', 'Via postal letter'],
    correctAnswers: [0]
  },
  {
    id: 106,
    category: 'Trivia_Community',
    question: 'Why does Trivia Tango foster a stronger validator ecosystem?',
    options: ['It educates participants on technical mechanics while gamifying community learning', 'It excludes new members', 'It deletes inactive accounts', 'It requires complex coding'],
    correctAnswers: [0]
  },
  {
    id: 107,
    category: 'Trivia_Community',
    question: 'What happens when you click the Refresh / Retake button on the result screen?',
    options: ['You return to the intro screen to start a fresh randomized quiz session', 'Your account is deleted', 'The browser window closes', 'The computer reboots'],
    correctAnswers: [0]
  },
  {
    id: 108,
    category: 'Trivia_Community',
    question: 'What handle is automatically mentioned in the X share text?',
    options: ['@PrismaX_AI', '@Bitcoin', '@Google', '@OpenAI'],
    correctAnswers: [0]
  },
  {
    id: 109,
    category: 'Trivia_Community',
    question: 'How is user privacy protected in the PrismaX Quiz Gateway?',
    options: ['Everything runs client-side in the browser with zero external image tracking', 'All photos are sold to ad brokers', 'Users must enter government IDs', 'Passwords are broadcast publicly'],
    correctAnswers: [0]
  },
  {
    id: 110,
    category: 'Trivia_Community',
    question: 'What format is the downloaded Validator Pass saved in?',
    options: ['High-resolution .PNG image', '.TXT plain text', '.EXE executable', '.MP3 audio file'],
    correctAnswers: [0]
  },
  {
    id: 111,
    category: 'Trivia_Community',
    question: 'What domain is branded on the footer of every Validator Pass?',
    options: ['app.prismax.ai', 'google.com', 'wikipedia.org', 'trivia.com'],
    correctAnswers: [0]
  },
  {
    id: 112,
    category: 'Trivia_Community',
    question: 'Which of the following make Trivia Tango accessible to global participants? (Multiple answers apply)',
    options: ['Fast-loading responsive web design on mobile and desktop', 'Zero blockchain gas fees to play practice quizzes', 'Intuitive UI with instant visual feedback', 'Mandatory desktop hardware dongle'],
    correctAnswers: [0, 1, 2],
    isMultiple: true
  },
  {
    id: 113,
    category: 'Trivia_Community',
    question: 'What role does community feedback play in improving PrismaX quizzes?',
    options: ['New questions and technical corrections are regularly integrated from community suggestions', 'Feedback is ignored', 'Feedback channels are closed', 'Only bot suggestions are accepted'],
    correctAnswers: [0]
  },
  {
    id: 114,
    category: 'Trivia_Community',
    question: 'What motto is showcased under the top header banner on the Intro screen?',
    options: ['Test Today, Validate Tomorrow', 'Move Fast and Break Things', 'Code Is Law', 'Don’t Be Evil'],
    correctAnswers: [0]
  },

  // ==========================================
  // Category 7: Network_Architecture (Questions 115 - 133)
  // ==========================================
  {
    id: 115,
    category: 'Network_Architecture',
    question: 'Why does PrismaX implement a decentralized architecture for robotics data?',
    options: ['To ensure censorship resistance, global data provenance, and fair incentive alignment', 'To make servers run slower', 'To prevent robots from connecting to internet', 'To keep all data private to one CEO'],
    correctAnswers: [0]
  },
  {
    id: 116,
    category: 'Network_Architecture',
    question: 'What is "Data Provenance" in the PrismaX network?',
    options: ['The verifiable, immutable history of where, when, and how a dataset was recorded', 'The price of the dataset', 'The file download speed', 'The color of the hard drive'],
    correctAnswers: [0]
  },
  {
    id: 117,
    category: 'Network_Architecture',
    question: 'What are cryptographic hashes used for in data consensus?',
    options: ['To create unique digital fingerprints of trajectories ensuring they cannot be modified', 'To encrypt monitor screen brightness', 'To generate computer audio', 'To design website logos'],
    correctAnswers: [0]
  },
  {
    id: 118,
    category: 'Network_Architecture',
    question: 'Which layer handles the distribution of rewards to contributors and validators? (Multiple answers apply)',
    options: ['Smart Contract Incentive Protocols', 'Transparent On-chain Settlement', 'Decentralized Validator Registry', 'Manual Paper Checks'],
    correctAnswers: [0, 1, 2],
    isMultiple: true
  },
  {
    id: 119,
    category: 'Network_Architecture',
    question: 'What is an "Oracle" in a decentralized Physical AI network?',
    options: ['A mechanism that bridges real-world robotic execution proof into smart contracts', 'A mythical prediction tool', 'A database cooling pipe', 'A wireless keyboard'],
    correctAnswers: [0]
  },
  {
    id: 120,
    category: 'Network_Architecture',
    question: 'What does "Decentralized Physical Infrastructure Network" (DePIN) mean for robotics?',
    options: ['Crowdsourcing physical data collection hardware and computational consensus globally', 'Building centralized server warehouses', 'Disconnecting all computers from networks', 'Manufacturing cars in one city'],
    correctAnswers: [0]
  },
  {
    id: 121,
    category: 'Network_Architecture',
    question: 'How are large robotic video and trajectory files stored efficiently?',
    options: ['Decentralized content-addressed storage (e.g. IPFS/Arweave) with on-chain metadata', 'In email inbox attachments', 'On temporary USB flash drives', 'On printed paper QR codes'],
    correctAnswers: [0]
  },
  {
    id: 122,
    category: 'Network_Architecture',
    question: 'What is a "Merkle Root" in dataset batch verification?',
    options: ['A single cryptographic hash representing the integrity of an entire dataset batch', 'The physical root of a tree', 'A network cable connector', 'The root folder on Windows desktop'],
    correctAnswers: [0]
  },
  {
    id: 123,
    category: 'Network_Architecture',
    question: 'Why are Zero-Knowledge Proofs (ZKPs) valuable in Physical AI verification?',
    options: ['They allow validating that a dataset meets safety specs without revealing proprietary visual details', 'They make video files zero megabytes', 'They delete all secret data', 'They turn off computer screens'],
    correctAnswers: [0]
  },
  {
    id: 124,
    category: 'Network_Architecture',
    question: 'What is "Slashing" in proof-of-stake consensus systems?',
    options: ['Penalizing a validator’s deposited stake for submitting dishonest or fraudulent data ratings', 'Physically cutting network wires', 'Deleting user accounts randomly', 'Discounting store prices'],
    correctAnswers: [0]
  },
  {
    id: 125,
    category: 'Network_Architecture',
    question: 'What does "High Throughput" mean for the PrismaX consensus layer?',
    options: ['The ability to process and verify thousands of robotic trajectory frames per second', 'Having very loud server fans', 'High electricity consumption', 'Downloading movies quickly'],
    correctAnswers: [0]
  },
  {
    id: 126,
    category: 'Network_Architecture',
    question: 'How do smart contracts automate dataset licensing for robotics labs?',
    options: ['By instantly granting programmatic decryption keys upon payment of data royalties', 'By sending legal letters via postal mail', 'By scheduling phone calls with lawyers', 'By locking all computers'],
    correctAnswers: [0]
  },
  {
    id: 127,
    category: 'Network_Architecture',
    question: 'What is "Fault Tolerance" in a distributed validator network?',
    options: ['The system continuing to operate correctly even if some validator nodes crash or act maliciously', 'The system shutting down on any error', 'Ignoring all system bugs', 'Turning off the firewall'],
    correctAnswers: [0]
  },
  {
    id: 128,
    category: 'Network_Architecture',
    question: 'Why is content-addressable storage (CID) vital for AI reproducibility?',
    options: ['Because data cannot be secretly altered without changing its unique cryptographic CID', 'Because it makes videos play faster', 'Because it uses less RAM', 'Because it translates foreign languages'],
    correctAnswers: [0]
  },
  {
    id: 129,
    category: 'Network_Architecture',
    question: 'What role do lightweight edge nodes play in Physical AI networks?',
    options: ['Performing on-device sanity checks on robots before uploading to the network', 'Replacing full blockchain nodes completely', 'Heating the room', 'Playing background music'],
    correctAnswers: [0]
  },
  {
    id: 130,
    category: 'Network_Architecture',
    question: 'Which mechanisms ensure validator neutrality? (Multiple answers apply)',
    options: ['Blinded data evaluation batches', 'Randomized assignment of review tasks', 'Decentralized peer auditing', 'Allowing uploaders to choose their own reviewers'],
    correctAnswers: [0, 1, 2],
    isMultiple: true
  },
  {
    id: 131,
    category: 'Network_Architecture',
    question: 'What is "State Finality" in dataset validation settlement?',
    options: ['The point at which consensus data is permanently etched into the ledger and cannot be reverted', 'The end of the working day', 'Restarting the database', 'Deleting temporary browser cookies'],
    correctAnswers: [0]
  },
  {
    id: 132,
    category: 'Network_Architecture',
    question: 'How does decentralized architecture prevent vendor lock-in for AI robotics?',
    options: ['By keeping data formats open-standard and governed by an open network rather than one corporation', 'By requiring proprietary closed-source dongles', 'By banning open-source algorithms', 'By restricting data to one cloud vendor'],
    correctAnswers: [0]
  },
  {
    id: 133,
    category: 'Network_Architecture',
    question: 'What ensures that contributor rewards are distributed fairly without middlemen?',
    options: ['Automated smart contract escrow protocols', 'Manual executive approval', 'Third-party banking intermediaries', 'Paper checks sent by courier'],
    correctAnswers: [0]
  },

  // ==========================================
  // Category 8: AI_Safety_Standards (Questions 134 - 150)
  // ==========================================
  {
    id: 134,
    category: 'AI_Safety_Standards',
    question: 'What is the top priority in Physical AI safety benchmarks?',
    options: ['Ensuring robotic actions are physically safe and do not endanger humans or surroundings', 'Making the robot look shiny in photos', 'Maximizing robot movement speed regardless of risk', 'Reducing camera resolution to save power'],
    correctAnswers: [0]
  },
  {
    id: 135,
    category: 'AI_Safety_Standards',
    question: 'What is a "Torque Limit Threshold" in robotic manipulation safety?',
    options: ['The maximum allowable rotational force a joint can exert before an automatic safety stop triggers', 'The maximum battery charging speed', 'The speed of the cooling fan', 'The volume of the speaker'],
    correctAnswers: [0]
  },
  {
    id: 136,
    category: 'AI_Safety_Standards',
    question: 'What must a validator do if a dataset contains dangerous or violent trajectories?',
    options: ['Flag and reject the dataset immediately with a critical safety violation tag', 'Approve it if the video resolution is high', 'Ignore it and skip to the next', 'Share it on public forums'],
    correctAnswers: [0]
  },
  {
    id: 137,
    category: 'AI_Safety_Standards',
    question: 'Why are "Collision Avoidance" policies verified before model deployment?',
    options: ['To prevent robots from hitting obstacles, fragile items, or people during execution', 'To make the robot move louder', 'To test the durability of walls', 'To reduce computer memory'],
    correctAnswers: [0]
  },
  {
    id: 138,
    category: 'AI_Safety_Standards',
    question: 'Which of the following constitute physical safety violations? (Multiple answers apply)',
    options: ['Uncontrolled joint velocity spikes near human operators', 'Commands instructing the robot to crush delicate objects', 'Erratic trajectory oscillations indicating loss of control', 'Properly calibrated smooth trajectory paths'],
    correctAnswers: [0, 1, 2],
    isMultiple: true
  },
  {
    id: 139,
    category: 'AI_Safety_Standards',
    question: 'What is an "Emergency Stop (E-Stop)" trigger in robotic systems?',
    options: ['A hardware or software interrupt that cuts motor power instantly in dangerous situations', 'A button that restarts the web browser', 'A command to take a screenshot', 'A sound mute button'],
    correctAnswers: [0]
  },
  {
    id: 140,
    category: 'AI_Safety_Standards',
    question: 'What is "Out-of-Distribution (OOD) Detection" in Physical AI models?',
    options: ['The model recognizing when real-world sensory inputs differ drastically from training data and stopping safely', 'Detecting slow internet connections', 'Finding duplicate files on disk', 'Checking monitor color calibration'],
    correctAnswers: [0]
  },
  {
    id: 141,
    category: 'AI_Safety_Standards',
    question: 'Why is privacy filtering (e.g. face & license plate blurring) applied to robotics data?',
    options: ['To protect human identity and comply with global data privacy regulations', 'To reduce video file size', 'To test image filters', 'To make images look artistic'],
    correctAnswers: [0]
  },
  {
    id: 142,
    category: 'AI_Safety_Standards',
    question: 'What is "Compliance Control" in robotic arms?',
    options: ['Allowing the robot arm to yield gently when touching external objects rather than stiffly forcing through', 'Following government tax rules', 'Installing antivirus software', 'Agreeing to website cookie banners'],
    correctAnswers: [0]
  },
  {
    id: 143,
    category: 'AI_Safety_Standards',
    question: 'What is "Joint Limit Enforcement" in robotic trajectory validation?',
    options: ['Ensuring the logged trajectory never commands a motor beyond its physical rotation range', 'Checking how many joints the robot has', 'Painting joints with warning colors', 'Tightening robot screws'],
    correctAnswers: [0]
  },
  {
    id: 144,
    category: 'AI_Safety_Standards',
    question: 'What is a "Safe Workspace Zone" (Geofence) for an autonomous robot?',
    options: ['A strictly defined 3D volume within which the robot is permitted to operate', 'The website login page', 'The cardboard shipping box', 'The manufacturer’s office building'],
    correctAnswers: [0]
  },
  {
    id: 145,
    category: 'AI_Safety_Standards',
    question: 'How do fallback policies enhance humanoid robot safety?',
    options: ['By executing safe crouching or power-down routines when balance is lost, preventing hard falls', 'By speeding up robot movements when falling', 'By restarting the robot’s Wi-Fi', 'By sounding a musical alarm only'],
    correctAnswers: [0]
  },
  {
    id: 146,
    category: 'AI_Safety_Standards',
    question: 'What does "Red Teaming" in Physical AI entail?',
    options: ['Intentionally testing the AI system with adversarial, extreme, and unusual scenarios to find safety flaws', 'Painting robots in red color', 'Dividing the validator team into two sports teams', 'Deleting random database entries'],
    correctAnswers: [0]
  },
  {
    id: 147,
    category: 'AI_Safety_Standards',
    question: 'Why must force-torque sensors be periodically recalibrated?',
    options: ['To prevent sensor drift that could cause the robot to exert hazardous unintended force', 'To keep the robot looking new', 'To change the sensor light color', 'To reset the user password'],
    correctAnswers: [0]
  },
  {
    id: 148,
    category: 'AI_Safety_Standards',
    question: 'Which factors are checked during physical data sanity auditing? (Multiple answers apply)',
    options: ['Absence of infinite acceleration values (NaNs / nulls)', 'Consistency between visual motion and logged motor coordinates', 'Proper annotation of fragile object handling', 'The aesthetic font used on the operator’s shirt'],
    correctAnswers: [0, 1, 2],
    isMultiple: true
  },
  {
    id: 149,
    category: 'AI_Safety_Standards',
    question: 'What is "Fail-Safe Default" in robotic control system architecture?',
    options: ['The system automatically reverting to a safe, stationary state upon any unexpected failure or signal loss', 'Continuing previous motion blindly', 'Speeding up all motors', 'Deleting the operating system'],
    correctAnswers: [0]
  },
  {
    id: 150,
    category: 'AI_Safety_Standards',
    question: 'What is the overarching mission of PrismaX safety consensus standards?',
    options: ['Building a trusted, verifiable data foundation for safe and beneficial human-robot coexistence', 'Creating automated robot battles', 'Restricting robotic research to one laboratory', 'Replacing all human interaction with machines'],
    correctAnswers: [0]
  }
];