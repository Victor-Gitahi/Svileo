"use client";
import React, { FormEvent } from "react";
import signUp from "@/app/firebase/auth/signup";
import { useRouter } from "next/navigation";
import styles from "./page.module.css";
import Link from "next/link";

import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Page() {
  const [email, setEmail] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);
  const [password, setPassword] = React.useState("");
  const [formData, setFormData] = React.useState({
    email: "",
    password: "",
  });
  const router = useRouter();

  const handleForm = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);
    toast.info("Registering User.", {
      autoClose: 3000,
    });
    const { result, error, errCode } = await signUp(email, password);

    if (error) {
      if (errCode == "auth/email-already-in-use") {
        toast.error("This Email is Already in use, Please try another one.", {
          autoClose: 5000,
        });
        setFormData({
          email: "",
          password: "",
        });
      } else {
        toast.error(error, {
          autoClose: 5000,
        });
        setFormData({
          email: "",
          password: "",
        });
      }
    } else {
      // else successful
      toast.success("Registration Successful, Please wait ");
      return router.push("/auth/login");
    }
  };
  return (
    <>
      {isLoading && <ToastContainer autoClose={false} />}
      <form onSubmit={handleForm} className={`${styles.form}`}>
        <h5 className={`${styles.form_header}`}>Create Account</h5>
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
            defaultValue={formData.email}
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
            defaultValue={formData.password}
          ></input>
        </div>
        <button
          type="submit"
          className={`${styles.submit_button} btn btn-primary mt-3`}
        >
          Submit
        </button>

        <small className={styles.login_link}>
          Already have an account? <Link href={"/auth/login"}>Login</Link>
        </small>
        <div className={`${styles.ellipse} ${styles.auth_ellipse}`}></div>
      </form>
    </>
  );
}
