import React, { useState } from 'react'

const Card = ({id, image, info, price, name, removeTour}) => {
    const [readmore, setReadmore] = useState(false);
    const description = readmore ? info : `${info.substring(0, 200)}...`;

    function readmoreHandler() {
        setReadmore(!readmore);
    }

  return (
    <div className='card'>
      <img src={image} className='cityImage'></img>
      <div className="tourInfo">
        <h4 className="tour-price">{price}</h4>
        <h4 className="tourCityName">{name}</h4>
      </div>
      <div className="description">
        {description}
        <span className='read-more' onClick={readmoreHandler}>
            {readmore ? 'show less' : 'read more'}
        </span>
      </div>
      <button className='notIntrestedBtn' onClick={() => removeTour(id)}>
        Not Interested
      </button>
    </div>
  )
}

export default Card
