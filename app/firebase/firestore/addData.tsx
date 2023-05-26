import firebase_app from "../config";
import { getFirestore, doc, setDoc } from "firebase/firestore";

const db = getFirestore(firebase_app);
export default async function addData(
  collection: string,
  id: string,
  data: any
) {
  let result: any = null;
  let error: any = null;

  try {
    result = await setDoc(doc(db, collection, id), data, {
      merge: true,
    });
  } catch (e) {
    error = e;
  }

  return { result, error };
}
