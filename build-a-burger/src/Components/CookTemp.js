import React, { useState } from 'react'

const CookTemp = ( { cookTemp } ) => {

  const [selected, setSelected] = useState({});
  const toggleSelected = (id) => {
    setSelected((prevSelected) => ({
      ...prevSelected,
      [id]: !prevSelected[id],
    }));
  };

    return (
        <ul className="cook-card">
          {cookTemp.map((temp) => (
            <li className='card' key={temp.id}> 
              <h3>{temp.name}</h3>
              <img src={temp.image} alt={temp.name} id={temp.id}/>
              <p>{temp.type}</p>
              {selected[temp.id] ? (
            <button className="primary" onClick={() => toggleSelected(temp.id)}>
              Selected ✔️
            </button>
          ) : (
            <button onClick={() => toggleSelected(temp.id)}>Select</button>
          )}
        </li>
      ))}
    </ul>
  );
};

export default CookTemp