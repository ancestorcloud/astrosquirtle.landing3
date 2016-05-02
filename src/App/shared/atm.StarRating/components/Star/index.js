import React, { PropTypes } from 'react'

import { colors } from 'settings.style'

const starColors = {
  full: colors.radicalRed,
  empty: colors.silver
}

const svgDefaultSize = 240

const starSVG = (size, color, half = false) => (
  <svg xmlns='http://www.w3.org/2000/svg' width={half ? size / 2 : size} height={size} viewBox={`${half === 'right' ? size / 2 : 0} 0 ${half ? size / 2 : size} ${size}`}>
    <g transform={`scale(${size / svgDefaultSize})`}>
      <path fill={color} d='m48,234 73-226 73,226-192-140h238z'/>
    </g>
  </svg>
)

const Star = ({
  type = 'full',
  size = 'small'
}) => type === 'full' || type === 'empty'
? starSVG(size, starColors[type])
: type === 'half'
? (
  <div>
    {starSVG(size, starColors.full, 'left')}
    {starSVG(size, starColors.empty, 'right')}
  </div>
)
: null

Star.propTypes = {
  type: PropTypes.oneOf([
    'half',
    'full',
    'empty'
  ]),
  size: PropTypes.number
}

export default Star
