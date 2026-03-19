const cacheName = 'masterall-v1';
const assets = [
  '/MASTERALL/',
  '/MASTERALL/index.html',
  // Add paths to your CSS or JS files here if they exist
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(cacheName).then(cache => {
      return cache.addAll(assets);
    })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
