import styles from '../Card/Card.module.css';
import {Link} from 'react-router-dom';
import { addFav,removeFav } from '../redux/actions/actions';
import { connect } from 'react-redux';
import { useState, useEffect } from 'react';



function Card(props) {
   const{onClose,name,status,species,gender,origin,image,id,addFavCard,removeFavCard,myFavorites}=props
   const[IsFav,setIsFav]=useState(false)


   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === props.id) {
            setIsFav(true);
         }
      });
   }, [myFavorites]);

   const handleFavorite=(event)=>{
      event.preventDefault();
      if(IsFav){
         setIsFav(false);
         removeFavCard(props.id);
      } else {
         setIsFav(true);
         addFavCard(props)
      }
   }

   return (
      
      <div className={styles.DivCard}>
          <div className={styles.Divboton}>
          {
          IsFav ? (
           <button className={styles.buttonFavorite} onClick={handleFavorite}>❤️</button>
            ) : (
           <button className={styles.buttonFavorite} onClick={handleFavorite}>🤍</button>
            )
          }
          <button className={styles.buttonONClose} onClick={()=>{
            onClose(id)
            }
            } >X</button>
          
          </div>
          <Link to={`/detail/${id}`}>
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
         </Link>
         
      </div>
      
   );
}

function mapDispatchToProps(dispatch) {
   return {
      addFavCard: (char) => {dispatch(addFav(char)) },
      removeFavCard: (id) => { dispatch(removeFav(id))}
   }
}

function mapStateToProps(state) {
   return {
     myFavorites: state.myFavorites
   }
}

export default connect(mapStateToProps,mapDispatchToProps)(Card)


