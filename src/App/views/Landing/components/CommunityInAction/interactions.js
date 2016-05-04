import { defaultAvatar, flags } from 'config.definitions'

const lipsum = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent tincidunt convallis purus, in rhoncus est blandit quis. Mauris congue ligula vitae nunc commodo, vitae rhoncus tellus pulvinar.'

const dummyRequest = {
  seeker: {
    name: 'John W. Smith',
    avatar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Abraham_Lincoln_O-77_matte_collodion_print.jpg/480px-Abraham_Lincoln_O-77_matte_collodion_print.jpg',
    description: 'Researcher in the United States',
    about: lipsum,
    flagSrc: flags.unitedStates
  },
  helper: {
    name: 'Sarah Mags',
    avatar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Marcus_Aurelius_Metropolitan_Museum.png/485px-Marcus_Aurelius_Metropolitan_Museum.png',
    description: 'Helper in Great Britain',
    about: lipsum,
    flagSrc: flags.unitedKingdom
  }
}

export default [
  {
    seeker: {
      name: 'Jan Budge',
      avatar: 'https://s3-us-west-2.amazonaws.com/astrocat-api/astrocat/avatars/1234_1456238251678_normal.jpg.gz',
      description: 'Researcher in Utah',
      about: 'Jan Budge had been searching since 1969 to find information about Peder Larsen in Denmark.',
      flagSrc: flags.unitedStates
    },
    helper: {
      name: 'Peter Paluszewski',
      avatar: null,
      description: 'Helper in Denmark',
      about: 'Peter, a genealogist in Denmark, was able to find and read Danish records that were invaluable to Jan\'s research.',
      flagSrc: flags.denmark
    }
  },
  {
    seeker: {
      name: 'Maria Tegtmeier',
      avatar: null,
      description: 'Researcher in the United States',
      about: 'Maria was looking for someone in Poland to find parish records about the Klemin family.',
      flagSrc: flags.unitedStates
    },
    helper: {
      name: 'Kinga Borowiec',
      avatar: 'https://s3-us-west-2.amazonaws.com/astrocat-api/astrocat/avatars/1460543177082_normal.jpg.gz',
      description: 'Helper in Poland',
      about: 'Kinga\'s team visited the state archives of Konin, and found several pages of documents that were relevant to this family. Maria received images of these documents, along with a written report.',
      flagSrc: flags.poland
    }
  },
  {
    helper: {
      name: 'Matthew T. Hout-Reilly',
      avatar: 'https://s3-us-west-2.amazonaws.com/astrocat-api/astrocat/avatars/555a5a3ad016d64fde40e689_1434056890829_normal.jpg',
      description: 'Researcher in Ohio',
      about: 'Matthew, an expert in adoption research, was able to find an adoption file that provided the name of Robert Donald Stump\'s mother and additional information on the adoption.',
      flagSrc: flags.unitedStates
    },
    seeker: {
      name: 'Rebecca Waldorf',
      avatar: '/assets/images/CommunityInAction/rebecca.jpg',
      description: 'Helper in Florida',
      about: 'Rebecca was looking for the birth mother her fiance\'s father, Robert Donald Stump. She had a few pieces of information, such as Robert\'s birth date and age of adoption, and a possible place of birth, but needed help to find more than that.',
      flagSrc: flags.unitedStates
    }
  }
]
