"use client";
import React from "react";
import CustomButton from "../CustomButton/CustomButton";
import styles from "./styles.module.css";
import Link from "next/link";
import firebase_app from "@/app/firebase/config";
import { getAuth, signOut } from "firebase/auth";
import { useAuthContext } from "@/app/context/AuthContext";
import customButtonStyles from "../CustomButton/CustomButton.module.css";

export default function NavBtnWrapper() {
  const { isLoggedIn } = useAuthContext();
  const auth = getAuth(firebase_app);
  const handleSignOut = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <CustomButton className={`${styles.nav_btn}  mx-3`}>Deposit</CustomButton>
      {isLoggedIn ? (
        <button
          onClick={handleSignOut}
          className={`${styles.nav_btn} ${customButtonStyles.button} btn mx-3`}
        >
          Sign out
        </button>
      ) : (
        <CustomButton className={`${styles.nav_btn} mx-3`}>
          <Link href={"/auth"} className={`${styles.btn_link}`}>
            Create Account
          </Link>
        </CustomButton>
      )}
    </>
  );
}
