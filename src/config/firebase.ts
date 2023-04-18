// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDeOAlzUs134ARf83f50l1QIHTzvyrbEq4",
  authDomain: "socialmedia-project-8f0e0.firebaseapp.com",
  projectId: "socialmedia-project-8f0e0",
  storageBucket: "socialmedia-project-8f0e0.appspot.com",
  messagingSenderId: "320841553985",
  appId: "1:320841553985:web:eefd5516edde79c348cec0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const povider = new GoogleAuthProvider();
