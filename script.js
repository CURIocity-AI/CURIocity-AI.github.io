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

import { auth } from './auth.js';
import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/11.5.0/firebase-auth.js";

export function initializeJoinAirdropButton() {
    const joinAirdropButton = document.getElementById("joinAirdrop");
    if (joinAirdropButton) {
        joinAirdropButton.addEventListener("click", () => {
            onAuthStateChanged(auth, (user) => {
                if (user) {
                    window.location.href = "guide.html"; // Redirect to the Airdrop Guide if authorized
                } else {
                    alert("You need to log in or register to join the Airdrop.");
                    window.location.href = "login.html"; // Redirect unauthorized users to login
                }
            });
        });
    }
}