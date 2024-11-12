import { melee } from "./melee.js";

// Theme Toggle Button
document.querySelector(".btn").addEventListener("click", function () {
  if (document.body.classList.contains("cool")) {
    document.body.classList.add("warm");
    document.body.classList.remove("cool");
  } else {
    document.body.classList.add("cool");
    document.body.classList.remove("warm");
  }
});

function createCards(characters) {
  const container = document.querySelector(".container");
  container.innerHTML = "";

  characters.forEach((melee) => {
    const cardHTML = `
      <div class="card">
        <h2 class="card-name">${melee.name}</h2>
        <img src="${melee.image || "placeholder-image.jpg"}" alt="${
      melee.alt_text
    }">
        <h2 class="card-origin">${melee.game_of_origin}</h2>
        <h2 class="card-tier">${melee.tier}</h2>
      </div>
    `;
    container.insertAdjacentHTML("beforeend", cardHTML);
  });
}

createCards(melee);

function filterPokemonCharacters() {
  const pokemonCharacters = melee.filter(
    (character) => character.game_of_origin === "Pokémon"
  );
  createCards(pokemonCharacters);
}

document
  .getElementById("filterPokemonButton")
  .addEventListener("click", filterPokemonCharacters);

function filterMarioCharacters() {
  const marioCharacters = melee.filter(
    (character) => character.game_of_origin === "Super Mario"
  );
  createCards(marioCharacters);
}
document
  .getElementById("filterMarioButton")
  .addEventListener("click", filterMarioCharacters);

function filterFireCharacters() {
  const FireCharacters = melee.filter(
    (character) => character.game_of_origin === "Fire Emblem"
  );
  createCards(FireCharacters);
}
document
  .getElementById("filterFireButton")
  .addEventListener("click", filterFireCharacters);

function filterOtherCharacters() {
  const OtherCharacters = melee.filter(
    (character) =>
      character.game_of_origin === "Kirby" &&
      character.game_of_origin === "F-Zero"
  );
  createCards(OtherCharacters);
}
document
  .getElementById("filterOtherButton")
  .addEventListener("click", filterOtherCharacters);

function filterNoneCharacters() {
  const NoneCharacters = melee;
  createCards(NoneCharacters);
}
document
  .getElementById("filterNoneButton")
  .addEventListener("click", filterNoneCharacters);
