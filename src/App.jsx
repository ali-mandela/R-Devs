import { Route, Routes } from 'react-router-dom'
import './App.css'

import HomePage from './pages/HomePage'
import ContactusPage from './pages/ContactusPage' 
import NotFound from './pages/NotFound'
import JoinusPage from './pages/JoinusPage'
import { Toaster } from 'react-hot-toast'
function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={<HomePage/>} />
      <Route path='/contact-us' element={<ContactusPage/>}/>
      <Route path='/join-us' element={<JoinusPage/>}/>
      <Route path='/*' element={<NotFound/>}/>
    </Routes>
    <Toaster/>
    </>
  )
}

export default App
