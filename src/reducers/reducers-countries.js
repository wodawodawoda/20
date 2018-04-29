import {GET_COUNTRIES, GET_COUNTRY, DELETE_COUNTRY, SEARCH_COUNTRIES, SET_CONTINENT} from '../actions/actionsTypes'
import countriesData from '../data/countries'

const initialState = {
  countries: countriesData
}

const countriesReducer = function (state = initialState,action) {
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
      console.log(country)
      return {
        ...state,
        country
      }
  }
  return state
}

export default countriesReducer