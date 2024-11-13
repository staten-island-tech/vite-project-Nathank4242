import { melee } from "./products.js";

document.querySelector(".btn").addEventListener("click", function () {
  document.body.classList.toggle("cool");
  document.body.classList.toggle("warm");
  const cards = document.querySelectorAll(".card");
  cards.forEach((card) => {
    card.classList.toggle("cool");
    card.classList.toggle("warm");
    const cardName = card.querySelector(".card-name");
    const cardOrigin = card.querySelector(".card-origin");
    const cardTier = card.querySelector(".card-tier");

    if (cardName) cardName.classList.toggle("cool");
    if (cardOrigin) cardOrigin.classList.toggle("cool");
    if (cardTier) cardTier.classList.toggle("cool");

    if (cardName) cardName.classList.toggle("warm");
    if (cardOrigin) cardOrigin.classList.toggle("warm");
    if (cardTier) cardTier.classList.toggle("warm");
  });
});

function createCards(characters) {
  const container = document.querySelector(".container");
  container.innerHTML = "";

  characters.forEach((melee) => {
    const cardHTML = `
      <div class="card ${
        document.body.classList.contains("cool") ? "cool" : "warm"
      }">
        <h2 class="card-name ${
          document.body.classList.contains("cool") ? "cool" : "warm"
        }">${melee.name}</h2>
        <img src="${melee.image || "placeholder-image.jpg"}" alt="${
      melee.alt_text
    }">
        <h2 class="card-origin ${
          document.body.classList.contains("cool") ? "cool" : "warm"
        }">Game: ${melee.game_of_origin}</h2>
        <h2 class="card-tier ${
          document.body.classList.contains("cool") ? "cool" : "warm"
        }">Tier: ${melee.tier}</h2>
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
  const MarioCharacters = melee.reduce((acc, character) => {
    if (
      character.game_of_origin === "Super Mario" ||
      character.game_of_origin === "Dr. Mario"
    ) {
      acc.push(character);
    }
    return acc;
  }, []);
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
  const OtherCharacters = melee.filter((character) =>
    [
      "Kirby",
      "F-Zero",
      "EarthBound",
      "Donkey Kong",
      "Game & Watch",
      "Ice Climber",
      "Metroid",
    ].includes(character.game_of_origin)
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

function filterZeldaCharacters() {
  const ZeldaCharacters = melee.filter(
    (character) => character.game_of_origin === "The Legend of Zelda"
  );
  createCards(ZeldaCharacters);
}
document
  .getElementById("filterZeldaButton")
  .addEventListener("click", filterZeldaCharacters);
