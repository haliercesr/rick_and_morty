import './Favorites.css';
import Card from '../Card/Card';
import { useSelector } from 'react-redux';

function Favourites(props) {
    const {onClose}=props
    const myFavorites=useSelector(state=>state.myFavorites)

    return (
        <div className='ContainerFavorites'>
            <div className="CardsConteinerFavorite">
                {myFavorites.map((element) => {
                    return <Card
                        key={element.id}
                        id={element.id}
                        name={element.name}
                        //  status={element.status}
                        // species={element.species}
                        //gender={element.gender}
                        //origin={element.origin.name}
                        image={element.image}
                        onClose={onClose} />
                })}
            </div>
        </div>
    )
}




export default Favourites;