import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter, Routes, Route } from "react-router-dom";
import PokemonData from './components/pokemonData';
import Login from './components/login';

const rootElement = document.getElementById('root')

ReactDOM.render(
  <BrowserRouter>
  
  <Routes>
    <Route path = "Login" element={<Login/>}/>
    <Route path = "/" element={ <App />}/>
      <Route path = "pokemonData/:id" element={ <PokemonData />}/>
    


  </Routes>
   
  </BrowserRouter>,
  rootElement
);


