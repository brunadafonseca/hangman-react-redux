import { GUESS } from '../actions/guess'
import words from '../fixtures/words'

const randomWord = words[Math.floor(Math.random() * words.length)]
const guessedWord = randomWord.split("").map(letter => "_").join(" ")

const initialState = {
  wrongGuessCount: 0,
  guessedLetters: [],
  secretWord: randomWord,
  guessedWord: guessedWord,
}

const changeWord = (word, payload, guessedWord) => {
  return word.split('').map(function(letter, index) {
    if (letter === payload || guessedWord.split(' ')[index] !== '_') {
      return letter
    } else {
      return '_'
    }}).join(' ')
}

export default (state = initialState, { type, payload } = {}) => {
  switch (type) {
    case GUESS:
      const secretWord = state.secretWord
      if (secretWord.includes(payload)) {
        return Object.assign({}, state, {
          guessedWord: changeWord(state.secretWord, payload, state.guessedWord),
          guessedLetters: state.guessedLetters.concat(payload)
        })
      } else {
        return Object.assign({}, state, {
          guessedLetters: state.guessedLetters.concat(payload),
          wrongGuessCount: state.wrongGuessCount + 1,
        })
      }

    default:
      return state
  }
}
