import React from 'react'
import classNames from 'classnames'

import PlayToggle from './PlayToggle'
import VolumeMenuButton from './VolumeMenuButton'
import ChangeSubVi from '../ChangeSubVi'
const ControlBar = (props) => {

  const children = [
    <PlayToggle key='toggle-play' {...props} />,
    <VolumeMenuButton key='volume-menu-button' {...props} />,
    <ChangeSubVi {...props}/>
  ]
  return (
    <div className={classNames('control-bar', 'control-bar-auto-hide')}>
      {children}
    </div>
  )

}
export default ControlBar
