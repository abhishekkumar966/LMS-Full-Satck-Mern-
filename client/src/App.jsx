import React from 'react'
import {Routes,Route} from "react-router-dom"
import Home from '../src/Pages/Home.jsx'
const App = () => {
  return (
   <>
  <Routes>
    <Route path='/' element={<Home/>}/>
  </Routes>

  
   </>
  )
}

export default App