// Inicializar i18next con textos + rutas de imágenes
i18next.init({
  lng: 'es', // Idioma por defecto (español)
  resources: {
    en: {
      translation: {
        welcome: "Transforming Sustainability Data & Science into Commercial Value",
        description: "Boutique full-service sustainability advisory firm developing streamlined solutions that turn sustainability data into a competitive business advantage",
        banner: "./assets/en/banner.jpg", // Ruta imagen en inglés
        logo: "./assets/en/logo.png"
      }
    },
    es: {
      translation: {
        welcome: "Transformando los datos y la ciencia de la sostenibilidad en valor comercial",
        description: "Empresa boutique de asesoramiento en sostenibilidad de servicio completo que desarrolla soluciones optimizadas que convierten los datos de sostenibilidad en una ventaja comercial competitiva.",
        banner: "./assets/es/banner.jpg", // Ruta imagen en español
        logo: "./assets/es/logo.png"
      }
    }
  }
}, function(err, t) {
  updateContent(); // Actualizar contenido al cargar
});

// Función para actualizar textos e imágenes
function updateContent() {
  // Textos
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    el.textContent = i18next.t(key);
  });

  // Imágenes
  document.querySelectorAll('[data-i18n-img]').forEach(el => {
    const key = el.getAttribute('data-i18n-img');
    el.src = i18next.t(key); // Cambiar src de la imagen
  });
}