// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDRD9ZZJXmaeBX_Xqvfz0-M0IH21GsNiik",
  authDomain: "music-yt-page.firebaseapp.com",
  projectId: "music-yt-page",
  storageBucket: "music-yt-page.appspot.com",
  messagingSenderId: "995987348731",
  appId: "1:995987348731:web:2510edf7d5809ea8be645e",
  measurementId: "G-CXQ0X1RP70"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);