// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementID is optional
const firebaseConfig = {
  apiKey: "AIzaSyAo5-0oEJrPJeS_4tBx3kgvNRzxMSZnkyc",
  authDomain: "quizlet-clone-a76fe.firebaseapp.com",
  projectId: "quizlet-clone-a76fe",
  storageBucket: "quizlet-clone-a76fe.appspot.com",
  messagingSenderId: "324235542263",
  appId: "1:324235542263:web:bd28a4cee4ec71b9f99df2",
  measurementId: "G-HV9CZ9BRPR"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();