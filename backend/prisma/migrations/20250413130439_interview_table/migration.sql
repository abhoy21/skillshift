/*
  Warnings:

  - Added the required column `level` to the `Interviews` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Interviews" ADD COLUMN     "level" TEXT NOT NULL;
