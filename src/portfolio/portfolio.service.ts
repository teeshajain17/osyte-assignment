import { Injectable } from '@nestjs/common';

import { db } from '../database/drizzle';

import { portfolios } from '../database/schema';

@Injectable()
export class PortfolioService {
  async create(data: any) {
    const result = await db.insert(portfolios).values(data).returning();

    return result[0];
  }
}
