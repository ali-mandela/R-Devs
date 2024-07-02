import Header from "../component/header";
import Footer from "../component/Footer";

const LayoutContainer = ({children}) => {
  return (
    <div className="">
    <Header/>
        <div>
            {children}
        </div>
        
    {/* <Footer/> */}
    </div>
  )
}

export default LayoutContainer