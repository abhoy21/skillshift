"use client";

import axios from "axios";
import InterviewCard from "./InterviewCard";
import { useEffect, useState } from "react";

export default function InterviewList(): React.JSX.Element {
  const [interviews, setInterviews] = useState<InterviewResponseType[]>([]);
  const [allInterviews, setAllInterviews] = useState<InterviewResponseType[]>(
    []
  );
  console.log("interview id", interviews[0]?.id);
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) return;

    const fetchData = async () => {
      try {
        const [userInterviewsResponse, allInterviewsResponse] =
          await Promise.all([
            axios.get<{ interviews: InterviewResponseType[] }>(
              `${process.env.NEXT_PUBLIC_HTTP_URL}/api/v1/interview/get-interviews`,
              {
                headers: {
                  "Content-Type": "application/json",
                  Authorization: `Bearer ${token}`,
                },
              }
            ),
            axios.get<{ interviews: InterviewResponseType[] }>(
              `${process.env.NEXT_PUBLIC_HTTP_URL}/api/v1/interview/get-all-interviews`,
              {
                headers: {
                  "Content-Type": "application/json",
                  Authorization: `Bearer ${token}`,
                },
              }
            ),
          ]);

        if (userInterviewsResponse.status === 200) {
          setInterviews(userInterviewsResponse.data.interviews);
        }

        if (allInterviewsResponse.status === 200) {
          setAllInterviews(allInterviewsResponse.data.interviews);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  return (
    <div className="root-layout">
      <section className="flex flex-col gap-6 mt-8">
        <h2 className="text-lg sm:text-3xl lg:text-5xl tracking-tighter font-montserrat font-bold text-foreground dark:text-light-100 leading-tight">
          Your Interviews <span className="text-accent">+</span>
        </h2>
        <div className="interviews-section">
          {interviews?.length > 0 ? (
            interviews?.map((interview) => (
              <InterviewCard
                key={interview.id}
                interviewId={interview.id}
                role={interview.role}
                type={interview.type}
                techstack={interview.techstack}
                createdAt={interview.createdAt}
              />
            ))
          ) : (
            <p className="text-center text-light-100 text-xl">
              You haven&apos;t taken any interviews yet. Take one now to improve
              your skills.
            </p>
          )}
        </div>
      </section>
      <section className="flex flex-col gap-6 mt-8">
        <h2>Take an Interview</h2>
        <div className="interviews-section">
          {allInterviews?.length > 0 ? (
            allInterviews?.map((interview) => (
              <InterviewCard
                key={interview.id}
                interviewId={interview.id}
                role={interview.role}
                type={interview.type}
                techstack={interview.techstack}
                createdAt={interview.createdAt}
              />
            ))
          ) : (
            <p className="text-center text-light-100 text-xl">
              No interviews found
            </p>
          )}
        </div>
      </section>
    </div>
  );
}
