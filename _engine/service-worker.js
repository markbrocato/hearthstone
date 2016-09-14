var version = "1";
var CACHE_NAME = "hdb";
var REQUIRED_FILES = [
    "index.html",
    "/HDB/",
    "data/allCards.json",
    "data/classes.json",
    "favicon.png",
    "modern/app.js",
    "modern.json",
    "modern.jsonp",
    "modern/resources/HDB-all.css",
    "modern/resources/css-vars.js",
    "resources/icon-large.png",
    "resources/icon-normal.png",
    "resources/icon-medium.png",
    "resources/icon-small.png",
    "resources/splash.png",
    "resources/font-awesome/fonts/FontAwesome.otf",
    "resources/font-awesome/fonts/fontawesome-webfont.eot",
    "resources/font-awesome/fonts/fontawesome-webfont.svg",
    "resources/font-awesome/fonts/fontawesome-webfont.ttf",
    "resources/font-awesome/fonts/fontawesome-webfont.woff", 
    "resources/font-awesome/fonts/fontawesome-webfont.woff2"
];

console.log("sw");

//The install event on the service worker will
//open the cache and use addAll to direct
//the service worker to cache our REQUIRED_FILES array
self.addEventListener('install', function(e){
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
self.addEventListener('fetch', function(event){
    //console.log(event.request);

    event.respondWith(
        caches.match(event.request).then(function(response){
            //It's in the cache!
            if(response) {
                //console.log(response, "IS IN CACHE!");
                return response;    
            }

            // IMPORTANT: Clone the request. A request is a stream and
            // can only be consumed once. Since we are consuming this
            // once by cache and once by the browser for fetch, we need
            // to clone the response.
            var fetchRequest = event.request.clone();

            return fetch(fetchRequest).then(
            function(response) {
                // Check if we received a valid response
                if(!response || response.status !== 200 || response.type !== 'basic') {
                return response;
                }

                // IMPORTANT: Clone the response. A response is a stream
                // and because we want the browser to consume the response
                // as well as the cache consuming the response, we need
                // to clone it so we have two streams.
                var responseToCache = response.clone();

                caches.open(CACHE_NAME)
                .then(function(cache) {
                    console.log(event.request);
                    cache.put(event.request, responseToCache);
                });

                return response;
            }
            ).catch(function(error) {
                // `fetch()` throws an exception when the server is unreachable but not
                // for valid HTTP responses, even `4xx` or `5xx` range.
                return caches.open(CACHE_NAME).then(function(cache) {
                    var noCacheUrl = event.request.url.split("?_dc")[0];
                    console.log(noCacheUrl);
                    return cache.match(noCacheUrl);
                });
            })

        })
    );
});

//Claim the service worker so that the user doesn't need
//to refresh the page to activate the service worker
//The activate event fires when a previous version of
//a service worker has been replaced. The updated service
//worker takes control of the scope.
self.addEventListener('activate',  function(event) {
  event.waitUntil(self.clients.claim());
});
