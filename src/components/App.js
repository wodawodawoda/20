import React, { Component } from 'react';
import {Router, Route, IndexRoute, hashHistory, Link} from 'react-router'

class App extends Component {
  render() {
    return (
      <Router history={hashHistory}>
        <Route path='/' component={Navigation}>
          <IndexRoute component={Home} />
          <Route path="/contact" component={Contact} />
          <Route path="/hello/:name" component={Hello} />
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
    <Link to="/" activeStyle={{color: '#992323'}} activeClassName={'active'} onlyActiveOnIndex>Home</Link>
    <Link to="/contact" activeStyle={{color: '#992323'}} activeClassName={'active'} onlyActiveOnIndex>Contact</Link>
    <Link to="/hello/user" activeStyle={{color: '#992323'}} activeClassName={'active'} onlyActiveOnIndex>Hello</Link>
    {props.children}
  </div>
)
const Hello = props => <h1>I'm Hello component. Welcome {props.params.name}!</h1>

const PageNotFound = () => <h1>I'm PageNotFound component</h1>

export default App;
