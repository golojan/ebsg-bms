/*
  Warnings:

  - The values [ADMIN,USER,SUPERADMIN,DEVELOPER] on the enum `Role` will be removed. If these variants are still used in the database, this will fail.
  - A unique constraint covering the columns `[mobile]` on the table `User` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "Role_new" AS ENUM ('user', 'admin', 'superAdmin', 'developer');
ALTER TABLE "User" ALTER COLUMN "role" DROP DEFAULT;
ALTER TABLE "User" ALTER COLUMN "role" TYPE "Role_new" USING ("role"::text::"Role_new");
ALTER TABLE "RolePermissions" ALTER COLUMN "Role" TYPE "Role_new" USING ("Role"::text::"Role_new");
ALTER TYPE "Role" RENAME TO "Role_old";
ALTER TYPE "Role_new" RENAME TO "Role";
DROP TYPE "Role_old";
ALTER TABLE "User" ALTER COLUMN "role" SET DEFAULT 'user';
COMMIT;

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "mobile" TEXT,
ALTER COLUMN "role" SET DEFAULT 'user';

-- CreateIndex
CREATE UNIQUE INDEX "User_mobile_key" ON "User"("mobile");
