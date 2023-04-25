import styles from './Card.module.css';

export default function Card(props) {
   return (
      <div className={styles.Card}>
          <div className={styles.boton}>
            <button onClick={props.onClose} >X</button>
          </div>
          <div className={styles.img}>
            <img src={props.image} className={styles.img1} alt='' /> 
          </div>
        
          <div className={styles.text}> 
         <h2 >{props.name}</h2>
         <h2 >{props.status}</h2>
         <h2 >{props.species}</h2>
         <h2 >{props.gender}</h2>
         <h2 >{props.origin}</h2>
         </div>
         
      </div>
   );
}
