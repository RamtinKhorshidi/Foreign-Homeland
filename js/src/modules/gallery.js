/**
 * Interactive Gallery Module
 * -----------------------------------------------------------------------------
 * Handles the logic for the full-screen photo gallery located in the 
 * Premiere section. Includes thumbnail generation, keyboard navigation, 
 * and background carousel synchronization.
 */

let currentImageIndex = 0; // The index of the photo currently being viewed.

/**
 * Launches the full-screen gallery view.
 * 
 * Logic flow:
 * 1. Pauses the main background carousel to improve focus and performance.
 * 2. Resets the view to the first image.
 * 3. Just-in-time generates the thumbnail strip.
 */
function openGalleryModal() {
    const modal = document.getElementById('gallery-modal');
    stopCarousel(); // Synchronize with carousel.js to avoid background movement.
    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';

    // Show the first image by default unless otherwise specified.
    currentImageIndex = 0;
    updateGalleryView();

    // build thumbnails once the modal is opening.
    const thumbContainer = document.getElementById('gallery-thumbnails');
    thumbContainer.innerHTML = ''; // prevent duplicates on reopen.

    galleryImages.forEach((src, index) => {
        const img = document.createElement('img');
        img.src = src;
        img.className = 'gallery-thumb';
        // highlight the currently active thumbnail immediately.
        if (index === currentImageIndex) img.classList.add('active');

        // provide a direct navigation path for each thumbnail.
        img.onclick = () => {
            currentImageIndex = index;
            updateGalleryView();
        };
        thumbContainer.appendChild(img);
    });
}

/**
 * Closes the gallery and allows the background carousel to resume.
 */
function closeGalleryModal() {
    const modal = document.getElementById('gallery-modal');
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
    initCarousel(); // Restart the carousel background if it's visible.
}

/**
 * Steps forward or backward through the gallery images.
 * Implements "circular" navigation (wrapping from last to first).
 * 
 * @param {number} direction - 1 for Next, -1 for Previous.
 */
function changeGalleryImage(direction) {
    currentImageIndex += direction;

    if (currentImageIndex >= galleryImages.length) {
        currentImageIndex = 0; // Wrap to start.
    } else if (currentImageIndex < 0) {
        currentImageIndex = galleryImages.length - 1; // Wrap to end.
    }

    updateGalleryView();
}

/**
 * Synchronizes the visual state of the gallery modal based on `currentImageIndex`.
 * Updates both the large main image and the highlighting in the thumbnail strip.
 */
function updateGalleryView() {
    const mainImg = document.getElementById('gallery-main-img');
    const thumbnails = document.querySelectorAll('.gallery-thumb');

    // Update main image source.
    mainImg.src = galleryImages[currentImageIndex];

    // Synchronize thumbnail state.
    thumbnails.forEach((thumb, index) => {
        if (index === currentImageIndex) {
            thumb.classList.add('active');
            // chosen approach for scrolling: ensuring the active thumb is visible.
            thumb.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
        } else {
            thumb.classList.remove('active');
        }
    });
}

/**
 * Gallery Specific Global Listeners
 * -----------------------------------------------------------------------------
 * Adds keyboard support for accessibility and "power user" navigation.
 */
function initGalleryListeners() {
    const modal = document.getElementById('gallery-modal');

    document.addEventListener('keydown', (e) => {
        // These shortcuts only execute if the gallery modal is currently active.
        if (modal.style.display === 'flex') {
            if (e.key === 'ArrowRight') {
                changeGalleryImage(1);
            } else if (e.key === 'ArrowLeft') {
                changeGalleryImage(-1);
            } else if (e.key === 'Escape') {
                closeGalleryModal();
            }
        }
    });

    // Handle clicking the background backdrop to exit.
    modal.addEventListener('click', (e) => {
        if (e.target.id === 'gallery-modal') {
            closeGalleryModal();
        }
    });
}
