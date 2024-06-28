import Header from "../component/header";
import Footer from "../component/Footer";

const LayoutContainer = ({children}) => {
  return (
    <div className="p-2 md:px-12 md:py-4">
    <Header/>
        <div>
            {children}
        </div>
        
    <Footer/>
    </div>
  )
}

export default LayoutContainer