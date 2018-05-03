import React from 'react';
import CountryFlag from './CountryFlag'

const CountryDetails = ({country}) => (
  <div className="country-wrapper">
    <CountryFlag country={country}/>
    <div className="country-info">
      <h1>{country.name}</h1>
      <h2>{country.capital}</h2>
      <div className="info">
        <div>
          <span>{country.populace}</span>
          <span>Ludność[mln]</span>
        </div>
        <div>
          <span>{country.capital}</span>
          <span>Stolica</span>
        </div>
        <div>
          <span>{country.currency}</span>
          <span>Waluta</span>
        </div>
      </div>
    </div>
  </div>
);

export default CountryDetails