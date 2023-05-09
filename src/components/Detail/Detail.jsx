import axios from "axios";
import { useParams} from "react-router-dom";
import { useState, useEffect } from "react";
import styles from '../Detail/Detail.module.css'

function Detail() {

    const { id } = useParams();
   
    const[character,setCharacter]=useState([]);
    console.log(character)

    useEffect(() => {
        axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
           if (data.name) {
              setCharacter(data);
           } else {
              window.alert('No hay personajes con ese ID');
           }
        });
        return setCharacter({});
     }, [id]);

     function detail (){
      if (character.name) {
       return (
          <div className={styles.container}>
           <div className={styles.Detail}>
           <h1>{character.name}</h1>
           <h2>{character.status}</h2>
           <h2>{character.species}</h2>
           <h2>{character.gender}</h2>
           <h2>{character.origin.name}</h2>
           </div>
           <div className={styles.img}>
           <img src={character.image} alt=""></img>
           </div>
          </div>
       );
       }
    }
  

   return (
        <div className={styles.div}>;
         {detail()}
        </div>
   );
}

export default Detail;