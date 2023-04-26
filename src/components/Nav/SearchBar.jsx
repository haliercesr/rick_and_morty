import styles from '../Nav/SearchBar.module.css';
export default function SearchBar(props) {
   return (
      <div className={styles.Divbarra}>
          <input type='search' placeholder="Id..."/>
         <button onClick={props.onSearch}>Agregar</button>
      </div>
   );
}
