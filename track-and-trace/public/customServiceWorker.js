var CACHE_NAME = 'pwa-trace-and-trace';
var urlsToCache = [
  '/',
];

// Install a service worker
self.addEventListener('install', event => {
  // Perform install steps
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});

// Cache and return requests
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        // Cache hit - return response
        if (response) {
          return response;
        }
        return fetch(event.request);
      }
    )
  );
});

// Update a service worker
self.addEventListener('activate', event => {
  var cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

self.addEventListener('notificationclose', function (e) {
  var notification = e.notification;
  var data = notification.data || {};
  var primaryKey = data.primaryKey;
  console.debug('Closed notification: ' + primaryKey);
});

self.addEventListener('notificationclick', function(e) {
  var notification = e.notification;
  var data = notification.data || {};
  var primaryKey = data.primaryKey;
  var action = e.action;
  console.debug('Clicked notification: ' + primaryKey);
  if (action === 'close') {
    console.debug('Notification clicked and closed', primaryKey);
    notification.close();
  } 
  else {
    console.debug('Notification actioned', primaryKey);
    clients.openWindow('/');
    notification.close();
  }
});