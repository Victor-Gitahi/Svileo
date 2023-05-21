"use client";
import React from "react";
import signUp from "@/app/firebase/auth/signup";
import { useRouter } from "next/navigation";
import styles from "./page.module.css";
import Link from "next/link";
import { BsArrowLeft } from "react-icons/bs";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Page() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const router = useRouter();

  const handleForm = async (event) => {
    event.preventDefault();
    toast("Registering User.");
    const { result, error, errCode } = await signUp(email, password);

    if (error) {
      if (errCode == "auth/email-already-in-use") {
        toast("This Email is Already in use, Please try another one.");
      }

      return console.log(error);
    }

    // else successful
    toast("Registration Successful, Please wait ");
    return router.push("/admin");
  };

  return (
    <main
      className={`${styles.main} d-flex flex-column align-items-center justify-content-center`}
    >
      <ToastContainer />
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
            Create
            <br />
            Your
            <br />
            Account
          </h1>
          <p className={styles.desc}>
            Start the experience by signing up for an account
          </p>
          <small className={styles.login_link}>
            Already have an account? <Link href={"/"}>Login</Link>
          </small>
        </div>
        <form onSubmit={handleForm} className={`${styles.form}`}>
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
              We'll never share your email with anyone else.
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
          <div className={styles.ellipse}></div>
        </form>
      </div>
    </main>
  );
}
