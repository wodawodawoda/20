import React, {Component} from 'react';
import {connect} from 'react-redux';
import CountryDetails from '../presentational/CountryDetails';
import {getCountry} from '../actions/actions-countries';

class CountryDetailsContainer extends Component {
  constructor (props) {
    super(props);
  }

  componentDidMount() {
    this.props.dispatch(getCountry(this.props.params.id));
  }

  render() {
    return this.toRender()
  }

  toRender() {
    if(this.props.country) return <CountryDetails country={this.props.country}/>
    return null
  }
}

const mapStateToProps = function(store) {
  console.log(store)
  return {
    country: store.countriesReducer.country
  }
}

export default connect(mapStateToProps)(CountryDetailsContainer);