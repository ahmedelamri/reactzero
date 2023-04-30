function NavBar({ pokemonIndex, setPokemonIndex }) {
  const handleClickNext = () => {
    setPokemonIndex(pokemonIndex + 1);
  };

  const handleClickmoins = () => {
    setPokemonIndex(pokemonIndex - 1);
  };

  return (
    <nav>
      <button onClick={handleClickmoins}>Précédant</button>
      <button onClick={handleClickNext}>Suivant</button>
    </nav>
  );
}

export default NavBar;
