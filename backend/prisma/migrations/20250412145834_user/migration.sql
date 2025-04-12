/*
  Warnings:

  - You are about to drop the column `cv` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `photo` on the `User` table. All the data in the column will be lost.
  - Added the required column `profilePicture` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `resume` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "User" DROP COLUMN "cv",
DROP COLUMN "photo",
ADD COLUMN     "profilePicture" TEXT NOT NULL,
ADD COLUMN     "resume" TEXT NOT NULL;
