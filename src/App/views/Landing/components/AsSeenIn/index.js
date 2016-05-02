import React from 'react'
import { StyleSheet, css } from 'aphrodite'

const imagePath = '/assets/images/AsSeenIn'

const images = [
  {
    name: 'techstars.png',
    width: 90
  },
  {
    name: 'ksl.png',
    width: 120
  },
  {
    name: 'siliconslopes.png',
    width: 100
  },
  {
    name: 'beehivestartups.png',
    width: 120
  },
  {
    name: 'forbes.png',
    width: 120
  },
  {
    name: 'thedenverpost.png',
    width: 200
  }
]

const AsSeenIn = () => (
  <div className={css(styles.flex)}>
    {
      images.map(({ name, width }, i) => (
        <div key={i}>
          <img
            src={`${imagePath}/${name}`}
            width={width}
            className={css(styles.image)}
            style={{ width: `${width}px` }}
          />
        </div>
      ))
    }
  </div>
)

export default AsSeenIn

const styles = StyleSheet.create({
  flex: {
    width: '100%',
    padding: '20px 0',
    overflow: 'hidden',

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexWrap: 'wrap'
  },

  image: {
    margin: '30px'
  }
})
