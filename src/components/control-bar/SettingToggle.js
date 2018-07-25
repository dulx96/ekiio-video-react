import React from 'react'

export default class SettingToggle extends React.PureComponent {
  render () {
    return (
      <button className="ekiio-video-icon ekiio-video-icon-setting" onClick={this.props.toggleSetting} />
    )
  }
}
