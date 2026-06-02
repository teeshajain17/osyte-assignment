import { z } from 'zod';
import { createInsertSchema, createSelectSchema } from 'drizzle-zod';

import { portfolios } from '../database/schema';
export const CreatePortfolioSchema = z.object({
  name: z.string(),

  clientAccountId: z.number(),

  assetClassFocus: z.enum(['equity', 'fixed_income', 'multi_asset', 'private']),

  targetAllocation: z.number().min(0).max(100),

  currency: z.string().length(3),

  inceptionDate: z.string(),
});

export const UpdatePortfolioSchema = CreatePortfolioSchema.partial();

export type CreatePortfolioDto = z.infer<typeof CreatePortfolioSchema>;
export const PortfolioInsertSchema = createInsertSchema(portfolios);

export const PortfolioSelectSchema = createSelectSchema(portfolios);
