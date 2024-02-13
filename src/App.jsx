import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Navigation } from './Components/Navbar'
import { Routes, Route } from 'react-router'
import Home from './Pages/Home'
import Footer from './Components/Footer'
import AboutUs from './Pages/AboutUs'
import Contact from './Pages/Contact'
import Join from './Pages/Join'
import Projects from './Pages/Projects'
import ProjectDes from './Pages/ProjectDes'
function App() {

  return (
    <>
      <div>
<Navigation/>
<Routes>
<Route path='/' element={<Home/>}/>
<Route path='/aboutus' element={<AboutUs/>}/>
<Route path='/contact' element={<Contact/>}/>

<Route path='/joinus' element={<Join/>}/>
<Route path='/projects' element={<Projects/>}/>

<Route path='/project/:id' element={<ProjectDes />}/>

</Routes>
<Footer />
       </div>
    </>
  )
}

export default App
