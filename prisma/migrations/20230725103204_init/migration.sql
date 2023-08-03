-- AlterTable
ALTER TABLE "User" ADD COLUMN     "emailNotix" BOOLEAN DEFAULT false,
ADD COLUMN     "inboxNotix" BOOLEAN DEFAULT false,
ADD COLUMN     "loginNotix" BOOLEAN DEFAULT false,
ADD COLUMN     "pushNotix" BOOLEAN DEFAULT false,
ADD COLUMN     "smsNotix" BOOLEAN DEFAULT false,
ALTER COLUMN "isNew" SET DEFAULT false;

-- CreateTable
CREATE TABLE "Integrations" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Integrations_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Integrations_name_key" ON "Integrations"("name");
