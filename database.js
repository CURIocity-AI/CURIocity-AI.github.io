import { initializeApp } from "https://www.gstatic.com/firebasejs/11.5.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/11.5.0/firebase-firestore.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/11.5.0/firebase-auth.js";

// Firebase Configuration
const firebaseConfig = {
    apiKey: "AIzaSyB-G9TAjjwAIfbC5qCrDRrqQykl-skn3v4",
    authDomain: "curitoken-87a26.firebaseapp.com",
    projectId: "curitoken-87a26",
    storageBucket: "curitoken-87a26.firebasestorage.app",
    messagingSenderId: "698884646705",
    appId: "1:698884646705:web:ebfb0fa5c8e943ade23210",
    measurementId: "G-C155DRCN40"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };