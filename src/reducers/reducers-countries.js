import {GET_COUNTRIES, GET_COUNTRY, DELETE_COUNTRY, SEARCH_COUNTRIES, SET_CONTINENT} from '../actions/actionsTypes'
import countriesData from '../data/countries'

const initialState = {
  countries: countriesData,
  country: {},
  searchCountries: []
}

const countriesReducer = function (state = initialState, action) {
  switch (action.type) {
    case GET_COUNTRIES:
      return {
        ...state,
        countries: state.countries
      }
    case GET_COUNTRY:
      const country = state.countries.find(country => {
        return country.id == action.id
      })
      return {
        ...state,
        country
      }
    case SEARCH_COUNTRIES:
      const searchCountries = state.countries.filter(country => country.name.toLowerCase().includes(action.searchText.toLowerCase()))
      return {
        ...state,
        searchCountries
      }
    case DELETE_COUNTRY:
      const deleteCountries = state.countries.filter(country => country.id != action.id)
      const deleteSearchCountries = state.searchCountries.filter(country => country.id != action.id)
      return {
        ...state,
        countries: deleteCountries,
        searchCountries: deleteSearchCountries
      }
    case SET_CONTINENT:
      const searchContinentCountries = state.countries.filter(country => country.continent.toLowerCase().includes(action.continent.toLowerCase()))
      console.log(searchContinentCountries)
      return {
        ...state,
        searchCountries: searchContinentCountries
      }
  }
  return state
}

export default countriesReducer