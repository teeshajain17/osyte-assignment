import { Controller, Post, Body, Get } from '@nestjs/common';

import { CreatePortfolioSchema } from './portfolio.schema';

import { ZodValidationPipe } from '../common/zod-validation.pipe';
import { PortfolioService } from './portfolio.service';

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
}
