import React, { Component } from 'react';
import {Router, Route, IndexRoute, hashHistory, Link} from 'react-router'

class App extends Component {
  render() {
    return (
      <Router history={hashHistory}>
        <Route path='/' component={Navigation}>
          <IndexRoute component={Home} />
          <Route path="/contact" component={Contact} />
          <Route path="*" component={PageNotFound}/>
        </Route>
      </Router>
    );
  }
}

const Home = () => <h1>I'm Home component</h1>
const Contact = () => <h1>I'm Contact component</h1>
const Navigation = props => (
  <div>
    <Link to="/">Home</Link>
    <Link to="/contact">Contact</Link>
    {props.children}
  </div>
)
const PageNotFound = () => <h1>I'm PageNotFound component</h1>

export default App;
