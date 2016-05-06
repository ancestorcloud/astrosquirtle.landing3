import React, { PropTypes } from 'react'
import { StyleSheet, css } from 'aphrodite'

import Profile from './components/Profile'

const Request = ({ seeker, helper }) => (
  <div className={css(styles.flex)}>
    <div className={css(styles.profileWrapper)}>
      <Profile
        {...seeker}
      />
    </div>
    <img
      src='/assets/images/CommunityInAction/switch.svg'
      className={css(styles.connectionImg)}
    />
    <div className={css(styles.profileWrapper)}>
      <Profile
        imageFirst={false}
        {...helper}
      />
    </div>
  </div>
)

const profileShape = PropTypes.shape({
  name: PropTypes.string,
  avatar: PropTypes.string,
  description: PropTypes.string,
  about: PropTypes.string,
  flagSrc: PropTypes.string
})

Request.propTypes = {
  seeker: profileShape,
  helper: profileShape
}

export default Request

const widthAtWhichToShiftToVerticalLayout = 1000

const styles = StyleSheet.create({
  flex: {
    ':not(:last-child)': {
      marginBottom: '40px'
    },

    display: 'flex',
    alignItems: 'center',

    [`@media (max-width: ${widthAtWhichToShiftToVerticalLayout}px)`]: {
      flexDirection: 'column'
    }
  },

  profileWrapper: {
    zIndex: '1',
    width: '100%',
    minHeight: '180px',
    background: 'white',
    boxShadow: '0 0 40px rgba(0, 0, 0, 0.6)',

    display: 'flex',
    alignItems: 'center'
  },

  connectionImg: {
    margin: '-15px',
    width: '80px',
    zIndex: '2',

    [`@media (max-width: ${widthAtWhichToShiftToVerticalLayout}px)`]: {
      transform: 'rotate(90deg)'
    }
  }
})
