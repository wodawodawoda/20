import React from 'react';
import {Link} from 'react-router';
import 'bootstrap/dist/css/bootstrap.css';


const Navigation = ({children, handleInput}) => (
  <div>
    <nav className="navbar navbar-expand-lg navbar-light">
        <Link className="navbar-brand">Country App</Link>
        <input className="navbar-toggler navbar-toggler-icon"
                type="checkbox"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-label="Toggle navigation" />
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item"><Link to="/countries" className="nav-link">Countries</Link></li>
            <li className="nav-item"><Link to="/continents" className="nav-link">Continents</Link></li>
          </ul>
          <form onSubmit={e => handleInput(e.target[1].value)}
            className="form-inline my-2 my-lg-0 search-form">
            <button className="btn btn-outline-danger my-2 my-sm-0"
                    onClick={e => e.target.nextSibling.value = ''}
                    id="resetSearch">X</button>
            <input id="searchCountry"
                   className="form-control mr-sm-2"
                   type="search"
                   placeholder="Search"
                   aria-label="Search"
                   />
              <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
          </form>
        </div>
    </nav>
    <div className="container-fluid m-3">
      {children}
    </div>
  </div>
);

export default Navigation;