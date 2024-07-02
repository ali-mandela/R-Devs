import LayoutContainer from '../layouts/LayoutContainer'
import HeroSection from '../component/HeroSection' 
import P2P from '../component/P2P'
import StackComponent from '../component/StackComponent'
import RdevData from '../component/RdevData'

const HomePage = () => {

    return (
        <LayoutContainer>
            <HeroSection/> 
            <P2P/>
            <StackComponent/>
            <RdevData/>
        </LayoutContainer>
    )
}
export default HomePage