import React from 'react';

const FixinsType = ({ fixins }) => {
    
return (
    <ul className="fixins-card">
      {fixins.map((fixin) => (
        <li className='card' key={fixin.id}> 
          <h3>{fixin.name}</h3>
          <img src={fixin.image} alt={fixin.name} id={fixin.id}/>
          <p>{fixin.type}</p>
        </li>
      ))}
    </ul>
  );
};
    
export default FixinsType

