
// --- Source: js/data/actors.js ---

/**
 * actors.js
 * -----------------------------------------------------------------------------
 * This module serves as the central data repository for all cast and crew members 
 * featured in the "Foreign Homeland" project. 
 * 
 * Purpose:
 * It provides a structured object where each key represents a unique identifier 
 * (slug) for an individual, and the value is an object containing their 
 * display name, character role, image path, and a detailed biography.
 * 
 * Usage:
 * This data is primarily consumed by the `openModal()` function in `modals.js` 
 * to dynamically populate the actor biography modal when a user clicks a 
 * cast/crew card.
 * 
 * Maintenance Note:
 * When adding new cast members, ensure the key matches the ID passed to 
 * `openModal()` in the HTML template.
 */
const actors = {
    /** 
     * Ramtin Khorshidi - Lead Actor
     * Note: Award-winning performance for the role of 'Reza'.
     */
    'reza': {
        name: 'Ramtin Khorshidi',
        role: 'Reza',
        img: 'images/Actor Photos/Reza.jpg/DSC00177-1-min.jpg',
        bio: "Ramtin Khorshidi plays Reza, the eldest brother, in Foreign Homeland - a role that earned him Best Actor at the Vancouver International Youth Film Festival. He is a 22-year-old rapper and voice actor based in Calgary, known for his energetic performances and growing presence in the city's Iranian community. Ramtin has performed for crowds of 200-300 people and is now expanding into acting, with Foreign Homeland marking his first Canadian film project with Armin Productions. He's a collaborative artist who blends rap, pop, and traditional Iranian melodies to create his own unique sound. Fluent in Persian and Spanish, he writes and produces music in both languages. Ramtin is also beginning to build a career in advertising, showcasing his creativity across multiple fields."
    },
    /**
     * Mostafa Pouralamdari - Supporting Actor
     * Representing the father figure 'Jamshid'.
     */
    'jamshid': {
        name: 'Mostafa Pouralamdari',
        role: 'Jamshid',
        img: 'images/Actor Photos/Jamshid.jpg/DSC00156-min.jpg',
        bio: 'Mostafa plays Jamshid, the father, in Foreign Homeland, marking his debut in a feature film. Mostafa is a Calgary-based actor and engineer with a lifelong love for theatre and film. Alongside earning two MSc degrees and building a career in engineering, he has acted in theatre, appeared in the short film The Taste of Brazilian Coffee, and narrated various projects. Since immigrating to Canada in 2011, he has continued creating and performing in his spare time.'
    },
    /**
     * Arash Minhas - Supporting Actor
     * Plays 'Ahmad', the youngest brother.
     */
    'ahmad': {
        name: 'Arash Minhas',
        role: 'Ahmad',
        img: 'images/Actor Photos/Ahmad.jpg/DSC00220_compressed.jpg',
        bio: "Arash plays Ahmad, the youngest brother, in Foreign Homeland. He is a Calgary-based interdisciplinary artist of Indo-Persian heritage, working across theatre, dance, and movement storytelling. He is currently completing a Master's degree in Interdisciplinary Creation and Research at the University of Calgary, focusing on themes of identity and selfhood among first-generation Indo-Persian immigrants. With over 15 years of experience, Arash has worked as a playwright, actor, dancer, and poet. His work blends personal narrative with cultural exploration, creating performances that connect tradition with contemporary expression."
    },
    /**
     * Rick Koy - Supporting Actor
     * Role: Jim. Bio currently pending update.
     */
    'jim': {
        name: 'Rick Koy',
        role: 'Jim',
        img: 'images/Actor Photos/Jim.jpg/MV5BZTFmNjU0ZWEtNzM0Yi00MmI1LWI2OGItOWVlM2VjM2MxMTEyXkEyXkFqcGc@.jpg',
        bio: ''
    },
    /**
     * Zahra Masoumi - Supporting Actor
     * Plays 'Sara', the sister. Experienced theater actor.
     */
    'sara': {
        name: 'Zahra Masoumi',
        role: 'Sara',
        img: 'images/Actor Photos/Sara.jpg/DSC00188-min.jpg',
        bio: "Zahra Masoumi plays Sara, the sister, in Foreign Homeland. She has over six years of acting experience and is passionate about bringing characters to life and connecting with audiences. Acting allows her to step into different stories and explore humanity through performance. Her work spans both theatre and film. On stage, she has appeared in productions such as The Art, Lights Out, Absence, The Thirteen, The Crucible, and Don't Call Me Anymore, Mother! On screen, she starred as the lead role of Sara in Foreign Homeland, directed by Armin Zarringhalam."
    },
    /**
     * Safura Naghavi - Supporting Actor
     * Plays 'Soheila' (the Aunt). Multilingual voiceover artist.
     */
    'soheila': {
        name: 'Safura Naghavi',
        role: 'Soheila',
        img: 'images/Actor Photos/Soheila.jpg/DSC00132-min.jpg',
        bio: 'Safoura Naghavi played Soheila in Foreign Homeland, in the role of the Aunt. She is an experienced actor and voiceover artist with a solid background in theatre and film. After moving to Canada, she continued acting in both theatre and film, expanding her work through new collaborations. Safoura also has extensive experience in voiceover and dubbing, contributing to many productions in Iran and Canada. Fluent in Farsi and English, with basic Arabic, she is passionate about multicultural storytelling. Now based in Calgary, she remains dedicated to bringing meaningful characters to life and connecting with audiences through her craft.'
    },
    /**
     * Alexandra Scott - Cast Member
     * Role: Susan Pike.
     */
    'susan': {
        name: 'Alexandra Scott',
        role: 'Susan Pike',
        img: 'images/Actor Photos/Susan.jpg/MV5BNzM5M2I3ZmItNDQyNS00ZDk0LThjOGUtODlhNjc4NGU2NDI2XkEyXkFqcGc@.jpg',
        bio: ''
    },
    /**
     * Cameron Ross - Cast Member
     * Role: Customer 2.
     */
    'cameron': {
        name: 'Cameron Ross',
        role: 'Customer 2',
        img: 'images/Actor Photos/Cameron Ross - Customer 2/MV5BOGEyOTc0ZTQtNTliNS00N2NiLThiNzYtM2QxYTZlYmI4ODYzXkEyXkFqcGc@_compressed.jpg',
        bio: ''
    },
    /**
     * Redi Zyka - Cast Member
     * Role: Customer 1.
     */
    'redi': {
        name: 'Redi Zyka',
        role: 'Customer 1',
        img: 'images/Actor Photos/Redi Zyka - Customer 1/-640-0-5ee52be4b0c1d.jpg',
        bio: ''
    },
    /**
     * Armin Zarringhalam - Director/Writer/Producer
     * Founder of Armin Productions and the creative visionary behind the film.
     */
    'armin': {
        name: 'Armin Zarringhalam',
        role: 'Producer, Director & Writer',
        img: 'images/Actor Photos/Cast and crew/Armin/DSC00081_compressed.jpg',
        bio: "Armin Zarringhalam is a 23-year-old Canadian-Iranian award-winning filmmaker from Calgary, Alberta. He earned his Bachelor of Commerce in Marketing from the Haskayne School of Business and discovered his passion for filmmaking at 17. As the founder of Armin Productions, he has directed and produced several projects, leading creative teams and developing short films. He also secured funding for his first feature film, Foreign Homeland, where he served as the executive producer, director, and writer. Armin's work is inspired by his dual heritage, and he aims to create meaningful stories that connect with diverse audiences. Completing his debut feature marks an important step in his growth as a filmmaker."
    },
    /**
     * Sepidar - Director of Photography
     * Responsible for the visual aesthetic and cinematography of the film.
     */
    'sepidar': {
        name: 'Sepidar',
        role: 'Director of Photography',
        img: 'images/Actor Photos/Cast and crew/Sepidar/DSC00108_compressed.jpg',
        bio: "Meet Sepidar, our award-winning Director of Photography and editor for Foreign Homeland. With years of experience, she was the producers' clear choice for this project. Her cinematography brings emotion to life and leaves a powerful impact on every viewer. Passionate about film and women's representation, Sepidar's unique style shows in every shot. Her editing and attention to detail helped shape the film into what it is today. A true cornerstone of the team, she went above and beyond to make this project a success."
    },
    /**
     * Romin - Producer
     * Bio currently pending update.
     */
    'romin': {
        name: 'Romin',
        role: 'Producer',
        img: 'images/Actor Photos/Cast and crew/Romin/DSC00048_compressed.jpg',
        bio: ''
    }
};


