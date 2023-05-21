"use client";
import styles from "./backBtn.module.css";
import { useRouter } from "next/router";
import { BsArrowLeft } from "react-icons/bs";

interface btnProps {
  className?: string;
}

export default function BackButton({ className }: btnProps) {
  const router = useRouter();

  return (
    <button
      className={`${styles.back_button} ${className}`}
      onClick={() => {
        router.back();
      }}
    >
      <BsArrowLeft className={`${styles.btn_icon} me-1`} />
      Back
    </button>
  );
}
