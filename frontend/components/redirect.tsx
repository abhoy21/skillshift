"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Redirect() {
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token") || null;

    if (token) {
      router.push("/interview");
    } else {
      router.push("/");
    }
  }, [router]);

  return <div></div>;
}
