import React from 'react';

const CountryFlag = props => (
  <div className="country-logo-wrapper">
    <img src={props.country.imageUrl} alt={`${props.country.name} flag`} className="country-logo"/>
  </div>
)

export default CountryFlag