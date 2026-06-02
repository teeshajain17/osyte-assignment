import { Injectable } from '@nestjs/common';

import { db } from '../database/drizzle';
import { eq } from 'drizzle-orm';
import { accounts } from '../database/schema';
import { portfolios } from '../database/schema';

@Injectable()
export class PortfolioService {
  async create(data: any) {
    const result = await db.insert(portfolios).values(data).returning();

    return result[0];
  }
  async findAllNPlusOne() {
    const portfolioRows = await db.select().from(portfolios);

    const result: any[] = [];

    for (const portfolio of portfolioRows) {
      const account = await db
        .select()
        .from(accounts)
        .where(eq(accounts.id, portfolio.clientAccountId));

      result.push({
        ...portfolio,
        clientAccount: account[0] ?? null,
      });
    }

    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return result;
  }
}
