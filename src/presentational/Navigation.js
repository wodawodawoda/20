import React from 'react';
import {Link} from 'react-router';
import 'bootstrap/dist/css/bootstrap.css';
import '../styles/navigation.css'


const Navigation = ({children}) => (
  <div>
    <nav className="navbar navbar-expand-lg navbar-light">
        <Link className="navbar-brand">Logo</Link>
        <input className="navbar-toggler navbar-toggler-icon"
                type="checkbox"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation" />
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item"><Link to="/countries" className="nav-link">Countries</Link></li>
            <li className="nav-item"><Link to="/continents" className="nav-link">Continents</Link></li>
            <li className="nav-item"><Link to="/contact" className="nav-link">Contact</Link></li>
          </ul>
        </div>
    </nav>
    <div className="container-fluid">
      {children}
    </div>
  </div>
)

export default Navigation


// data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='rgba(0, 0, 0, 0.5)' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 7h22M4 15h22M4 23h22'/%3E%3C/svg%3E