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
      en: 'https://video.fhan2-1.fna.fbcdn.net/v/t42.9040-2/10000000_273436483435087_3002577934025228288_n.mp4?_nc_cat=0&efg=eyJybHIiOjE1MDAsInJsYSI6NDA5NiwidmVuY29kZV90YWciOiJzdmVfaGQifQ%3D%3D&rl=1500&vabr=622&oh=4366db4a49e5d409667cf6f4d6d2c37f&oe=5B697570',
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
