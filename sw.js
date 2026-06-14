const CACHE_NAME = 'site-cache-v1.1';
const OFFLINE_URL = '/404.html';

// Install event: cache the custom 404 page
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll([OFFLINE_URL]);
    })
  );
  // Force active service worker to take control immediately
  self.skipWaiting();
});

// Activate event: clean up old caches
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys => {
      return Promise.all(
        keys.map(key => {
          if (key !== CACHE_NAME) {
            return caches.delete(key);
          }
        })
      );
    })
  );
  self.clients.claim();
});

// Fetch event: intercept navigation requests
self.addEventListener('fetch', event => {
  // Only handle GET requests for navigation (page loads)
  if (event.request.method === 'GET' && event.request.mode === 'navigate') {
    event.respondWith(
      fetch(event.request)
        .then(response => {
          // If the page is not found (404), return the custom 404.html page
          if (response.status === 404) {
            return caches.match(OFFLINE_URL) || fetch(OFFLINE_URL);
          }
          return response;
        })
        .catch(() => {
          // If network is offline or request fails, serve the custom 404.html page
          return caches.match(OFFLINE_URL) || fetch(OFFLINE_URL);
        })
    );
  }
});
