import FavoriteCard from '../FavoriteCard';

const ListFavorites = ({ userFavorites }) => {

    return (
            <div className="mybody">
                <div className="list-favorites">
                    <h2>Favorites</h2>
                    <ul>
                        {userFavorites.map((favorite) => {
                            return <li key={favorite.id}> <FavoriteCard favorite={favorite}/></li>
                        })}
                    </ul>
                </div>
            </div>
    );
}


export default ListFavorites;