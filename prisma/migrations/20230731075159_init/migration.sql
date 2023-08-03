-- AlterTable
ALTER TABLE "Mda" ADD COLUMN     "registeredById" INTEGER;

-- AddForeignKey
ALTER TABLE "Mda" ADD CONSTRAINT "Mda_registeredById_fkey" FOREIGN KEY ("registeredById") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
