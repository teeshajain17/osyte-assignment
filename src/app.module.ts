import { Module } from '@nestjs/common';

import { PortfolioModule } from './portfolio/portfolio.module';

import { PlanConfigService } from './config/src/config/plan-config.service';
import { MetaModule } from './meta/meta.module';
@Module({
  imports: [PortfolioModule, MetaModule],
  providers: [PlanConfigService],
})
export class AppModule {}
