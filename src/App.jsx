import { useState } from 'react'
import { Routes, Route } from 'react-router'
import './App.css'
import Header from './components/Header'
import Landing from './pages/Landing'
import Form from './components/Form'

function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Landing />}/>
        <Route path='/form/name' element={<Form question={'Introduce Yourself'} navto={"/form/location"}/>}/>
        <Route path='/form/location' element={<Form question={'Where are you from?'} navto={""}/>}/>
        {/* <Route path='/' element={}/> */}
      </Routes>

    </>
  )
}

export default App
