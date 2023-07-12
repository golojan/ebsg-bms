-- AlterTable
ALTER TABLE "User" ADD COLUMN     "isNew" BOOLEAN DEFAULT true,
ALTER COLUMN "enableOtp" SET DEFAULT false;
