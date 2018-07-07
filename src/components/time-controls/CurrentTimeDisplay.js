import PropTypes from 'prop-types'
import React from 'react'

import { formatTime } from '../../utils'

const propTypes = {
  player: PropTypes.object,
}

function CurrentTimeDisplay ({player: {currentTime, duration}}) {
  const formattedTime = formatTime(currentTime, duration)
  return (
    <div
    >
      <div
      >
        <span className="video-react-control-text">Current Time </span>
        {formattedTime}
      </div>
    </div>
  )
}

CurrentTimeDisplay.propTypes = propTypes
CurrentTimeDisplay.displayName = 'CurrentTimeDisplay'

export default CurrentTimeDisplay
