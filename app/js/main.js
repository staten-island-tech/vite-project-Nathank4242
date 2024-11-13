import { melee } from "./products.js";

document.querySelector(".btn").addEventListener("click", function () {
  if (document.body.classList.contains("cool")) {
    document.body.classList.remove("cool");
    document.body.classList.add("warm");
  } else {
    document.body.classList.remove("warm");
    document.body.classList.add("cool");
  }

  const cards = document.querySelectorAll(
    ".card",
    ".card-name",
    "card-origin",
    "card-tier"
  );
  cards.forEach((card) => {
    if (card.classList.contains("cool")) {
      card.classList.remove("cool");
      card.classList.add("warm");
    } else {
      card.classList.remove("warm");
      card.classList.add("cool");
    }
  });
});

function createCards(characters) {
  const container = document.querySelector(".container");
  container.innerHTML = "";

  characters.forEach((melee) => {
    const cardHTML = `
      <div class="card cool"> 
        <h2 class="card-name cool">${melee.name}</h2>
        <img src="${melee.image || "placeholder-image.jpg"}" alt="${
      melee.alt_text
    }">
        <h2 class="card-origin cool">Game: ${melee.game_of_origin}</h2>
        <h2 class="card-tier cool"> Tier: ${melee.tier}</h2>
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
  const MarioCharacters = [];
  melee.forEach((character) => {
    if (
      character.game_of_origin === "Super Mario" ||
      character.game_of_origin === "Dr. Mario"
    ) {
      MarioCharacters.push(character);
    }
  });
  createCards(MarioCharacters);
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
  const OtherCharacters = [];
  melee.forEach((character) => {
    if (
      character.game_of_origin === "Kirby" ||
      character.game_of_origin === "F-Zero" ||
      character.game_of_origin === "EarthBound" ||
      character.game_of_origin === "Donkey Kong" ||
      character.game_of_origin === "Game & Watch" ||
      character.game_of_origin === "Ice Climber" ||
      character.game_of_origin === "Metroid"
    ) {
      OtherCharacters.push(character);
    }
  });
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

function filterZeldaCharacters() {
  const ZeldaCharacters = melee.filter(
    (character) => character.game_of_origin === "The Legend of Zelda"
  );
  createCards(ZeldaCharacters);
}
document
  .getElementById("filterZeldaButton")
  .addEventListener("click", filterZeldaCharacters);
