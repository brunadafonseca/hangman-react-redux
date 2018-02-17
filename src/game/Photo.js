import React, { PureComponent } from 'react'
import photos from '../fixtures/photos'

class Photo extends PureComponent {
  render() {
    const { photoId, playerWon } = this.props

    return (
      <div>
        { playerWon ? <img src={photos[7]} alt="hangman" /> :
                      <img src={photos[photoId]} alt="hangman" />}
      </div>
    )
  }
}

export default Photo
