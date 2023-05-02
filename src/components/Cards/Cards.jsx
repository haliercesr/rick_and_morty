import Card from '../../components/Card/Card'
import styles from '../Cards/Cards.module.css'


export default function Cards(props) {
   const{characters,onClose}=props
   return <div className={styles.Cards}  >
      {characters.map((element)=>{return <Card
         key={element.id}
         id={element.id}
         name={element.name}
         status={element.status}
         species={element.species}
         gender={element.gender}
         origin={element.origin.name}
         image={element.image}
         onClose={onClose} 
         
         />})}
         
   </div>;
}
