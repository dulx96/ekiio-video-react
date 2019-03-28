import React from 'react'
import { render } from 'react-dom'
import { Player } from '../src'
import '../src/styles/scss/ekiio-video-react.css'

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      enableViSub: true,
      settingActive: false,
      isFullscreen: false,
      isHSL: true

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
      vi: 'https://hvg.imacdn.com/drive//hls/63d7d2e6b9a5fb55ecbc81ce1872bb1a/63d7d2e6b9a5fb55ecbc81ce1872bb1a.m3u8',
    }
    return (
      <div style={{width: 700, height: 394, position: 'relative'}}>
        <Player ref='player'
                src={this.state.enableViSub ? src.vi : src.en}
                poster="https://cdn.benkitv.com/byousoku-5-centimeter-5-centimeters-per-second-dCrKtp/images/poster.jpg"
                muted={true}
                HLS = {this.state.isHSL}
                toggleSetting={this.toggleSetting}>
          <div />
        </Player>
      </div>
    )
  }
}

render(<App />, document.getElementById('root'))
