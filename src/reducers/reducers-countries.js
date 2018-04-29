import {GET_COUNTRIES, GET_COUNTRY, DELETE_COUNTRY, SEARCH_COUNTRIES, SET_CONTINENT} from '../actions/actionsTypes'
import countriesData from '../data/countries'

const initialState = {
  countries: countriesData,
  country: {},
  visibleCountries: [],
  searchCountries: [],
  // continent state added to remember choosen continent when user is moving between pages
  continent: 'Europa'
}

const countriesReducer = function (state = initialState, action) {
  switch (action.type) {
    case GET_COUNTRIES:
      return {
        ...state,
        // Keep all countries data in countries state. Change this state only with DELETE (permanent)
        countries: state.countries,
        // Reset visible value. Modify visibleCountries state with another action
        visibleCountries: state.countries
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
      const searchCountries = state.visibleCountries.filter(country => {
        // If search input is empty return empty array
        if(action.searchText === '') return false
        return country.name.toLowerCase().includes(action.searchText.toLowerCase())
      })
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
        visibleCountries: deleteSearchCountries
      }
    case SET_CONTINENT:
      const searchContinentCountries = state.countries.filter(country => country.continent.toLowerCase().includes(action.continent.toLowerCase()))
      return {
        ...state,
        visibleCountries: searchContinentCountries,
        continent: action.continent
      }
  }
  return state
}

export default countriesReducer