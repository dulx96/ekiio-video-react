import React from 'react'
import { render } from 'react-dom'
import { Player } from '../src/'
import '../dist/ekiio-video-react.css'
class App extends React.Component {
  render () {
    return (
      <div style={{width: 700}}>


        <Player playsInline
                src={{
                  en: 'https://lh3.googleusercontent.com/tYNW7gMpV5V0W87iogLKDhJXySzUNanWaH8d_EZhRps3EuyLFdV9cQxaCeOOPnNjtvksbjyEnNEMvG-3mWHI_P3vfLqU5X5ysIlAuSOd7lEvZGKtkknsEGRYGJMF3OSjZF-cQfbW=w600-h315-k-no-m18',
                  vi: 'https://lh3.googleusercontent.com/kMCqKzdGU_McxkYrkYuwJw3pa_Cz-kluTxtx4kqUQfj6V9klTjTXry70U3mPjjAG4KWWlz9SK1ACSOLcVA=m22',
                }}
                autoPlay={true}>
        </Player>

      </div>
    )
  }
}

render(<App />, document.getElementById('root'))
