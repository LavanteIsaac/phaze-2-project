import React from 'react';

const FixinsType = ({ fixins }) => {
    const { id, name, image, type} = fixins
    
   
    
      return (
        <li className='card'> 
          <h4>{name}</h4>
          <img src={image} alt={name} id={id}/>
          <p>{type}</p>
        </li>
      );
    };
    
    



export default FixinsType