// --- Source: js/data/socials.js ---

/**
 * socialLinks
 * -----------------------------------------------------------------------------
 * Maps actor/crew IDs to their respective Instagram profiles.
 * 
 * Purpose:
 * This data is used within the `openModal` function to append a "Follow on Instagram" 
 * button to the biography modal if a link exists for that person.
 * 
 * Design Decision:
 * Keeping social links separate from the main actor data allows for easier 
 * updates and maintains a clean separation of biographical content and 
 * external social media handles.
 */
const socialLinks = {
    'reza': 'https://www.instagram.com/rami.momti?igsh=MWJ0angzazgzNGh5Nw==',       // Ramtin
    'sara': 'https://www.instagram.com/masoumi.zara?igsh=dnc5aTFnd2l3NDA5',         // Zahra
    'jamshid': 'https://www.instagram.com/mostafa.alamdri?igsh=b3U5N2FuMWhhcG1p',   // Mostafa
    'ahmad': 'https://www.instagram.com/arash.minhas?igsh=aWpvN2FuNTlhY3o5',        // Arash
    'soheila': 'https://www.instagram.com/safoura20?igsh=MTEyZTdzOHdrcHY4cQ==',     // Safoura
    'jim': 'https://www.instagram.com/rick.koy?igsh=MXd5cXdjMTMzY3A5ZQ==',          // Rick Koy
    'susan': 'https://www.instagram.com/firstlakegirl?igsh=MWxqYXN1dTFoMmhkdQ==',   // Alexandra Scott
    'cameron': 'https://www.instagram.com/cameron.ga.ross?igsh=YjBhZDFwYTBiMW5r',   // Cameron Ross
    'redi': 'https://www.instagram.com/redizyka?igsh=MTZhaDExNTJqZHhwdQ==',         // Redi Zyka
    'armin': 'https://www.instagram.com/armin.productions?igsh=c2pqbWs2NWZ5YWh2',   // Armin
    'sepidar': 'https://www.instagram.com/sepidar.artist?igsh=bm5ibm1odWV0aGV4',    // Sepidar
    'romin': 'https://www.instagram.com/amali_aspects?igsh=ZTE1b213OHoweG1q'        // Ramin/Romin
};


