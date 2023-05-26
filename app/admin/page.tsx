"use client";
import React, { useEffect } from "react";
import { useAuthContext } from "@/app/context/AuthContext";
import { useRouter } from "next/navigation"; // Corrected import
import styles from "./page.module.css";

interface User {
  email: string;
  // Add other properties as needed
}

export default function Page(): JSX.Element {
  const { user }: { user: User | null } = useAuthContext(); // Added type annotation for user
  const router = useRouter();

  useEffect(() => {
    if (user == null) router.push("/");
  }, [user]);

  return (
    <main className={styles.main}>
      <h1>Logged In</h1>
      <p>Email: {user?.email}</p> {/* Added optional chaining operator */}
    </main>
  );
}
