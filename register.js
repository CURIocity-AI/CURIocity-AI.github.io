import { registerUser } from './auth.js';


 // Helper functions for validation
        function displayError(id, message) {
            const errorElement = document.getElementById(id);
            errorElement.textContent = message;
        }

        function clearErrors() {
            displayError('usernameError', '');
            displayError('emailError', '');
            displayError('passwordError', '');
        }

        // Form submission handler
        document.getElementById("registerForm").addEventListener("submit", async (e) => {
            e.preventDefault();

            // Clear any previous error messages
            clearErrors();

            // Collect form data
            const username = document.getElementById("username").value.trim();
            const email = document.getElementById("email").value.trim();
            const password = document.getElementById("password").value.trim();

            // Basic validation
            let isValid = true;

            if (username.length < 3) {
                displayError('usernameError', 'Username must be at least 3 characters long.');
                isValid = false;
            }

            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                displayError('emailError', 'Please enter a valid email address.');
                isValid = false;
            }

            if (password.length < 6) {
                displayError('passwordError', 'Password must be at least 6 characters long.');
                isValid = false;
            }

            if (!isValid) return;

            // Call the backend registration function
            try {
                await registerUser(email, password, username);
                alert("Registration successful! Redirecting to login page...");
                window.location.href = "login.html"; // Redirect to login on success
            } catch (error) {
                alert("Registration failed: " + error.message);
            }
        });