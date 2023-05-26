"use client";
import React, { useState, useEffect } from "react";
import {
  onAuthStateChanged,
  getAuth,
  User as FirebaseAuthUser,
} from "firebase/auth";
import firebase_app from "@/app/firebase/config";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loader from "@/app/components/Loader/Loader";
import styles from "./styles.module.css";

const auth = getAuth(firebase_app);

interface User {
  email: string | null;
}

export const AuthContext = React.createContext<{
  user: User | null;
  isLoggedIn: boolean;
}>({ user: null, isLoggedIn: false });

export const useAuthContext = () => React.useContext(AuthContext);

export const AuthContextProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = React.useState<User | null>(null);
  const [loading, setLoading] = React.useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const id = toast.loading("Please wait while we verify your Auth status");

    const unsubscribe = onAuthStateChanged(
      auth,
      (user: FirebaseAuthUser | null) => {
        if (user) {
          setUser({ email: user.email });
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
      }
    );

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
