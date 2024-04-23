import { Link } from 'react-router-dom';
import image from '../assets/not-found.svg';
import styles from '../styles/NotFound.module.css';


const NotFound = () => {
  return (
    <div className={styles.notFoundContainer}> 
        <h1>Oops!</h1>
        <p>We couldn't find the page you're looking for.</p>
        <img src={image} alt="404 Error" className={styles.notFoundImage} />
        <Link to="/" className={styles.backHomeLink}>Go back to Home</Link>
      
    </div>
  );
};

export default NotFound;
