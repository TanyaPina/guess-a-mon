import React from 'react';
import Card from 'react-bootstrap/Card';

const FavoriteCard = ({ favorite }) => {

    return (
        <Card>
            <Card.Body>
                <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${favorite.pokecode}.png`} />
            </Card.Body>
        </Card>
    )

}

export default FavoriteCard;