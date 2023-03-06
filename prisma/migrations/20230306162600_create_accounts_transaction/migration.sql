/*
  Warnings:

  - You are about to drop the column `expense` on the `Profile` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Profile" DROP COLUMN "expense";

-- CreateTable
CREATE TABLE "Accounts" (
    "id" SERIAL NOT NULL,
    "expense" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "debt" JSONB NOT NULL,
    "spent" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "transactions" INTEGER[],
    "userId" INTEGER NOT NULL,

    CONSTRAINT "Accounts_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "transactions" (
    "id" SERIAL NOT NULL,
    "payer" INTEGER NOT NULL,
    "amount" DOUBLE PRECISION NOT NULL,
    "payee" JSONB NOT NULL,
    "time" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "transactions_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Accounts_userId_key" ON "Accounts"("userId");

-- AddForeignKey
ALTER TABLE "Accounts" ADD CONSTRAINT "Accounts_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
