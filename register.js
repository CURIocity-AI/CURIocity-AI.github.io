// register.js

// Wait until the DOM is fully loaded
document.addEventListener("DOMContentLoaded", () => {
    const registerForm = document.getElementById("registerForm");
    const errorMessage = document.getElementById("errorMessage");

    // Handle form submission
    registerForm.addEventListener("submit", (e) => {
        e.preventDefault(); // Prevent form from reloading the page

        // Collect input values
        const username = document.getElementById("username").value.trim();
        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value.trim();

        // Validate inputs
        if (!username || !email || !password) {
            displayError("All fields are required!");
            return;
        }

        // Check for existing users
        const users = JSON.parse(localStorage.getItem("users")) || [];
        const userExists = users.some(user => user.email === email);

        if (userExists) {
            displayError("A user with this email is already registered. Please log in.");
            return;
        }

        // Save new user to local storage
        users.push({ username, email, password });
        localStorage.setItem("users", JSON.stringify(users));

        // Success message and redirect
        alert("Registration successful! Redirecting to login page...");
        window.location.href = "login.html";
    });

    // Function to display error messages
    function displayError(message) {
        errorMessage.textContent = message;
    }
});