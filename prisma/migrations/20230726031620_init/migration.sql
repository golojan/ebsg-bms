/*
  Warnings:

  - You are about to drop the column `parentId` on the `Resource` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Resource" DROP CONSTRAINT "Resource_parentId_fkey";

-- DropIndex
DROP INDEX "Resource_storageName_key";

-- AlterTable
ALTER TABLE "Resource" DROP COLUMN "parentId",
ADD COLUMN     "parent" TEXT,
ALTER COLUMN "storageName" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Resource" ADD CONSTRAINT "Resource_parent_fkey" FOREIGN KEY ("parent") REFERENCES "Resource"("id") ON DELETE SET NULL ON UPDATE CASCADE;
