/**
 * theme.js
 * Handles light/dark mode switching and persistence.
 */

function initTheme() {
    const themeToggle = document.getElementById('theme-toggle');
    if (!themeToggle) return;

    // Check for saved theme in localStorage
    const savedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    // Set initial theme
    if (savedTheme === 'light') {
        document.body.classList.add('light-mode');
    } else if (savedTheme === 'dark') {
        document.body.classList.remove('light-mode');
    } else if (!systemPrefersDark) {
        // If no saved preference, default to system preference
        document.body.classList.add('light-mode');
    }

    // Add click listener
    themeToggle.addEventListener('click', toggleTheme);
}

function toggleTheme() {
    const isLightMode = document.body.classList.toggle('light-mode');

    // Save preference
    localStorage.setItem('theme', isLightMode ? 'light' : 'dark');

    // Smooth transition for color changes
    document.body.style.transition = 'background-color 0.3s ease, color 0.3s ease';
}
