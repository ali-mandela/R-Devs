import style from '../styles/hero.module.css'
import image from '../assets/banner.svg'
import {Link} from 'react-router-dom'
import {motion} from 'framer-motion'
import { useRef } from 'react'

const Hero = () => {
    const myRef = useRef(null);

    console.log(myRef.current);
    function handleRef(){
        console.log(`inside the ref H1`);
        myRef.current.scrollIntoView({
            behavior: 'smooth', 
          });
    }

    return (
        <>
          <div className='w-full py-10'>
          <div style={{ backgroundImage: `url(${image})`, backgroundSize: 'cover', backgroundPosition: 'center', height: '100vh' }}>
                <h1 onClick={handleRef} ref={myRef}>🚀 Welcome to R-Devs 🚀</h1>
                <b>
                    <h4>Your go-to solution for all things tech, making your digital journey
                        seamless and hassle-free.</h4>
                </b>
                <p>
                    <span>R-dev</span>
                    is like your digital toolbox for turning into online
                    <span>realities
                    </span>. Whether you are a
                    <span>small business</span>
                    owner or a budding
                    <span>entrepreneur</span>, we craft custom websites and apps tailored just for
                    you. We are here to make the tech stuff easy, so you can focus on what you do
                    best –
                    <span>growing your business</span>.</p>
                
                    <Link to='/contact-us'>Connet Now</Link>
            </div> 
        </div>
        {/* <div
            className={style.heroContainer}>
            <div className={style.heroContent}>
                <h1>🚀 Welcome to R-Devs 🚀</h1>
                <b>
                    <h4>Your go-to solution for all things tech, making your digital journey
                        seamless and hassle-free.</h4>
                </b>
                <p>
                    <span>R-dev</span>
                    is like your digital toolbox for turning into online
                    <span>realities
                    </span>. Whether you are a
                    <span>small business</span>
                    owner or a budding
                    <span>entrepreneur</span>, we craft custom websites and apps tailored just for
                    you. We are here to make the tech stuff easy, so you can focus on what you do
                    best –
                    <span>growing your business</span>.</p>
                
                    <Link to='/contact-us'>Connet Now</Link>
            </div>
            <div className={style.heroImage}>
                <img src={image} alt='prf'/>
            </div>
        </div> */}
        </>
    )
}

export default Hero