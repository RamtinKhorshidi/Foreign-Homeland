/**
 * carousel.js
 * Handles the auto-playing background carousel for the Premiere section.
 */

let slideIntervalId;
const slideIntervalTime = 6000; // 6 seconds

function startCarousel() {
    if (slideIntervalId) return; // Already running

    const slides = document.querySelectorAll('.premiere-slide');
    if (slides.length === 0) return;

    slideIntervalId = setInterval(() => {
        // Find visible active slide to determine where we are
        // We track state via DOM classes for simplicity here, though variable state is better
        // Let's stick to the original logic's intent but robustify
        let activeIndex = Array.from(slides).findIndex(s => s.classList.contains('active'));
        if (activeIndex === -1) activeIndex = 0;

        slides[activeIndex].classList.remove('active');

        const nextIndex = (activeIndex + 1) % slides.length;
        slides[nextIndex].classList.add('active');

    }, slideIntervalTime);
}

function stopCarousel() {
    if (slideIntervalId) {
        clearInterval(slideIntervalId);
        slideIntervalId = null;
    }
}

function initCarousel() {
    const slides = document.querySelectorAll('.premiere-slide');
    if (slides.length > 0) {
        // Use Intersection Observer to only play when visible
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // Only start if not paused manually by gallery (we'll check a flag or just let gallery control it)
                    // The gallery modal logic explicitly calls stop(), so when gallery closes it calls start().
                    // But if we scroll away, we should stop.
                    // If gallery is open, we shouldn't start. 
                    const galleryModal = document.getElementById('gallery-modal');
                    if (galleryModal.style.display !== 'flex') {
                        startCarousel();
                    }
                } else {
                    stopCarousel();
                }
            });
        }, { threshold: 0.1 });

        const gallery = document.querySelector('.gallery');
        if (gallery) {
            observer.observe(gallery);
        } else {
            startCarousel();
        }
    }

    // Expose to window for gallery to use if needed, but gallery module imports these directly
    // so we don't need window.galleryCarousel anymore if we wire modules correctly.
}
