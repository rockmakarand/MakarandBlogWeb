/* eslint-disable no-unused-vars */
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBEYak5pu46buVkxw__ujQdBtYJLnZgMGQ",
  authDomain: "nittjeeappweb.firebaseapp.com",
  projectId: "nittjeeappweb",
  storageBucket: "nittjeeappweb.appspot.com",
  messagingSenderId: "413035867067",
  appId: "1:413035867067:web:56d8cf09cc2e6a52fbf29e",
  measurementId: "G-7N9WHHEQZL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage();


export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
