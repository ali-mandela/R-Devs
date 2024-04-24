import { Route, Routes } from 'react-router-dom'
import './App.css'

import HomePage from './pages/HomePage'
import ContactusPage from './pages/ContactusPage'
import Header from './component/header'
import Footer from './component/Footer'
import NotFound from './pages/NotFound'
import JoinusPage from './pages/JoinusPage'
import { Toaster } from 'react-hot-toast'
function App() {

  return (
    <><Header/>
    <Routes>
      <Route path='/' element={<HomePage/>} />
      <Route path='/contact-us' element={<ContactusPage/>}/>
      <Route path='/join-us' element={<JoinusPage/>}/>
      <Route path='/*' element={<NotFound/>}/>
    </Routes>
    <Footer/>
    <Toaster/>
    </>
  )
}

export default App
