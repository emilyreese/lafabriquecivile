// Language switching functionality
document.addEventListener('DOMContentLoaded', function() {
  let currentLang = 'en';

  const langOptions = document.querySelectorAll('.lang-option');

  // Function to update all translatable elements
  function updateLanguage(lang) {
    currentLang = lang;

    // Update all elements with data-en and data-fr attributes
    const translatableElements = document.querySelectorAll('[data-en][data-fr]');
    translatableElements.forEach(function(el) {
      el.textContent = lang === 'en' ? el.getAttribute('data-en') : el.getAttribute('data-fr');
    });

    // Update language toggle styling
    langOptions.forEach(function(option) {
      if (option.getAttribute('data-lang') === lang) {
        option.classList.add('active');
      } else {
        option.classList.remove('active');
      }
    });
  }

  // Add click handlers to language options
  langOptions.forEach(function(option) {
    option.addEventListener('click', function() {
      const lang = this.getAttribute('data-lang');
      updateLanguage(lang);
    });
  });

  // Initialize with English
  updateLanguage('en');
});
