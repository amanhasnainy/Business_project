import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from "./compomnents/nav";
import Hero from "./compomnents/hero";
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
         <div>
            <Navbar />
            <Hero />
        </div>
    </>
  )
}

export default App
