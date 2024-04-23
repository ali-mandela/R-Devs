import { Route, Routes } from 'react-router-dom'
import './App.css'

import HomePage from './pages/HomePage'
import ContactusPage from './pages/ContactusPage'
import Header from './component/header'
import Footer from './component/Footer'
import NotFound from './pages/NotFound'
function App() {

  return (
    <><Header/>
    <Routes>
      <Route path='/' element={<HomePage/>} />
      <Route path='/contact-us' element={<ContactusPage/>}/>
      <Route path='/*' element={<NotFound/>}/>
    </Routes>
    <Footer/>
  
    </>
  )
}

export default App
