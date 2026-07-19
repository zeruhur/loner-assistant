/**
 * LONER ASSISTANT v2.1 - Service Worker
 *
 * Hand-written, Cache API only (no Workbox, no build step). Precaches the
 * full app shell (HTML/CSS/JS modules/table data/vendored libs/fonts/icons)
 * so the app works fully offline after first load, and falls back to
 * cache-first-with-network-fallback for anything else.
 *
 * IMPORTANT - manual cache busting: since there's no bundler to produce
 * content-hashed filenames, this CACHE_VERSION string is the only thing
 * that invalidates old precached files. Bump it any time you change a
 * precached file's contents, or clients will keep serving stale versions
 * until they happen to re-fetch (which the update-prompt in main.js's
 * registerServiceWorker() nudges them to do, but only if this bumps).
 */

const CACHE_VERSION = 'loner-v9';
const CACHE_NAME = `loner-cache-${CACHE_VERSION}`;

const PRECACHE_URLS = [
  './',
  './index.html',
  './manifest.json',
  './css/style.css',

  './lib/dexie.min.js',
  './lib/quill.min.js',
  './lib/css/quill.snow.css',

  './assets/fonts/montserrat-latin.woff2',
  './assets/fonts/raleway-latin.woff2',
  './assets/fonts/raleway-extrabold.ttf',
  './assets/fonts/raleway-black.ttf',
  './assets/fonts/takota.otf',
  './assets/fonts/oswald-bold.ttf',
  './assets/fonts/dicier-round-dark.otf',
  './assets/fonts/dicier-round-heavy.otf',
  './assets/fonts/dicier-round-light.otf',

  './assets/logo.svg',
  './assets/icons-pwa/icon-192.png',
  './assets/icons-pwa/icon-512.png',
  './assets/icons-pwa/icon-maskable-512.png',
  './assets/icons-pwa/apple-touch-icon.png',

  './js/main.js',
  './js/state.js',
  './js/toast.js',
  './js/ui.js',
  './js/shortcuts.js',
  './js/oracle.js',
  './js/editor.js',
  './js/tables.js',
  './js/table-manager.js',
  './js/custom-tables.js',
  './js/onboarding.js',
  './js/manual.js',
  './js/export-import.js',
  './js/campaigns.js',
  './js/characters.js',
  './js/npcs.js',
  './js/locations.js',
  './js/threads.js',
  './js/events.js',
  './js/sessions.js',
  './js/db/database.js',
  './js/crud/modal-form.js',

  './data/table-registry.js',
  './data/tables/core-loner.js',
  './data/tables/core-inspired.js',
  './data/tables/flavors/cog-compass-inspired.js',
  './data/tables/flavors/cozy-fantasy-inspired.js',
  './data/tables/flavors/kwaidan-inspired.js',
  './data/tables/supplements/cog-compass.js',
  './data/tables/supplements/cozy-fantasy.js',
  './data/tables/supplements/kwaidan.js',
  './data/tables/supplements/arabian-nights.js',
  './data/tables/flavors/arabian-nights-inspired.js',
  './data/tables/supplements/legends-of-camelot.js',
  './data/tables/flavors/legends-of-camelot-inspired.js'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(PRECACHE_URLS))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(
        keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key))
      ))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return;

  event.respondWith(
    caches.match(event.request).then((cached) => {
      if (cached) return cached;

      return fetch(event.request).then((response) => {
        // Only cache successful, same-origin responses
        if (response.ok && new URL(event.request.url).origin === self.location.origin) {
          const responseClone = response.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(event.request, responseClone));
        }
        return response;
      }).catch(() => {
        // Offline and not cached: for navigations, fall back to the app shell
        if (event.request.mode === 'navigate') {
          return caches.match('./index.html');
        }
        return undefined;
      });
    })
  );
});
