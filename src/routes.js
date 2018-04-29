import React from 'react';
import {Route, IndexRoute} from 'react-router';
import NavigationContainer from './containers/NavigationContainer';
import Home from './presentational/Home';
import Contact from './presentational/Contact';
import NotFound from './presentational/NotFound';
import CountryFlagContainer from './containers/CountryFlagContainer'
import CountryDetailsContainer from './containers/CountryDetailsContainer'
import ContinentsContainer from './containers/ContinentsContainer'
import './styles/navigation.css'

export default (
  <Route path="/" component={NavigationContainer}>
    <IndexRoute component={Home}/>
    <Route path="countries">
      <IndexRoute component={CountryFlagContainer}/>
      <Route path="country/:id" component={CountryDetailsContainer}/>
    </Route>
    <Route path="contact" component={Contact}/>
    <Route path="/" component={ContinentsContainer}>
      <Route path="continents" component={CountryFlagContainer}/>
    </Route>
    <Route path="*" component={NotFound}/>
  </Route>
)