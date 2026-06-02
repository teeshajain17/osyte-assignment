CREATE TABLE "accounts" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" varchar(255) NOT NULL,
	"tier" varchar(30) NOT NULL
);
--> statement-breakpoint
CREATE TABLE "portfolios" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" varchar(255) NOT NULL,
	"client_account_id" integer NOT NULL,
	"asset_class_focus" varchar(50) NOT NULL,
	"target_allocation" integer NOT NULL,
	"currency" varchar(3) NOT NULL,
	"inception_date" date NOT NULL
);
