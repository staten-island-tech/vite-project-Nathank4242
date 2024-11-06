import { outlets } from "./outlets.js";

document.querySelector(".btn").addEventListener("click", function () {
  if (document.body.classList.contains("cool")) {
    document.body.classList.add("warm");
    document.body.classList.remove("cool");
  } else {
    document.body.classList.add("cool");
    document.body.classList.remove("warm");
  }
});

function createCards() {
  const container = document.querySelector(".container");

  outlets.forEach((outlet) => {
    const cardHTML = `
      <div class="card">
        <h2 class=card-name>${outlet.name}</h2>
        <img src="${outlet.image || "placeholder-image.jpg"}" alt="${
      outlet.alt
    }">
        <h2 class= "card-company">${outlet.company}</h2>
        <h2 class="card-price">${outlet.price}</h2>
      </div>
    `;
    container.insertAdjacentHTML("beforeend", cardHTML);
  });
}

createCards();
