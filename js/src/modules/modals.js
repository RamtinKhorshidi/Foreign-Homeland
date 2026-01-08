/**
 * modals.js
 * Unified modal management for actor biographies and award details.
 */

/**
 * Opens a modal for a specific cast/crew member.
 * @param {string} actorKey - The ID of the actor in js/data/actors.js
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
        modalImg.src = actor.img;
        modalName.textContent = actor.name;
        modalRole.textContent = actor.role;
        modalBio.textContent = actor.bio;

        // Remove existing social button if any
        const existingBtn = modalText.querySelector('.modal-social-btn');
        if (existingBtn) {
            existingBtn.remove();
        }

        // Add social link if exists
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

        modal.style.display = 'block';
        document.body.style.overflow = 'hidden'; // Prevent scrolling
    }
}

/**
 * Closes the actor modal and re-enables body scrolling.
 */
function closeModal() {
    const modal = document.getElementById('actor-modal');
    modal.style.display = 'none';
    document.body.style.overflow = 'auto'; // Enable scrolling
}

// Award Modal
/**
 * Opens the award modal with specific award data.
 * @param {string} awardKey - The key in awardsData (from js/data/awards.js)
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
 * Closes the award modal and re-enables body scrolling.
 */
function closeAwardModal() {
    const modal = document.getElementById('award-modal');
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}


/**
 * Initializes global click listeners to close modals when clicking outside them.
 */
function initModalListeners() {
    window.onclick = function (event) {
        const actorModal = document.getElementById('actor-modal');
        const awardModal = document.getElementById('award-modal');
        if (event.target == actorModal) {
            closeModal();
        }
        if (event.target == awardModal) {
            closeAwardModal();
        }
    };
}
