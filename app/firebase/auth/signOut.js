import firebase from "firebase/app";


export default async function signOut() {
  try {
    await firebase.auth.signOut();
  } catch (error) {
    console.log(error);
  }
}