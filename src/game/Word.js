import React, { PureComponent } from 'react'

class Word extends PureComponent {

  render() {
    return (
      <div>
      <h3>Secret word:</h3>
      <h1>{ this.props.word }</h1>
      </div>
    )
  }
}

export default Word
