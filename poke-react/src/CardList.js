import React from 'react';
import Card from './Card';

const CardList = ({characters}) =>{
    const cardComponent = characters.map((user, i) => {
        return (
        <Card 
            img ={characters[i].img}
            key={characters[i].id} 
            id={characters[i].id} 
            name={characters[i].name} 
            blood={characters[i].blood}
        />
        );
    })

    return(
        <div>
            {cardComponent}
        </div>
    )
}
export default CardList;