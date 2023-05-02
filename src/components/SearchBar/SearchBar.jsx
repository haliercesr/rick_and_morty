import { useState } from 'react';
import styles from '../SearchBar/SearchBar.module.css'

export default function SearchBar(props) {
   const {onSearch}=props
   const[id,setId] = useState("")

   const handleChange=(event)=>{
    setId(event.target.value)
   }
   
   return (
      <div className={styles.Divbarra}>
          <input onChange={handleChange} type='search' placeholder="1,2,3,4,..." value={id}/>
         <button  onClick={()=>{onSearch(id)}}>Agregar</button>
         <button  onClick={()=>{onSearch(Math.floor(Math.random()*(826+1)+1))}} >Random</button>
      </div>
   );
}


