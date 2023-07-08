//Commons imports
import { useState,useEffect} from 'react';
import axios from 'axios';
import { Route, Routes, useLocation,useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { removeFav } from './components/redux/actions/actions'; 

//Styles
import './App.css';
//Components
import Cards from '../src/components/Cards/Cards'
import NavBar from './components/NavBar/NavBar';
import About from './components/About/About';
import Detail from './components/Detail/Detail';
import Form from './components/Form/Form';
import audio from '../src/SD_NAVIGATE.wav';
import Favorites from './components/Favorites/Favorites';




function App(props) {

   const navigate = useNavigate()
   const[access,setAccess] =useState(false)
   const EMAIL="rick@gmail.com"
   const PASSWORD="rick123"
   const audio1 = document.getElementById("audio");
   const dispatch=useDispatch()
   

   function login(userData) {
      
      console.log(userData.password)
      if (userData.password === PASSWORD && userData.email === EMAIL) {
         
         setAccess(true);
        
      }
   }

   useEffect(() => {
      
      !access && navigate('/');
   }, [access,navigate]);

   const[characters,setCharacters]=useState([])
   const[Id,setId]=useState([])
   
   const onSearch=(id)=>{
      audio1.play()
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
      
      audio1.play();
      
      if (location.pathname==="/Favorites") dispatch(removeFav(id))
      if (location.pathname==="/home") {
      dispatch(removeFav(id))
      const characterfiltered=characters.filter((char)=>{return char.id !== Number(id)
      })
      setCharacters(characterfiltered)
      const idfiltrado=Id.filter((char)=>{return char===id})
      setId(idfiltrado)
      //setCharacters(characters.filter((char)=>{char.id!==Number(id)}))
   }
   }

   
   const location=useLocation()
   const nav=()=>{
   if(location.pathname!=="/") {return <NavBar SubmitSound={audio1} onSearch={onSearch}/>}
   }
   

   return (
          

        <div className="App">
           <audio id="audio" controls>
           <source type="audio/wav" src={audio}/>
           </audio>
           {nav()}
           
           <Routes>
            <Route path='/' element={<Form login={login} SubmitSound={audio1} access={access} navigate={navigate}/>}/>
            <Route path="/home" element={<Cards characters={characters} onClose={onClose}/>} />
            <Route path="/About" element={<About/>}/>
            <Route path="/detail/:id" element={<Detail/>}/>
            <Route path="/favorites" element={<Favorites onClose={onClose} />}></Route>
           </Routes>

        </div>
   );
}

export default App;
