// Function to go back to the previous page
function goBack() {
    window.history.back();
}

// Optional: Hide the back button if there's no history to go back to
document.addEventListener("DOMContentLoaded", () => {
    const backButton = document.querySelector(".back-button");
    if (backButton && window.history.length <= 1) {
        backButton.style.display = "none"; // Hide the back button
    }
});