import { useState } from 'react'
import { Routes, Route } from 'react-router'
import './App.css'
import Header from './components/Header'
import Landing from './pages/Landing'

function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Landing />}/>
        {/* <Route path='/' element={}/>
        <Route path='/' element={}/>
        <Route path='/' element={}/>
        <Route path='/' element={}/> */}
      </Routes>

    </>
  )
}

export default App
