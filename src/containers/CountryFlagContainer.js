import React, {Component} from 'react';
import {connect} from 'react-redux';
import CountryFlagList from '../presentational/CountryFlagList';
import { deleteCountry, getCountries} from '../actions/actions-countries'

class CountryFlagContainer extends Component {
  constructor (props) {
    super(props);
  }

  componentDidMount() {
    this.props.getCountries()
  }

  render() {
    return (
      <CountryFlagList countries={this.props.countries} deleteCountry={this.props.deleteCountry}/>
    );
  }
}

const mapStateToProps = function(store) {
  return {
    countries: store.countriesReducer.searchCountries != 0 ? store.countriesReducer.searchCountries : store.countriesReducer.countries
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getCountries: () => dispatch(getCountries()),
    deleteCountry: (id) => dispatch(deleteCountry(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CountryFlagContainer);