import React, {Component} from 'react';
import {connect} from 'react-redux';
import CountryFlagList from '../presentational/CountryFlagList';
import { deleteCountry, getCountries, searchCountries } from '../actions/actions-countries'

class CountryFlagContainer extends Component {
  constructor (props) {
    super(props);
  }

  componentDidMount() {
    this.props.getCountries()
  }

  componentWillUnmount() {
    // Reset 'visibleCountries' on unMount as we using same store on diffrent pages
    this.props.searchCountries()
  }

  render() {
    return (
      <CountryFlagList countries={this.props.countries} deleteCountry={this.props.deleteCountry}/>
    );
  }
}

const mapStateToProps = function(store) {
  return {
    countries: store.countriesReducer.visibleCountries != 0 ? store.countriesReducer.visibleCountries : store.countriesReducer.countries
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getCountries: () => dispatch(getCountries()),
    deleteCountry: (id) => dispatch(deleteCountry(id)),
    searchCountries: () => dispatch(searchCountries('')),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CountryFlagContainer);