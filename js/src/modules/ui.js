/**
 * UI Animation Module
 * -----------------------------------------------------------------------------
 * Manages specialized cinematic visual effects and micro-interactions.
 * Key focus: The animated film title and high-impact CTA buttons.
 */

/**
 * Creates the "Staggered Entrance" effect for the film title.
 * 
 * Logic flow:
 * 1. Takes the text content of `.film-title`.
 * 2. Splices it into individual words and characters.
 * 3. Wraps each character in a `span` with an incremental animation delay.
 * 4. This allows for a smooth, progressive reveal rather than a static fade.
 */
function initTitleAnimation() {
    const title = document.querySelector('.film-title');
    if (!title) return;

    const originalText = title.textContent.trim();
    const isRTL = document.documentElement.dir === 'rtl';

    title.innerHTML = ''; // Reset for injection.

    // For Persian/RTL, we avoid splitting into characters to maintain script connectivity.
    // Instead, we treat each word as the "animatable" unit.
    if (isRTL) {
        const words = originalText.split(' ');
        words.forEach((word, wordIndex) => {
            const wordSpan = document.createElement('span');
            wordSpan.className = 'word char-animate'; // Entire word gets the glow/scale effect
            wordSpan.textContent = word;

            // Apply a staggered reveal delay to the word
            wordSpan.style.animationDelay = `${wordIndex * 0.3}s`;

            title.appendChild(wordSpan);

            if (wordIndex < words.length - 1) {
                const spacer = document.createElement('span');
                spacer.className = 'spacer';
                spacer.innerHTML = '&nbsp;';
                title.appendChild(spacer);
            }
        });
        return;
    }

    // Default LTR logic: Split into characters for the "shimmer" or "staggered" reveal.
    const words = originalText.split(' ');
    words.forEach((word, wordIndex) => {
        const wordSpan = document.createElement('span');
        wordSpan.className = 'word';

        const characters = word.split('');
        characters.forEach((char, charIndex) => {
            const charSpan = document.createElement('span');
            charSpan.textContent = char;
            charSpan.className = 'char-animate';

            // Incremental delay creates the "typing" or "staggered" feel.
            const globalIndex = (wordIndex * 5) + charIndex;
            charSpan.style.animationDelay = `${globalIndex * 0.1}s`;

            wordSpan.appendChild(charSpan);
        });

        title.appendChild(wordSpan);

        // Append a space between words unless it's the last word.
        if (wordIndex < words.length - 1) {
            const spacer = document.createElement('span');
            spacer.className = 'spacer';
            spacer.innerHTML = '&nbsp;';
            title.appendChild(spacer);
        }
    });
}

/**
 * Manages the high-end button animation state.
 * Specifically handles the "Meet the Cast" button transition reset.
 */
function initButtonAnimation() {
    const animatedBtns = document.querySelectorAll('.btn-animated');
    if (!animatedBtns.length) return;

    animatedBtns.forEach(animatedBtn => {
        const textElement = animatedBtn.querySelector('.text');
        if (!textElement) return;

        /**
         * Why `animationend`? 
         * To prevent animation artifacts or weird states when a user hovers 
         * rapidly in and out of the button.
         */
        textElement.addEventListener('animationend', () => {
            // Cleaning up the style allows the animation to be re-triggered cleanly next time.
            textElement.style.animation = 'none';
            // forced reflow: a hack to ensure the browser registers the removal before the addition.
            textElement.offsetHeight;
            textElement.style.animation = null;
        });
    });
}
