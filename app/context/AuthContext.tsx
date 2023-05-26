"use client";
import React, { useState } from "react";
import { onAuthStateChanged, getAuth } from "firebase/auth";
import firebase_app from "@/app/firebase/config";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loader from "@/app/components/Loader/Loader";
import styles from "./styles.module.css";

const auth = getAuth(firebase_app);

interface User {
  email: string;
}

export const AuthContext = React.createContext<{
  user: User | null;
  isLoggedIn: boolean;
}>({ user: null, isLoggedIn: false });

export const useAuthContext = () => React.useContext(AuthContext);

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = React.useState(null);
  const [loading, setLoading] = React.useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  React.useEffect(() => {
    const id = toast.loading("Please wait while we verify your Auth status");

    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        setIsLoggedIn(true);
        toast.update(id, {
          render: "Signed In",
          type: "success",
          isLoading: false,
        });
      } else {
        toast.update(id, {
          render: "Redirecting to Auth",
          type: "info",
          isLoading: false,
        });
        setUser(null);
        setIsLoggedIn(false);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  return (
    <AuthContext.Provider value={{ user, isLoggedIn }}>
      {loading ? (
        <main className={styles.main}>
          <div className={styles.text_content}>
            <h5>Welcome to Svileo</h5>
            <p>Please wait while we verify your Authentication Status</p>
          </div>
          <ToastContainer />
        </main>
      ) : (
        children
      )}
    </AuthContext.Provider>
  );
};
