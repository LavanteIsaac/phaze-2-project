import React from 'react';

const DineType = ({ DineType }) => {
const { id, name, image, type} = DineType

  return (
    <li className='card'> 
      <h3>{name}</h3>
      <img src={DineType.image} alt={DineType.name} id={id}/>
      <p>{type}</p>
    </li>
  );
};


export default DineType;