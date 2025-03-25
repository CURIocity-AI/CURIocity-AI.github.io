document.addEventListener("DOMContentLoaded", () => {
    // Sequential Animation on Page Load
    const elements = document.querySelectorAll(".hidden");
    elements.forEach((el, index) => {
        setTimeout(() => {
            el.classList.add("visible");
        }, index * 200); // Adjust delay (200ms) as needed
    });
});

// Animation on Scroll
document.addEventListener("scroll", () => {
    const elements = document.querySelectorAll(".hidden");
    elements.forEach((el) => {
        const position = el.getBoundingClientRect().top;
        if (position < window.innerHeight - 50) {
            el.classList.add("visible");
        }
    });
});

import { auth } from "./auth.js"; // Ensure this is the correct path
import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/11.5.0/firebase-auth.js";

// Ensure DOM is fully loaded before attaching event listeners
document.addEventListener("DOMContentLoaded", () => {
    const joinAirdropButton = document.getElementById("joinAirdrop");

    if (joinAirdropButton) {
        // Add click event listener for the Join Airdrop button
        joinAirdropButton.addEventListener("click", () => {
            onAuthStateChanged(auth, (user) => {
                if (user) {
                    // If the user is logged in, redirect to the Airdrop Guide page
                    window.location.href = "airdrop.html";
                } else {
                    // If the user is not logged in, redirect to the Login page
                    alert("You need to log in or register to join the airdrop!");
                    window.location.href = "login.html";
                }
            });
        });
    }
});