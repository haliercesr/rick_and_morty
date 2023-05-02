import styles from '../Card/Card.module.css';


export default function Card(props) {
   const{onClose,name,status,species,gender,origin,image,id}=props
   
   return (
      <div className={styles.DivCard}>
          <div className={styles.Divboton}>
          <button onClick={()=>{onClose(id)}} >X</button>
          </div>
          <div className={styles.Divimg}>
            <img src={image} alt='' /> 
          </div>
        
          <div className={styles.Divtext}> 
         <h2 >{name}</h2>
         <h2 >{status}</h2>
         <h2 >{species}</h2>
         <h2 >{gender}</h2>
         <h2 >{origin}</h2>
         </div>
         
      </div>
   );
}
