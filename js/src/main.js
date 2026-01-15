/**
 * main.js - Application Entry Point
 * -----------------------------------------------------------------------------
 * This file coordinates the initialization of all project modules once 
 * the DOM is fully loaded. It also handles the "Global Exposure" of 
 * functions required by inline HTML event handlers.
 */

// Initialize all features on DOM Ready
document.addEventListener('DOMContentLoaded', function () {
    // 1. Theme (Dark/Light Mode)
    initTheme();
    // 2. Premiere Carousel (Intersection Observed)
    initCarousel();
    // 3. Modal Persistence Listeners (Click-outside behavior)
    initModalListeners();
    // 4. Interactive Gallery (Keyboard and Backdrop)
    initGalleryListeners();
    // 5. Cinematic Visuals (Title and Button effects)
    initTitleAnimation();
    initButtonAnimation();

    /**
     * GLobal Exposure
     * -------------------------------------------------------------------------
     * Because the project uses inline attributes like `onclick="openModal()"` 
     * in the HTML (see index.html), we must explicitly attach our module 
     * functions to the `window` object. 
     * 
     * Without this, the functions would remain local to the script scope and 
     * result in 'function is not defined' errors.
     */
    window.openModal = openModal;
    window.closeModal = closeModal;
    window.openAwardModal = openAwardModal;
    window.closeAwardModal = closeAwardModal;

    window.openGalleryModal = openGalleryModal;
    window.closeGalleryModal = closeGalleryModal;
    window.changeGalleryImage = changeGalleryImage;
});
