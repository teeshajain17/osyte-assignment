import { z } from 'zod';

export const TierSchema = z.object({
  features: z.array(z.string()),
  maxPortfolios: z.number(),
  rateLimitPerMinute: z.number(),
});

export const PlanConfigSchema = z.object({
  institutional: TierSchema,
  professional: TierSchema,
  basic: TierSchema,
});

export type PlanConfig = z.infer<typeof PlanConfigSchema>;
