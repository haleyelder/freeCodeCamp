const URL = "https://pokeapi-proxy.freecodecamp.rocks/api/pokemon/";

const pokeSearchVal = document.getElementById("search-input");

const pokemonName = document.getElementById("pokemon-name");
const pokemonId = document.getElementById("pokemon-id");
const weight = document.getElementById("weight");
const height = document.getElementById("height");
const powerTypes = document.getElementById("types");
const imgSprite = document.getElementById("spriteImg");

const hp = document.getElementById("hp");
const attack = document.getElementById("attack");
const defense = document.getElementById("defense");
const spAttack = document.getElementById("special-attack");
const spDefense = document.getElementById("special-defense");
const speed = document.getElementById("speed");

const pokeSearch = () => {
  let val = pokeSearchVal.value.toLowerCase();
  if (val.split(" ").length > 1) {
    val = val.split(" ").join("-");
  }

  fetch(URL + val)
    .then((res) => res.json())
    .then((data) => {
      let pokemonNameDashed = data.name.toUpperCase();
      if (val.split("-").length > 1) {
        pokemonNameDashed = val.split("-").join(" ").toUpperCase();
      }

      imgSprite.innerHTML = `<img id = "sprite" src="${data.sprites.front_default}" />`;
      pokemonName.innerText = pokemonNameDashed;
      pokemonId.innerText = `#${data.id}`;
      weight.innerText = data.weight;
      height.innerText = data.height;

      let types = [];
      data.types.forEach((i) => {
        types.push('<p id="type">' + i.type.name.toUpperCase() + "</p>");
      });

      let formattedTypes = (types = types.join(",").replace(",", " "));
      powerTypes.innerHTML = formattedTypes;

      hp.innerText = data.stats[0].base_stat;
      attack.innerText = data.stats[1].base_stat;
      defense.innerText = data.stats[2].base_stat;
      spAttack.innerText = data.stats[3].base_stat;
      spDefense.innerText = data.stats[4].base_stat;
      speed.innerText = data.stats[5].base_stat;
    })

    .catch((err) => {
      console.log(err);
      alert("Pokémon not found");
    });
};
