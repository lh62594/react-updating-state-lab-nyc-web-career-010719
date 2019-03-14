// Code YouTubeDebugger Component Here
// Code DigitalClicker Component Here
import React, { Component } from 'react'

class YouTubeDebugger extends Component {
  state = {
    errors: [],
    user: null,
    settings:
      { bitrate: 8,
        video: {
          resolution: '1080p'
        }
      }
    }

  render() {
    return (
      <div>
        <button onClick={this.setBitrate} className="bitrate">Bitrate Button</button>
        <button onClick={this.changeResolution} className="resolution">Resolution Button</button>
      </div>
    )
  }

  setBitrate = () => {
    this.setState({
      settings: {
        ...this.state.settings,
        bitrate: 12
      }
    }, console.log(this.state.settings.bitrate))
  }

  changeResolution = () => {
    this.setState({
      settings: {...this.state.settings, video: {
        ...this.state.settings.video, resolution: "720p"
        }
      }
    })
  }



} // end of YouTubeDebugger component

export default YouTubeDebugger
