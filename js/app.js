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
