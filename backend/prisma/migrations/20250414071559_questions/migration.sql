/*
  Warnings:

  - The `questions` column on the `Interviews` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "Interviews" DROP COLUMN "questions",
ADD COLUMN     "questions" TEXT[];
