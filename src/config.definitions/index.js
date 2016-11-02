export const defaultAvatar = 'https://s3-us-west-2.amazonaws.com/astrocat-api/astrocat/avatars/aclogo-light-pink.svg'

export const flags = {
  unitedStates: 'https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg',
  unitedKingdom: 'https://upload.wikimedia.org/wikipedia/commons/1/17/Union_flag_1606_%28Kings_Colors%29.svg',
  denmark: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Flag_of_Denmark.svg/2000px-Flag_of_Denmark.svg.png',
  poland: 'https://upload.wikimedia.org/wikipedia/en/1/12/Flag_of_Poland.svg'
}

const appRoot = __DEV__ // eslint-disable-line
  ? 'https://staging.ancestorcloud.com/#/'
  : 'https://app.ancestorcloud.com/#/'

export const links = {
  // social
  facebook: 'https://www.facebook.com/AncestorCloud',
  twitter: 'https://twitter.com/ancestorcloud',
  instagram: 'https://www.instagram.com/ancestorcloud/',
  googlePlus: 'https://plus.google.com/101239994939407143407',

  // blog
  blog: 'http://blog.ancestorcloud.com',

  // landing
  faq: '/#/faq',

  // app
  community: `${appRoot}community`,
  helpOthers: `${appRoot}helpOthers`,
  getHelp: `${appRoot}getHelp`,
  registration: `${appRoot}registration`,
  login: `${appRoot}login`
}
