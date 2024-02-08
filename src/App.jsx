import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Navigation } from './Components/Navbar'
import { Routes, Route } from 'react-router'
import Home from './Pages/Home'

function App() {

  return (
    <>
      <div>
<Navigation/>
<Routes>
<Route path='/' element={<Home/>}/>
{/* <Route path='/about' element={<About/>}/> */}
</Routes>
       </div>
    </>
  )
}

export default App
