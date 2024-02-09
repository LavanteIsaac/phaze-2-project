import React from 'react';

const BurgerType = ({ burgers }) => {
const { id, name, image, type} = burgers

// useEffect(() => {
// fetch("http://localhost:6001/") 
//     .then(r => r.json())
//     .then(dbBurgers => setBurger(dbBurgers))
//   }, []);

  return (
    <li className='card'> 
      <h3>{name}</h3>
      <img src={image} alt={name} id={id}/>
      <p>{type}</p>
    </li>
  );
};


export default BurgerType;