/* eslint-disable no-unused-vars */
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDxj9IvzjTZmE0I6BssmchgztoomwPUjBY",
  authDomain: "chemapp-6f12b.firebaseapp.com",
  projectId: "chemapp-6f12b",
  storageBucket: "chemapp-6f12b.appspot.com",
  messagingSenderId: "671846154286",
  appId: "1:671846154286:web:01668ac432b0b6509f9fbf",
  measurementId: "G-GMTVHTQG7Z"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage();


export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
