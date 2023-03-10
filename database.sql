-- currently database name is in pool.js
-- It is "database--name"

-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!

CREATE TABLE "draft" (
	"id" SERIAL PRIMARY KEY,
	"title" VARCHAR (50),
	"date" DATE NOT NULL,
	"note" VARCHAR (2555),
	"rating" SMALLINT
);