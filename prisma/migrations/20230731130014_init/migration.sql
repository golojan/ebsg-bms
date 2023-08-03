/*
  Warnings:

  - The `level` column on the `Log` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - You are about to drop the column `registeredById` on the `Mda` table. All the data in the column will be lost.

*/
-- CreateEnum
CREATE TYPE "ResourceType" AS ENUM ('file', 'folder');

-- CreateEnum
CREATE TYPE "LogLevel" AS ENUM ('info', 'error', 'warning', 'debug');

-- CreateEnum
CREATE TYPE "LogAction" AS ENUM ('create', 'update', 'delete', 'read', 'login', 'logout', 'otp', 'reset', 'forgot', 'change', 'register', 'verify', 'resend', 'upload', 'download', 'share', 'move', 'copy', 'rename', 'restore', 'empty', 'lock', 'unlock', 'approve', 'reject', 'approveAll', 'rejectAll', 'appro');

-- CreateEnum
CREATE TYPE "LogTarget" AS ENUM ('system', 'user', 'mda', 'request', 'resources', 'budget', 'budgetItem', 'project', 'expenditure', 'stateFundSource', 'integration', 'module');

-- DropForeignKey
ALTER TABLE "Mda" DROP CONSTRAINT "Mda_registeredById_fkey";

-- AlterTable
ALTER TABLE "Log" ADD COLUMN     "action" "LogLevel" NOT NULL DEFAULT 'info',
ADD COLUMN     "dump" TEXT DEFAULT '',
ADD COLUMN     "target" "LogTarget" NOT NULL DEFAULT 'system',
DROP COLUMN "level",
ADD COLUMN     "level" "LogLevel" NOT NULL DEFAULT 'info',
ALTER COLUMN "log" DROP NOT NULL,
ALTER COLUMN "log" SET DEFAULT '';

-- AlterTable
ALTER TABLE "Mda" DROP COLUMN "registeredById";