// --- Source: js/data/gallery.js ---

/**
 * gallery.js
 * Data file containing paths to gallery images.
 */
const galleryImages = [
    "images/Premiere Photos/_DSC8209-min.JPG",
    "images/Premiere Photos/_DSC8254-min.JPG",
    "images/Premiere Photos/_DSC8263-min.JPG",
    "images/Premiere Photos/_DSC8269-min.JPG",
    "images/Premiere Photos/_DSC8315-min.JPG",
    "images/Premiere Photos/_DSC8316-min.JPG"
];


// --- Source: js/data/awards.js ---

/**
 * awardsData
 * -----------------------------------------------------------------------------
 * Stores detailed information about the film's awards and festival recognition.
 * 
 * Each award entry includes:
 * - title: The formal name of the award.
 * - subtitle: The recipient (actor or director).
 * - festival: The name of the film festival.
 * - logo: Path to the festival laurel or logo image.
 * - image: A high-quality photo from the award ceremony or a related still.
 * - quote: A congratulatory message or official statement.
 * - imageAlt: Accessibility text for the award image.
 */
const awardsData = {
    'best-canadian-feature': {
        title: "Best Canadian Feature Award",
        subtitle: "Director: Armin Zarringhalam",
        festival: "Vancouver International Youth Film Festival",
        logo: "assets/awards/DCIFF LAUREL _ 2025-2026 New copy 2.png",
        image: "assets/awards/best_canadian_feature.jpg",
        quote: "Congratulations to Armin Zarringhalam for winning the Best Canadian Feature Award at the Vancouver International Youth Film Festival! A testament to his vision and the strength of this powerful story.",
        imageAlt: "Armin Zarringhalam Receiving Best Canadian Feature Award"
    },
    'best-actor': {
        title: "Best Actor Award",
        subtitle: "Ramtin Khorshidi",
        festival: "Vancouver International Youth Film Festival",
        logo: "assets/awards/BEST_ACTOR_Vancouver_International_Youth_Film_Festival_2025_1.png",
        image: "assets/awards/best_actor_moment.jpg",
        quote: "Congratulations to Ramtin Khorshidi for winning the Best Actor Award at the Vancouver International Youth Film Festival for his unforgettable performance in Foreign Homeland! His portrayal of a father's struggle and resilience touched hearts and earned well-deserved recognition.",
        imageAlt: "Ramtin Khorshidi Receiving Best Actor Award"
    }
};


