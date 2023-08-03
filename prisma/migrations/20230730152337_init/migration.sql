/*
  Warnings:

  - You are about to drop the column `code` on the `Budget` table. All the data in the column will be lost.
  - You are about to drop the column `description` on the `Budget` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `Budget` table. All the data in the column will be lost.
  - You are about to drop the column `status` on the `Budget` table. All the data in the column will be lost.
  - You are about to drop the column `approvedBudget_2020` on the `Mda` table. All the data in the column will be lost.
  - You are about to drop the column `approvedBudget_2021` on the `Mda` table. All the data in the column will be lost.
  - You are about to drop the column `approvedBudget_2022` on the `Mda` table. All the data in the column will be lost.
  - You are about to drop the column `approvedBudget_2023` on the `Mda` table. All the data in the column will be lost.
  - You are about to drop the column `approvedBudget_2024` on the `Mda` table. All the data in the column will be lost.
  - You are about to drop the column `approvedBudget_2025` on the `Mda` table. All the data in the column will be lost.
  - You are about to drop the column `capitalTotal` on the `Mda` table. All the data in the column will be lost.
  - You are about to drop the column `expenditureTotal` on the `Mda` table. All the data in the column will be lost.
  - You are about to drop the column `fullYearActual_2020` on the `Mda` table. All the data in the column will be lost.
  - You are about to drop the column `fullYearActual_2021` on the `Mda` table. All the data in the column will be lost.
  - You are about to drop the column `fullYearActual_2022` on the `Mda` table. All the data in the column will be lost.
  - You are about to drop the column `fullYearActual_2023` on the `Mda` table. All the data in the column will be lost.
  - You are about to drop the column `fullYearActual_2024` on the `Mda` table. All the data in the column will be lost.
  - You are about to drop the column `fullYearActual_2025` on the `Mda` table. All the data in the column will be lost.
  - You are about to drop the column `overheadTotal` on the `Mda` table. All the data in the column will be lost.
  - You are about to drop the column `performanceBudget_2020` on the `Mda` table. All the data in the column will be lost.
  - You are about to drop the column `performanceBudget_2021` on the `Mda` table. All the data in the column will be lost.
  - You are about to drop the column `performanceBudget_2022` on the `Mda` table. All the data in the column will be lost.
  - You are about to drop the column `performanceBudget_2023` on the `Mda` table. All the data in the column will be lost.
  - You are about to drop the column `performanceBudget_2024` on the `Mda` table. All the data in the column will be lost.
  - You are about to drop the column `performanceBudget_2025` on the `Mda` table. All the data in the column will be lost.
  - You are about to drop the column `personalTotal` on the `Mda` table. All the data in the column will be lost.
  - You are about to drop the column `recurrentTotal` on the `Mda` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[year]` on the table `Budget` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "Budget_code_key";

-- AlterTable
ALTER TABLE "Budget" DROP COLUMN "code",
DROP COLUMN "description",
DROP COLUMN "name",
DROP COLUMN "status",
ADD COLUMN     "approvedBudget" DOUBLE PRECISION NOT NULL DEFAULT 0.00,
ADD COLUMN     "capitalTotal" DOUBLE PRECISION NOT NULL DEFAULT 0.00,
ADD COLUMN     "expenditureTotal" DOUBLE PRECISION NOT NULL DEFAULT 0.00,
ADD COLUMN     "fullYearActual" DOUBLE PRECISION NOT NULL DEFAULT 0.00,
ADD COLUMN     "overheadTotal" DOUBLE PRECISION NOT NULL DEFAULT 0.00,
ADD COLUMN     "ownerMdaId" INTEGER,
ADD COLUMN     "performanceBudget" DOUBLE PRECISION NOT NULL DEFAULT 0.00,
ADD COLUMN     "personalTotal" DOUBLE PRECISION NOT NULL DEFAULT 0.00,
ADD COLUMN     "recurrentTotal" DOUBLE PRECISION NOT NULL DEFAULT 0.00,
ALTER COLUMN "year" DROP DEFAULT;

-- AlterTable
ALTER TABLE "Mda" DROP COLUMN "approvedBudget_2020",
DROP COLUMN "approvedBudget_2021",
DROP COLUMN "approvedBudget_2022",
DROP COLUMN "approvedBudget_2023",
DROP COLUMN "approvedBudget_2024",
DROP COLUMN "approvedBudget_2025",
DROP COLUMN "capitalTotal",
DROP COLUMN "expenditureTotal",
DROP COLUMN "fullYearActual_2020",
DROP COLUMN "fullYearActual_2021",
DROP COLUMN "fullYearActual_2022",
DROP COLUMN "fullYearActual_2023",
DROP COLUMN "fullYearActual_2024",
DROP COLUMN "fullYearActual_2025",
DROP COLUMN "overheadTotal",
DROP COLUMN "performanceBudget_2020",
DROP COLUMN "performanceBudget_2021",
DROP COLUMN "performanceBudget_2022",
DROP COLUMN "performanceBudget_2023",
DROP COLUMN "performanceBudget_2024",
DROP COLUMN "performanceBudget_2025",
DROP COLUMN "personalTotal",
DROP COLUMN "recurrentTotal";

-- CreateTable
CREATE TABLE "_MdaBudgets" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_MdaBudgets_AB_unique" ON "_MdaBudgets"("A", "B");

-- CreateIndex
CREATE INDEX "_MdaBudgets_B_index" ON "_MdaBudgets"("B");

-- CreateIndex
CREATE UNIQUE INDEX "Budget_year_key" ON "Budget"("year");

-- AddForeignKey
ALTER TABLE "Budget" ADD CONSTRAINT "Budget_ownerMdaId_fkey" FOREIGN KEY ("ownerMdaId") REFERENCES "Mda"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_MdaBudgets" ADD CONSTRAINT "_MdaBudgets_A_fkey" FOREIGN KEY ("A") REFERENCES "Budget"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_MdaBudgets" ADD CONSTRAINT "_MdaBudgets_B_fkey" FOREIGN KEY ("B") REFERENCES "Mda"("id") ON DELETE CASCADE ON UPDATE CASCADE;
