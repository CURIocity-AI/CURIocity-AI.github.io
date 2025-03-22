// Back Button Functionality
function goBack() {
    // Navigate to the previous page
    if (window.history.length > 1) {
        window.history.back();
    } else {
        alert("No previous page in history."); // Fallback if there's no history
    }
}

// Optional: Hide the back button if no history exists
document.addEventListener("DOMContentLoaded", () => {
    const backButton = document.querySelector(".back-button");
    if (backButton && window.history.length <= 1) {
        backButton.style.display = "none"; // Hide button if no previous page
    }
});