// --- Source: js/modules/theme.js ---

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
    // We add 'is-active' to the button for Dark Mode (default).
    if (savedTheme === 'light') {
        document.body.classList.add('light-mode');
        themeToggle.classList.remove('is-active');
    } else if (savedTheme === 'dark') {
        document.body.classList.remove('light-mode');
        themeToggle.classList.add('is-active');
    } else if (!systemPrefersDark) {
        // No saved preference, and system prefers light
        document.body.classList.add('light-mode');
        themeToggle.classList.remove('is-active');
    } else {
        // Default to dark mode (is-active)
        themeToggle.classList.add('is-active');
    }

    // Attach the toggle event to the theme switcher button.
    themeToggle.addEventListener('click', toggleTheme);
}

/**
 * Toggles the theme between Light and Dark modes.
 * Triggered by the user clicking the theme-toggle button.
 */
function toggleTheme() {
    const themeToggle = document.getElementById('theme-toggle');

    // toggle() returns true if the class was added, false if removed.
    const isLightMode = document.body.classList.toggle('light-mode');

    // Update the button's visual state to match.
    if (themeToggle) {
        themeToggle.classList.toggle('is-active', !isLightMode);
    }

    // Persist the user's choice to localStorage so it remains consistent on next visit.
    localStorage.setItem('theme', isLightMode ? 'light' : 'dark');

    // Apply a temporary transition style to ensure the color change is smooth.
    document.body.style.transition = 'background-color 0.3s ease, color 0.3s ease';
}


// --- Source: js/modules/carousel.js ---

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


// --- Source: js/modules/modals.js ---

/**
 * Modal Management Module
 * -----------------------------------------------------------------------------
 * Provides core functionality for displaying and hiding full-screen modals.
 * This includes the biographical modals for the cast and the awards detail modals.
 */

/**
 * Opens a modal for a specific cast/crew member.
 * 
 * Logic flow:
 * 1. Identify the actor from the `actors` data object.
 * 2. Update DOM elements (image, name, role, bio) with the actor's data.
 * 3. Check for any social media links and dynamically create an Instagram button.
 * 4. Display the modal and freeze body scrolling for a focused experience.
 * 
 * @param {string} actorKey - The unique slug for the actor (e.g., 'reza').
 */
function openModal(actorKey) {
    const modal = document.getElementById('actor-modal');
    const modalImg = document.getElementById('modal-img');
    const modalName = document.getElementById('modal-name');
    const modalRole = document.getElementById('modal-role');
    const modalBio = document.getElementById('modal-bio');
    const modalText = document.querySelector('.modal-text');

    const actor = actors[actorKey];
    if (actor) {
        // Update basic text and image content.
        modalImg.src = actor.img;
        modalName.textContent = actor.name;
        modalRole.textContent = actor.role;
        modalBio.textContent = actor.bio;

        // Cleanup: Remove existing social button from a previous modal opening.
        const existingBtn = modalText.querySelector('.modal-social-btn');
        if (existingBtn) {
            existingBtn.remove();
        }

        // Feature Enhancement: Social Media Integration
        const socialUrl = socialLinks[actorKey];
        if (socialUrl) {
            const socialBtn = document.createElement('a');
            socialBtn.href = socialUrl;
            socialBtn.target = '_blank';
            socialBtn.className = 'modal-social-btn';
            socialBtn.innerHTML = `
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
                <span>Follow on Instagram</span>
            `;
            modalText.appendChild(socialBtn);
        }

        // Show the modal.
        modal.style.display = 'block';
        // chosen approach for scrolling: setting overflow to hidden on body.
        // potential gotcha: layout shift on some browsers due to scrollbar disappearing.
        document.body.style.overflow = 'hidden';
    }
}

/**
 * Closes the biography modal and restores standard page navigation.
 */
function closeModal() {
    const modal = document.getElementById('actor-modal');
    modal.style.display = 'none';
    document.body.style.overflow = 'auto'; // Re-enable interaction with the rest of the site.
}

/**
 * Opens a specialized modal for displaying film award details.
 * Similar logic to `openModal` but tailored for the `awardsData` schema.
 * 
 * @param {string} awardKey - The slug for the award (e.g., 'best-actor').
 */
