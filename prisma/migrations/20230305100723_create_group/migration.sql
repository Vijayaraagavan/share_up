-- AlterTable
ALTER TABLE "Profile" ADD COLUMN     "expense" DOUBLE PRECISION NOT NULL DEFAULT 0;

-- CreateTable
CREATE TABLE "Group" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "uid" TEXT NOT NULL,
    "members" INTEGER[],
    "admin" INTEGER NOT NULL,
    "requests" INTEGER[],

    CONSTRAINT "Group_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "GroupInfo" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "totalExpense" DOUBLE PRECISION NOT NULL,
    "groupId" INTEGER NOT NULL,

    CONSTRAINT "GroupInfo_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "GroupInfo_groupId_key" ON "GroupInfo"("groupId");

-- AddForeignKey
ALTER TABLE "GroupInfo" ADD CONSTRAINT "GroupInfo_groupId_fkey" FOREIGN KEY ("groupId") REFERENCES "Group"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
