"use client";
import React, { FormEvent } from "react";
import signIn from "@/app/firebase/auth/signin";
import { useRouter } from "next/navigation";
import styles from "../page.module.css";
import Link from "next/link";

import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Page() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);
  const router = useRouter();

  const handleForm = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);
    toast.info("Please wait while we sign you in", {
      autoClose: 2000,
    });
    const { result, error, errCode } = await signIn(email, password);

    if (error) {
      if (errCode == "auth/email-already-in-use") {
        toast.error("This Email is Already in use, Please try another one.");
      }
      toast.error(error, {
        autoClose: 2000,
      });
    }

    // else successful
    toast.success("Log in Successful");
    return router.push("/admin");
  };

  return (
    <>
      {isLoading && <ToastContainer autoClose={false} />}
      <form onSubmit={handleForm} className={`${styles.form}`}>
        <h5 className={`${styles.form_header}`}>Login to your Account</h5>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            aria-describedby="emailHelp"
            onChange={(e) => setEmail(e.target.value)}
            required
            name="email"
            id="email"
            placeholder="johndoe@gmail.com"
          ></input>
          <div id="emailHelp" className="form-text">
            We&apos;ll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            onChange={(e) => setPassword(e.target.value)}
            required
            name="password"
            id="password"
            placeholder="enter a secure password"
          ></input>
        </div>
        <button
          type="submit"
          className={`${styles.submit_button} btn btn-primary mt-3`}
        >
          Submit
        </button>

        <small className={styles.login_link}>
          Don&apos;t have an account? <Link href={"/auth"}>Register</Link>
        </small>
        <div className={styles.ellipse}></div>
      </form>
    </>
  );
}