function openAwardModal(awardKey) {
    const modal = document.getElementById('award-modal');
    const awardImg = document.getElementById('award-img');
    const awardLogo = modal.querySelector('.award-logo-small');
    const awardTitle = modal.querySelector('h2');
    const awardSubtitle = modal.querySelector('h3');
    const awardFestival = modal.querySelector('h4');
    const awardQuote = modal.querySelector('blockquote p');

    const data = awardsData[awardKey];
    if (data) {
        awardImg.src = data.image;
        awardImg.alt = data.imageAlt;
        awardLogo.src = data.logo;
        awardTitle.textContent = data.title;
        awardSubtitle.textContent = data.subtitle;
        awardFestival.textContent = data.festival;
        awardQuote.innerHTML = `"${data.quote}"`;

        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    }
}

/**
 * Closes the award details modal.
 */
function closeAwardModal() {
    const modal = document.getElementById('award-modal');
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

/**
 * Global Modal Event Listeners
 * -----------------------------------------------------------------------------
 * Provides a "click outside to close" behavior for all standard modals.
 * Improves user experience by following native OS modal patterns.
 */
function initModalListeners() {
    window.onclick = function (event) {
        const actorModal = document.getElementById('actor-modal');
        const awardModal = document.getElementById('award-modal');
        // If the user clicks specifically on the modal backdrop, close it.
        if (event.target == actorModal) {
            closeModal();
        }
        if (event.target == awardModal) {
            closeAwardModal();
        }
    };
}


// --- Source: js/modules/gallery.js ---

/**
 * Gallery Interaction Module
 * -----------------------------------------------------------------------------
 * Manages the immersive Photo Gallery Modal for the world premiere event.
 * Features include:
 * - Thumbnail navigation.
 * - Previous/Next controls.
 * - Keyboard shortcuts (Arrow keys, Escape).
 * - Automatic background carousel synchronization.
 */

let currentGalleryIndex = 0; // The state variable tracking the current active photo in the gallery.

/**
 * Opens the interactive gallery modal.
 * Chosen approach: Temporarily pauses the main page's auto-carousel to avoid
 * confusion and saves performance.
 */
function openGalleryModal() {
    const modal = document.getElementById('gallery-modal');
    const thumbsContainer = document.getElementById('gallery-thumbnails');

    // Optimization: Stop the auto-carousel in the background premiere section.
    stopCarousel();

    // Reset view to the first image in the array for a consistent starting point.
    currentGalleryIndex = 0;
    updateGalleryView();

    // Just-in-time creation: Generate thumbnails if they haven't been created yet.
    if (thumbsContainer.querySelectorAll('.gallery-thumb').length === 0) {
        galleryImages.forEach((src, index) => {
            const thumb = document.createElement('img');
            thumb.src = src;
            thumb.className = 'gallery-thumb';
            thumb.alt = `Thumbnail ${index + 1}`;
            // Closure handles the index correctly for each thumbnail click.
            thumb.onclick = () => {
                currentGalleryIndex = index;
                updateGalleryView();
            };
            thumbsContainer.appendChild(thumb);
        });
    }

    // Modal layout: Uses 'flex' display as defined in gallery.css for perfect centering.
    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
}

/**
 * Closes the gallery modal and cleans up states.
 */
function closeGalleryModal() {
    const modal = document.getElementById('gallery-modal');
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';

    // Resume the background auto-carousel now that the user is back to browsing.
    startCarousel();
}

/**
 * Cycles to a different image based on a relative step.
 * Performs boundary checks to wrap around the image array.
 * 
 * @param {number} direction - 1 for forward, -1 for backward.
 */
function changeGalleryImage(direction) {
    currentGalleryIndex += direction;
    // Circular logic: if at end, go to start; if at start, go to end.
    if (currentGalleryIndex >= galleryImages.length) currentGalleryIndex = 0;
    if (currentGalleryIndex < 0) currentGalleryIndex = galleryImages.length - 1;
    updateGalleryView();
}

/**
 * Updates the visual state of the gallery.
 * Handles the main image replacement and the thumbnail "active" styling.
 */
function updateGalleryView() {
    const mainImg = document.getElementById('gallery-main-img');
    const thumbs = document.querySelectorAll('.gallery-thumb');

    // Update the main view image source.
    mainImg.src = galleryImages[currentGalleryIndex];

    // Synchronization: Loop through thumbnails to highlight the active one.
    thumbs.forEach((thumb, index) => {
        if (index === currentGalleryIndex) {
            thumb.classList.add('active');
            // UX Improvement: Scroll the thumbnail strip to keep the active thumb in view.
            thumb.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
        } else {
            thumb.classList.remove('active');
        }
    });
}

/**
 * Initializes navigation listeners for the gallery.
 * Chooses a mix of UI-based (buttons) and Intent-based (keyboard) handlers.
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

    // Modal Backdrop Click: Standard UX pattern to close modals by clicking outside content.
    window.addEventListener('click', function (event) {
        const galleryModal = document.getElementById('gallery-modal');
        if (event.target == galleryModal) {
            closeGalleryModal();
        }
    });

    /**
     * Keyboard Navigation:
     * Provides accessibility and power-user shortcut support.
     */
    window.addEventListener('keydown', function (event) {
        const galleryModal = document.getElementById('gallery-modal');
        // Only respond if the gallery is actually active.
        if (galleryModal.style.display === 'flex') {
            if (event.key === 'ArrowLeft') changeGalleryImage(-1);
            if (event.key === 'ArrowRight') changeGalleryImage(1);
            if (event.key === 'Escape') closeGalleryModal();
        }
    });
}


