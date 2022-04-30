import React, {useState} from 'react'

const SearchBar = (props) => {
    const { onSearch } = props;
    const[search,setSearch]=useState("");
    

    const onChange = e => {
        e.preventDefault();
        setSearch(e.target.value);
        console.log(e.target.value)
        
        if(e.target.value.lenght ===0){
            onSearch(null);
        }    
         
        
        
    };
    

    const onClick = async (e) => {
        onSearch(search);
    };   

    
  return (
    
        <div>
            <input placeholder='Buscar Pokemón...' onChange={onChange}/>
            <button  onClick= {()=> onClick()} >Buscar</button>
      

       </div>
    
  )
}

export default SearchBar;