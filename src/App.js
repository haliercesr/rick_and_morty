//Commons imports
import { useState } from 'react';
import axios from 'axios';
//Styles
import './App.css';
//Components
import Cards from '../src/components/Cards/Cards'
import NavBar from './components/NavBar/NavBar';



function App() {

const[characters,setCharacters]=useState([])

const onSearch=(id)=>{
   characters.forEach((char)=>{if (char.id!==id){
                     axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
                      if (data.name) {
                      setCharacters((oldChars) => [...oldChars, data]);
                       } else {
                      window.alert('¡No hay personajes con este ID!');
                      }
                      } );
                }
            })}


const onClose =(id)=>{
   const characterfiltered=characters.filter((char)=>{return char.id !== Number(id)
   })
   setCharacters(characterfiltered)
   
   //setCharacters(characters.filter((char)=>{char.id!==Number(id)}))
}

   return (

        <div className='App'>

           <NavBar onSearch={onSearch}/>
           <Cards characters={characters} onClose={onClose} />
        </div>
   );
}

export default App;
