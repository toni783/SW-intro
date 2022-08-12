# SW-intro

Intro to service workers

# Installation criteria

Every browser has a criterion that marks when a website or web app is a Progressive Web App and can be installed for a standalone experience. The metadata for your PWA is set by a JSON-based file known as the Web App Manifest, which we will cover in detail in the next module.

As a minimum requirement for installability, most browsers that support it use the Web App Manifest file and certain properties such as the name of the app, and configuration of the installed experience. An exception to this is Safari for macOS, which does not support installability.

Chromium-based browsers on desktop and Android, including Google Chrome, Samsung Internet, and Microsoft Edge, have additional requirements, such as:

Serving the web app on HTTPS.
At least one icon in the correct format and size.
A registered service worker.
A fetch event handler in the service worker to provide a basic offline experience.
Because the test that a PWA meets installability requirements can take several seconds, installability itself may not be available as soon as a URLs response is received.

The process for uninstalling a PWA is different on each combination of operating system and browser. In most situations, the app can be uninstalled the same as any other platform-specific app; in other situations, the PWA window offers a menu with an uninstall option. Deleting the icon may not clear the storage that a PWA is using.

# Workbox

npx workbox-cli wizard

cd..

select files to save in cache

workbox generateSW SW-intro/workbox-config.js
