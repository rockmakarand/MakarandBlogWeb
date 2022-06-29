/* eslint-disable no-unused-vars */
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAP0XQ44gF3bPMUFDnaG2PpzvEdIbRhU_4",
  authDomain: "oooo-b8779.firebaseapp.com",
  projectId: "oooo-b8779",
  storageBucket: "oooo-b8779.appspot.com",
  messagingSenderId: "1091398772227",
  appId: "1:1091398772227:web:112704f473b49187c9d036",
  measurementId: "G-SF3J4JVE8E"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage();


export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
