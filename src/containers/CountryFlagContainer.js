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

  render() {
    return (
      <CountryFlagList countries={this.props.search == 0 ? this.props.countries : this.props.search}
                       deleteCountry={this.props.deleteCountry}/>
    );
  }
}

const mapStateToProps = function(store) {
  return {
    countries: store.countriesReducer.visibleCountries,
    search: store.countriesReducer.searchCountries
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