/*
  Warnings:

  - You are about to drop the `_MdaBudgets` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_MdaBudgets" DROP CONSTRAINT "_MdaBudgets_A_fkey";

-- DropForeignKey
ALTER TABLE "_MdaBudgets" DROP CONSTRAINT "_MdaBudgets_B_fkey";

-- DropTable
DROP TABLE "_MdaBudgets";
