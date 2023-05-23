"use client";
import React from "react";
import styles from "./page.module.css";
import { BsArrowLeft } from "react-icons/bs";
import { useRouter } from "next/navigation";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Layout({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  return (
    <main
      className={`${styles.main} d-flex flex-column align-items-center justify-content-center`}
    >
      <button
        className={`${styles.back_button}`}
        onClick={() => {
          router.back();
        }}
      >
        <BsArrowLeft className={`${styles.back_button_arrow} me-1`} />
        <i>back</i>
      </button>
      <div
        className={`d-flex align-items-center justify-content-center ${styles.content_wrapper}`}
      >
        <div>
          <h1 className={styles.main_text}>
            Get Ready
            <br />
            for Unlimited
            <br />
            Thrills
          </h1>
          <p className={styles.desc}>
            Embrace the excitement and bet on your instincts
          </p>
        </div>
        {children}
      </div>
    </main>
  );
}
