import { useEffect, useState } from "react";
import firebase_app from "@/app/firebase/config";
import { getAuth, onAuthStateChanged, User } from "firebase/auth";
import { useRouter } from "next/navigation";

const useAuth = () => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const auth = getAuth(firebase_app);

    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        console.log(user);
        setLoading(false);
      } else {
        setUser(null);
        setLoading(false);
        router.push("/auth/login");
      }
    });

    return () => unsubscribe();
  }, [router]);

  return { user, loading };
};

export default useAuth;
