import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {

  apiKey: "AIzaSyCP2Au2mi4549SxF7mvKIb5Q4fjoB7-3Qc",

  authDomain: "ocio-app-c44dc.firebaseapp.com",

  projectId: "ocio-app-c44dc",

  storageBucket: "ocio-app-c44dc.firebasestorage.app",

  messagingSenderId: "252814607368",

  appId: "1:252814607368:web:1e33ba97496f7575dd3dbd",

  measurementId: "G-DLE5JXTWXL"

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const db = getFirestore(app);
