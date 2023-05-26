"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { BsArrowLeft } from "react-icons/bs";

export default function backBtn() {
  const router = useRouter();
  return (
    <button onClick={() => router.back()}>
      <BsArrowLeft /> back to previous page
    </button>
  );
}
