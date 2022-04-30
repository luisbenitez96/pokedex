import React, { useState, useEffect } from 'react'
import { useParams} from 'react-router-dom'
import PokemonDescription from './pokemonDescription'

const PokemonData = () => {
   // console.log(useParams());
   const {id}=useParams();
   console.log(id)

   const [description,setDescription]=useState([]);

   const ObtenerDatos = async () =>{
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    const data = await res.json();
    setDescription(currentList=>[... currentList,data])
   
   }

    useEffect(() => {
        ObtenerDatos();
        
    }, [])
    
    console.log(description)
    
    
    return (
        <div className='app-container'>
             
            <div className="pokemon-container">
                <div className="all-container">
                { 
                    description.map((pokemon, index) =>  
                    <PokemonDescription
                       
                        id={pokemon.id}
                        name={pokemon.name}
                        weight={pokemon.weight}
                        abilities={pokemon.abilities[0].ability.name}
                        image={pokemon.sprites.front_default}
                        type={pokemon.types[0].type.name}                
                        key={index}

            
                    

                    />   
          

                    )
                }


                </div>
                <button className="load-more" onClick= {()=> window.history.back()}>Back </button>
            </div>

          
        </div>
    )
}


export default PokemonData;
