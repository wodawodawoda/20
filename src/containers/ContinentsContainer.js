import React, {Component} from 'react';
import {connect} from 'react-redux';
import { setContinent } from '../actions/actions-countries'
import Continent from '../presentational/Continents'

class ContinentsContainer extends Component {
  constructor (props) {
    super(props);
  }

  componentDidMount() {
    document.querySelector('#selectContinent').value = this.props.continent
    const initialContinent = document.querySelector('#selectContinent').value
    this.props.setContinent(initialContinent)
  }

  handleInput = (continent) => {
    this.props.setContinent(continent)
  }

  render() {
    return <Continent children={this.props.children} handleInput={this.handleInput}/>
  }
}

const mapStateToProps = store => {
  return {
    continent: store.countriesReducer.continent
  }
}

const mapDispatchToProps = dispatch => ({
  setContinent: (continent) => dispatch(setContinent(continent))
})

export default connect(mapStateToProps, mapDispatchToProps)(ContinentsContainer);
