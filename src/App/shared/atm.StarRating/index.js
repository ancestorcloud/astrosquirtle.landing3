import React, { PropTypes } from 'react'

import { X } from 'obj.Layout'
import Star from './components/Star'

/**
 * 1. creates an array of length
 * 2. gives each index the value of its index
 */
const fillWithNValues = (n) => Array
  .apply(null, { length: n }) /* [1] */
  .map(Number.call, Number) /* [2] */

const determineStarType = (rating, position) => {
  if (Math.floor(rating) >= position) return 'full'
  if (position > Math.round(rating)) return 'empty'
  return 'half'
}

const formatRating = (num) => (num % 1)
  ? num.toPrecision(2)
  : num

const sizes = {
  default: 22,
  small: 18
}

const StarRating = ({
  rating,
  outOf = 5,
  showRating = false,
  size = 'default'
}) => {
  const count = fillWithNValues(outOf)

  return (
    <X x tag='ul' style={{listStyle: 'none'}}>
      {count.map((index) =>
        <div key={index}>
          <Star type={determineStarType(rating, index + 1)} size={sizes[size]} />
        </div>
      )}
      {showRating
      ? <li style={{marginLeft: '6px'}}>{`(${formatRating(rating)})`}</li>
      : undefined}
    </X>
  )
}

StarRating.propTypes = {
  rating: PropTypes.number,
  outOf: PropTypes.number,
  showRating: PropTypes.bool,
  size: PropTypes.string
}

export default StarRating
