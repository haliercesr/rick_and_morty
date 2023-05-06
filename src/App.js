//Commons imports
import { useState} from 'react';
import axios from 'axios';
import { Route, Routes } from 'react-router-dom';
//Styles
import './App.css';
//Components
import Cards from '../src/components/Cards/Cards'
import NavBar from './components/NavBar/NavBar';
import About from './components/About/About';
import Detail from './components/Detail/Detail';



function App() {

   const[characters,setCharacters]=useState([])
   const[Id,setId]=useState([])
   
   const onSearch=(id)=>{
   
      let array=[]
      array=Id.filter((char)=>char===id)
      
      if(array.length===0){     
   
      //solicitud a la API
      axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
   
       if (data.name) {
       setCharacters((oldChars) => [...oldChars, data]);
       setId((Id) =>[...Id, id])
        } else {
       window.alert('¡No hay personajes con este ID!');
       }
       } );
       //
      }
      
   }   
                  
               
   
   
   const onClose =(id)=>{
      const characterfiltered=characters.filter((char)=>{return char.id !== Number(id)
      })
      setCharacters(characterfiltered)
      const idfiltrado=Id.filter((char)=>{return char===id})
      console.log(idfiltrado)
      setId(idfiltrado)
      //setCharacters(characters.filter((char)=>{char.id!==Number(id)}))
   }

   return (

        <div className='App'>

           <NavBar onSearch={onSearch}/>
           <Routes>
            <Route path="/home" element={<Cards characters={characters} onClose={onClose}/>} />
            <Route path="/About" element={<About/>}/>
            <Route path="/detail/:id" element={<Detail/>}/>
           </Routes>

        </div>
   );
}

export default App;
