import React from 'react'
import classNames from 'classnames'

import PlayToggle from './PlayToggle'
import VolumeMenuButton from './VolumeMenuButton'

const ControlBar = (props) => {

  const children = [
    <PlayToggle key='toggle-play' {...props} />,
    <VolumeMenuButton key='volume-menu-button' {...props} />,
  ]
  return (
    <div className={classNames('control-bar', 'control-bar-auto-hide')}>
      {children}
    </div>
  )

}
export default ControlBar
