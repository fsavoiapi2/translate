// detectar el idioma del navegador
i18next.init({
  lng: navigator.language.split('-')[0] || 'es', // Usa el idioma
  fallbackLng: 'en'
});

// Cambiar idioma al hacer clic en los botones
document.getElementById('btn-en').addEventListener('click', () => {
  i18next.changeLanguage('en', updateContent);
});

document.getElementById('btn-es').addEventListener('click', () => {
  i18next.changeLanguage('es', updateContent);
});

// precargar imagenes para que no demore al cambiar de idioma
function preloadImages() {
  const langs = ['en', 'es'];
  langs.forEach(lang => {
    new Image().src = `./assets/${lang}/logo.png`;
  });
}

// cambiar las imagenes
document.querySelectorAll('[data-i18n-img]').forEach(el => {
  const key = el.getAttribute('data-i18n-img');
  el.src = i18next.t(key, { lng: i18next.language });
});


preloadImages();