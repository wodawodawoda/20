import React, {Component} from 'react';
import {connect} from 'react-redux';
import { setContinent } from '../actions/actions-countries'
import Continent from '../presentational/Continents'

class ContinentsContainer extends Component {
  constructor (props) {
    super(props);
  }

  handleInput = (continent) => {
    this.props.setContinent(continent)
  }

  render() {
    return <Continent children={this.props.children} handleInput={this.handleInput}/>
  }
}

const mapDispatchToProps = dispatch => ({
  setContinent: (continent) => dispatch(setContinent(continent))
})

export default connect(null, mapDispatchToProps)(ContinentsContainer);
