/* eslint-disable no-unused-vars */
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from "./Components/Navbar"
import TextForm from './Components/TextForm'
import About from './Components/About'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar title={"NOTE"} />
      <TextForm textHeading="Enter Your Text"></TextForm>

    </>
  )
}

export default App
