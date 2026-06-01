import { Injectable } from '@nestjs/common';
import * as fs from 'fs';
import * as path from 'path';

import { PlanConfigSchema, PlanConfig } from 'src/config/plan-config.schema';

@Injectable()
export class PlanConfigService {
  private config: PlanConfig;

  constructor() {
    const configPath = path.join(
      process.cwd(),
      'src',
      'config',
      'plan.config.json',
    );

    const result = PlanConfigSchema.safeParse(
      JSON.parse(fs.readFileSync(configPath, 'utf8')),
    );
    if (!result.success) {
      console.error(JSON.stringify(result.error.format(), null, 2));

      process.exit(1);
    }

    this.config = result.data;
  }

  isFeatureEnabled(tier: string, feature: string): boolean {
    return (
      this.config[tier as keyof PlanConfig]?.features.includes(feature) ?? false
    );
  }

  getPortfolioLimit(tier: string): number {
    return this.config[tier as keyof PlanConfig]?.maxPortfolios ?? 0;
  }
}
