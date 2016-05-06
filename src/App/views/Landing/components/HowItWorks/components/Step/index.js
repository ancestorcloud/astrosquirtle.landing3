import React, { PropTypes } from 'react'
import { StyleSheet, css } from 'aphrodite'

import { colors } from 'settings.style'

const Step = ({ number, title, description, image, imageFirst }) => (
  <div className={imageFirst ? css(styles.Step, styles['Step-imageFirst']) : css(styles.Step)}>
    <div className={css(styles.textNode)}>
      <div className={css(styles.number)}>{`0${number}`}</div>
      <div className={css(styles.text)}>
        <div className={css(styles.title)}>
          <span className={css(styles.inlineNumber)}>Step {number}: </span>
          {title}
        </div>
        <div className={css(styles.separator)} />
        <div className={css(styles.description)}>{description}</div>
      </div>
    </div>
    <div>
      <img
        className={css(styles.img)}
        src={image.src}
        width={image.width}
      />
    </div>
  </div>
)

Step.propTypes = {
  number: PropTypes.number,
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.shape({
    src: PropTypes.string,
    width: PropTypes.number
  }),
  imageFirst: PropTypes.bool
}

export default Step

const widthAtWhichToSwitchToVerticalLayout = 1100
const verticalLayout = `@media (max-width: ${widthAtWhichToSwitchToVerticalLayout}px)`

const stepStyles = {
  position: 'relative',
  width: '100%',
  padding: '80px',

  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',

  [verticalLayout]: {
    padding: '60px 20px',

    flexDirection: 'column-reverse !important',
    justifyContent: 'flex-start',
    alignItems: 'center'
  }
}

const numberStyle = {
  zIndex: '1',
  position: 'absolute',
  top: '-50px',
  fontFamily: 'Bebas Neue',
  fontSize: '6.0em',
  color: colors.geyser,

  [verticalLayout]: {
    display: 'none'
  }
}

const styles = StyleSheet.create({
  Step: stepStyles,

  'Step-imageFirst': {
    ...stepStyles,
    flexDirection: 'row-reverse'
  },

  textNode: {
    position: 'relative',
    width: '100%',
    maxWidth: '400px',

    [verticalLayout]: {
      marginTop: '20px'
    }
  },

  number: {
    ...numberStyle,
    left: '-50px'
  },

  'number-right': {
    ...numberStyle,
    right: '-50px'
  },

  inlineNumber: {
    display: 'none',

    [verticalLayout]: {
      display: 'inline',
      color: colors.radicalRed
    }
  },

  text: {
    zIndex: '2',
    position: 'relative'
  },

  title: {
    fontFamily: 'Playfair Display',
    fontSize: '1.6em',
    letterSpacing: '2px',
    fontWeight: 'bold',
    textTransform: 'uppercase',

    [verticalLayout]: {
      fontSize: '1.2em'
    }
  },

  separator: {
    margin: '20px 0',
    borderBottom: `2px solid ${colors.radicalRed}`,
    width: '34px'
  },

  description: {
    fontStyle: 'italic',
    color: colors.cadetBlue
  },

  img: {
    [verticalLayout]: {
      width: '100%'
    }
  }
})
