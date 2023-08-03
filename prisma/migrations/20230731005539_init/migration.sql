-- DropIndex
DROP INDEX "Budget_year_key";

-- AlterTable
ALTER TABLE "Budget" ALTER COLUMN "year" SET DEFAULT 2023;
