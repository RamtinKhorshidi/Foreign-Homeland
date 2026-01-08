/**
 * ui.js
 * Handles general UI animations and enhancements.
 */

function initTitleAnimation() {
    const title = document.querySelector('.film-title');
    if (!title) return;

    const text = title.textContent.trim();
    title.innerHTML = '';

    // Split text into words first
    const words = text.split(' ');

    words.forEach((word, index) => {
        const wordSpan = document.createElement('span');
        wordSpan.className = 'word';

        // Split word into characters
        word.split('').forEach(char => {
            const charSpan = document.createElement('span');
            charSpan.textContent = char;
            charSpan.className = 'char-animate';
            wordSpan.appendChild(charSpan);
        });

        title.appendChild(wordSpan);

        // Add spacer between words, but not after the last word
        if (index < words.length - 1) {
            const spacer = document.createElement('span');
            spacer.innerHTML = '&nbsp;';
            spacer.className = 'spacer';
            title.appendChild(spacer);
        }
    });
}

