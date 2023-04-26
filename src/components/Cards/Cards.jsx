import Card from '..Card/Card.module.css';
import styles from '../Cards/Cards.module.css'

export default function Cards(props) {
   return <div className={styles.Cards}  >
      {props.characters.map((element,ind)=>{return <Card
         key={ind}
         id={element.id}
         name={element.name}
         status={element.status}
         species={element.species}
         gender={element.gender}
         origin={element.origin.name}
         image={element.image}
         onClose={() => window.alert('Emulamos que se cierra la card')}  
         
         />})}
         
   </div>;
}
