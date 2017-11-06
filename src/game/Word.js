import React, { PureComponent } from 'react'

class Word extends PureComponent {

  render() {
    return (
      <div>
      <h1>{ this.props.guessedWord }</h1>
      </div>
    )
  }
}

export default Word
