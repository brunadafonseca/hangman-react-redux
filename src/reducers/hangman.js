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

function changeWord(word, payload, guessedWord) {
  return word.split("").map(function(letter, index) {
    if (letter === payload || guessedWord.split(" ")[index] !== "_") {
      return letter;
    } else {
      return "_"
    }
  }).join(" ")
}

export default (currentState = initialState, { type, payload } = {}) => {
  switch (type) {
    case GUESS:
      if (!currentState.guessedLetters.includes(payload)) {
        if (!currentState.secretWord.includes(payload)) {
          return Object.assign({}, currentState, {
            wrongGuessCount: currentState.wrongGuessCount + 1,
            guessedLetters: currentState.guessedLetters.concat(payload)
          })
        } else {
          return Object.assign({}, currentState, {
            guessedWord: changeWord(currentState.secretWord, payload, currentState.guessedWord),
            guessedLetters: currentState.guessedLetters.concat(payload)
          })
        }
      } else {
        return currentState
      }

    default:
      return currentState
  }
}
