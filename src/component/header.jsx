import '../styles/header.css'
import {useState} from 'react'

const Header = () => {
    const [isMenuOpen,
        setIsMenuOpen] = useState(false)

    return (
        <div className="container">
            <div className='header'>
                <div>
                    <h1 >R-DEV {isMenuOpen && "p"}</h1>
                    <p><>Reliable, Responsive, Resilient</></p>
                </div>
            
            <div>
                <div onClick={() => setIsMenuOpen(!isMenuOpen)} className="lds-ripple">
                    <div></div>
                    <div></div>
                </div>
            </div> 
            </div>
        </div>
    )
}

export default Header