// Import Firebase SDKs
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.5.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/11.5.0/firebase-auth.js";
import { getFirestore, doc, setDoc, updateDoc } from "https://www.gstatic.com/firebasejs/11.5.0/firebase-firestore.js";

// Firebase Configuration
const firebaseConfig = {
    apiKey: "AIzaSyB-G9TAjjwAIfbC5qCrDRrqQykl-skn3v4",
    authDomain: "curitoken-87a26.firebaseapp.com",
    projectId: "curitoken-87a26",
    storageBucket: "curitoken-87a26.appspot.com", // Corrected this to match Firebase bucket format
    messagingSenderId: "698884646705",
    appId: "1:698884646705:web:ebfb0fa5c8e943ade23210",
    measurementId: "G-C155DRCN40"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

// Export Firebase instances for reuse
export { auth, db };

// Register Functionality
async function registerUser(email, password, username) {
    try {
        // Create user in Firebase Authentication
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;

        // Save user data to Firestore
        await setDoc(doc(db, "users", user.uid), {
            username: username,
            email: email,
            tokenBalance: 1000, // Default token balance
            stakingRewards: 0,
            referrals: 0,
            referralRewards: 0
        });

        alert("Registration successful! Welcome to Curiosity!");
        window.location.href = "dashboard.html"; // Redirect to dashboard
    } catch (error) {
        console.error("Error during registration:", error.message);
        alert(`Error: ${error.message}`);
    }
}

// Login Functionality
async function loginUser(email, password) {
    try {
        // Sign in the user
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        alert("Login successful!");
        window.location.href = "dashboard.html"; // Redirect to dashboard
    } catch (error) {
        console.error("Error during login:", error.message);
        alert(`Error: ${error.message}`);
    }
}

// Realtime Auth Listener
onAuthStateChanged(auth, (user) => {
    if (user) {
        console.log("User is logged in:", user);
        // You can redirect or update the UI based on the authenticated user
    } else {
        console.log("No user is logged in.");
    }
});

// Example: Update Token Balance
async function updateTokenBalance(userId, newBalance) {
    try {
        const userDocRef = doc(db, "users", userId);
        await updateDoc(userDocRef, {
            tokenBalance: newBalance
        });
        console.log("Token balance updated successfully!");
    } catch (error) {
        console.error("Error updating token balance:", error.message);
    }
}

export { registerUser, loginUser, updateTokenBalance };