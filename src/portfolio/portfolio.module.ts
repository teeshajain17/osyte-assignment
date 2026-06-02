import { Module } from '@nestjs/common';

import { PortfolioController } from './portfolio.controller';
import { PortfolioService } from './portfolio.service';
import { PlanConfigService } from 'src/config/src/config/plan-config.service';
import { PlanFeatureGuard } from 'src/guards/plan-feature.guard';

@Module({
  controllers: [PortfolioController],

  providers: [PortfolioService, PlanConfigService, PlanFeatureGuard],
})
export class PortfolioModule {}
