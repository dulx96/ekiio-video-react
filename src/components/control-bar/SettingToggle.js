import React from 'react'

export default class SettingToggle extends React.PureComponent {
  render () {
    return (
      <button
        className="ekiio-video-icon ekiio-video-icon-setting video-control"
        onClick={this.props.toggleSetting} />
    )
  }
}
