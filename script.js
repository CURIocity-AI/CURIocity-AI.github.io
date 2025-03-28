const toggleButton = document.getElementById('themeToggle');
const rootElement = document.documentElement;

toggleButton.addEventListener('click', () => {
    if (rootElement.getAttribute('data-theme') === 'light') {
        rootElement.removeAttribute('data-theme');
    } else {
        rootElement.setAttribute('data-theme', 'light');
    }
});