import { useState } from 'react'
import './App.css'
import Portfolio from './components/Portfolio'
import MouseParallelAndButtons from './components/gsap/MouseParallelAndButtons'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <MouseParallelAndButtons/>
     <Portfolio/>
    </>
  )
}

export default App
