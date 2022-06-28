/* eslint-disable no-unused-vars */
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDyI5s04plPsU9SppS4HtU-F_LTdzKqBfs",
    authDomain: "fir-e-ba421.firebaseapp.com",
    projectId: "fir-e-ba421",
    storageBucket: "fir-e-ba421.appspot.com",
    messagingSenderId: "875515451744",
    appId: "1:875515451744:web:6637ca7430c975a4f42605",
    measurementId: "G-Q4CPQ8JP50"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage();


export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
