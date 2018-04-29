import React, {Component} from 'react';
import {connect} from 'react-redux';
import CountryFlagList from '../presentational/CountryFlagList';
import { deleteCountry, getCountries, searchCountries } from '../actions/actions-countries'

class CountryFlagContainer extends Component {
  componentDidMount() {
    this.props.getCountries()
  }

  // Handle searching in dataset which is visible on screen
  handleSearch() {
    console.log(this.props.searchText)
    if(this.props.search == 0 && this.props.searchText != 0) {
      return this.props.search
    } else if (this.props.search == 0) {
      return this.props.countries
    } else {
      return this.props.search
    }
  }

  render() {
    return (
      <CountryFlagList countries={this.handleSearch()}
                       deleteCountry={this.props.deleteCountry}/>
    );
  }
}

const mapStateToProps = function(store) {
  return {
    countries: store.countriesReducer.visibleCountries,
    search: store.countriesReducer.searchCountries,
    searchText: store.countriesReducer.searchText
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