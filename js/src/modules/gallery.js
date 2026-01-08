/**
 * gallery.js
 * Handles the manual interaction for the Premiere Photo Gallery Modal.
 * Dependencies: js/data/gallery.js, js/modules/carousel.js (stopCarousel, startCarousel)
 */

let currentGalleryIndex = 0;

/**
 * Opens the gallery modal, stops the main page carousel, 
 * and initializes thumbnails if they don't exist.
 */
function openGalleryModal() {
    const modal = document.getElementById('gallery-modal');
    const thumbsContainer = document.getElementById('gallery-thumbnails');

    // Stop the auto-carousel on main page
    stopCarousel();

    // Reset to first image
    currentGalleryIndex = 0;
    updateGalleryView();

    // Generate thumbnails if empty
    if (thumbsContainer.querySelectorAll('.gallery-thumb').length === 0) {
        galleryImages.forEach((src, index) => {
            const thumb = document.createElement('img');
            thumb.src = src;
            thumb.className = 'gallery-thumb';
            thumb.alt = `Thumbnail ${index + 1}`;
            thumb.onclick = () => {
                currentGalleryIndex = index;
                updateGalleryView();
            };
            thumbsContainer.appendChild(thumb);
        });
    }

    modal.style.display = 'flex'; // Use flex for centering
    document.body.style.overflow = 'hidden';
}

/**
 * Closes the gallery modal and resumes the main page carousel.
 */
function closeGalleryModal() {
    const modal = document.getElementById('gallery-modal');
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';

    // Resume auto-carousel
    startCarousel();
}

/**
 * Changes the currently displayed image by a given direction.
 * @param {number} direction - The number of steps to move (e.g., 1 for next, -1 for prev).
 */
function changeGalleryImage(direction) {
    currentGalleryIndex += direction;
    if (currentGalleryIndex >= galleryImages.length) currentGalleryIndex = 0;
    if (currentGalleryIndex < 0) currentGalleryIndex = galleryImages.length - 1;
    updateGalleryView();
}

/**
 * Updates the main image and active thumbnail highlight based on currentGalleryIndex.
 */
function updateGalleryView() {
    const mainImg = document.getElementById('gallery-main-img');
    const thumbs = document.querySelectorAll('.gallery-thumb');

    mainImg.src = galleryImages[currentGalleryIndex];

    thumbs.forEach((thumb, index) => {
        if (index === currentGalleryIndex) {
            thumb.classList.add('active');
            thumb.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
        } else {
            thumb.classList.remove('active');
        }
    });
}

/**
 * Initializes click and keyboard listeners for gallery navigation.
 */
function initGalleryListeners() {
    const prevBtn = document.getElementById('gallery-prev');
    const nextBtn = document.getElementById('gallery-next');

    if (prevBtn) {
        prevBtn.onclick = () => changeGalleryImage(-1);
    }
    if (nextBtn) {
        nextBtn.onclick = () => changeGalleryImage(1);
    }

    window.addEventListener('click', function (event) {
        const galleryModal = document.getElementById('gallery-modal');
        if (event.target == galleryModal) {
            closeGalleryModal();
        }
    });

    // Keyboard navigation
    window.addEventListener('keydown', function (event) {
        const galleryModal = document.getElementById('gallery-modal');
        if (galleryModal.style.display === 'flex') {
            if (event.key === 'ArrowLeft') changeGalleryImage(-1);
            if (event.key === 'ArrowRight') changeGalleryImage(1);
            if (event.key === 'Escape') closeGalleryModal();
        }
    });
}
