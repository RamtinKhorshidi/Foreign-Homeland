/**
 * main.js
 * Main entry point for the application.
 * Initializes global event listeners.
 */

// Initialize Logic on Load
document.addEventListener('DOMContentLoaded', function () {
    initTheme();
    initCarousel();
    initModalListeners();
    initGalleryListeners();
    initTitleAnimation();
    initButtonAnimation();

    // Attach functions to window for HTML inline event handlers
    // This allows onclick="openModal('id')" to work even with modules
    window.openModal = openModal;
    window.closeModal = closeModal;
    window.openAwardModal = openAwardModal;
    window.closeAwardModal = closeAwardModal;

    window.openGalleryModal = openGalleryModal;
    window.closeGalleryModal = closeGalleryModal;
    window.changeGalleryImage = changeGalleryImage;
});
