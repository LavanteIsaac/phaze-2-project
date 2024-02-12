import React from 'react';

const BurgerType = ({ burgers }) => {

  return (
    <ul>
      {burgers.map((burger) => (
        <li className='card' key={burger.id}> 
          <h3>{burger.name}</h3>
          <img src={burger.image} alt={burger.name} id={burger.id}/>
          <p>{burger.type}</p>
        </li>
      ))}
    </ul>
  );
};

export default BurgerType;