export interface Question {
  id: number;
  category: 
    | 'Section A — Validator Program & Membership'
    | 'Section B — Reviews, Points & Leaderboard'
    | 'Section C — Validators & Monthly Rotation'
    | 'Section D — PrismaX Data Standards'
    | 'Section E — Cameras, Sensors & Robot Configuration'
    | 'Section F — Automated Checks & Human Validation'
    | 'Section G — Pass/Fail Criteria'
    | 'Section H — Non-Causal Errors'
    | 'Section I — Sliding-Scale Criteria'
    | 'Section J — Completion & Integrated Scenarios'
    | 'Section K — Verify Quality & The First 100'
    | 'Section L — Verify Quality Workflow'
    | 'Section M — First 100 Membership & Rotation'
    | 'Section N — VLA Foundry'
    | 'Section O — Day 1 Launch Partners'
    | 'Section P — Teleoperation'
    | 'Section Q — Teleops Queue';
  question: string;
  options: string[];
  correctAnswers: number[];
  isMultiple?: boolean;
}

export const ALL_QUESTIONS: Question[] = [
  // Section A
  {
    id: 1,
    category: 'Section A — Validator Program & Membership',
    question: 'What is the primary goal of PrismaX Verify Quality?',
    options: ['To evaluate robotics training data', 'To organize robot operators', 'To expand robot fleets', 'To manage data collection'],
    correctAnswers: [0]
  },
  {
    id: 2,
    category: 'Section A — Validator Program & Membership',
    question: 'What is the stated path toward becoming a Validator?',
    options: ['Join Discord → operate robots → earn points', 'Review data → earn points → reach the Top 100 → become a Validator', 'Buy membership → complete training → become a Validator', 'Complete teleops → reach the leaderboard → become a Validator'],
    correctAnswers: [1]
  },
  {
    id: 3,
    category: 'Section A — Validator Program & Membership',
    question: 'Which memberships provide access to data validation? *(Multiple answers may apply)*',
    options: ['Amplifier', 'Innovator', 'Explorer', 'Both Amplifier and Innovator'],
    correctAnswers: [3],
    isMultiple: true
  },
  {
    id: 4,
    category: 'Section A — Validator Program & Membership',
    question: 'How much does an Amplifier membership cost?',
    options: ['$49', '$99', '$199', '$399'],
    correctAnswers: [1]
  },
  {
    id: 5,
    category: 'Section A — Validator Program & Membership',
    question: 'How much does an Innovator membership cost?',
    options: ['$99', '$199', '$299', '$399'],
    correctAnswers: [3]
  },
  {
    id: 6,
    category: 'Section A — Validator Program & Membership',
    question: 'Which statements correctly describe the Amplifier membership? *(Multiple answers may apply)*',
    options: ['Costs $99', 'Allows up to 10 reviews per month', 'Allows up to 30 priority reviews', 'Has a stated 10,000 Prisma Point monthly allowance'],
    correctAnswers: [0, 1, 3],
    isMultiple: true
  },
  {
    id: 7,
    category: 'Section A — Validator Program & Membership',
    question: 'Which statements correctly describe the Innovator membership? *(Multiple answers may apply)*',
    options: ['Costs $399', 'Allows up to 30 priority reviews', 'Has a stated 30,000 Prisma Point monthly allowance', 'Provides unlimited reviews from the beginning'],
    correctAnswers: [0, 1, 2],
    isMultiple: true
  },
  {
    id: 8,
    category: 'Section A — Validator Program & Membership',
    question: 'In the original validation system, what does “one review” refer to?',
    options: ['One task review', 'One episode review', 'Completing an entire episode collection', 'One robot review'],
    correctAnswers: [2]
  },
  {
    id: 9,
    category: 'Section A — Validator Program & Membership',
    question: 'A collection contains 10 episodes. How many episodes must be completed for it to count as one review?',
    options: ['1', '5', '8', '10'],
    correctAnswers: [3]
  },
  {
    id: 10,
    category: 'Section A — Validator Program & Membership',
    question: 'What is the maximum stated monthly Prisma Point allowance for an Amplifier?',
    options: ['5,000', '10,000', '20,000', '30,000'],
    correctAnswers: [1]
  },

  // Section B
  {
    id: 11,
    category: 'Section B — Reviews, Points & Leaderboard',
    question: 'How many Prisma Points are awarded for one accurate review task?',
    options: ['50', '75', '100', '150'],
    correctAnswers: [2]
  },
  {
    id: 12,
    category: 'Section B — Reviews, Points & Leaderboard',
    question: 'What quality-score condition is stated for earning points?',
    options: ['Exactly matching consensus', 'Staying within ±5% of consensus', 'Staying within ±15% of consensus', 'Staying within ±25% of consensus'],
    correctAnswers: [2]
  },
  {
    id: 13,
    category: 'Section B — Reviews, Points & Leaderboard',
    question: 'Besides the quality score, what must match consensus?',
    options: ['Membership level', 'Pass/fail selection', 'Teleoperation activity', 'Queue position'],
    correctAnswers: [1]
  },
  {
    id: 14,
    category: 'Section B — Reviews, Points & Leaderboard',
    question: 'Which factors determine whether a review task earns points? *(Multiple answers may apply)*',
    options: ['Quality score within ±15% of consensus', 'Pass/fail selection matching consensus', 'Highest score among reviewers', 'Teleoperation completed that day'],
    correctAnswers: [0, 1],
    isMultiple: true
  },
  {
    id: 15,
    category: 'Section B — Reviews, Points & Leaderboard',
    question: 'Approximately how many review tasks does each episode contain?',
    options: ['2', '5', '10', '20'],
    correctAnswers: [2]
  },
  {
    id: 16,
    category: 'Section B — Reviews, Points & Leaderboard',
    question: 'If an episode contains approximately 10 review tasks, how many points could all 10 accurate tasks produce?',
    options: ['100', '500', '1,000', '10,000'],
    correctAnswers: [2]
  },
  {
    id: 17,
    category: 'Section B — Reviews, Points & Leaderboard',
    question: 'How are contributors ranked at the end of each month?',
    options: ['By membership tier', 'By Discord activity', 'By monthly Prisma Points', 'By teleop sessions'],
    correctAnswers: [2]
  },
  {
    id: 18,
    category: 'Section B — Reviews, Points & Leaderboard',
    question: 'Where does the original material direct members to review robotics training data?',
    options: ['Account → Settings', 'VLA Foundry → Verify Quality → Review & Earn', 'Robot Control Center → Queue', 'Community → Validator Board'],
    correctAnswers: [1]
  },
  {
    id: 19,
    category: 'Section B — Reviews, Points & Leaderboard',
    question: 'Which activities can provide additional ways to earn Prisma Points? *(Multiple answers may apply)*',
    options: ['Robot Control Center / teleoperation', 'Daily check-ins', 'Special campaigns', 'Increasing membership quantity'],
    correctAnswers: [0, 1, 2],
    isMultiple: true
  },
  {
    id: 20,
    category: 'Section B — Reviews, Points & Leaderboard',
    question: "What happens when a reviewer's quality score falls outside the ±15% consensus range?",
    options: ['The task remains eligible automatically', 'The task receives partial consensus credit', 'The stated accuracy condition is not satisfied', 'The reviewer enters Validator status'],
    correctAnswers: [2]
  },

  // Section C
  {
    id: 21,
    category: 'Section C — Validators & Monthly Rotation',
    question: 'How many Validator positions are stated in the original Validator system?',
    options: ['25', '50', '75', '100'],
    correctAnswers: [3]
  },
  {
    id: 22,
    category: 'Section C — Validators & Monthly Rotation',
    question: 'Who becomes a Validator through the monthly ranking?',
    options: ['Top 10 contributors', 'Top 50 contributors', 'Top 75 contributors', 'Top 100 contributors'],
    correctAnswers: [3]
  },
  {
    id: 23,
    category: 'Section C — Validators & Monthly Rotation',
    question: 'Which are stated Validator benefits? *(Multiple answers may apply)*',
    options: ['Unlimited review access', 'Trusted Validator status', 'Guaranteed monthly income', 'Unlimited membership upgrades'],
    correctAnswers: [0, 1],
    isMultiple: true
  },
  {
    id: 24,
    category: 'Section C — Validators & Monthly Rotation',
    question: 'What happens to the bottom 25 Validators at the end of the month?',
    options: ['They receive a warning', 'They lose Validator status', 'They receive additional points', 'They receive priority reviews'],
    correctAnswers: [1]
  },
  {
    id: 25,
    category: 'Section C — Validators & Monthly Rotation',
    question: 'How many top non-Validators are promoted to fill the open positions?',
    options: ['10', '20', '25', '50'],
    correctAnswers: [2]
  },
  {
    id: 26,
    category: 'Section C — Validators & Monthly Rotation',
    question: 'Newly promoted Validators receive what according to the original material?',
    options: ['One-week grace period', 'One-month grace period', 'Three-month grace period', 'Permanent protection'],
    correctAnswers: [1]
  },
  {
    id: 27,
    category: 'Section C — Validators & Monthly Rotation',
    question: 'Why is monthly Validator rotation used?',
    options: ['To keep the group performance-based', 'To reduce the number of reviews', 'To change membership prices', 'To limit new participants'],
    correctAnswers: [0]
  },
  {
    id: 28,
    category: 'Section C — Validators & Monthly Rotation',
    question: 'A Validator finishes near the bottom of the monthly ranking. What can happen?',
    options: ['Permanent Validator status', 'Loss of Validator status', 'Automatic Innovator status', 'Unlimited review priority'],
    correctAnswers: [1]
  },
  {
    id: 29,
    category: 'Section C — Validators & Monthly Rotation',
    question: 'What does the one-month grace period primarily provide to newly promoted Validators?',
    options: ['Time to adapt to the Validator role', 'Protection from all ranking changes', 'Guaranteed high monthly ranking', 'Permanent access to all tiers'],
    correctAnswers: [0]
  },
  {
    id: 30,
    category: 'Section C — Validators & Monthly Rotation',
    question: 'Which statement best describes the original Validator system?',
    options: ['Validator status remains permanent', 'Validator positions are performance-based', 'Only Innovators can become Validators', 'Existing Validators cannot rotate out'],
    correctAnswers: [1]
  },

  // Section D
  {
    id: 31,
    category: 'Section D — PrismaX Data Standards',
    question: 'What is identified as a major limitation for Physical AI?',
    options: ['Limited training data quality', 'Limited programming languages', 'Limited internet connectivity', 'Limited robot categories'],
    correctAnswers: [0]
  },
  {
    id: 32,
    category: 'Section D — PrismaX Data Standards',
    question: 'Why are current robotics datasets described as a “melting pot”?',
    options: ['They contain mixed data types and quality levels', 'They contain only bipedal demonstrations', 'They contain only synthetic demonstrations', 'They contain only video observations'],
    correctAnswers: [0]
  },
  {
    id: 33,
    category: 'Section D — PrismaX Data Standards',
    question: 'What problem exists with task selection in many robotics datasets?',
    options: ['Tasks are too expensive', 'Tasks are repetitive', 'Tasks are too short', 'Tasks lack physical robots'],
    correctAnswers: [1]
  },
  {
    id: 34,
    category: 'Section D — PrismaX Data Standards',
    question: 'Which can be marketed as robotics data? *(Multiple answers may apply)*',
    options: ['Videos', 'Motion capture', 'Teleoperation', 'Robot-generated trajectories'],
    correctAnswers: [0, 1, 2, 3],
    isMultiple: true
  },
  {
    id: 35,
    category: 'Section D — PrismaX Data Standards',
    question: "What does PrismaX's stated definition of robotics data emphasize?",
    options: ['Any video containing a robot', 'Egocentric task video with suitable embodiment and sensor data', 'Synthetic simulation episodes only', 'Motion-capture trajectories only'],
    correctAnswers: [1]
  },
  {
    id: 36,
    category: 'Section D — PrismaX Data Standards',
    question: 'What does “egocentric” mean in the stated robotics-data definition?',
    options: ['Recorded from room-scale cameras', 'Recorded from cameras mounted on the embodiment', 'Recorded from overhead cameras only', 'Recorded from external tracking cameras'],
    correctAnswers: [1]
  },
  {
    id: 37,
    category: 'Section D — PrismaX Data Standards',
    question: 'Which can be considered an embodiment under the stated definition? *(Multiple answers may apply)*',
    options: ['Robot', 'UMI-style gripper', 'Human', 'Camera mounted in the room'],
    correctAnswers: [0, 1, 2],
    isMultiple: true
  },
  {
    id: 38,
    category: 'Section D — PrismaX Data Standards',
    question: 'What type of embodiment is emphasized?',
    options: ['Bimanual embodiment', 'Single-wheel embodiment', 'Static-camera embodiment', 'Vehicle-only embodiment'],
    correctAnswers: [0]
  },
  {
    id: 39,
    category: 'Section D — PrismaX Data Standards',
    question: 'What should the sensor data allow?',
    options: ['Reconstruction of physical state', 'Reconstruction of membership activity', 'Reconstruction of leaderboard ranking', 'Reconstruction of queue position'],
    correctAnswers: [0]
  },
  {
    id: 40,
    category: 'Section D — PrismaX Data Standards',
    question: 'What is required from the overhead camera?',
    options: ["View of the robot's head", 'Full view of relevant workspace areas', "View of the operator's face", 'View of the room entrance'],
    correctAnswers: [1]
  },

  // Section E
  {
    id: 41,
    category: 'Section E — Cameras, Sensors & Robot Configuration',
    question: 'For a bimanual embodiment, how many wrist cameras are required at minimum?',
    options: ['None', 'One total', 'One on each wrist', 'Two on one wrist'],
    correctAnswers: [2]
  },
  {
    id: 42,
    category: 'Section E — Cameras, Sensors & Robot Configuration',
    question: 'Which camera arrangement meets the stated minimum?',
    options: ['One overhead camera only', 'One overhead camera plus one camera on each wrist', 'Two overhead cameras without wrist cameras', 'One wrist camera without overhead coverage'],
    correctAnswers: [1]
  },
  {
    id: 43,
    category: 'Section E — Cameras, Sensors & Robot Configuration',
    question: 'What should the overhead camera keep visible?',
    options: ['Both wrists and relevant objects', 'The operator and control station', 'The robot head and torso', 'The room perimeter and floor'],
    correctAnswers: [0]
  },
  {
    id: 44,
    category: 'Section E — Cameras, Sensors & Robot Configuration',
    question: 'Why is full overhead visibility important?',
    options: ['Models learn visual information including arm positions', 'Validators can calculate membership points', 'Operators can reduce robot DoF', 'Customers can modify the URDF'],
    correctAnswers: [0]
  },
  {
    id: 45,
    category: 'Section E — Cameras, Sensors & Robot Configuration',
    question: 'Which situations can violate overhead-camera coverage? *(Multiple answers may apply)*',
    options: ['A hand leaves the frame', 'An object becomes invisible', 'An action area cannot be seen', 'Both wrists and relevant objects remain visible'],
    correctAnswers: [0, 1, 2],
    isMultiple: true
  },
  {
    id: 46,
    category: 'Section E — Cameras, Sensors & Robot Configuration',
    question: 'What physical state must robotics foundation models predict at minimum?',
    options: ['Robot battery state', 'Joint angles', 'Membership state', 'Queue position'],
    correctAnswers: [1]
  },
  {
    id: 47,
    category: 'Section E — Cameras, Sensors & Robot Configuration',
    question: 'Why is a URDF required for a new embodiment?',
    options: ["To describe the robot's kinematic structure", 'To calculate Prisma Points', 'To define validator rankings', 'To record teleoperation sessions'],
    correctAnswers: [0]
  },
  {
    id: 48,
    category: 'Section E — Cameras, Sensors & Robot Configuration',
    question: 'What must the URDF kinematic chain correspond to?',
    options: ['Membership configuration', 'Robot joint-angle configuration', 'Camera placement', 'Task-prompt structure'],
    correctAnswers: [1]
  },
  {
    id: 49,
    category: 'Section E — Cameras, Sensors & Robot Configuration',
    question: 'What arm configuration is required under the stated standard?',
    options: ['2–3 DoF', '4–5 DoF', '6–7 DoF', '8–9 DoF'],
    correctAnswers: [2]
  },
  {
    id: 50,
    category: 'Section E — Cameras, Sensors & Robot Configuration',
    question: 'Which are allowed end-effector types? *(Multiple answers apply)*',
    options: ['1-DoF grippers', 'Dexterous hands', 'Multi-joint grippers', 'Kinematic arms'],
    correctAnswers: [0, 1],
    isMultiple: true
  },
  {
    id: 51,
    category: 'Section E — Cameras, Sensors & Robot Configuration',
    question: 'What can software enforce at the platform level?',
    options: ['Many baseline requirements', 'Operator confidence', 'Demonstration creativity', 'Training usefulness'],
    correctAnswers: [0]
  },
  {
    id: 52,
    category: 'Section E — Cameras, Sensors & Robot Configuration',
    question: 'Why are validators still needed after automated checks?',
    options: ['Automated checks cannot replace human judgment', 'Automated checks cannot store robotics data', 'Validators operate every robot', 'Validators create every URDF'],
    correctAnswers: [0]
  },
  {
    id: 53,
    category: 'Section E — Cameras, Sensors & Robot Configuration',
    question: 'What is the primary job of a Validator?',
    options: ['Decide whether a demonstration is training-grade', 'Configure robot hardware', 'Manage membership tiers', 'Operate the robot fleet'],
    correctAnswers: [0]
  },
  {
    id: 54,
    category: 'Section E — Cameras, Sensors & Robot Configuration',
    question: 'Which qualities require meaningful human judgment? *(Multiple answers may apply)*',
    options: ['Whether a grasp was fumbled', 'Whether the task matches the prompt', 'Whether demonstrations are repetitive', 'Whether a basic camera requirement is automatically measurable'],
    correctAnswers: [0, 1, 2],
    isMultiple: true
  },
  {
    id: 55,
    category: 'Section E — Cameras, Sensors & Robot Configuration',
    question: 'What does “Automated checks approximate. People judge.” emphasize?',
    options: ['Human judgment remains central', 'Automated checks replace validators', 'Human judgment replaces all software', 'Software should only handle camera data'],
    correctAnswers: [0]
  },

  // Section F
  {
    id: 56,
    category: 'Section F — Automated Checks & Human Validation',
    question: 'What is the human validation layer compared to in language models?',
    options: ['Human judgment about what is good and bad', 'Human operation of robot hardware', 'Human control of model architecture', 'Human management of computing resources'],
    correctAnswers: [0]
  },
  {
    id: 57,
    category: 'Section F — Automated Checks & Human Validation',
    question: 'What is the relationship between data quality and model quality?',
    options: ['Better training data supports better models', 'Data quality matters only after deployment', 'Model quality determines data quality', 'Hardware quality determines training quality'],
    correctAnswers: [0]
  },
  {
    id: 58,
    category: 'Section F — Automated Checks & Human Validation',
    question: 'What does the PrismaX standards rubric contain?',
    options: ['Pass/Fail and sliding-scale criteria', 'Membership and leaderboard criteria', 'Camera and membership criteria', 'Hardware and queue criteria'],
    correctAnswers: [0]
  },
  {
    id: 59,
    category: 'Section F — Automated Checks & Human Validation',
    question: 'Which are primarily Pass/Fail criteria? *(Multiple answers may apply)*',
    options: ['Overhead camera coverage', 'Lighting/image clarity', 'Task matching the prompt', 'Diversity'],
    correctAnswers: [0, 1, 2],
    isMultiple: true
  },
  {
    id: 60,
    category: 'Section F — Automated Checks & Human Validation',
    question: 'Which are sliding-scale criteria? *(Multiple answers may apply)*',
    options: ['Trajectory speed', 'Trajectory smoothness', 'Diversity', 'Level of completion'],
    correctAnswers: [0, 1, 2, 3],
    isMultiple: true
  },

  // Section G
  {
    id: 61,
    category: 'Section G — Pass/Fail Criteria',
    question: 'What does “Task Matches Prompt” evaluate?',
    options: ['Semantic alignment with the requested task', 'Movement speed during the task', 'Lighting quality during the task', 'Validator membership during the task'],
    correctAnswers: [0]
  },
  {
    id: 62,
    category: 'Section G — Pass/Fail Criteria',
    question: 'A prompt asks for shoes in shoeboxes, but the demonstration uses bags. What is the issue?',
    options: ['Diversity', 'Task alignment', 'Lighting', 'Trajectory speed'],
    correctAnswers: [1]
  },
  {
    id: 63,
    category: 'Section G — Pass/Fail Criteria',
    question: 'Why is prompt interpretation important?',
    options: ['Task meaning can require sensible judgment', 'Task meaning determines membership tier', 'Task meaning controls camera placement', 'Task meaning determines Validator rotation'],
    correctAnswers: [0]
  },
  {
    id: 64,
    category: 'Section G — Pass/Fail Criteria',
    question: 'What does “trajectory should be separable” mean?',
    options: ['Actions should be clearly distinguishable', 'Both arms should always act together', 'Every movement should contain a pause', 'Each episode should contain multiple robots'],
    correctAnswers: [0]
  },
  {
    id: 65,
    category: 'Section G — Pass/Fail Criteria',
    question: 'Which situations violate trajectory separability? *(Multiple answers may apply)*',
    options: ['Two arms performing different tasks simultaneously', 'Ambiguous overlapping actions', 'One arm completing a defined action', 'One clear action followed by another'],
    correctAnswers: [0, 1],
    isMultiple: true
  },
  {
    id: 66,
    category: 'Section G — Pass/Fail Criteria',
    question: 'Why is trajectory separability important?',
    options: ['Training pipelines may split and label task chunks', 'Validators need it to calculate membership cost', 'Operators need it to enter the queue', 'Customers need it to change robot hardware'],
    correctAnswers: [0]
  },
  {
    id: 67,
    category: 'Section G — Pass/Fail Criteria',
    question: 'What does “No Struggling” mean?',
    options: ['No mistakes can ever occur', 'Mistakes should be small and quickly recovered', 'Robots must always operate at maximum speed', 'Operators must never pause during a task'],
    correctAnswers: [1]
  },
  {
    id: 68,
    category: 'Section G — Pass/Fail Criteria',
    question: 'Which example best represents unacceptable struggling?',
    options: ['Small grip error followed by recovery', 'Repeated attempts to zip a zipper', 'Slower movement during difficult manipulation', 'A different valid task strategy'],
    correctAnswers: [1]
  },
  {
    id: 69,
    category: 'Section G — Pass/Fail Criteria',
    question: 'Why can repeated mistakes be harmful?',
    options: ['Models may learn to reproduce them', 'Models may lose camera synchronization', 'Validators may lose membership access', 'Robots may gain unnecessary DoF'],
    correctAnswers: [0]
  },
  {
    id: 70,
    category: 'Section G — Pass/Fail Criteria',
    question: 'Which statement about mistakes is correct?',
    options: ['Every mistake automatically fails the episode', 'Small, quickly recovered mistakes can remain useful', 'Every mistake improves training value', 'Mistakes have no training implications'],
    correctAnswers: [1]
  },

  // Section H
  {
    id: 71,
    category: 'Section H — Non-Causal Errors',
    question: 'What is a non-causal error?',
    options: ['An error affecting only the next action', 'An error that undoes or damages completed work', 'An error caused by slow movement', 'An error caused by low scoring accuracy'],
    correctAnswers: [1]
  },
  {
    id: 72,
    category: 'Section H — Non-Causal Errors',
    question: 'Which example is a non-causal error?',
    options: ['Quickly correcting a grip', 'Knocking over a previously completed vase', 'Taking a slower valid route', 'Adjusting the grasp before continuing'],
    correctAnswers: [1]
  },
  {
    id: 73,
    category: 'Section H — Non-Causal Errors',
    question: 'Which are examples of non-causal errors? *(Multiple answers may apply)*',
    options: ['Spilling a previously packed container', 'Knocking over a completed vase', 'Plugging into the wrong charger and then correcting it', 'Briefly adjusting a grip'],
    correctAnswers: [0, 1, 2],
    isMultiple: true
  },
  {
    id: 74,
    category: 'Section H — Non-Causal Errors',
    question: 'Why are non-causal errors undesirable?',
    options: ['They may teach the model to undo previous work', 'They reduce camera coverage', 'They eliminate all trajectory diversity', 'They prevent completion scoring'],
    correctAnswers: [0]
  },
  {
    id: 75,
    category: 'Section H — Non-Causal Errors',
    question: 'What distinguishes a useful small mistake from a non-causal error?',
    options: ['Useful mistakes can be recovered without undoing completed work', 'Useful mistakes always involve both arms', 'Non-causal errors always involve poor lighting', 'Useful mistakes always produce diversity 5'],
    correctAnswers: [0]
  },

  // Section I
  {
    id: 76,
    category: 'Section I — Sliding-Scale Criteria',
    question: 'Which criterion evaluates how quickly a trajectory is performed?',
    options: ['Completion quality', 'Diversity', 'Trajectory speed', 'Level of completion'],
    correctAnswers: [2]
  },
  {
    id: 77,
    category: 'Section I — Sliding-Scale Criteria',
    question: 'What speed should trajectories generally approach?',
    options: ['0.25× human speed', '0.5× human speed', '1× or higher human speed', '2× human speed'],
    correctAnswers: [2]
  },
  {
    id: 78,
    category: 'Section I — Sliding-Scale Criteria',
    question: 'When can under-1× speed be acceptable?',
    options: ['Difficult manipulation with 1-DoF gripper limitations and no errors', 'Repetitive tasks with high dataset frequency', 'Tasks with limited camera visibility', 'Episodes with repeated unsuccessful attempts'],
    correctAnswers: [0]
  },
  {
    id: 79,
    category: 'Section I — Sliding-Scale Criteria',
    question: 'Why does trajectory speed matter?',
    options: ['Speed transfers directly to the model', 'Speed determines membership ranking', 'Speed determines camera requirements', 'Speed determines URDF configuration'],
    correctAnswers: [0]
  },
  {
    id: 80,
    category: 'Section I — Sliding-Scale Criteria',
    question: 'What does trajectory smoothness evaluate?',
    options: ['Confident movement without pauses or stutters', 'Percentage of task completion', 'Number of camera views', 'Amount of task variation'],
    correctAnswers: [0]
  },
  {
    id: 81,
    category: 'Section I — Sliding-Scale Criteria',
    question: 'Which movements indicate poor trajectory smoothness? *(Multiple answers may apply)*',
    options: ['Long pauses', 'Stutters', 'Visible uncertainty', 'Confident continuous motion'],
    correctAnswers: [0, 1, 2],
    isMultiple: true
  },
  {
    id: 82,
    category: 'Section I — Sliding-Scale Criteria',
    question: 'What does completion quality primarily consider?',
    options: ['Whether mistakes occurred during completion', 'Whether enough cameras were installed', 'Whether the robot has enough DoF', 'Whether the task used a new strategy'],
    correctAnswers: [0]
  },
  {
    id: 83,
    category: 'Section I — Sliding-Scale Criteria',
    question: 'What does diversity compare?',
    options: ['An episode with other episodes of the same task', 'An episode with other membership levels', 'A robot with different hardware vendors', 'A camera with different URDF files'],
    correctAnswers: [0]
  },
  {
    id: 84,
    category: 'Section I — Sliding-Scale Criteria',
    question: 'What does diversity score 0 represent?',
    options: ['No attempt', 'Exactly the same as another run', 'Partial completion', 'Extremely innovative execution'],
    correctAnswers: [1]
  },
  {
    id: 85,
    category: 'Section I — Sliding-Scale Criteria',
    question: 'What does diversity score 5 represent?',
    options: ['No attempt', 'Exact repetition', 'Extremely innovative execution', 'Complete task failure'],
    correctAnswers: [2]
  },

  // Section J
  {
    id: 86,
    category: 'Section J — Completion & Integrated Scenarios',
    question: 'What does “Level of Completion” measure?',
    options: ['How much of the task was completed', 'How quickly the task was completed', 'How much variation the task contains', 'How many cameras recorded it'],
    correctAnswers: [0]
  },
  {
    id: 87,
    category: 'Section J — Completion & Integrated Scenarios',
    question: 'What does Level of Completion score 0 represent?',
    options: ['25% completion', '50% completion', 'No attempt', '100% completion'],
    correctAnswers: [2]
  },
  {
    id: 88,
    category: 'Section J — Completion & Integrated Scenarios',
    question: 'What does Level of Completion score 5 represent?',
    options: ['No attempt', '25% completion', '75% completion', '100% completion'],
    correctAnswers: [3]
  },
  {
    id: 89,
    category: 'Section J — Completion & Integrated Scenarios',
    question: 'Which statements about partial completion are correct? *(Multiple answers may apply)*',
    options: ['It can sometimes remain useful as training data', 'It automatically receives 5', 'Its completion level is evaluated', 'It is always useless'],
    correctAnswers: [0, 2],
    isMultiple: true
  },
  {
    id: 90,
    category: 'Section J — Completion & Integrated Scenarios',
    question: 'A difficult manipulation runs at 0.8× human speed with no errors. How should speed be viewed?',
    options: ['Automatically unacceptable', 'Potentially acceptable under the stated 1-DoF exception', 'Automatically score 5', 'Automatically rejected below 1×'],
    correctAnswers: [1]
  },
  {
    id: 91,
    category: 'Section J — Completion & Integrated Scenarios',
    question: 'A robot repeatedly struggles to connect a component. Which Pass/Fail criterion is most directly affected?',
    options: ['Diversity', 'No Struggling', 'Level of Completion', 'Trajectory Speed'],
    correctAnswers: [1]
  },
  {
    id: 92,
    category: 'Section J — Completion & Integrated Scenarios',
    question: 'Both arms repeatedly perform overlapping actions on different tasks. Which criterion is most directly affected?',
    options: ['Trajectory Separability', 'Image and Lighting Quality', 'Completion Quality', 'Diversity'],
    correctAnswers: [0]
  },
  {
    id: 93,
    category: 'Section J — Completion & Integrated Scenarios',
    question: 'An episode uses a different but valid strategy from earlier episodes. Which criterion is primarily affected?',
    options: ['Diversity', 'Lighting', 'No Struggling', 'Camera Coverage'],
    correctAnswers: [0]
  },
  {
    id: 94,
    category: 'Section J — Completion & Integrated Scenarios',
    question: 'The task is perfectly completed, but severe camera darkness causes major image artifacts. What is the likely result?',
    options: ['It passes because completion is strong', 'It fails the image/lighting requirement', 'It receives diversity 5', 'It receives automatic Validator approval'],
    correctAnswers: [1]
  },
  {
    id: 95,
    category: 'Section J — Completion & Integrated Scenarios',
    question: "A robot's wrist leaves the overhead camera view during an action. Which requirement is affected?",
    options: ['Overhead camera coverage', 'Trajectory speed', 'Diversity', 'Level of completion'],
    correctAnswers: [0]
  },
  {
    id: 96,
    category: 'Section J — Completion & Integrated Scenarios',
    question: 'Which characteristics describe high-quality training data? *(Multiple answers may apply)*',
    options: ['Clear and well-lit imagery', 'Semantically correct task execution', 'Smooth, capable trajectories', 'Repeated lengthy mistakes'],
    correctAnswers: [0, 1, 2],
    isMultiple: true
  },
  {
    id: 97,
    category: 'Section J — Completion & Integrated Scenarios',
    question: 'Why does PrismaX describe robotics as “hardware-rich and data-poor”?',
    options: ['Physical robots are available while high-quality data remains limited', 'Robots cannot produce useful data', 'Robotics lacks available hardware', 'High-quality robotics data is already abundant'],
    correctAnswers: [0]
  },
  {
    id: 98,
    category: 'Section J — Completion & Integrated Scenarios',
    question: 'What is the central role of PrismaX Data Standards?',
    options: ['Provide repeatable guidelines for training-grade robotics data', 'Define robotics membership pricing', 'Replace physical robotics hardware', 'Remove human validation from data review'],
    correctAnswers: [0]
  },
  {
    id: 99,
    category: 'Section J — Completion & Integrated Scenarios',
    question: 'Which statement best summarizes the Validator role?',
    options: ['Validators form the human scoring layer for data quality', 'Validators mainly manufacture robotic hardware', 'Validators primarily manage community channels', 'Validators automatically generate training data'],
    correctAnswers: [0]
  },
  {
    id: 100,
    category: 'Section J — Completion & Integrated Scenarios',
    question: 'What best captures the central message of the Data Standards?',
    options: ['Larger datasets automatically improve models', 'Better models begin with better-quality training data', 'Human judgment should be removed from validation', 'Hardware matters more than training data'],
    correctAnswers: [1]
  },

  // Section K
  {
    id: 101,
    category: 'Section K — Verify Quality & The First 100',
    question: 'What changed when Verify Quality opened publicly?',
    options: ['Community members could score robot training data', 'Community members could manufacture robots', 'Community members could change robot models', 'Community members could create new hardware standards'],
    correctAnswers: [0]
  },
  {
    id: 102,
    category: 'Section K — Verify Quality & The First 100',
    question: 'What are the people performing data-quality scoring called?',
    options: ['Operators', 'Validators', 'Fleet owners', 'Model trainers'],
    correctAnswers: [1]
  },
  {
    id: 103,
    category: 'Section K — Verify Quality & The First 100',
    question: 'What are validators expected to contribute? *(Multiple answers may apply)*',
    options: ['Demonstration scoring', 'Quality judgments', 'Consensus tracking', 'Robot manufacturing'],
    correctAnswers: [0, 1, 2],
    isMultiple: true
  },
  {
    id: 104,
    category: 'Section K — Verify Quality & The First 100',
    question: 'How many validators form The First 100?',
    options: ['25', '50', '75', '100'],
    correctAnswers: [3]
  },
  {
    id: 105,
    category: 'Section K — Verify Quality & The First 100',
    question: 'How are the initial First 100 selected?',
    options: ['By membership seniority', 'By scores closest to consensus', 'By number of teleop sessions', 'By joining date'],
    correctAnswers: [1]
  },
  {
    id: 106,
    category: 'Section K — Verify Quality & The First 100',
    question: 'How does PrismaX characterize the current Physical AI landscape?',
    options: ['Hardware-rich and data-poor', 'Hardware-poor and data-rich', 'Hardware-rich and model-poor', 'Hardware-poor and model-rich'],
    correctAnswers: [0]
  },
  {
    id: 107,
    category: 'Section K — Verify Quality & The First 100',
    question: 'What is the key missing resource emphasized in the Verify Quality article?',
    options: ['More robot designs', 'More high-quality training data', 'More membership tiers', 'More camera vendors'],
    correctAnswers: [1]
  },
  {
    id: 108,
    category: 'Section K — Verify Quality & The First 100',
    question: "Why isn't dataset volume alone sufficient? *(Multiple answers may apply)*",
    options: ['Task selection can remain repetitive', 'Data can be too narrow', 'Data can be too synthetic', 'Data can be inconsistent'],
    correctAnswers: [0, 1, 2, 3],
    isMultiple: true
  },
  {
    id: 109,
    category: 'Section K — Verify Quality & The First 100',
    question: 'Which type of judgment is difficult for software to fully provide?',
    options: ['Whether motion is smooth and deliberate', 'Whether a camera exists', 'Whether a frame is black', 'Whether cameras are synchronized'],
    correctAnswers: [0]
  },
  {
    id: 110,
    category: 'Section K — Verify Quality & The First 100',
    question: 'What principle connects data quality and model quality?',
    options: ['Better data supports better robotics models', 'Larger hardware produces better data', 'More validators automatically create better models', 'More episodes automatically create better models'],
    correctAnswers: [0]
  },

  // Section L
  {
    id: 111,
    category: 'Section L — Verify Quality Workflow',
    question: 'What does a validator choose before reviewing episodes?',
    options: ['Environment, task, and dataset', 'Membership, queue, and fleet', 'Robot, wallet, and campaign', 'Model, token, and operator'],
    correctAnswers: [0]
  },
  {
    id: 112,
    category: 'Section L — Verify Quality Workflow',
    question: 'What does each dataset contain?',
    options: ['Multiple episodes', 'Multiple memberships', 'Multiple validators', 'Multiple robot manufacturers'],
    correctAnswers: [0]
  },
  {
    id: 113,
    category: 'Section L — Verify Quality Workflow',
    question: 'Which are initial pass/fail checks? *(Multiple answers may apply)*',
    options: ['Camera feed clarity', 'Task completion', 'Hand remaining in frame', 'Camera synchronization'],
    correctAnswers: [0, 1, 2, 3],
    isMultiple: true
  },
  {
    id: 114,
    category: 'Section L — Verify Quality Workflow',
    question: 'What happens if an episode fails one of the required pass/fail criteria?',
    options: ['It can still automatically pass', 'It is not training-grade', 'It receives diversity 5', 'It receives consensus priority'],
    correctAnswers: [1]
  },
  {
    id: 115,
    category: 'Section L — Verify Quality Workflow',
    question: 'How is quality scored after the initial checks?',
    options: ['Through a sliding scale', 'Through membership ranking', 'Through queue position', 'Through hardware tier'],
    correctAnswers: [0]
  },
  {
    id: 116,
    category: 'Section L — Verify Quality Workflow',
    question: 'What aspects can be considered during quality scoring?',
    options: ['Operator control and motion quality', 'Membership cost and queue position', 'Hardware price and robot age', 'Validator rank and teleop history'],
    correctAnswers: [0]
  },
  {
    id: 117,
    category: 'Section L — Verify Quality Workflow',
    question: 'Why are episodes scored independently by multiple validators?',
    options: ['To produce a consensus', 'To assign membership', 'To determine hardware price', 'To create robot configurations'],
    correctAnswers: [0]
  },
  {
    id: 118,
    category: 'Section L — Verify Quality Workflow',
    question: 'What can happen when validators disagree?',
    options: ['Expert review can follow', 'The episode automatically passes', 'The lowest score is removed', 'The dataset is automatically deleted'],
    correctAnswers: [0]
  },
  {
    id: 119,
    category: 'Section L — Verify Quality Workflow',
    question: 'What happens after a validator submits a score?',
    options: ['It can be edited repeatedly', 'It becomes final', 'It remains pending indefinitely', 'It changes with every new consensus'],
    correctAnswers: [1]
  },
  {
    id: 120,
    category: 'Section L — Verify Quality Workflow',
    question: "What strengthens a validator's track record?",
    options: ['Scores that closely follow consensus', 'More expensive membership', 'More teleop queue time', 'More social posts'],
    correctAnswers: [0]
  },

  // Section M
  {
    id: 121,
    category: 'Section M — First 100 Membership & Rotation',
    question: 'Which memberships can participate in the Verify Quality scoring system?',
    options: ['Amplifier and Innovator', 'Explorer and Amplifier', 'Explorer and Innovator', 'Validator and Explorer'],
    correctAnswers: [0]
  },
  {
    id: 122,
    category: 'Section M — First 100 Membership & Rotation',
    question: 'How many first-window submission chances does an Amplifier receive?',
    options: ['5', '10', '20', '30'],
    correctAnswers: [1]
  },
  {
    id: 123,
    category: 'Section M — First 100 Membership & Rotation',
    question: 'How many first-window submission chances does an Innovator receive?',
    options: ['10', '20', '30', 'Unlimited'],
    correctAnswers: [2]
  },
  {
    id: 124,
    category: 'Section M — First 100 Membership & Rotation',
    question: 'What can each first-window submission contribute toward? *(Multiple answers may apply)*',
    options: ['Consensus accuracy', 'Prisma Points', 'Validator track record', 'Guaranteed First 100 placement'],
    correctAnswers: [0, 1, 2],
    isMultiple: true
  },
  {
    id: 125,
    category: 'Section M — First 100 Membership & Rotation',
    question: 'Are there reserved seats in The First 100?',
    options: ['Yes, for Innovators', 'Yes, for Ambassadors', 'Yes, for Launch Partners', 'No, selection is open'],
    correctAnswers: [3]
  },
  {
    id: 126,
    category: 'Section M — First 100 Membership & Rotation',
    question: 'What happens to the bottom 25% of The First 100 each month?',
    options: ['They receive permanent status', 'They rotate out', 'They receive double points', 'They receive priority access'],
    correctAnswers: [1]
  },
  {
    id: 127,
    category: 'Section M — First 100 Membership & Rotation',
    question: 'Why does PrismaX rotate validators?',
    options: ['To keep the standard performance-based', 'To reduce the community size', 'To favor older memberships', 'To eliminate consensus scoring'],
    correctAnswers: [0]
  },
  {
    id: 128,
    category: 'Section M — First 100 Membership & Rotation',
    question: 'Who can fill seats opened through monthly rotation?',
    options: ['New qualifying validators', 'Only original launch partners', 'Only Innovators', 'Only PrismaX Ambassadors'],
    correctAnswers: [0]
  },
  {
    id: 129,
    category: 'Section M — First 100 Membership & Rotation',
    question: 'What happens after someone earns a First 100 role?',
    options: ['They can score unlimited data each month', 'They receive permanent status', 'They stop being compared with consensus', 'They no longer earn Prisma Points'],
    correctAnswers: [0]
  },
  {
    id: 130,
    category: 'Section M — First 100 Membership & Rotation',
    question: 'Which statements describe The First 100? *(Multiple answers may apply)*',
    options: ['It contains 100 validators', 'Selection is performance-based', 'The list can change monthly', 'Every seat is permanently reserved'],
    correctAnswers: [0, 1, 2],
    isMultiple: true
  },

  // Section N
  {
    id: 131,
    category: 'Section N — VLA Foundry',
    question: "What is Verify Quality's relationship with the VLA Foundry?",
    options: ['It is the first public step into the Foundry', 'It is the final stage of the Foundry', 'It operates independently from the Foundry', 'It replaces the Foundry\'s data layer'],
    correctAnswers: [0]
  },
  {
    id: 132,
    category: 'Section N — VLA Foundry',
    question: 'What type of dataset does the VLA Foundry aim to produce?',
    options: ['Diverse, large-scale, high-quality, usable data', 'Narrow, repetitive, single-task data', 'Synthetic-only manipulation data', 'Hardware-specific data only'],
    correctAnswers: [0]
  },
  {
    id: 133,
    category: 'Section N — VLA Foundry',
    question: 'Which steps are part of the Foundry loop? *(Multiple answers may apply)*',
    options: ['Operators upload data', 'Validators verify data', 'Customers use data', 'Training and evaluation feed back into collection'],
    correctAnswers: [0, 1, 2, 3],
    isMultiple: true
  },
  {
    id: 134,
    category: 'Section N — VLA Foundry',
    question: 'Why can PrismaX maintain its quality standard across the Foundry?',
    options: ['It operates the system end to end', 'It uses only automated checks', 'It avoids customer feedback', 'It uses only one data modality'],
    correctAnswers: [0]
  },
  {
    id: 135,
    category: 'Section N — VLA Foundry',
    question: 'What does the validator layer help PrismaX scale?',
    options: ['Human quality judgment', 'Robot hardware manufacturing', 'Membership sales', 'Queue management'],
    correctAnswers: [0]
  },

  // Section O
  {
    id: 136,
    category: 'Section O — Day 1 Launch Partners',
    question: 'How many Day 1 Launch Partners are listed in the article?',
    options: ['9', '10', '11', '12'],
    correctAnswers: [2]
  },
  {
    id: 137,
    category: 'Section O — Day 1 Launch Partners',
    question: 'Which are named Day 1 Launch Partners? *(Multiple answers may apply)*',
    options: ['Monad', 'OpenMind', 'Sentient', 'Virtuals Protocol'],
    correctAnswers: [0, 1, 2, 3],
    isMultiple: true
  },
  {
    id: 138,
    category: 'Section O — Day 1 Launch Partners',
    question: 'Which are also named among the Day 1 Launch Partners? *(Multiple answers may apply)*',
    options: ['Blockchain Builders Fund', 'ChainGPT', 'Peaq', 'Perle Labs'],
    correctAnswers: [0, 1, 2, 3],
    isMultiple: true
  },
  {
    id: 139,
    category: 'Section O — Day 1 Launch Partners',
    question: 'Which organization in the list includes “Stanford” in its name?',
    options: ['Stanford Robotics Network', 'Stanford Blockchain Accelerator', 'Stanford AI Consortium', 'Stanford Robotics Accelerator'],
    correctAnswers: [1]
  },
  {
    id: 140,
    category: 'Section O — Day 1 Launch Partners',
    question: 'What did the Day 1 Launch Partners and Ambassadors do before public launch?',
    options: ['Tested Verify Quality and scored real data', 'Built the VLA Foundry independently', 'Operated every PrismaX robot', 'Selected all future First 100 members'],
    correctAnswers: [0]
  },

  // Section P
  {
    id: 141,
    category: 'Section P — Teleoperation',
    question: 'What does teleoperation allow an operator to do?',
    options: ['Remotely control a robot', 'Automatically train a model', "Replace the robot's hardware", "Modify the robot's URDF"],
    correctAnswers: [0]
  },
  {
    id: 142,
    category: 'Section P — Teleoperation',
    question: 'Why is teleoperation valuable for robotics data?',
    options: ['It captures human actions during real-world tasks', 'It eliminates the need for training data', 'It removes all robot hardware constraints', 'It replaces model evaluation'],
    correctAnswers: [0]
  },
  {
    id: 143,
    category: 'Section P — Teleoperation',
    question: 'What does teleoperation transfer from humans into robot interaction data?',
    options: ['Skills, instincts, and decision-making', 'Membership status, points, and rankings', 'Hardware prices, vendors, and specifications', 'Queue position, session time, and tier'],
    correctAnswers: [0]
  },
  {
    id: 144,
    category: 'Section P — Teleoperation',
    question: 'According to the Teleops material, what does the experience eventually become like?',
    options: ['Learning a new language', 'Managing a data center', 'Operating a manufacturing line', 'Building a robot from scratch'],
    correctAnswers: [0]
  },
  {
    id: 145,
    category: 'Section P — Teleoperation',
    question: 'Which factors can make a robot interaction behave differently during teleoperation? *(Multiple answers may apply)*',
    options: ['Timing', 'Force', 'Position', 'Membership price'],
    correctAnswers: [0, 1, 2],
    isMultiple: true
  },

  // Section Q
  {
    id: 146,
    category: 'Section Q — Teleops Queue',
    question: 'Approximately how long is a typical Teleops control session?',
    options: ['2 minutes', '5 minutes', '10 minutes', '15 minutes'],
    correctAnswers: [1]
  },
  {
    id: 147,
    category: 'Section Q — Teleops Queue',
    question: 'How many Teleops sessions per day are stated for Amplifiers?',
    options: ['2', '3', '5', '6'],
    correctAnswers: [1]
  },
  {
    id: 148,
    category: 'Section Q — Teleops Queue',
    question: 'How many Teleops sessions per day are stated for Innovators?',
    options: ['3', '4', '6', '10'],
    correctAnswers: [2]
  },
  {
    id: 149,
    category: 'Section Q — Teleops Queue',
    question: 'Which factors can affect Teleops queue waiting time? *(Multiple answers may apply)*',
    options: ['Number of people ahead', 'Missed turns', 'Robot-arm maintenance', 'Dataset diversity score'],
    correctAnswers: [0, 1, 2],
    isMultiple: true
  },
  {
    id: 150,
    category: 'Section Q — Teleops Queue',
    question: "Which statements best summarize PrismaX's broader Physical AI approach? *(Multiple answers may apply)*",
    options: ['Real-world actions can serve as both control and training', 'Operators can become sources of behavioral data', 'Robots can function as infrastructure for real interactions', 'Data quality is less important than collection volume'],
    correctAnswers: [0, 1, 2],
    isMultiple: true
  }
];