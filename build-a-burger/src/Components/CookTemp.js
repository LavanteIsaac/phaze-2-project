import React from 'react'

const CookTemp = ( { cookTemp } ) => {

    return (
        <ul className="cook-card">
          {cookTemp.map((temp) => (
            <li className='card' key={temp.id}> 
              <h3>{temp.name}</h3>
              <img src={temp.image} alt={temp.name} id={temp.id}/>
              <p>{temp.type}</p>
            </li>
          ))}
        </ul>
      );
    };
    
export default CookTemp