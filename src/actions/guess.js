export const GUESS = 'GUESS'

export default (letter) => ({
    type: GUESS,
    payload: letter
})
