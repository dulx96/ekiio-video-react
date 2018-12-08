import React from 'react'
import { render } from 'react-dom'
import { Player } from '../src'
import fullscreen from '../src/utils/fullscreen'
import '../dist/ekiio-video-react.css'
import PlayToggle from './PlayToggle'

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      enableViSub: false,
      settingActive: false,
      isFullscreen: false,
      isHSL: false

    }
    this.toggleSetting = this.toggleSetting.bind(this)
  }

  toggleSubVi () {
    let currentTime = this.refs.player.getState().player.currentTime
    this.setState(prevState => ({enableViSub: !prevState.enableViSub}),
      () => this.refs.player.seek(currentTime))
  }

  toggleSetting () {
    this.setState(prevState => ({isHSL: !prevState.isHSL}))
    this.setState(prevState => ({settingActive: !prevState.settingActive}))
    this.setState(prevState => ({enableViSub: !prevState.enableViSub}))
  }

  componentDidMount () {

  }

  render () {
    const src = {
      en: 'https://lh3.googleusercontent.com/n7gjJ4Y8ZajNJ8t5yOcPxb0v_CCRPmQ8tHhNmo34okj3NytI_jB1e48mkFZa5GMvcKvX-v2L3w=m22',
      vi: 'http://www.streambox.fr/playlists/x36xhzz/x36xhzz.m3u8',
    }
    return (
      <div style={{width: 700, height: 394, position: 'relative'}}>
        <Player ref='player'
                src={this.state.enableViSub ? src.vi : src.en}
                poster="http://cdn.ekiio.com/images/1.jpg"
                muted
                HLS = {this.state.isHSL}
                toggleSetting={this.toggleSetting}>
          <div />
        </Player>
      </div>
    )
  }
}

render(<App />, document.getElementById('root'))
