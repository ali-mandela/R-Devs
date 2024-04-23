import styles from '../styles/component.module.css';
import image from '../assets/banner-about.svg';
const About = () => {
    return (
        <div className={styles.aboutContainer}>
            <h2>
                About Us</h2>
            <div className={styles.aboutContent}>
                <div><img src={image} alt='image-banner-abour'/></div>
               <div>
               <p>At R-dev, we are the digital wizards behind the scenes, turning your ideas
                    into awesome websites and apps. Whether you are a small business looking to make
                    a big splash online or an entrepreneur with a vision, we are here to make the
                    tech stuff easy and enjoyable. Think of us as your friendly neighborhood digital
                    experts, always ready to help you shine online!</p>
               </div>
            </div>
        </div>
    )
}

export default About