import PropTypes from 'prop-types'
import React from 'react'
import { IconPause, IconPlay } from '../../styles/Icons'

const propTypes = {
  actions: PropTypes.object,
  player: PropTypes.object,
}
export default class PlayToggle extends React.Component {
  constructor (props) {
    super(props)
  }

  handleClick () {
    const {actions, player} = this.props
    if (player.paused) {
      actions.play()
    } else {
      actions.pause()
    }
  }

  render () {
    return (
      <div onClick={() => this.handleClick()}>
        {!this.props.player.paused? <IconPause size={20}/> : <IconPlay size={20}/>}
      </div>
    )
  }
}
