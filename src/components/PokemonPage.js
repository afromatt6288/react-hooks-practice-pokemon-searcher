import React, {useState, useEffect} from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage() {
  const [pokemon, setPokemon] = useState([])
  const [search, setSearch] = useState("")

  useEffect(()=> {
    fetch("http://localhost:3001/pokemon")
    .then(r => r.json())
    .then(poke => setPokemon(poke))
  },[])
  console.log(pokemon)

  function handleAddPokemon(pokeData) {
    const newPokemon = [...pokemon, pokeData]
    setPokemon(newPokemon)
  }

  // this is how I am handling the Search function
  const displayedPokemon = pokemon.filter(poke => poke.name.toLowerCase().includes(search.toLowerCase()))

  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm onAddPokemon={handleAddPokemon}/>
      <br />
      <Search search={search} onSearchChange={setSearch}/>
      <br />
      <PokemonCollection pokemon={displayedPokemon}/>
    </Container>
  );
}

export default PokemonPage;
