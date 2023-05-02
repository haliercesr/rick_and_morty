import styles from '../Card/Card.module.css';


export default function Card(props) {
   return (
      <div className={styles.DivCard}>
          <div className={styles.Divboton}>
          <button onClick={()=>{props.onClose(props.id)}} >X</button>
          </div>
          <div className={styles.Divimg}>
            <img src={props.image} alt='' /> 
          </div>
        
          <div className={styles.Divtext}> 
         <h2 >{props.name}</h2>
         <h2 >{props.status}</h2>
         <h2 >{props.species}</h2>
         <h2 >{props.gender}</h2>
         <h2 >{props.origin}</h2>
         </div>
         
      </div>
   );
}
