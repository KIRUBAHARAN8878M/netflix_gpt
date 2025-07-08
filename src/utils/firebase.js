// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDMNaQ3qEArD34zES3DU6HqZoBjg5ST8QE",
  authDomain: "netflixgpt-c87fa.firebaseapp.com",
  projectId: "netflixgpt-c87fa",
  storageBucket: "netflixgpt-c87fa.firebasestorage.app",
  messagingSenderId: "649130698711",
  appId: "1:649130698711:web:e0f7ec561f64fc122b8d92",
  measurementId: "G-3YDZHHSDK0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();