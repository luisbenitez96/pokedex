import React from 'react'
import {Link} from 'react-router-dom'
const pokemonThumbNail = ({id, name , image, type} ) => {
    const style = `thumb-container ${type}` 
    return (
        
        <div className={style}>
            <div className=" number">
                <h3>#0{id}</h3>
    
            </div>

            <img src={image}></img>
            <Link to={`/PokemonData/${id}`}>{name}</Link>
            
            <div className="detail-wrapper">
                
                <h5>Type: {type} </h5>
            </div>
        </div>
        
    )
}


export default pokemonThumbNail;
