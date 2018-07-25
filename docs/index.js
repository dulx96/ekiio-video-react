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

    }
    this.toggleSetting = this.toggleSetting.bind(this)
  }

  toggleSubVi () {
    let currentTime = this.refs.player.getState().player.currentTime
    this.setState(prevState => ({enableViSub: !prevState.enableViSub}),
      () => this.refs.player.seek(currentTime))
  }

  toggleSetting () {
    this.setState(prevState => ({settingActive: !prevState.settingActive}))
  }

  componentDidMount () {

  }

  render () {
    const src = {
      en: 'https://lh3.googleusercontent.com/zHwuubvf2Vy-5FjjW3fb2wnmcE4Iz8z4iPyrNaiPmnKyxeJh3BvFzLxOcSYPLWheKS2wwSN4jrdQXfZqJN5xR0_1vWIJpkBuqSy5gj9ZYNchwvGYwUVn2b7Mk2D6LCsbHsYAkDM38g=m22',
      vi: 'https://lh3.googleusercontent.com/kMCqKzdGU_McxkYrkYuwJw3pa_Cz-kluTxtx4kqUQfj6V9klTjTXry70U3mPjjAG4KWWlz9SK1ACSOLcVA=m22',
    }
    return (
      <div style={{width: 700, height: 394, position: 'relative'}}>
        <Player ref='player'
                src={this.state.enableViSub ? src.vi : src.en}
                poster="http://cdn.ekiio.com/images/1.jpg"
                muted
                toggleSetting={this.toggleSetting}>
          <div />
          <PlayToggle />
        </Player>
      </div>
    )
  }
}

render(<App />, document.getElementById('root'))
