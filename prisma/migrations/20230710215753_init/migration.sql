-- CreateEnum
CREATE TYPE "BudgetStatus" AS ENUM ('ACTUAL', 'APPROVED', 'REFERENCE', 'PERFORMANCE');

-- AlterTable
ALTER TABLE "Mda" ADD COLUMN     "approvedBudget_2020" DOUBLE PRECISION NOT NULL DEFAULT 0.00,
ADD COLUMN     "approvedBudget_2021" DOUBLE PRECISION NOT NULL DEFAULT 0.00,
ADD COLUMN     "approvedBudget_2022" DOUBLE PRECISION NOT NULL DEFAULT 0.00,
ADD COLUMN     "approvedBudget_2023" DOUBLE PRECISION NOT NULL DEFAULT 0.00,
ADD COLUMN     "approvedBudget_2024" DOUBLE PRECISION NOT NULL DEFAULT 0.00,
ADD COLUMN     "approvedBudget_2025" DOUBLE PRECISION NOT NULL DEFAULT 0.00,
ADD COLUMN     "fullYearActual_2020" DOUBLE PRECISION NOT NULL DEFAULT 0.00,
ADD COLUMN     "fullYearActual_2021" DOUBLE PRECISION NOT NULL DEFAULT 0.00,
ADD COLUMN     "fullYearActual_2022" DOUBLE PRECISION NOT NULL DEFAULT 0.00,
ADD COLUMN     "fullYearActual_2023" DOUBLE PRECISION NOT NULL DEFAULT 0.00,
ADD COLUMN     "fullYearActual_2024" DOUBLE PRECISION NOT NULL DEFAULT 0.00,
ADD COLUMN     "fullYearActual_2025" DOUBLE PRECISION NOT NULL DEFAULT 0.00,
ADD COLUMN     "performanceBudget_2020" DOUBLE PRECISION NOT NULL DEFAULT 0.00,
ADD COLUMN     "performanceBudget_2021" DOUBLE PRECISION NOT NULL DEFAULT 0.00,
ADD COLUMN     "performanceBudget_2022" DOUBLE PRECISION NOT NULL DEFAULT 0.00,
ADD COLUMN     "performanceBudget_2023" DOUBLE PRECISION NOT NULL DEFAULT 0.00,
ADD COLUMN     "performanceBudget_2024" DOUBLE PRECISION NOT NULL DEFAULT 0.00,
ADD COLUMN     "performanceBudget_2025" DOUBLE PRECISION NOT NULL DEFAULT 0.00;

-- CreateTable
CREATE TABLE "Budget" (
    "id" SERIAL NOT NULL,
    "code" TEXT NOT NULL,
    "name" TEXT,
    "description" TEXT,
    "year" INTEGER NOT NULL DEFAULT 2023,
    "startDate" TIMESTAMP(3),
    "endDate" TIMESTAMP(3),
    "status" "BudgetStatus" NOT NULL DEFAULT 'REFERENCE',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Budget_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "BudgetItem" (
    "id" SERIAL NOT NULL,
    "code" TEXT NOT NULL,
    "name" TEXT,
    "description" TEXT,
    "year" INTEGER NOT NULL DEFAULT 2023,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "BudgetItem_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "StateFundSource" (
    "id" SERIAL NOT NULL,
    "code" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "year" INTEGER NOT NULL DEFAULT 2023,
    "description" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "StateFundSource_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Expenditure" (
    "id" SERIAL NOT NULL,
    "code" TEXT NOT NULL,
    "description" TEXT,
    "amont" DOUBLE PRECISION NOT NULL DEFAULT 0.00,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Expenditure_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Budget_code_key" ON "Budget"("code");

-- CreateIndex
CREATE UNIQUE INDEX "BudgetItem_code_key" ON "BudgetItem"("code");

-- CreateIndex
CREATE UNIQUE INDEX "StateFundSource_code_key" ON "StateFundSource"("code");

-- CreateIndex
CREATE UNIQUE INDEX "StateFundSource_name_key" ON "StateFundSource"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Expenditure_code_key" ON "Expenditure"("code");
