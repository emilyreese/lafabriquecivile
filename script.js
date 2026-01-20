// Language Switcher
document.addEventListener('DOMContentLoaded', function() {
    const langSwitcher = document.getElementById('langSwitcher');
    const langOptions = document.querySelectorAll('.lang-option');
    
    // Get saved language from localStorage or default to 'en'
    let currentLang = localStorage.getItem('language') || 'en';
    
    // Set initial language
    setLanguage(currentLang);
    
    // Add click handlers to language options
    langOptions.forEach(option => {
        option.addEventListener('click', function() {
            const newLang = this.getAttribute('data-lang');
            setLanguage(newLang);
            localStorage.setItem('language', newLang);
        });
    });
    
    function setLanguage(lang) {
        currentLang = lang;
        
        // Update all elements with language attributes
        const elements = document.querySelectorAll('[data-en][data-fr]');
        elements.forEach(element => {
            const text = element.getAttribute('data-' + lang);
            if (element.tagName === 'SPAN' && element.classList.contains('logo-text')) {
                // Handle line breaks in logo
                element.innerHTML = text;
            } else {
                // For all other elements, use textContent to preserve security
                element.textContent = text;
            }
        });
        
        // Update active state on language switcher
        langOptions.forEach(option => {
            if (option.getAttribute('data-lang') === lang) {
                option.classList.add('active');
            } else {
                option.classList.remove('active');
            }
        });
        
        // Update HTML lang attribute for accessibility
        document.documentElement.lang = lang;
    }
});
