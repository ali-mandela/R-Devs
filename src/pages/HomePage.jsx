import About from '../component/About'
import TechStack from '../component/TechStack'
import TheProcess from '../component/TheProcess'
import Hero from '../component/hero'
import OurWork from '../component/ourWork'
import style from '../styles/homepage.module.css'

const HomePage = () => {
  return (
    <> <div className={style.container}>  
   <Hero/> </div>
   <TechStack/>
   <div className={style.container}>  
   <TheProcess/> 
   <hr/>
   <About/></div>
   <OurWork/>
 
 
      
    </>
   
  )
}

export default HomePage