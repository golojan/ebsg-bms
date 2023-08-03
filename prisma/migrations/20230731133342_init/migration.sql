-- AlterTable
ALTER TABLE "Log" ALTER COLUMN "dump" DROP DEFAULT;

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "avatar" TEXT DEFAULT '/img/avatar.png';
