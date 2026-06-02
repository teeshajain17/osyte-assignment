import { pgTable, serial, varchar, integer, date } from 'drizzle-orm/pg-core';

export const accounts = pgTable('accounts', {
  id: serial('id').primaryKey(),

  name: varchar('name', {
    length: 255,
  }).notNull(),

  tier: varchar('tier', {
    length: 30,
  }).notNull(),
});

export const portfolios = pgTable('portfolios', {
  id: serial('id').primaryKey(),

  name: varchar('name', {
    length: 255,
  }).notNull(),

  clientAccountId: integer('client_account_id').notNull(),

  assetClassFocus: varchar('asset_class_focus', {
    length: 50,
  }).notNull(),

  targetAllocation: integer('target_allocation').notNull(),

  currency: varchar('currency', {
    length: 3,
  }).notNull(),

  inceptionDate: date('inception_date').notNull(),
});
