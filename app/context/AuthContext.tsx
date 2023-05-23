"use client";
import React from "react";
import { onAuthStateChanged, getAuth } from "firebase/auth";
import firebase_app from "@/app/firebase/config";
import Loader from "@/app/components/Loader/Loader";
import styles from "./styles.module.css";

const auth = getAuth(firebase_app);

export const AuthContext = React.createContext({});

export const useAuthContext = () => React.useContext(AuthContext);

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = React.useState(null);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  return (
    <AuthContext.Provider value={{ user }}>
      {loading ? (
        <main className={styles.main}>
          <div className={styles.text_content}>
            <h5>Welcome to Svileo</h5>
            <p>Please wait while we verify your Authentication Status</p>
          </div>
          <Loader />
        </main>
      ) : (
        children
      )}
    </AuthContext.Provider>
  );
};
