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
      en: 'https://lh3.googleusercontent.com/skWq79mWPE8aDDZh0IQODG_HAgbcEbF3TGcnV32chAmwuwW8EL3r8SftvlpSYEe_55chymU-IBs=m22',
      vi: 'https://s101.imacdn.com/vod/vg/2019/03/28/6040_132590.mp4/playlist.m3u8?hash=4ybYArKz-Ggl71o_BG5JWA&expire=1553785755&title=[VuiGhe.Net]%20Tate%20No%20Yuusha%20No%20Nariagari%20-%20Tap%2012%20(480p)',
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
