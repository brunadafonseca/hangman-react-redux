import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import guess from '../actions/guess'

class GuessForm extends PureComponent {
  constructor() {
    super()

    this.state = {
      value: ''
    }
  }

  handleChange(event) {
    if (event.target.value.length >= 2) {
      return;
    }

    this.setState({
      value: event.target.value
    })
  }

  guess(event) {
    event.preventDefault();
    this.props.guess(this.state.value)
    this.setState({
      value: ''
    })
  }

  render() {
    return (
      <form onSubmit={this.guess.bind(this)}>
        <label>
          Enter a letter:
          <input type="text" value={ this.state.value } onChange={this.handleChange.bind(this)}/>
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default connect(null, { guess })(GuessForm)
