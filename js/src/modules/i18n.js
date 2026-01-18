/**
 * i18n.js
 * -----------------------------------------------------------------------------
 * Internationalization module for switching between English and Persian.
 * Handles DOM updates, RTL layout, and language persistence.
 */

let currentLang = 'en';

/**
 * Initializes the language based on localStorage or default.
 */
function initI18n() {
    // Check URL parameters first for language override
    const urlParams = new URLSearchParams(window.location.search);
    const langParam = urlParams.get('lang');

    if (langParam && (langParam === 'fa' || langParam === 'en')) {
        setLanguage(langParam);
    } else {
        const savedLang = localStorage.getItem('language');
        if (savedLang === 'fa') {
            setLanguage('fa');
        } else {
            setLanguage('en');
        }
    }

    // Attach event listeners to language buttons
    const langBtns = document.querySelectorAll('.lang-btn');
    langBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const lang = btn.getAttribute('data-lang');
            setLanguage(lang);

            // Optionally update URL without reload to reflect choice (for sharing)
            const newUrl = new URL(window.location);
            newUrl.searchParams.set('lang', lang);
            window.history.pushState({}, '', newUrl);
        });
    });
}

/**
 * Sets the application language.
 * @param {string} lang - 'en' or 'fa'
 */
function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('language', lang);

    // Update HTML attributes
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'fa' ? 'rtl' : 'ltr';

    // Update active button state
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
    });

    // Translate all elements with data-i18n
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            // Use innerHTML for cases like footer with &copy;
            if (key === 'footer_copy') {
                el.innerHTML = translations[lang][key];
            } else {
                el.textContent = translations[lang][key];
            }
        }
    });

    // Update Meta Metadata (SEO)
    if (translations[lang]) {
        if (translations[lang]['doc_title']) {
            document.title = translations[lang]['doc_title'];
        }
        const metaDesc = document.querySelector('meta[name="description"]');
        if (metaDesc && translations[lang]['doc_desc']) {
            metaDesc.setAttribute('content', translations[lang]['doc_desc']);
        }
    }

    // Special handling for title animation if active
    if (typeof initTitleAnimation === 'function') {
        initTitleAnimation();
    }
}

/**
 * Helper to get current language.
 */
function getCurrentLang() {
    return currentLang;
}

/**
 * Translates a given object if a translation exists.
 * Used for dynamic content like actors and awards.
 */
function getTranslatedContent(type, key) {
    if (currentLang === 'fa' && dataTranslations.fa[type] && dataTranslations.fa[type][key]) {
        return dataTranslations.fa[type][key];
    }
    return null;
}
