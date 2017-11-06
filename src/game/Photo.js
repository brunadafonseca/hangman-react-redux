import React, { PureComponent } from 'react'
import photos from '../fixtures/photos'

class Photo extends PureComponent {
  render() {
    return (
      <img src={photos[this.props.photoId]} alt="hangman" />
    )
  }
}

export default Photo
