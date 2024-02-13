import React, { useState } from 'react';

const DineType = ({ dineType }) => {

  const [selected, setSelected] = useState({});
  const toggleSelected = (id) => {
    setSelected((prevSelected) => ({
      ...prevSelected,
      [id]: !prevSelected[id],
    }));
  };

    return (
        <ul className="dine-card">
          {dineType.map((dine) => (
            <li className='card' key={dine.id}> 
              <h3>{dine.name}</h3>
              <img src={dine.image} alt={dine.name} id={dine.id}/>
              <p>{dine.type}</p>
              {selected[dine.id] ? (
              <button className="primary" onClick={() => toggleSelected(dine.id)}>
              Selected ✔️
            </button>
          ) : (
            <button onClick={() => toggleSelected(dine.id)}>Select</button>
          )}
        </li>
      ))}
    </ul>
  );
};
export default DineType;