// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCGbiAiY1a-v9mKrcI3Zfx3S8eWQaGVHYE",
    authDomain: "svileo-60f19.firebaseapp.com",
    projectId: "svileo-60f19",
    storageBucket: "svileo-60f19.appspot.com",
    messagingSenderId: "470652760908",
    appId: "1:470652760908:web:17ad15082e1d8e37dc55e9",
    measurementId: "G-L7EXBS670H"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);