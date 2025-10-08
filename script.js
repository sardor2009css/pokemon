let searchBtn = document.getElementById("searchBtn");
let searchInput = document.getElementById("searchInput");
let sortSelect = document.getElementById("sortSelect");
let container = document.getElementById("pokemonContainer");

let cards = Array.from(document.querySelectorAll(".card"));

function searchPokemons() {
  let searchVal = searchInput.value.toLowerCase();
  let sortVal = sortSelect.value;


  let filtered = cards.filter(card => {
    let name = card.querySelector("h3").textContent.toLowerCase();
    return name.includes(searchVal);
  });

  if (sortVal === "az") {
    filtered.sort((a, b) =>
      a.querySelector("h3").textContent.localeCompare(b.querySelector("h3").textContent)
    );
  }
  if (sortVal === "za") {
    filtered.sort((a, b) =>
      b.querySelector("h3").textContent.localeCompare(a.querySelector("h3").textContent)
    );
  }

 
  container.innerHTML = "";
  filtered.forEach(card => container.appendChild(card));
}

searchBtn.onclick = searchPokemons;
