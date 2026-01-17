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
        // Feature: Internationalization Support
        // Check if translated content exists for Persian
        const translated = typeof getTranslatedContent === 'function' ? getTranslatedContent('actors', actorKey) : null;

        modalImg.src = actor.img;
        modalName.textContent = translated ? translated.name : actor.name;
        modalRole.textContent = translated ? translated.role : actor.role;
        modalBio.textContent = translated ? translated.bio : actor.bio;

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
                <span>${typeof getCurrentLang === 'function' && getCurrentLang() === 'fa' ? translations.fa.btn_follow_instagram : 'Follow on Instagram'}</span>
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
        // Feature: Internationalization Support
        const translated = typeof getTranslatedContent === 'function' ? getTranslatedContent('awards', awardKey) : null;

        awardImg.src = data.image;
        awardImg.alt = data.imageAlt;
        awardLogo.src = data.logo;
        awardTitle.textContent = translated ? translated.title : data.title;
        awardSubtitle.textContent = translated ? translated.subtitle : data.subtitle;
        awardFestival.textContent = translated ? translated.festival : data.festival;
        awardQuote.innerHTML = translated ? `"${translated.quote}"` : `"${data.quote}"`;

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
