"use client";
import Agent from "@/components/interview/Agent";
import InterviewNavbar from "@/components/interview/Navbar";
import { getRandomInterviewCover } from "@/lib/utils";
import axios from "axios";
import Image from "next/image";
import { redirect } from "next/navigation";
import { useEffect, useState } from "react";
import DisplayTechIcons from "./DisplayTechIcons";

export default function InterviewPageComponent({
  id,
}: {
  id: string;
}): React.JSX.Element {
  const [interviews, setInterviews] = useState<InterviewResponseType[]>();
  const [interviewbyId, setInterviewById] = useState<InterviewResponseType>();
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) return;

    const fetchData = async () => {
      try {
        const [fetchUserInterviews, fetchInterviewById] = await Promise.all([
          axios.get<{
            interviews: InterviewResponseType[];
          }>(
            `${process.env.NEXT_PUBLIC_HTTP_URL}/api/v1/interview/get-interviews`,
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

        if (fetchUserInterviews.status === 200) {
          setInterviews(fetchUserInterviews.data.interviews);
        }

        if (fetchInterviewById.status === 200) {
          setInterviewById(fetchInterviewById.data.interview);
        }
      } catch (error) {
        console.log("Error fetching interviews:", error);
        redirect("/interview");
      }
    };

    fetchData();
  }, [id]);
  return (
    <div className="min-h-screen pattern root-layout">
      <InterviewNavbar />
      <div className="flex flex-row gap-4 justify-between">
        <div className="flex flex-row gap-4 items-center max-sm:flex-col">
          <div className="flex flex-row gap-4 items-center">
            <Image
              src={getRandomInterviewCover()}
              alt="cover-image"
              width={40}
              height={40}
              className="rounded-full object-cover size-[40px]"
            />
            <h3 className="capitalize">{interviewbyId?.role} Interview</h3>
          </div>

          <DisplayTechIcons techStack={interviewbyId?.techstack as string[]} />
        </div>

        <p className="bg-dark-200 px-4 py-2 rounded-lg h-fit">
          {interviewbyId?.type}
        </p>
      </div>

      <Agent questions={interviews?.[0]?.questions} interviewId={id} />
    </div>
  );
}
