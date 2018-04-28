import {GET_COUNTRIES, GET_COUNTRY, DELETE_COUNTRY, SEARCH_COUNTRIES, SET_CONTINENT} from '../actions/actionsTypes'
import countriesData from '../../data/countries'

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
  }
  return state
}

export default countriesReducer