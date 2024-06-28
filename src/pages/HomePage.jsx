import About from '../component/About'
import NewsLetter from '../component/NewsLetter'
import TechStack from '../component/TechStack'
import TheProcess from '../component/TheProcess'
import Hero from '../component/hero'
import OurWork from '../component/ourWork'
import LayoutContainer from '../layouts/LayoutContainer'
import style from '../styles/homepage.module.css'

const HomePage = () => {
    return ( <LayoutContainer>
        <Hero/>

        <NewsLetter/>
        <TechStack/>

        <TheProcess/>
        <hr/>
        <About/>

        <OurWork/>
    </LayoutContainer> 
   
  )
}

export default HomePage