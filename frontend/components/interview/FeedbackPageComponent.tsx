"use client";
import dayjs from "dayjs";
import Image from "next/image";
import { redirect } from "next/navigation";
import React, { useEffect, useState } from "react";
import { Button } from "../ui/button";
import Link from "next/link";

export default function FeddbackComponent({
  id,
}: {
  id: string;
}): React.JSX.Element {
  const [feedback, setFeedback] = useState<FeedbackResponsetype>();
  const [interview, setInterview] = useState<InterviewResponseType>();
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) return;

    const fetchData = async () => {
      try {
        const [fetchInterviewFeedback, fetchInterviewById] = await Promise.all([
          axios.get<{
            interviews: FeedbackResponsetype;
          }>(
            `${process.env.NEXT_PUBLIC_HTTP_URL}/api/v1/interview/get-interview-Feedback?interviewId=${id}`,
            {
              headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
              },
            }
          ),
          axios.get<{ interview: InterviewResponseType }>(
            `${process.env.NEXT_PUBLIC_HTTP_URL}/api/v1/interview/get-interview-id?interviewId=${id}`,
            {
              headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
              },
            }
          ),
        ]);

        if (fetchInterviewFeedback.status === 200) {
          setFeedback(fetchInterviewFeedback.data.interviews);
        }

        if (fetchInterviewById.status === 200) {
          setInterview(fetchInterviewById.data.interview);
        }
      } catch (error) {
        console.log("Error fetching interviews:", error);
        redirect("/interview");
      }
    };

    fetchData();
  }, [id]);
  return (
    <section className="section-feedback">
      <div className="flex flex-row juystify-center">
        <h1 className="text-4xl font-semibold">Feedback on the Interview </h1>
        <span className="capitalize">{interview?.role}</span> Interview
      </div>

      <div className="flex flex-row justify-center">
        <div className="flex flex-row gap-4">
          <div className="flex flex-row gap-2 items-center">
            <Image src="/star.svg" alt="star" width={24} height={24} />
            <p>
              Overall Impression:{" "}
              <span className="text-primary-200 font-bold">
                {feedback?.totalScore}
              </span>
              /100
            </p>
          </div>

          <div className="flex flex-row gap-2">
            <Image src="/calender.svg" alt="star" width={24} height={24} />
            <p>
              {" "}
              {feedback?.createdAt
                ? dayjs(feedback.createdAt).format("MMM D, YYYY h:mm A")
                : "N/A"}{" "}
            </p>
          </div>
        </div>
      </div>

      <hr />

      <p>Final Assessment: {feedback?.finalAssessment}</p>

      <div className="flex flex-col gap-4">
        <h2>Breakdown of the Interview</h2>
        {feedback?.categoryScores?.map((category, index) => (
          <div key={index}>
            <p className="font-bold">
              {index + 1}. {category.name} ({category.score}/100)
            </p>
            <p>{category.comment}</p>
          </div>
        ))}
      </div>

      <div className="flex flex-col gap-3">
        <h2>Strengths</h2>
        <ul>
          {feedback?.strengths?.map((strength, index) => (
            <li key={index}>{strength}</li>
          ))}
        </ul>
      </div>

      <div className="flex flex-col gap-3">
        <h3>Areas for Improvement</h3>
        <ul>
          {feedback?.areasForImprovement?.map((area, index) => (
            <li key={index}>{area}</li>
          ))}
        </ul>
      </div>

      <div className="buttons">
        <Button className="btn-secondary flex-1">
          <Link href="/" className="flex w-full justify-center">
            <p className="text-sm font-semibold text-primary-200 text-center">
              Back to Dashboard
            </p>
          </Link>
        </Button>

        <Button className="btn-primary flex-1">
          <Link
            href={`/interview/${id}`}
            className="flex w-full justify-center"
          >
            <p className="text-sm font-semibold text-black text-center">
              Retake Interview
            </p>
          </Link>
        </Button>
      </div>
    </section>
  );
}
