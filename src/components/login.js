import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const Login = () => {
    const adminLogin = {
      name : "luis",
      password : "1234"
    }
    const [login,setLogin]= useState({name:"", password:""});
    
    const onChange = e => {
        e.preventDefault();
        setLogin(e.target.value);
        
    }

    

    const onClick = ()=>{
      if(login.name===adminLogin.name && login.password===adminLogin.password){
        window.location='/'

        console.log("usuario correcto")
        
        
        

      }else{ 
        alert("usuario o contraseña incorrectos")}
         
        
      
    }
  return (
    <div onSubmit={onChange}>
      
        <div className="app-login-container">
        <div className="login-container">
        <h2>Bienvenido</h2>     
        <input className='input' type='text' placeholder='Usuario' id = "name" onChange={e=> setLogin({...login,name:e.target.value})}/>
        <input className='input' type="password" placeholder='Contraseña' id = "password" onChange={e=> setLogin({...login,password:e.target.value})}/>

        <button className='boton' onClick={onClick}>Login</button>
        
        <small>¿Se te olvido la contraseña?</small>
        <small>¿No tienes cuenta? Registrate</small>
        </div>
        
        </div> 
    </div>
  )
}

export default Login;