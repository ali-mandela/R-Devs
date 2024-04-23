/* eslint-disable react/prop-types */
import styles from '../styles/component.module.css'
import p1 from '../assets/p1.svg'
import p2 from '../assets/p2.svg'
import p3 from '../assets/p3.svg'
import p4 from '../assets/p4.svg'
import p5 from '../assets/p5.svg' 
import { Link } from 'react-router-dom'
const TheProcess = () => {
    const processSteps = [
        {
          title: 'Submit the',
          description: 'Begin by filling out our straightforward form to kickstart the collaboration.',
          image:p1
        },
        {
          title: 'Initial Connection',
          description: 'We reach out to you to discuss your needs and clarify any details.',
          image:p2
        },
        {
          title: 'Project Description Report',
          description: 'Based on your requirements, we provide a detailed project description report for your review.',
          image:p3
        },
        {
          title: 'Decision Time',
          description: 'Evaluate the proposal and decide on moving forward with the project.',
          image:p4
        },
        {
          title: 'Project Delivery',
          description: 'Upon approval, we proceed to deliver the tailored solution to meet your demands.',
          image:p5
        }
      ];
    console.log(processSteps[0]);
  return (
    <div className={styles.processContainer}>
        <h2>Streamlined Process to Success</h2>

        <div className={styles.processSteps}>
            {
                processSteps.map((card, index)=> <ProcessCard card={card} index={index} key={index} />)
            }
        </div>
    </div>
  )
}

const ProcessCard=({card,})=>{
    return(<>
      <div className={styles.card}> 
    <img src={card.image} alt={card.title} />
    <p>{card.description}</p>
    
    <h4>
        {card.title} <br/>
        {card.title === 'Submit the' && <Link to='/contact-us'>Form</Link>}
    </h4>
</div>
    </>)
}

export default TheProcess