import { Route, Routes } from 'react-router-dom'
import './App.css'

import HomePage from './pages/HomePage'
import ContactusPage from './pages/ContactusPage' 
import NotFound from './pages/NotFound'
import JoinusPage from './pages/JoinusPage'
import { Toaster } from 'react-hot-toast'  
import HirePage from './pages/HirePage'
function App() {

  return (
    <> 
    <Routes>
      <Route path='/' element={<HomePage/>} />
      <Route path='/contact-us' element={<ContactusPage/>}/>
      <Route path='/career' element={<JoinusPage/>}/>
      <Route path='/hire-us' element={<HirePage/>}/> 
      <Route path='/*' element={<NotFound/>}/>
    </Routes>
    <Toaster/>
    </>
  )
}
 

export default App
