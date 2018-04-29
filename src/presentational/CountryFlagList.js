import React from 'react';
import {Link} from 'react-router';
import CountryFlag from './CountryFlag';

const CountryFlagList = ({countries, deleteCountry, elo}) => (
  <div className="countries-list">
    {countries.map(country => {
      return (
        <div className="single-country" key={country.id}>
          <Link className="flag" to={`countries/country/${country.id}`}>
            <CountryFlag country={country}/>
          </Link>
          <button onClick={() => deleteCountry(country.id)}>DELETE</button>
        </div>
      )
    })}
  </div>
)

export default CountryFlagList