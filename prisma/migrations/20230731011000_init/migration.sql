/*
  Warnings:

  - You are about to drop the column `ownerMdaId` on the `Budget` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Budget" DROP CONSTRAINT "Budget_ownerMdaId_fkey";

-- AlterTable
ALTER TABLE "Budget" DROP COLUMN "ownerMdaId",
ADD COLUMN     "mdaId" INTEGER;

-- AddForeignKey
ALTER TABLE "Budget" ADD CONSTRAINT "Budget_mdaId_fkey" FOREIGN KEY ("mdaId") REFERENCES "Mda"("id") ON DELETE SET NULL ON UPDATE CASCADE;
