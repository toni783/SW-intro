const container = document.querySelector(".container");
const coffees = [
  { name: "Perspiciatis", image: "images/coffee1.jpeg" },
  { name: "Voluptatem", image: "images/coffee1.jpeg" },
  { name: "Explicabo", image: "images/coffee1.jpeg" },
  { name: "Rchitecto", image: "images/coffee1.jpeg" },
  { name: " Beatae", image: "images/coffee1.jpeg" },
  { name: " Vitae", image: "images/coffee1.jpeg" },
  { name: "Inventore", image: "images/coffee1.jpeg" },
  { name: "Veritatis", image: "images/coffee1.jpeg" },
  { name: "Accusantium", image: "images/coffee1.jpeg" },
];

const showCoffees = () => {
  let output = "";
  coffees.forEach(
    ({ name, image }) =>
      (output += `
              <div class="card">
                <img class="card--avatar" src=${image} />
                <h1 class="card--title">${name}</h1>
                <a class="card--link" href="#">Taste</a>
              </div>
              `)
  );
  container.innerHTML = output;
};

document.addEventListener("DOMContentLoaded", showCoffees);

/**Step 1 - Register service worker  */
if ("serviceWorker" in navigator) {
  window.addEventListener("load", function () {
    navigator.serviceWorker
      .register("/serviceWorker.js")
      .then((res) => console.log("service worker registered"))
      .catch((err) => console.log("service worker not registered", err));
  });
}

/** Add install prompt */
window.addEventListener("beforeinstallprompt", (event) => {
  // Prevent the mini-infobar from appearing on mobile.
  event.preventDefault();
  console.log("👍", "beforeinstallprompt", event);
  // Stash the event so it can be triggered later.
  window.deferredPrompt = event;
  // Remove the 'hidden' class from the install button container.
  divInstall.classList.toggle("hidden", false);
});

butInstall.addEventListener("click", async () => {
  console.log("👍", "butInstall-clicked");
  const promptEvent = window.deferredPrompt;
  if (!promptEvent) {
    // The deferred prompt isn't available.
    return;
  }
  // Show the install prompt.
  promptEvent.prompt();
  // Log the result
  const result = await promptEvent.userChoice;
  console.log("👍", "userChoice", result);
  // Reset the deferred prompt variable, since
  // prompt() can only be called once.
  window.deferredPrompt = null;
  // Hide the install button.
  divInstall.classList.toggle("hidden", true);
});

window.addEventListener("appinstalled", (event) => {
  console.log("👍", "appinstalled", event);
  // Clear the deferredPrompt so it can be garbage collected
  window.deferredPrompt = null;
});
