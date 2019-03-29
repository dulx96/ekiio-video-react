import React from 'react'
import {render} from 'react-dom'
import {Player} from '../src/index'
import '../src/styles/scss/ekiio-video-react.css'

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            enableViSub: false,
            settingActive: false,
            isFullscreen: false,
            isHSL: false
        }
        this.player = React.createRef()
        this.toggleSetting = this.toggleSetting.bind(this)
    }

    toggleSubVi() {
        let currentTime = this.refs.player.getState().player.currentTime
        this.setState(prevState => ({enableViSub: !prevState.enableViSub}),
            () => this.refs.player.seek(currentTime))
    }

    toggleSetting() {
        this.setState(prevState => ({isHSL: !prevState.isHSL}))
        this.setState(prevState => ({settingActive: !prevState.settingActive}))
        this.setState(prevState => ({enableViSub: !prevState.enableViSub}))
    }

    componentDidMount() {

    }

    render() {
        const src = {
            en: 'https://video-hkg3-1.xx.fbcdn.net/v/t42.9040-2/10000000_869165419874351_6792195259104231424_n.mp4?_nc_cat=109&efg=eyJ2ZW5jb2RlX3RhZyI6InN2ZV9zZCJ9&_nc_ht=video-hkg3-1.xx&oh=7812a5719db12450fc6b1bb388e4b1fe&oe=5C9DCC18',
            vi: 'https://hvg.imacdn.com/hls/d2160e69c92273e803b87527de97222d/d2160e69c92273e803b87527de97222d.playlist.m3u8',
        }
        return (
            <div style={{width: 700, height: 394, position: 'relative'}}>
                <Player ref={this.player}
                        src={this.state.enableViSub ? src.vi : src.en}
                        poster="https://cdn.benkitv.com/byousoku-5-centimeter-5-centimeters-per-second-dCrKtp/images/poster.jpg"
                        muted={true}
                        HLS={this.state.isHSL}
                        toggleSetting={this.toggleSetting}>
                    <div/>
                </Player>
            </div>
        )
    }
}

render(<App/>, document.getElementById('root'))
