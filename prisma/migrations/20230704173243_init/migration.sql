-- CreateEnum
CREATE TYPE "Role" AS ENUM ('ADMIN', 'USER', 'SUPERADMIN', 'DEVELOPER');

-- CreateTable
CREATE TABLE "Log" (
    "id" SERIAL NOT NULL,
    "level" TEXT NOT NULL DEFAULT 'info',
    "log" TEXT NOT NULL,
    "userId" INTEGER,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Log_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "firstName" TEXT,
    "lastName" TEXT,
    "email" TEXT,
    "password" TEXT,
    "qrcode" TEXT,
    "enableOtp" BOOLEAN DEFAULT true,
    "mdaId" INTEGER,
    "lastLogin" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "lastSeen" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Mda" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "mdaCode" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Mda_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "RolePermissions" (
    "Role" "Role" NOT NULL,
    "c" BOOLEAN NOT NULL DEFAULT false,
    "r" BOOLEAN NOT NULL DEFAULT false,
    "u" BOOLEAN NOT NULL DEFAULT false,
    "d" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "RolePermissions_pkey" PRIMARY KEY ("Role")
);

-- CreateTable
CREATE TABLE "Module" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Module_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "User_qrcode_key" ON "User"("qrcode");

-- CreateIndex
CREATE UNIQUE INDEX "Mda_name_key" ON "Mda"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Mda_mdaCode_key" ON "Mda"("mdaCode");

-- CreateIndex
CREATE UNIQUE INDEX "RolePermissions_Role_key" ON "RolePermissions"("Role");

-- CreateIndex
CREATE UNIQUE INDEX "Module_name_key" ON "Module"("name");

-- AddForeignKey
ALTER TABLE "Log" ADD CONSTRAINT "Log_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_mdaId_fkey" FOREIGN KEY ("mdaId") REFERENCES "Mda"("id") ON DELETE SET NULL ON UPDATE CASCADE;
