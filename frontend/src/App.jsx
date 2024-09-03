
import Home from './components/home/Home'
import Courses from './components/courses/Courses'
import { Route, Routes } from 'react-router-dom'
import Signup from './components/Signup'
import Contacts from './components/contact/Contacts'
import Login from './components/Login'
import About from './components/about/About'
import { Toaster } from 'react-hot-toast'
function App() {
  return (
    <>
    {/* <Home/> */}
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/course' element={<Courses/>}/>
      <Route path='/contact' element={<Contacts/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/about' element={<About/>}/>

      <Route path='/signup' element={<Signup/>}/>
      </Routes>
      <Toaster />
    </>
  )
}

export default App
