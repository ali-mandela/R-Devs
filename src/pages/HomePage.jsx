import LayoutContainer from '../layouts/LayoutContainer'
import HeroSection from '../component/HeroSection' 
import P2P from '../component/P2P'
import StackComponent from '../component/StackComponent'
import RdevData from '../component/RdevData'
import AboutAndWhy from '../component/AWhy'

const HomePage = () => {

    return (
        <LayoutContainer>
            <HeroSection/> 
            <P2P/>
            <StackComponent/>
            <RdevData/>
            <AboutAndWhy/>
        </LayoutContainer>
    )
}
export default HomePage