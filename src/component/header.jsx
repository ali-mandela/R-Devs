import { Link, useLocation } from 'react-router-dom'
import style from '../styles/layout.module.css'

const Header = () => { 
    const location = useLocation();
    return (
            <div className={style.header}>
                <div>
                    <Link  to='/'><h1 >R-DEV  </h1></Link>
                    <p><>Reliable, Responsive, Resilient</></p>
                </div>
                <div className={style.links}> 
                   <p> <Link to='/join-us'  className={location.pathname === '/join-us' ? 'activeLink' : ''} >Join us</Link></p>
                   <p> <Link to='/contact-us' className={location.pathname === '/contact-us' ?  'activeLink' : ''}>Contact us</Link></p>
                </div>
              
            </div>
    )
}

export default Header