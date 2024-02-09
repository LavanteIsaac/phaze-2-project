import React from 'react';

const BurgerType = ({ burgers }) => {
const { id, name, image, type} = burgers

  return (
    <li> className='card' 
      <h3>{name}</h3>
      <img src={image} alt={name} id={id}/>
      <p>Type: {type}</p>
    </li>
  );
};

export default BurgerType;