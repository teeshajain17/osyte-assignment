import { Module } from '@nestjs/common';

import { PortfolioModule } from './portfolio/portfolio.module';

import { PlanConfigService } from './config/src/config/plan-config.service';
@Module({
  imports: [PortfolioModule],
  providers: [PlanConfigService],
})
export class AppModule {}