// --- Source: js/modules/ui.js ---

/**
 * UI Enhancements Module
 * -----------------------------------------------------------------------------
 * Responsible for visual polish, text animations, and micro-interactions 
 * that give the site a premium, cinematic feel.
 */

/**
 * Performs a cinematic character-by-character animation for the main title.
 * Choosen approach: Splits the raw text into nested word and character spans,
 * allowing CSS to animate them independently with staggered delays.
 */
function initTitleAnimation() {
    const title = document.querySelector('.film-title');
    if (!title) return;

    const text = title.textContent.trim();
    // Clear the original text to inject our animated span structure.
    title.innerHTML = '';

    // Split text into words to maintain proper spacing during staggered animation.
    const words = text.split(' ');

    words.forEach((word, index) => {
        const wordSpan = document.createElement('span');
        wordSpan.className = 'word';

        // Split word into characters to apply individual animation delays via CSS.
        word.split('').forEach(char => {
            const charSpan = document.createElement('span');
            charSpan.textContent = char;
            charSpan.className = 'char-animate';
            wordSpan.appendChild(charSpan);
        });

        title.appendChild(wordSpan);

        // Maintain readability: Add spacer between words, but not after the absolute last word.
        if (index < words.length - 1) {
            const spacer = document.createElement('span');
            spacer.innerHTML = '&nbsp;';
            spacer.className = 'spacer';
            title.appendChild(spacer);
        }
    });
}

/**
 * Handles the "Meet the Cast" button's complex animation sequence.
 * This logic ensures that if the button is re-triggered or enters a loop, 
 * the text animation resets cleanly without snapping.
 */
function initButtonAnimation() {
    const buttons = document.querySelectorAll('.btn-animated');
    buttons.forEach(button => {
        /**
         * The 'animationend' listener allows us to reset or loop animations 
         * at their natural completion point, preventing visual glitches 
         * during the text-slide/cinematic reveal.
         */
        button.addEventListener('animationend', () => {
            const text = button.querySelector('.text');
            if (text) {
                // Force a DOM reflow to restart the animation if needed.
                text.style.animation = 'none';
                setTimeout(() => {
                    text.style.animation = '';
                }, 10);
            }
        });
    });
}



// --- Source: js/main.js ---

/**
 * Main Application Hub (EntryPoint)
 * -----------------------------------------------------------------------------
 * This is the primary bootstrapping document for the website's interactive logic.
 */

// Initialize all site features once the DOM is fully constructed.
document.addEventListener('DOMContentLoaded', function () {
    // 1. Core System: Setup Light/Dark mode.
    initTheme();

    // 2. Section Features: Setup premiere background carousel.
    initCarousel();

    // 3. User Interaction: Setup listeners for actor and award modals.
    initModalListeners();

    // 4. Immersive Features: Setup the full-screen photo gallery controls.
    initGalleryListeners();

    // 5. Visual Aesthetics: Execute entrance animations for titles and buttons.
    initTitleAnimation();
    initButtonAnimation();

    /**
     * Interface Exposure:
     * We attach key functional triggers to the global 'window' object.
     * This bridge is necessary because the project uses inline 'onclick' handlers 
     * in the HTML but maintains logic in this modularized script.
     * Use this pattern sparingly in modern apps, but here it keeps the HTML simple.
     */
    window.openModal = openModal;
    window.closeModal = closeModal;
    window.openAwardModal = openAwardModal;
    window.closeAwardModal = closeAwardModal;

    window.openGalleryModal = openGalleryModal;
    window.closeGalleryModal = closeGalleryModal;
    window.changeGalleryImage = changeGalleryImage;
});

