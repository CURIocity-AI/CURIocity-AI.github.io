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