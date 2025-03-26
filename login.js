    // Handle form submission for login
    document.getElementById("loginForm").addEventListener("submit", (e) => {
        e.preventDefault();

        // Collect form data
        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value.trim();

        // Basic validation
        if (!email || !password) {
            alert("All fields are required!");
            return;
        }

        // Call loginUser function from auth.js
        loginUser(email, password);
    });
