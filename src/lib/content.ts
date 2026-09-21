import { IMG } from './images';

export const SITE = {
  name: 'Élan Forge',
  tagline: 'Strength With Purpose.',
  subline: 'Fitness. Mentorship. Community.',
  description:
    'Élan Forge is a fitness, mentorship and community brand built on one belief: strength means more when it stands for something. Train the body. Shape the mind. Strengthen the community.',
  url: 'https://elanforge.com',
  email: 'hello@elanforge.com',
  phone: '+1 (555) 014-7788',
  location: 'Élan Forge Training Floor · Studio Hours by Appointment',
  socials: [
    { label: 'Instagram', href: 'https://instagram.com' },
    { label: 'YouTube', href: 'https://youtube.com' },
    { label: 'Spotify', href: 'https://spotify.com' },
  ],
};

export const NAV = [
  { label: 'Philosophy', href: '/philosophy' },
  { label: 'Training', href: '/training' },
  { label: 'Mentorship', href: '/mentorship' },
  { label: 'Schedule', href: '/schedule' },
  { label: 'Rep For A Reason', href: '/impact' },
];

export const PILLARS = [
  {
    key: 'MOVE',
    image: IMG.move,
    lede: 'Fitness is more than exercise.',
    body:
      'It is a foundation for confidence, discipline, energy, resilience, and personal transformation. We train the body so we can show up stronger everywhere else.',
  },
  {
    key: 'MENTOR',
    image: IMG.mentor,
    lede: 'Growth happens faster when we learn from others.',
    body:
      'Our mentorship community creates space for guidance, accountability, honest conversations, leadership, and shared experience.',
  },
  {
    key: 'BELONG',
    image: IMG.belong,
    lede: "You don't have to grow alone.",
    body:
      'Élan Forge brings people together through workouts, conversations, challenges, mentorship, and meaningful relationships.',
  },
  {
    key: 'BUILD',
    image: IMG.build,
    lede: "Transformation doesn't happen overnight.",
    body:
      'We build through consistency, progressive challenge, intelligent programming, and a willingness to keep showing up.',
  },
];

export const METHOD = [
  {
    n: '01',
    name: 'Volume Blocks',
    image: IMG.volume,
    body:
      'High-repetition work designed to build muscular endurance, work capacity, and hypertrophy.',
  },
  {
    n: '02',
    name: 'Pressure Sets',
    image: IMG.pressure,
    body:
      'Controlled work performed under fatigue while maintaining technique, focus, and discipline.',
  },
  {
    n: '03',
    name: 'Strength Sets',
    image: IMG.strength,
    body:
      'Progressive resistance and compound movements designed to develop strength and power.',
  },
  {
    n: '04',
    name: 'Conditioning Finishers',
    image: IMG.conditioning,
    body:
      'Athletic and cardiovascular work that challenges the body and builds resilience.',
  },
  {
    n: '05',
    name: 'Proof Sets',
    image: IMG.proof,
    body:
      'Standardized performance tests that allow members to see their progress through measurable results.',
  },
];

export const SCHEDULE = [
  {
    day: 'Monday',
    time: '6:30 AM',
    title: 'Strength & Conditioning',
    body: 'Start the week with purpose and energy.',
    image: IMG.strength,
  },
  {
    day: 'Tuesday',
    time: '7:00 PM',
    title: 'Mentor Circle',
    body: 'Conversation, accountability, personal development, and leadership.',
    image: IMG.mentor,
  },
  {
    day: 'Wednesday',
    time: '6:30 AM',
    title: 'Mobility + Recovery',
    body: "Restore the body and prepare for what's next.",
    image: IMG.mobility,
  },
  {
    day: 'Thursday',
    time: '7:00 PM',
    title: 'Performance Workout',
    body: 'High-energy training, teamwork, and measurable challenge.',
    image: IMG.performance,
  },
  {
    day: 'Saturday',
    time: '9:00 AM',
    title: 'Élan Community Meetup',
    body:
      'Train together. Connect over coffee, a smoothie, or simply a glass of water. Build relationships.',
    image: IMG.meetup,
  },
  {
    day: 'Sunday',
    time: '5:00 PM',
    title: 'Weekly Reset',
    body: "Recover, reflect, set intentions, and prepare for what's ahead.",
    image: IMG.reset,
  },
];

export const MENTOR_VALUES = [
  { title: 'Accountability', body: 'Show up for yourself and for others.' },
  { title: 'Courage', body: 'Have the conversations that move you forward.' },
  { title: 'Growth', body: 'Keep learning, adapting, and becoming.' },
  { title: 'Purpose', body: 'Build a life that reflects what matters most.' },
];

export const SERVE = [
  'Became parents and stopped prioritizing themselves',
  'Went through a major life transition',
  'Gained weight or lost confidence',
  'Became comfortable and want to become challenged again',
  "Feel like they're behind",
  'Want their confidence back',
  'Want to become physically formidable again',
  'Know they need structure and accountability',
  'Are ready to build their next chapter',
];

export const PROOF_METRICS = [
  'Before-and-after photos',
  'Strength improvements',
  'Rep PRs',
  'Weight and body-composition changes',
  'Waist measurements',
  'Consistency streaks',
  'Performance milestones',
  'Personal goals achieved',
];

export const LEGACY_SERVICES = [
  'Personal training',
  'Small-group training',
  'Online coaching',
  'Training programs',
  'Nutrition and accountability coaching',
  'Corporate wellness',
  'Speaking',
  'Books and educational content',
  'Podcast and video content',
  'Merchandise',
  'Community events',
  'Philanthropic initiatives',
];

export const LEGACY_FLOW = [
  'Train',
  'Transform',
  'Tell The Story',
  'Give Back',
  'Help Families',
  'Build The Legacy',
];

export const PURPOSE_CHAIN = [
  'Purpose',
  'Discipline',
  'Consistency',
  'Progress',
  'Transformation',
];

export const INTERESTS = [
  'Small-Group Training',
  'Personal Training',
  'Mentor Circle',
  'Online Coaching',
  'Community Meetup',
  'Corporate Wellness',
];

export const GOALS = [
  'Rebuild my strength',
  'Lose weight / change body composition',
  'Get my confidence back',
  'Find structure and accountability',
  'Join the mentorship community',
  'Prepare for a specific event',
];
