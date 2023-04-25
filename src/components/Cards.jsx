import Card from './Card';
import styles from './Cards.module.css'

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
         <img src="universo.jpg"/>
   </div>;
}
