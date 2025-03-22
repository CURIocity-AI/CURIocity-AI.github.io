<script type="module">
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.5.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.5.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
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
  const analytics = getAnalytics(app);

// Register Functionality
function registerUser(email, password) {
    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            alert("Registration successful! Welcome to Curiosity!");
            window.location.href = "dashboard.html"; // Redirect to dashboard
        })
        .catch((error) => {
            alert(error.message);
        });
}

// Event Listener for Registration
document.getElementById("registerForm").addEventListener("submit", (e) => {
    e.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    registerUser(email, password);
});

// Login Functionality
function loginUser(email, password) {
    firebase.auth().signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            alert("Login successful!");
            window.location.href = "dashboard.html"; // Redirect to dashboard
        })
        .catch((error) => {
            alert(error.message);
        });
}

// Event Listener for Login
document.getElementById("loginForm").addEventListener("submit", (e) => {
    e.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    loginUser(email, password);
});

import { doc, setDoc } from "https://www.gstatic.com/firebasejs/11.5.0/firebase-firestore.js";

async function createUserInDatabase(userId) {
    const userDocRef = doc(db, "users", userId);
    await setDoc(userDocRef, {
        tokenBalance: 1000, // Default starting balance
        stakingRewards: 0,
        referrals: 0,
        referralRewards: 0
    });
    console.log("User document created!");
}

// Call this function after user registration
auth.onAuthStateChanged((user) => {
    if (user) {
        createUserInDatabase(user.uid);
    }
});

import { doc, updateDoc } from "https://www.gstatic.com/firebasejs/11.5.0/firebase-firestore.js";

// Example: Update token balance
async function updateTokenBalance(userId, newBalance) {
    const userDocRef = doc(db, "users", userId);
    await updateDoc(userDocRef, {
        tokenBalance: newBalance
    });
    console.log("Token balance updated!");
}
</script>