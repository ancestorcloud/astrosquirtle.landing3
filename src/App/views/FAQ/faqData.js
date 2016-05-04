import React from 'react'
import { StyleSheet, css } from 'aphrodite'

const listSpacingStyle = { marginLeft: '15px' }

const styles = StyleSheet.create({
  ul: listSpacingStyle,
  ol: listSpacingStyle,
  li: listSpacingStyle
})

export default [
  {
    name: 'General',
    data: [
      {
        title: 'How much does AncestorCloud cost?',
        content: <p>Using AncestorCloud to view and post requests and participate in the community is free. AncestorCloud's ability to provide these services comes from a small portion of the reward exchanged after research help has been completed to the requester's satisfaction.</p>
      },
      {
        title: 'How does helping others work?',
        content: <p>To help others simply begin searching our requests and click “Submit A Proposal” on any requests you are confident you can fulfill. We then will notify the seeker of your interest so they can approve you for that request. Once you’re approved and the reward is deposited into our secure holdings we will notify you and you can get started.</p>
      },
      {
        title: 'How are payments processed?',
        content: <p>We currently use PayPal for secure transactions as we finish building our internal payment processing system. Don’t have Paypal? No problem, we’re happy to discuss other alternatives.</p>
      },
      {
        title: 'What if nobody helps with my requests?',
        content: <p>If your request isn’t responded to we will reach out personally to help you find what you are looking for. We’ve seen the best results achieved when the reward is fair, the details are clear, and all relevant documents are upload.</p>
      },
      {
        title: 'What happens if I do the work and the requester doesn\'t pay?',
        content: <p>You’ll never have to worry about not getting paid for a job. Whenever you begin completing a request, we will have already collected the funds for the request, holding them in reserve. Upon completion of the task, we securely deliver the funds to you for that task.</p>
      },
      {
        title: 'What if I am unhappy with the research?',
        content: <p>Please remember that genealogy is not an exact science. There may be times that a helper completes the research they agreed to do in their research proposal, but do not find the results you hoped for. In these cases, please remember the benefits of negative searches, as well as the time and effort they invested in your research, and reward them for accomplishing the searches they agreed to do. However, if a helper does not complete the research they agreed to do, we ensure a refund of your money.</p>
      }
    ]
  },
  {
    name: 'Requests',
    data: [
      {
        title: 'What is a request?',
        content: <p>On AncestorCloud, getting genealogical help starts with posting a request. The details of a request depend on what kind of help you need, but the best requests include as much detail as possible about what you want to know or what document/photo you want to retrieve, what you already know or documents you already have, and where you have already looked. The request is a helper’s way of knowing if their abilities and resources would be useful to you.</p>
      },
      {
        title: 'How much detail should I include in a request?',
        content: <p>Please be as detailed as possible about what you are looking for, what you already know, and where you have already looked. Sometimes details about what you already know or where you have looked seem insignificant to you, but would help a helper know how they can help you.</p>
      },
      {
        title: 'What kind of help can I ask for?',
        content: (
          <div>
            <p>There are many different types of acceptable requests. Here are just a few:</p>
            <ul className={css(styles.ul)}>
              <li className={css(styles.li)}><strong>Archive Lookup</strong> – You can post a request for someone to visit an archive that you think contains information about an ancestral family.</li>
              <li className={css(styles.li)}><strong>Record Pickup</strong> – You can ask for someone to pick up a record for you at a local repository.</li>
              <li className={css(styles.li)}><strong>Research Question</strong> – You can ask for help finding a particular piece of information about an ancestral family, that you are unsure how to find.</li>
              <li className={css(styles.li)}><strong>Translation</strong> – You can ask for help translating and transcribing historical records. There are several helpers throughout the world that are willing to help you translate old documents from other languages.</li>
              <li className={css(styles.li)}><strong>Local Photograph</strong> – You can post a request for a photograph of a headstone, street where your ancestors lived, etc.</li>
              <li className={css(styles.li)}><strong>Custom Research</strong> – You can post a request for a unique or more involved research project. This is similar to posting a “Research Question” request, but may involve slightly more extended research.</li>
            </ul>
            <br />
          </div>
        )
      },
      {
        title: 'What is a fair "reward" amount?',
        content: <p>The best way to determine a fair reward is to consider the amount of time and expertise a helper would need to work on the request. Also consider any other expenses they might incur, such as archive and copy fees, or travel expenses. If you are willing to negotiate the price with the helper, you may also make a note of that in your request.</p>
      },
      {
        title: 'Can I edit a request after I create it?',
        content: <p>Yes, you can edit a request that you have created. Once you create a request, you can edit the request by selecting the request you would like to edit. Once you get to the page of the request, there is a button that says, “Edit request.”</p>
      },
      {
        title: 'What if I find the solution to my own request after posting it to AncestorCloud?',
        content: <p>You can edit your request to reflect a different research goal. You can also contact AncestorCloud, and we can remove your request.</p>
      },
      {
        title: 'I created a request, but I don’t see it in the main list of requests. What happened?',
        content: <p>AncestorCloud approves all request to make sure that requests contain enough detail and a minimum reward price, so there is often a short delay between your creation of the request, and the request appearing in the request list. If your request needs additional information or a fair reward price, you should receive a message from a member of the AncestorCloud team. If you are concerned that your request has not shown up, please contact AncestorCloud.</p>
      },
      {
        title: 'How does getting help work? What is the process?',
        content: (
          <ol className={css(styles.ol)}>
            <li className={css(styles.li)}>You post a request.</li>
            <li className={css(styles.li)}>AncestorCloud helpers from around the world can view your request. Helpers may comment or send you a message with initial research or questions.</li>
            <li className={css(styles.li)}>If a helper feels they can help with your request, they will submit a proposal that includes what they will do, and how much reward they would ask for.</li>
            <li className={css(styles.li)}>You have a chance to approve or ask questions of the helper about their proposal and experience by messaging them on their profile.</li>
            <li className={css(styles.li)}>Once you approve, we will send you an invoice for the full reward price upfront. We will keep payment in our secure holdings until the research is completed.</li>
            <li className={css(styles.li)}>Once we have confirmed that the research is complete, we will release payment to the helper.</li>
          </ol>
        )
      },
      {
        title: 'Who will be helping me?',
        content: <p>Helpers are AncestorCloud users that feel that they can contribute to your request. They may be professionals or have experience researching in the area where you ancestor lived. They may be helpful people that live in the area where you are researching. Of course, before your request is officially connected with a helper, you have the final say in approving that helper.</p>
      },
      {
        title: 'How do "rewards" work?',
        content: <p>Before research is begun, you and the helper will agree upon a reward price, based on your suggested price and their reward price. AncestorCloud will send you an invoice at the beginning of the research, and will keep your payment in our secure holding until research is complete. Once the research is complete, the reward will be released to the helper.</p>
      },
      {
        title: 'People are commenting on my request. How do I decide who receives payment?',
        content: <p>Payment goes to helpers who have submitted proposals, whose proposals you have accepted. If someone is offering to help without submitting a proposal, you may ask them to submit a proposal. This allows AncestorCloud to support both you and the helper in the process.</p>
      },
      {
        title: 'What if no one responds to my request? ',
        content: <p>You may search for helpers using the AncestorCloud map tool, and message any helper that lives in the right place or has the right expertise to help with your request. If have trouble finding a helper that you think could help with your request, contact AncestorCloud, and we will work to find a helper who is qualified and able to help with your request.</p>
      }
    ]
  }
]
