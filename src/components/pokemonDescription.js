import React from 'react'

const pokemonDescription = ({id,name,image, type, abilities,weight}  ) => {
    const style = `data-container ${type}`
    return (
       

        <div className={style}>
            
                <div> #0{id}</div>
                <h1>{name}</h1>
                <img src={image}></img>
                <div className="detail-wrapper">
                <h1>type:{type}</h1>
                </div>
                <h1>ability:{abilities}</h1>
                <h1>weight:{weight}</h1>
            
            
        </div>
    )
}

export default pokemonDescription;