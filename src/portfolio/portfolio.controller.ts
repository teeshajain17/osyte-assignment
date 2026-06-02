import { Controller, Post, Body, Get } from '@nestjs/common';

import { CreatePortfolioSchema } from './portfolio.schema';

import { ZodValidationPipe } from '../common/zod-validation.pipe';
import { PortfolioService } from './portfolio.service';
import { Param, UseGuards, NotImplementedException } from '@nestjs/common';

import { RequireFeature } from '../guards/require-feature.decorator';

import { PlanFeatureGuard } from '../guards/plan-feature.guard';

import { MockJwtGuard } from '../guards/mock-jwt.guard';
@Controller('portfolios')
export class PortfolioController {
  constructor(private readonly portfolioService: PortfolioService) {}
  @Post()
  async create(
    @Body(new ZodValidationPipe(CreatePortfolioSchema))
    body: any,
  ) {
    return this.portfolioService.create(body);
  }

  @Get()
  findAll() {
    return this.portfolioService.findAllOptimized();
  }

  @Post(':id/rebalance')
  @UseGuards(MockJwtGuard, PlanFeatureGuard)
  @RequireFeature('rebalancing')
  rebalance(@Param('id') id: string) {
    throw new NotImplementedException(`Rebalancing portfolio ${id}`);
  }
}
