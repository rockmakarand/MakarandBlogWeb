import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBONirP08K_PP7y3v9t5SU-ed9u2l51Y5g",
    authDomain: "budgetapp-9d755.firebaseapp.com",
    projectId: "budgetapp-9d755",
    storageBucket: "budgetapp-9d755.appspot.com",
    messagingSenderId: "274152331325",
    appId: "1:274152331325:web:61de23aa21fe91efaf3254",
    measurementId: "G-35KRRL0DXG"

};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();