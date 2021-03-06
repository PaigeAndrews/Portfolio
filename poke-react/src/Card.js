import React from 'react';

const Card = ({name, blood, id, img}) => {
  
   
    return (
        
        <div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
            <img alt='robot' src={img} />
           
            <div>
                <h2>{name}</h2>
                <p>{blood}</p>
            </div>
        </div>
    )
}

export default Card;