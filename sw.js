// Service Worker mínimo — solo requerido para que Chrome permita instalar la PWA.
// NO cachea nada. Siempre carga desde internet.
self.addEventListener('fetch', e => {
  e.respondWith(fetch(e.request));
});
