/*
  Warnings:

  - You are about to drop the column `userId` on the `Interviews` table. All the data in the column will be lost.
  - Added the required column `creatorId` to the `Interviews` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Interviews" DROP CONSTRAINT "Interviews_userId_fkey";

-- AlterTable
ALTER TABLE "Interviews" DROP COLUMN "userId",
ADD COLUMN     "creatorId" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "Feedback" (
    "id" TEXT NOT NULL,
    "totalScore" INTEGER NOT NULL,
    "strengths" TEXT[],
    "areasForImprovement" TEXT[],
    "finalAssessment" TEXT NOT NULL,
    "interviewId" TEXT NOT NULL,
    "intervieweeId" TEXT NOT NULL,

    CONSTRAINT "Feedback_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "InterviewCategoryScore" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "score" INTEGER NOT NULL,
    "comment" TEXT NOT NULL,
    "feedbackId" TEXT NOT NULL,
    "interviewsId" TEXT,

    CONSTRAINT "InterviewCategoryScore_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Interviews" ADD CONSTRAINT "Interviews_creatorId_fkey" FOREIGN KEY ("creatorId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Feedback" ADD CONSTRAINT "Feedback_interviewId_fkey" FOREIGN KEY ("interviewId") REFERENCES "Interviews"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Feedback" ADD CONSTRAINT "Feedback_intervieweeId_fkey" FOREIGN KEY ("intervieweeId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "InterviewCategoryScore" ADD CONSTRAINT "InterviewCategoryScore_feedbackId_fkey" FOREIGN KEY ("feedbackId") REFERENCES "Feedback"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "InterviewCategoryScore" ADD CONSTRAINT "InterviewCategoryScore_interviewsId_fkey" FOREIGN KEY ("interviewsId") REFERENCES "Interviews"("id") ON DELETE SET NULL ON UPDATE CASCADE;
