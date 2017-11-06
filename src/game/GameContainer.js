import React, { PureComponent } from 'react'
import Photo from './Photo'
import GuessForm from './GuessForm'
import Word from './Word'
import { connect } from 'react-redux'

class GameContainer extends PureComponent {
    render() {
      return(
        <div>
          <h1>Hangman</h1>
          <Photo photoId={ this.props.hangman.wrongGuessCount } />
          <Word guessedWord={ this.props.hangman.guessedWord }/>
          <GuessForm wrongGuessCount={ this.props.hangman.wrongGuessCount }/>
          <div><p>Guessed Letters: </p></div>
          <p>{ this.props.hangman.guessedLetters.join(" ") }</p>
        </div>
      )
    }
  }

const mapStateToProps = ({ hangman }) => ({ hangman })
export default connect (mapStateToProps)(GameContainer)
