import React from 'react';

const Continent = ({children, handleInput}) => (
  <div>
    <select onChange={e => handleInput(e.target.value)}>
      <option value="Europa">Europa</option>
      <option value="Afryka">Afryka</option>
    </select>
    {children}
  </div>
)

export default Continent