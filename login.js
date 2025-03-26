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


    document.addEventListener("DOMContentLoaded", () => {
        const loginButton = document.getElementById("loginButton");

        if (loginButton) {
            loginButton.addEventListener("click", (e) => {
                e.preventDefault(); // Prevent form reload

                const email = document.getElementById("email").value.trim();
                const password = document.getElementById("password").value.trim();

                if (!email || !password) {
                    alert("Please fill in both email and password fields.");
                    return;
                }

                loginUser(email, password); // Ensure loginUser function is accessible
            });
        } else {
            console.error("Login button not found!");
        }
    });


    // Redirect to the Airdrop Guide if coming from the Airdrop button
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get("redirect") === "airdrop") {
        window.location.href = "airdrop.html";
    }

// Go back to the previous page
    function goBack() {
        window.history.back();
}