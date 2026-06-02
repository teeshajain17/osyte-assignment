import { Controller, Get } from '@nestjs/common';
import { zodToJsonSchema } from 'zod-to-json-schema';

import { CreatePortfolioSchema } from '../portfolio/portfolio.schema';

@Controller('meta')
export class MetaController {
  @Get('schema/portfolio')
  getPortfolioSchema() {
    return zodToJsonSchema(CreatePortfolioSchema, 'Portfolio');
  }
}
