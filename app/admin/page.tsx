"use client";
import React from "react";
import { useAuthContext } from "@/app/context/AuthContext";
import { useRouter } from "next/navigation";

export default function Page() {
  const { user } = useAuthContext();
  const router = useRouter();

  React.useEffect(() => {
    if (user == null) router.push("/");
  }, [user]);

  return <h1>You're seeing this because you're logged in</h1>;
}
