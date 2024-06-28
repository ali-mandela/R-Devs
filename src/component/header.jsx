import { Link, useLocation } from 'react-router-dom' 
import { motion } from 'framer-motion';

const Header = () => { 
    const location = useLocation();
    return (
            <motion.div layout 
            initialValue={{opacity:0.5}}
            animate={{ opacity: 1}}
            transition={{
              opacity: { ease: "linear" },
              layout: { duration: 0.3 }
            }} style={{ borderRadius: 5}} className='bg-slate-400' >
                <div>
                    <Link  to='/'><h1 >R-DEV  </h1></Link>
                    <p><>Reliable, Responsive, Resilient</></p>
                </div>
                <div > 
                   <p> <Link to='/join-us'  className={location.pathname === '/join-us' ? 'activeLink' : ''} >Join us</Link></p>
                   <p> <Link to='/contact-us' className={location.pathname === '/contact-us' ?  'activeLink' : ''}>Contact us</Link></p>
                </div>
              
            </motion.div>
    )
}

export default Header