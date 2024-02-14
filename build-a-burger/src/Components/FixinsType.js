import React, { useState }  from 'react';

const FixinsType = ({ fixins }) => {
  const [selected, setSelected] = useState({});
  console.log(fixins)

  const toggleSelected = (id) => {
    setSelected((prevSelected) => ({
      ...prevSelected,
      [id]: !prevSelected[id],
    }));
  };

return (
    <ul className="fixins-card">
      {fixins.map((fixin) => (
        <li className='card' key={fixin.id}>
          <div className="card-content"></div> 
          <h3>{fixin.name}</h3>
          <img src={fixin.image} alt={fixin.name} id={fixin.id}/>
          <p>{fixin.type}</p>
          {selected[fixin.id] ? (
            <button className="primary" onClick={() => toggleSelected(fixin.id)}>
              Selected ✔️
            </button>
          ) : (
            <button onClick={() => toggleSelected(fixin.id)}>Select</button>
          )}
        </li>
      ))}
    </ul>
  );
};

export default FixinsType