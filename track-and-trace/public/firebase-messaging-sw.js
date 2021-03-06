importScripts('https://www.gstatic.com/firebasejs/8.1.2/firebase-app.js')
importScripts('https://www.gstatic.com/firebasejs/8.1.2/firebase-messaging.js')

let Config = {
  apiKey: "AIzaSyCBvDLuXO2iRapUI5YcT0UBORg_kCaw9-Y",
  authDomain: "tandt-sd3-coursework.firebaseapp.com",
  projectId: "tandt-sd3-coursework",
  storageBucket: "tandt-sd3-coursework.appspot.com",
  messagingSenderId: "1004202986816",
  appId: "1:1004202986816:web:2c24e6d948e9a2bb29fea5",
  measurementId: "G-28TPLE5PW3"
};

firebase.initializeApp(Config);

const messaging = firebase.messaging();

messaging.setBackgroundMessageHandler((payload) => {
  let title = 'Hello World';
  let options = {
    body: payload.data.status
  }
  return self.registrations.showNotifcation(title, options)
})

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