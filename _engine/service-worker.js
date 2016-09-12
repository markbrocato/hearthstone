var version = "1";
var CACHE_NAME = "hdb";
var REQUIRED_FILES = [
    "index.html",
    "/",
    "../data/allCards.json",
    "../data/classes.json",
    "favicon.ico",
    "modern/app.js",
    "modern.json",
    "modern.jsonp",
    "modern.jsp",
    "modern/resources/HDB.css",
    "modern/resources/css-vars.js",
    "resources/icon-large.png",
    "resources/icon-mega.png",
    "resources/icon-medium.png"
];

//The install event on the service worker will
//open the cache and use addAll to direct
//the service worker to cache our REQUIRED_FILES array
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE_NAME).then(function(cache){
        return cache.addAll(REQUIRED_FILES);
    }).then(function(){
        self.skipWaiting();
    })
  );
});

//the fetch event of a service worker is fired for
//every single request the page makes. The fetch
//event also allows you to serve alternate content
//than what's actually requested. For example Offline content.
//This Fetch event is simple, if the file is cached
//return from cache, else return from server.
self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request).then(function(response){
            //It's in the cache!
            if(response) return response;

            //Not in cache - return the result from the server
            return fetch(event.request);
        })
    );
});

//Claim the service worker so that the user doesn't need
//to refresh the page to activate the service worker
//The activate event fires when a previous version of
//a service worker has been replaced. The updated service
//worker takes control of the scope.
self.addEventListener('activate',  event => {
  event.waitUntil(self.clients.claim());
});
