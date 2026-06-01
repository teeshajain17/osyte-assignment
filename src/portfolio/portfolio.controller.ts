/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { Controller, Post, Body } from '@nestjs/common';

import { CreatePortfolioSchema } from './portfolio.schema';

import { ZodValidationPipe } from '../common/zod-validation.pipe';

@Controller('portfolios')
export class PortfolioController {
  @Post()
  create(
    @Body(new ZodValidationPipe(CreatePortfolioSchema))
    body: any,
  ) {
    return {
      message: 'Portfolio created',
      data: body,
    };
  }
}
