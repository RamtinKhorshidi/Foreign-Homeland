/**
 * Carousel Management Module
 * -----------------------------------------------------------------------------
 * Manages the automatic image rotation in the "Premiere" section.
 * It includes logic to pause the carousel when it's not visible (performance) 
 * or when the user is interacting with the modal gallery (UX).
 */

let slideIntervalId; // Keeps track of the active interval for the carousel.
const slideIntervalTime = 6000; // Time in milliseconds between slide transitions (6 seconds).

/**
 * Starts the carousel timer.
 * Chosen approach: Uses CSS classes (active) for transitions, while JS handles timing.
 */
function startCarousel() {
    if (slideIntervalId) return; // Prevent multiple intervals from running simultaneously.

    const slides = document.querySelectorAll('.premiere-slide');
    if (slides.length === 0) return;

    slideIntervalId = setInterval(() => {
        // Identify the current visible slide.
        let activeIndex = Array.from(slides).findIndex(s => s.classList.contains('active'));
        // Fallback to the first slide if none are marked active.
        if (activeIndex === -1) activeIndex = 0;

        // Transitions are handled by CSS opacity rules linked to the 'active' class.
        slides[activeIndex].classList.remove('active');

        // Calculate the next index, wrapping back to 0 if at the end.
        const nextIndex = (activeIndex + 1) % slides.length;
        slides[nextIndex].classList.add('active');

    }, slideIntervalTime);
}

/**
 * Stops the carousel timer.
 * Usually called when the section is off-screen or the gallery modal is open.
 */
function stopCarousel() {
    if (slideIntervalId) {
        clearInterval(slideIntervalId);
        slideIntervalId = null;
    }
}

/**
 * Initializes the carousel logic with performance optimizations.
 * Uses Intersection Observer API to detect when the gallery is in the viewport.
 */
function initCarousel() {
    const slides = document.querySelectorAll('.premiere-slide');
    if (slides.length > 0) {
        /**
         * The Intersection Observer ensures the carousel only runs when the user 
         * can actually see it, saving CPU cycles and battery on mobile devices.
         */
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // Check if a modal is already open before starting.
                    // If the gallery modal is open, we want the background to stay static.
                    const galleryModal = document.getElementById('gallery-modal');
                    if (galleryModal.style.display !== 'flex') {
                        startCarousel();
                    }
                } else {
                    // Stop the carousel immediately if the section scrolls out of view.
                    stopCarousel();
                }
            });
        }, { threshold: 0.1 }); // Trigger when at least 10% of the gallery is visible.

        const gallery = document.querySelector('.gallery');
        if (gallery) {
            observer.observe(gallery);
        } else {
            // Fallback starting if observer fails/not supported.
            startCarousel();
        }
    }
}
