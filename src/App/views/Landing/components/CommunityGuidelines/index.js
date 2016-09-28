import React from 'react'
import { StyleSheet, css } from 'aphrodite'

import { colors } from 'settings.style'

const guidelinesData = [
  {
    tabName: 'General rules',
    content: 'We\'re all in this together. Remember that this is your community. Be honest and courteous. If you experience harassment, please reach out to AncestorCloud. We’ll take care of it for you.'
  },
  {
    tabName: 'Seeker rules',
    content: (
      <ul>
        <li>{`Don’t post private or personally-identifying information about living people.`}</li>
        <li>{`To avoid duplicate research, share everything you know about the subject with your Helper, even if you think what you have doesn't apply to your specific research question.`}</li>
        <li>{`Remember that genealogy is an inexact science. Sometimes definitive answers simply aren’t available.`}</li>
        <li>{`If your helper worked hard to fulfill your request but came up short, please be generous and reward them for their effort.`}</li>
        <li>{`When you accept a research proposal from a helper, you are agreeing to pay them for the research outlined in their proposal. If you have questions about their proposal, please ask them before they begin their research.`}</li>
        <li>{`Consistent communication between you and your helper goes a long way!`}</li>
        <li>{`For any helper you meet on AncestorCloud, please move your project forward using AncestorCloud's messaging and transaction tools.`}</li>
      </ul>
    )
  },
  {
    tabName: 'Helper rules',
    content: (
      <ul>
        <li>{`When you submit a proposal, be specific and clear about the places you’ll search and the amount of time you’ll spend.`}</li>
        <li>{`When you receive an assignment, reach out to the seeker and introduce yourself. Let them know you’re excited to help them out.`}</li>
        <li>{`For any client you meet on AncestorCloud, please use only the tools AncestorCloud provides for communication and transactions.`}</li>
        <li>{`Share research plans with your Seeker. This will help them understand the process and manage their expectations.`}</li>
        <li>{`Keep your Seeker informed on your progress by sending them "research updates."`}</li>
        <li>{`When you’ve finished your research, send your Seeker a thorough report of your findings, including images of new evidence you’ve unearthed. Remember to cite your sources!`}</li>
        <li>{`Remember you’ll be reviewed.`}</li>
      </ul>
    )
  },
  {
    tabName: 'Seeker support',
    content: (
      <ul>
        <li>If you’re at all unsatisfied with the research a Helper has done for you, AncestorCloud is here to help.</li>
        <li>Communicate respectfully and directly with the Helper about your questions or concerns with their research. Give them to opportunity to explain their work.</li>
        <li>If your helper hasn’t performed the searches they agreed to do, please give them an opportunity to complete this research.</li>
        <li>Any instances of dissatisfaction will be addressed on a case-by-case basis.</li>
        <li>We’ll work with you and the researcher to make sure your request is completed to your satisfaction.</li>
      </ul>
    )
  },
  {
    tabName: 'Helper support',
    content: (
      <ul>
        <li>Thorough research has the full backing of AncestorCloud.</li>
        <li>If you have conducted a full investigation of a Seeker's research request and they are unsatisfied with the outcome, please help them understand your research process. Please also let us know, and we will work alongside you to ensure a fair result.</li>
      </ul>
    )
  }
]

const CommunityGuidelines = React.createClass({
  getInitialState () {
    return {
      activeTab: guidelinesData[0].tabName
    }
  },

  render () {
    /**
     * 1. filter to an array containing the only active tab, select
     *    first (and only) element in array
     */
    const { activeTab } = this.state
    const { content } =
      guidelinesData
      .filter(({tabName}) => activeTab === tabName)[0] /* 1 */
    return (
      <div className={css(styles.wrapper)}>
        <div className={css(styles.wrapper2)}>
          <h2 className={css(styles.title)}>Community Guidelines</h2>
          <div className={css(styles.explainer)}>We ask that all members (including experts) review and follow the community guidelines outlined below. Our success depends on everyone participating with these principles in mind.</div>
          <div className={css(styles.box)}>
            <ul className={css(styles.tabs)}>
              {
                guidelinesData
                .map(({tabName}, i) => (
                  <li
                    key={i}
                    onClick={() => {
                      this.setState({ activeTab: tabName })
                    }}
                    className={activeTab === tabName ? css(styles.tab, styles['tab-active']) : css(styles.tab)}
                  >{tabName}</li>
                ))
              }
            </ul>
            <div className={css(styles.content)}>{content}</div>
          </div>
        </div>
      </div>
    )
  }
})

export default CommunityGuidelines

const styles = StyleSheet.create({
  wrapper: {
    background: colors.ebonyClay,
    width: '100%',
    padding: '60px 40px',

    display: 'flex',
    justifyContent: 'center',

    '@media (max-width: 600px)': {
      display: 'none'
    }
  },

  wrapper2: {
    width: '100%',
    maxWidth: '1000px',

    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },

  title: {
    textAlign: 'center',
    letterSpacing: '2px',
    color: 'white'
  },

  explainer: {
    margin: '40px 0 60px',
    width: '100%',
    maxWidth: '800px',
    textAlign: 'center',
    fontStyle: 'italic',
    fontSize: '0.9em',
    color: colors.cadetBlue
  },

  box: {
    borderRadius: '4px',
    width: '100%',
    overflow: 'hidden'
  },

  tabs: {
    listStyleType: 'none',
    userSelect: 'none',

    display: 'flex'
  },

  tab: {
    background: colors.base,
    width: '100%',
    padding: '20px',
    textAlign: 'center',
    fontFamily: 'Bebas Neue',
    fontSize: '18px',
    color: colors.cadetBlue,
    letterSpacing: '0.5px',
    cursor: 'pointer',

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    ':not(:last-child)': {
      borderRight: '4px solid white'
    }
  },

  'tab-active': {
    background: 'white',
    color: colors.radicalRed
  },

  content: {
    background: 'white',
    padding: '60px',
    fontSize: '18px',
    lineHeight: '1.5em',
    color: colors.grey
  }
})
