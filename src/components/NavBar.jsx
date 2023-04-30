function NavBar({ pokemonIndex, setPokemonIndex, pokemonList }) {
  const handleClickNext = () => {
    setPokemonIndex(pokemonIndex + 1);
  };

  const handleClickmoins = () => {
    setPokemonIndex(pokemonIndex - 1);
  };

  return (
    <nav>
      {pokemonIndex > 0 && (
        <button onClick={handleClickmoins}>Précédant</button>
      )}
      {pokemonIndex < pokemonList.length - 1 && (
        <button onClick={handleClickNext}>Suivant</button>
      )}
    </nav>
  );
}

export default NavBar;
