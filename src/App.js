import { useState, useEffect } from "react";

import PokemonThumbNail from "./components/pokemonThumbNail";
import { searchPokemon } from "./api";
import SearchBar from "./components/searchBar";


function App() {
  const[pokemons,setPokemons]=useState([]);
  const [loadMore,setLoadMore]=useState( 'https://pokeapi.co/api/v2/pokemon?limit=20');

  const getPokemons = async () =>{
    const res = await fetch(loadMore)
    const data = await res.json()
    setLoadMore(data.next)
    function createPokemon (result) {
      result.forEach(async (pokemon) => {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`)
        const data = await res.json()

        setPokemons(currentList=>[... currentList,data])
        
      });


    }

    createPokemon(data.results)
    
  }
  useEffect(() => {
    getPokemons();
  }, [])

  const onSearch = async (pokemon) => {
    if (!pokemon) {
      return getPokemons();
    }
    
    const result = await searchPokemon(pokemon);
    if (!result) {
      alert("pokemon no encontrado")


     
      return;
    } else {
      setPokemons([result]);
      
    }
    
  };

  return (
    <div className="App-container">
        <h1>Pokemón </h1>
        <div className="pokemon-container">
          <SearchBar onSearch={onSearch}/>
          
          <div className="all-container">
          
           
            {pokemons.map((pokemon, index) =>
              
                
                <PokemonThumbNail
                
                id={pokemon.id}
                name={pokemon.name}
                image={pokemon.sprites.front_default}
                type={pokemon.types[0].type.name}
                key={index}
                />
            
            
            )}  
          </div>
            <button className="load-more" onClick= {()=> getPokemons()}>Cargar más </button>
            
        </div>      
                 
       
        
      

        
        
  
          
    </div>
  );
}

export default App;
