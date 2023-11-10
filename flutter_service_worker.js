'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"main.dart.js_16.part.js": "bf52f09e2f8c24760ff9b42e29159eb3",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"favicon.png": "aa55c22e0c7bce9da0110b3035be5332",
"main.dart.js_5.part.js": "0fe00575e4cf986ca95558e537f16b6c",
"icons/Icon-192.png": "ef3b512b1c79d917c832c8c8c75ced88",
"icons/Icon-maskable-192.png": "ef3b512b1c79d917c832c8c8c75ced88",
"icons/Icon-512.png": "2650274e44ece6729a43d7ee130fdfbd",
"icons/Icon-maskable-512.png": "2650274e44ece6729a43d7ee130fdfbd",
"main.dart.js_10.part.js": "7d8788fdd4ac2e27dab3d557e7aef710",
"main.dart.js_23.part.js": "93a90830092e53752d4d3485458c0df9",
"main.dart.js_14.part.js": "3cfa3282bbd49d908a3621ec727afc48",
"main.dart.js_26.part.js": "2471fde6db59b4c2c9b5bdca87d35084",
"main.dart.js_24.part.js": "824514feeed52d592213d5e3799023ef",
"assets/FontManifest.json": "6b53bbac7e12ce88331411914c31782e",
"assets/AssetManifest.bin": "b6563f51aab4da1919b1718cb313cc3b",
"assets/AssetManifest.json": "d28c888634906fb585a4e78b850824ca",
"assets/packages/fluent_ui/assets/AcrylicNoise.png": "81f27726c45346351eca125bd062e9a7",
"assets/packages/fluent_ui/fonts/FluentIcons.ttf": "f3c4f09a37ace3246250ff7142da5cdd",
"assets/packages/window_manager/images/ic_chrome_close.png": "75f4b8ab3608a05461a31fc18d6b47c2",
"assets/packages/window_manager/images/ic_chrome_maximize.png": "af7499d7657c8b69d23b85156b60298c",
"assets/packages/window_manager/images/ic_chrome_unmaximize.png": "4a90c1909cb74e8f0d35794e2f61d8bf",
"assets/packages/window_manager/images/ic_chrome_minimize.png": "4282cd84cb36edf2efb950ad9269ca62",
"assets/fonts/MaterialIcons-Regular.otf": "b907ff82ac05429603e3373b12124d19",
"assets/NOTICES": "b3f0fe90f91e187db2dfff34ce98dc25",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"main.dart.js_2.part.js": "2908a338db26b3b380c93b073c9de9b3",
"main.dart.js_1.part.js": "1a5ed1280de0814f41763a5270969226",
"main.dart.js_25.part.js": "26638f3924082af348183a714cca3489",
"main.dart.js_9.part.js": "76ab1935d3a5635f443db73fa1406072",
"main.dart.js_3.part.js": "63afc0239e5a5f48ae718eadacb95955",
"main.dart.js_13.part.js": "2edabfd02738510b4621e51d5a69fea4",
"index.html": "de3568cb4447f22618bbbfa30452326a",
"/": "de3568cb4447f22618bbbfa30452326a",
"main.dart.js_12.part.js": "ec550398ad0bef214bf0b700fa4caa3a",
"main.dart.js_4.part.js": "564285f0a8a8ba8c6927f14abd1b2f79",
"main.dart.js_19.part.js": "e81258cb32896688278de0f6c3f620c0",
"main.dart.js_21.part.js": "c8591e580ca1ddfa063a3de82dd6eede",
"main.dart.js": "6bb5b845838fd1a308b171cbf60e5071",
"main.dart.js_17.part.js": "cd8b91a8cd7faccb404fdb7e6f8e0338",
"main.dart.js_20.part.js": "b27b323bfc8a692b6bb71c4d65086e7b",
"main.dart.js_22.part.js": "56f79afc283d70546ac20bfff3d18a3d",
"manifest.json": "1e04e819df5e7720a7659fb598692f21",
"version.json": "ff966ab969ba381b900e61629bfb9789",
"main.dart.js_7.part.js": "dbec695b36e0b27a2308f9ae87fa38c6",
"splash/style.css": "1404a5cdf67c618f89467983c828bd26",
"splash/img/dark-2x.png": "19b7dded1199d8f2118591f39f5cc169",
"splash/img/dark-3x.png": "6dce9ac774ebd7411409ac717fad1c3a",
"splash/img/light-3x.png": "6dce9ac774ebd7411409ac717fad1c3a",
"splash/img/light-2x.png": "19b7dded1199d8f2118591f39f5cc169",
"splash/img/dark-1x.png": "299ee6a20da3b8b2eedabe5d07d1e365",
"splash/img/light-1x.png": "299ee6a20da3b8b2eedabe5d07d1e365",
"splash/img/dark-4x.png": "db9f16f985c9a2daf9c84e33358f0b14",
"splash/img/light-4x.png": "db9f16f985c9a2daf9c84e33358f0b14",
"splash/splash.js": "123c400b58bea74c1305ca3ac966748d",
"main.dart.js_11.part.js": "9f45122b64cde9698bb119f93ce88703",
"main.dart.js_15.part.js": "d1d6467695db040679068473a18e3fd3",
"main.dart.js_6.part.js": "383d4445ddec023daf378071ac41adeb",
"main.dart.js_8.part.js": "ebdc9e329b7162abf6950375e7754fc0",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/chromium/canvaskit.wasm": "be0e3b33510f5b7b0cc76cc4d3e50048",
"canvaskit/chromium/canvaskit.js": "96ae916cd2d1b7320fff853ee22aebb0",
"canvaskit/canvaskit.wasm": "42df12e09ecc0d5a4a34a69d7ee44314",
"canvaskit/skwasm.wasm": "1a074e8452fe5e0d02b112e22cdcf455",
"canvaskit/canvaskit.js": "bbf39143dfd758d8d847453b120c8ebb",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
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
