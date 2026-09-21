const U = 'https://images.unsplash.com/';

/** Build an Unsplash delivery URL with sane defaults. */
export function ux(id: string, w = 1600, q = 80) {
  return `${U}${id}?auto=format&fit=crop&w=${w}&q=${q}`;
}

export const IMG = {
  heroPrimary: 'photo-1517836357463-d25dfeac3438',
  heroSecondary: 'photo-1550345332-09e3ac987658',
  heroTertiary: 'photo-1605296867304-46d5465a13f1',

  move: 'photo-1541534741688-6078c6bfb5c5',
  mentor: 'photo-1522881193457-37ae97c905bf',
  belong: 'photo-1517931524326-bdd55a541177',
  build: 'photo-1583454110551-21f2fa2afe61',

  volume: 'photo-1599058917212-d750089bc07e',
  pressure: 'photo-1526506118085-60ce8714f8c5',
  strength: 'photo-1581009146145-b5ef050c2e1e',
  conditioning: 'photo-1512291152593-07033c65b791',
  proof: 'photo-1549476464-37392f717541',

  mobility: 'photo-1593811167565-4672e6c8ce4c',
  performance: 'photo-1554284126-aa88f22d8b74',
  meetup: 'photo-1758274252296-a63b1d7d4bb8',
  coffee: 'photo-1626387753307-5a329fa44578',
  reset: 'photo-1593358578872-4772d9cd7a97',

  purpose: 'photo-1516398810565-0cb4310bb8ea',
  serve: 'photo-1607962837359-5e7e89f86776',
  legacy: 'photo-1518310952931-b1de897abd40',
  impact: 'photo-1578645096265-51bee68d32c1',
  join: 'photo-1574680096145-d05b474e2155',
  schedule: 'photo-1517130038641-a774d04afb3c',
  mentorshipHero: 'photo-1531537571171-a707bf2683da',
  philosophyHero: 'photo-1577221084712-45b0445d2b00',
  trainingHero: 'photo-1548690312-e3b507d8c110',
  grit: 'photo-1574680096145-d05b474e2155',

  portrait1: 'photo-1612928414075-bc722ade44f1',
  portrait2: 'photo-1724128190018-00a98875f7bc',
  portrait3: 'photo-1761882619891-6529ff92df0a',
} as const;
