/**
 * Theme Management Module
 * -----------------------------------------------------------------------------
 * Responsible for handling state management between Light and Dark modes.
 * It ensures that user preferences are persisted across sessions and respects 
 * system-level color scheme preferences on initial load.
 */

/**
 * Initializes the theme based on local storage or system preferences.
 * This is called during the application startup phase.
 */
function initTheme() {
    const themeToggle = document.getElementById('theme-toggle');
    if (!themeToggle) return;

    // Retrieve the user's previously saved preference from localStorage.
    const savedTheme = localStorage.getItem('theme');
    // Check if the user's OS is configured to prefer dark mode by default.
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    // Logic for setting the initial theme state:
    // 1. If 'light' is saved, apply light mode classes.
    // 2. If 'dark' is saved, ensure light mode classes are removed (defaulting to dark).
    // 3. if no preference is saved, follow the OS/System preference.
    if (savedTheme === 'light') {
        document.body.classList.add('light-mode');
    } else if (savedTheme === 'dark') {
        document.body.classList.remove('light-mode');
    } else if (!systemPrefersDark) {
        // No saved preference, and system prefers light (since !systemPrefersDark = light)
        document.body.classList.add('light-mode');
    }

    // Attach the toggle event to the theme switcher button.
    themeToggle.addEventListener('click', toggleTheme);
}

/**
 * Toggles the theme between Light and Dark modes.
 * Triggered by the user clicking the theme-toggle button.
 */
function toggleTheme() {
    // toggle() returns true if the class was added, false if removed.
    const isLightMode = document.body.classList.toggle('light-mode');

    // Persist the user's choice to localStorage so it remains consistent on next visit.
    localStorage.setItem('theme', isLightMode ? 'light' : 'dark');

    // Apply a temporary transition style to ensure the color change is smooth.
    // chosen approach: applying via JS to avoid flashing on every page load if it were in CSS.
    document.body.style.transition = 'background-color 0.3s ease, color 0.3s ease';
}
