import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/Navbar'
import WordList from './Components/WordList'

function App() {
  

  return (
    <>
      <Navbar/>
      <div >
        <WordList/>
      </div>

    </>
  )
}

export default App
