import FavoriteCard from '../FavoriteCard';
import '../FavoriteCard.css'

const ListFavorites = ({ userFavorites }) => {

    return (
            <div className="mybody">         
                <div className="list-favorites">
                <h2 style={{textAlign: "center"}}>Favorites</h2>
                    <ul>
                    <div className="card-container">
                        {userFavorites.map((favorite) => {
                            return <li key={favorite.id}> <FavoriteCard favorite={favorite}/></li>
                        })}
                    </div>
                    </ul>
                </div>
            </div>
    );
}


export default ListFavorites;