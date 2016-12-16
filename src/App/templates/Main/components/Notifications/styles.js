import {StyleSheet} from 'aphrodite'

const spacing = 10
const iconSize = 15

const notificationStyles = {
  display: 'flex',
  alignItems: 'center',
  margin: '0 0 1px 0',
  backgroundColor: '#48CFAD',
  padding: spacing,
  opacity: '0.9',
  ':hover': {
    opacity: '1.0'
  }
}

const styles = StyleSheet.create({
  wrapper: {
    display: 'flex',
    flexDirection: 'column'
  },

  'notification-success': {
    ...notificationStyles
  },

  'notification-alert': {
    ...notificationStyles,
    backgroundColor: '#000'
  },

  'notification-failure': {
    ...notificationStyles,
    backgroundColor: '#000'
  },

  body: {
    display: 'flex',
    alignItems: 'center'
  },

  icon: {
    flexShrink: 0,
    width: iconSize,
    height: iconSize,
    backgroundImage: `url('/assets/icons/bell.svg')`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: `${iconSize}px ${iconSize}px`,
    backgroundPosition: 'center center'
  },

  text: {
    padding: `0 ${spacing}`,
    fontSize: '18px',
    color: 'white'
  },

  exit: {
    flexShrink: 0,

    width: iconSize,
    height: iconSize,
    backgroundImage: `url('/assets/icons/x-white.svg')`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: `${iconSize}px ${iconSize}px`,
    backgroundPosition: 'center center',
    cursor: 'pointer',

    opacity: 0.5,

    ':hover': {
      opacity: 1.0
    }
  },

  offset: {
    flexGrow: 1
  }
})

export default styles
