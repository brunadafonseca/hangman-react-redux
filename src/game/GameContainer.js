import React, { PureComponent, Fragment } from 'react'
import { connect } from 'react-redux'
import { replace } from 'react-router-redux'
import Photo from './Photo'
import GuessForm from './GuessForm'
import Word from './Word'


class GameContainer extends PureComponent {

  playerLost() {
    return (this.props.hangman.wrongGuessCount === 6)
  }

  playerWon() {
    const { guessedWord, secretWord } = this.props.hangman

    return ((guessedWord.split(' ').join('')) === secretWord)
  }

  restartGame = () => {
    window.location.reload()
  }

  endGame() {
    return (this.playerWon() || this.playerLost())
  }

  render() {
    const { guessedWord, guessedLetters, wrongGuessCount, secretWord } = this.props.hangman


    return(
      <div>
        <h1>Hangman</h1>

        <Photo photoId={ wrongGuessCount } playerWon={this.playerWon()}/>
        { this.playerLost() ? <Word word={ secretWord }/> :
                              <Word word={ guessedWord } /> }

        { !this.endGame() && <Fragment>
                               <GuessForm {...this.props.hangman}/>
                               <h3>Guessed Letters:</h3>
                               <p>{guessedLetters.join(", ")}</p>
                             </Fragment>}

        { (this.endGame()) && <button onClick={this.restartGame}>Restart Game</button> }
      </div>
    )
  }
}

const mapStateToProps = ({ hangman }) => ({ hangman })

export default connect (mapStateToProps, { replace })(GameContainer)
