import PropTypes from 'prop-types'
import React from 'react'

const propTypes = {
  actions: PropTypes.object,
  player: PropTypes.object,
}
export default class ChangeSubVi extends React.Component {
  constructor (props, context) {
    super(props, context)
  }

  handleSwitchSub () {
    this.props.switchSub()
  }

  render () {
    return (
      <button className="btn-switch-sub" type="button"
              onClick={() => this.handleSwitchSub()}>
        VI/EN
      </button>
    )
  }
}
