'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"404.html": "0a27a4163254fc8fce870c8cc3a3f94f",
"assets/AssetManifest.bin": "c07c58ac6565488c12321564ce026103",
"assets/AssetManifest.bin.json": "c69aeb0bdd490df5c816f9df1d3de9c8",
"assets/AssetManifest.json": "8fb54b44de8824630cb3edeffb748dbd",
"assets/assets/images/addUser.png": "5405d77c51fb46a0cbf26cb96fe4da4d",
"assets/assets/images/appSetting.png": "e8148c19403e2e0b6fc6bdea31b1a0b0",
"assets/assets/images/bangla.png": "a70a26f1621c4d2355c07355b50b08b9",
"assets/assets/images/chatify.png": "6660b4faea1a177f00d9f3c97b1792b1",
"assets/assets/images/chatifyLogo1.png": "76d238d4a1cb7261f8dcd3ff811b29bf",
"assets/assets/images/chatifyLogo2.png": "031f09c524c582b65eda0fdeb1d13be2",
"assets/assets/images/dashboard.png": "61c3c34ccbf94c208e48b03af7ae9ce8",
"assets/assets/images/dottedDivider.png": "ed329b017d01eb58092888bc0a4c874a",
"assets/assets/images/gallery.png": "8876e1ee8067e1499cab087629842f8e",
"assets/assets/images/india.png": "3d50ee4fb3ba7786f551b428ff0c4421",
"assets/assets/images/line.png": "77f1a03260d43a9f3e3149bd1d07acf3",
"assets/assets/images/loginBg.png": "5f2daf08aee49d4fcd2e7bb6ec211463",
"assets/assets/images/loginBg1.png": "d8a9cdd8eec504d406aacc0999bf59e0",
"assets/assets/images/loginBg2.png": "9f8dbfb89eac7a0090697a82d6bfdcd1",
"assets/assets/images/loginBg3.png": "fd9d8cf6025e2b87911451f8ae878ddf",
"assets/assets/images/loginBg4.png": "dcbc47173d4b30d1bd03093c845f52c2",
"assets/assets/images/loginBg5.png": "232fa72058953c108e7933902b300408",
"assets/assets/images/logo.png": "f026724dea705282255b10bff4abf405",
"assets/assets/images/logo1.png": "b123e505587555fcc90cce41a42469b3",
"assets/assets/images/logout.png": "dbc6109d699ed13999f56457fd4b3f22",
"assets/assets/images/moon.png": "5ddec3b15e80af0201ee4da526ca9015",
"assets/assets/images/pakistan.png": "450c3fd69eeb2401cfe5cabcab5bfe19",
"assets/assets/images/turkey.png": "ff42c1834502afcdbef7b2695659298c",
"assets/assets/images/us.png": "2af882808d726140a04ca9c1797be299",
"assets/assets/images/usageControl.png": "cb0f463cf9b5c22b1cfdba86e84b37a7",
"assets/assets/svg/addUser.svg": "b0060cbd74011f303eb5ad0306683c48",
"assets/assets/svg/appControl.svg": "a4e529dc0301c1e09eb44dee905858c9",
"assets/assets/svg/appControl1.svg": "f02747ee240646a03c8c0a6f47a6d7af",
"assets/assets/svg/audioCalls.svg": "84e654442d3826ae01891ded90851ca7",
"assets/assets/svg/bell.svg": "6c81412cfe736988e5e74cf7b5607585",
"assets/assets/svg/call.svg": "0c89352d5361cd320ad5b0c0fb8facff",
"assets/assets/svg/copy.svg": "1c202c1781d7b8518ccd1b28026c5398",
"assets/assets/svg/dashboard.svg": "4b0b096f992eb70d1a1f705d147837f1",
"assets/assets/svg/dashboard1.svg": "a87a5653b54828e3d1cd6b3c249395c9",
"assets/assets/svg/dashicon.svg": "98e8192a97f428362d52a7c1b1d2e964",
"assets/assets/svg/delete.svg": "c47161b8c891c4512d89909d012c5be4",
"assets/assets/svg/dislike.svg": "eb0faf16b5ccae2a1e34dae57caff7dc",
"assets/assets/svg/dislike1.svg": "957b9212cf253473022b100f830dad61",
"assets/assets/svg/edit.svg": "6b24010703508e965b972ee32c2e648d",
"assets/assets/svg/export.svg": "fc5207a19fcf84709d5a6f258b9af998",
"assets/assets/svg/eye.svg": "f2aff2a1b7417f7f1c6cfdfc90ed5cc6",
"assets/assets/svg/gallery.svg": "bc22278bf404de617ceb72ecadc59e2a",
"assets/assets/svg/gallery1.svg": "de92686ffe2481b902ce668715aa4dd5",
"assets/assets/svg/groups.svg": "c2a77acfac15e515066e76ef51f171c6",
"assets/assets/svg/india.svg": "b68977e70d472e71222e5c0ed513381c",
"assets/assets/svg/language.svg": "6ebd021cefce800af0b186c5d915cd86",
"assets/assets/svg/languages.svg": "d0902c4b54547711486515af57d4c2f6",
"assets/assets/svg/light.svg": "ee8789c46b8074763437646a980fe5cb",
"assets/assets/svg/line.svg": "d599ffb8b257394e60762b38bdddf9ac",
"assets/assets/svg/logout.svg": "423fbccaeafe4af194ad6228fd845007",
"assets/assets/svg/logout1.svg": "11b6626f2a061b12a4579ed298cf00c0",
"assets/assets/svg/moon.svg": "0d6af11e88567363e81bbd2ebc97ddfd",
"assets/assets/svg/orders.svg": "a29d3b0d126f7a59d8d8bde0d3ec1d38",
"assets/assets/svg/page.svg": "0a22af61fead9a1ddb5b5f26cbbef95e",
"assets/assets/svg/rectangle.svg": "60d8438281e54f6041580d5f0e531eba",
"assets/assets/svg/status.svg": "fd328415b786a21e34f2a5766fd557a4",
"assets/assets/svg/status1.svg": "a2ff3e363677af29074bf1f7ea6093ed",
"assets/assets/svg/sun.svg": "fb16021cdd3201b9d6da63ec99c7d88c",
"assets/assets/svg/totalCalls.svg": "63f77d41d03c84acd91619ae2564c50a",
"assets/assets/svg/totalUser.svg": "2a7f23fc86ff3d93f6a79549257d0667",
"assets/assets/svg/translate.svg": "f5c4f0ac7a3dd3872b07bba84975fc51",
"assets/assets/svg/translate1.svg": "311702b7117e00c30b59790c3fe1a931",
"assets/assets/svg/usageControl.svg": "650cd1d5eeef4f22ffb16ed90eac6da8",
"assets/assets/svg/usageControl1.svg": "ce6d0f6d14fea585dad1e417173326ee",
"assets/assets/svg/user.svg": "ebbe24a2e9f5aa062addc3c153109e9e",
"assets/assets/svg/videoCall.svg": "a09a0321abb8e4741f9cf135297e621c",
"assets/assets/svg/videoCalls.svg": "8f373f8260dd2ff8cb88507f0ec58890",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "4cd9103ceaf6c15eac7a2f250e911909",
"assets/NOTICES": "0600966d80c819764e289c8d5e20551a",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "552fb38507bb414fac78b093b4c5d8d8",
"assets/packages/flutter_dropzone_web/assets/flutter_dropzone.js": "dddc5c70148f56609c3fb6b29929388e",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "728b2d477d9b8c14593d4f9b82b484f3",
"canvaskit/canvaskit.js.symbols": "bdcd3835edf8586b6d6edfce8749fb77",
"canvaskit/canvaskit.wasm": "7a3f4ae7d65fc1de6a6e7ddd3224bc93",
"canvaskit/chromium/canvaskit.js": "8191e843020c832c9cf8852a4b909d4c",
"canvaskit/chromium/canvaskit.js.symbols": "b61b5f4673c9698029fa0a746a9ad581",
"canvaskit/chromium/canvaskit.wasm": "f504de372e31c8031018a9ec0a9ef5f0",
"canvaskit/skwasm.js": "ea559890a088fe28b4ddf70e17e60052",
"canvaskit/skwasm.js.symbols": "e72c79950c8a8483d826a7f0560573a1",
"canvaskit/skwasm.wasm": "39dd80367a4e71582d234948adc521c0",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"firebase-messaging-sw.js": "21cff6f44b6efda1d7ccd30b9753ef78",
"flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
"flutter_bootstrap.js": "ffdf128b7e275722760c7e1ed3f4af78",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "1e8c8fbd9452dd9f2ca1b8461cf5f6b2",
"/": "1e8c8fbd9452dd9f2ca1b8461cf5f6b2",
"logo.png": "f026724dea705282255b10bff4abf405",
"main.dart.js": "188b568778d78f808f120e819121376c",
"manifest.json": "75d1d6824911f99937f5e1cef8bc5796",
"version.json": "f30e01ed3c0c3de92b8b62e965def3ee"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
