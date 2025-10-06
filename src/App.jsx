import { useState } from 'react'
import { Routes, Route } from 'react-router'
import './App.css'
import Header from './components/Header'
import Landing from './pages/Landing'
import Forms from './pages/Forms'
import Pictures from './pages/Pictures'

function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Landing />}/>
        <Route path='/form' element={<Forms />}/>
        <Route path='/result' element={<Pictures />}/>
        {/* <Route path='/' element={}/> */}
      </Routes>

    </>
  )
}

export default App
