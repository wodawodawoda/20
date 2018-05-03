import React, {Component} from 'react';
import {connect} from 'react-redux';
import Navigation from '../presentational/Navigation';
import {searchCountries} from '../actions/actions-countries';

class NavigationContainer extends Component {
  handleInput = (text) => {
    this.props.searchCountries(text);
  }

  render() {
    return <Navigation children={this.props.children} handleInput={this.handleInput}/>
  }
}

const mapDispatchToProps = dispatch => ({
  searchCountries: (searchText) => dispatch(searchCountries(searchText))
})

export default connect(null, mapDispatchToProps)(NavigationContainer);
