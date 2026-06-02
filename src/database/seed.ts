import { db } from './drizzle';

import { accounts } from './schema';

async function seed() {
  await db.insert(accounts).values([
    {
      name: 'Basic Client',
      tier: 'basic',
    },

    {
      name: 'Professional Client',
      tier: 'professional',
    },

    {
      name: 'Institutional Client',
      tier: 'institutional',
    },
  ]);

  console.log('seed complete');
}

seed();
