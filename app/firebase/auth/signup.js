import firebase_app from "../config";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";

const auth = getAuth(firebase_app);


export default async function signUp(email, password) {
  let result = null,
    error = null,
    errCode = null;
  try {
    result = await createUserWithEmailAndPassword(auth, email, password);
    console.log("signed up user with email and password");
  } catch (e) {
    error = e.message;
    errCode = e.code;
  }

  return { result, error, errCode };
}