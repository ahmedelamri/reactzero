import PokemonCard from "./components/PokemonCard";
import { useState } from "react";

function App() {
  const [pokemonIndex, SetPokemonIndex] = useState(0);

  const handleClickNext = () => {
    SetPokemonIndex(pokemonIndex + 1);
  };

  const handleClickmoins = () => {
    SetPokemonIndex(pokemonIndex - 1);
  };

  return (
    <>
      {pokemonIndex > 0 && (
        <button type="button" onClick={handleClickmoins}>
          Précédent
        </button>
      )}
      {pokemonIndex < pokemonList.length - 1 && (
        <button type="button" onClick={handleClickNext}>
          Suivant
        </button>
      )}
      <PokemonCard pokemon={pokemonList[pokemonIndex]} />
    </>
  );
}

const pokemonList = [
  {
    name: "bulbasaur",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  },
  {
    name: "charmander",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
  },
  {
    name: "squirtle",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
  },
  {
    name: "pikachu",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
  },
  {
    name: "mew",
  },
];

export default App;
