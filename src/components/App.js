import React from 'react'
import {Routes,Route} from "react-router-dom"
import Home from './Home'
import About from './About'
import Login from "./Login"
import Navbar from "./Navbar"

function App() {
  return (
    <>
    <Navbar/>
    <Routes>
        
        <Route exact path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path ='/login' element={<Login/>}/>
        
    </Routes>
    </>
  )
}

export default App
