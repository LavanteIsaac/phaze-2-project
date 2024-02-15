import React, {useState} from 'react';

const BurgerType = ({ burgers }) => {
const [selected, setSelected] = useState({});

  const toggleSelected = (id) => {
      setSelected((prevSelected) => ({
        ...prevSelected,
        [id]: !prevSelected[id],
      }));
    };

  return (
    <ul className="burger-card">
      {burgers.map((burger) => (
        <li className='card' key={burger.id}> 
          <h3>{burger.name}</h3>
          <img src={burger.image} alt={burger.name} id={burger.id}/>
          <p>{burger.type}</p>
          {selected[burger.id] ? (
            <button className="primary" onClick={() => toggleSelected(burger.id)}>
              Selected ✔️
            </button>
          ) : (
            <button onClick={() => toggleSelected(burger.id)}>Select</button>
          )}
        </li>
      ))}
    </ul>
  );
};

export default BurgerType;