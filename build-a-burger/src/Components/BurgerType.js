import React, {useState} from 'react';

const BurgerType = ({ burgers }) => {

  const [selected, setSelected] = useState('');

    const toggleSelected = () => {
      setSelected(!selected);

  };

  return (

    <ul className="burger-card">
      {burgers.map((burger) => (
        <li className='card' key={burger.id}> 
          <h3>{burger.name}</h3>
          <img src={burger.image} alt={burger.name} id={burger.id}/>
          <p>{burger.type}</p>
          {selected ? (
        <button className="primary" onClick= {toggleSelected}>Selected</button>
      ) : (
        <button onClick= {toggleSelected}></button>
      )}
           </li>
      ))}
    </ul>

  );
};

export default BurgerType;