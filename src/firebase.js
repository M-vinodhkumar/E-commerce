// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyAbirhwn_EVcuj2Gn2biWE2IVDUP6cIcf4",
    authDomain: "camera-collection-3cf6f.firebaseapp.com",
    projectId: "camera-collection-3cf6f",
    storageBucket: "camera-collection-3cf6f.firebasestorage.app",
    messagingSenderId: "326911580891",
    appId: "1:326911580891:web:b714eb10f37e200c394afe",
    measurementId: "G-0JER1WQNHH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
