import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import guess from '../actions/guess'

class GuessForm extends PureComponent {

  state = {
    value: ''
  }

  handleChange = event => {
    if (event.target.value.length >= 2) {
      return false
    }

    this.setState({
      value: event.target.value
    })
  }

  checkDuplicateLetters() {
    const { guessedLetters } = this.props

    return (guessedLetters.includes(this.state.value))
  }

  clearErrorText() {
    this.setState({
      errorText: null
    })
  }

  clearState() {
    this.setState({
      value: ''
    })
  }

  guess(event) {
    event.preventDefault()
    this.clearErrorText()

    const letter = this.state.value

    if (!letter) {
      this.setState({
        errorText: 'Please enter a valid letter',
      })

      return false
    }

    if (this.checkDuplicateLetters()) {
      this.setState({
        errorText: 'You already guessed this letter.'
      })

      return false
    }

    this.props.guess(letter)

    this.clearState()
  }

  render() {
    return (
      <div>
        <form onSubmit={this.guess.bind(this)}>
          <label>
            Enter a letter:
            <input type="text" value={ this.state.value } onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
        <p>{this.state.errorText}</p>
      </div>
    )
  }
}

export default connect(null, { guess })(GuessForm)
