// Code DigitalClicker Component Here
import React, { Component } from 'react'

class DigitalClicker extends Component {
  state = {
    timesClicked: 0
  }

  render() {
    return (
      <button onClick={this.increaseClick}>{this.state.timesClicked}</button>
    )
  }

  increaseClick = () => {
    this.setState( prevState => {
      // timesClicked: this.state.timesClicked ++
      return { timesClicked: prevState.timesClicked + 1 }
    })

  }

} // end of DigitalClicker component

export default DigitalClicker
