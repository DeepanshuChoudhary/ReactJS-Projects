import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import FaceDetector from './components/FaceExpression/FaceDetector'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <FaceDetector />
    </>
  )
}

export default App
