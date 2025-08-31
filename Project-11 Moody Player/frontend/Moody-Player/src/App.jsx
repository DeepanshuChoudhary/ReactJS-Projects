import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import FaceDetector from './components/FaceExpression/FaceDetector'
import MoodSongs from './components/MoodSongs'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <FaceDetector />
      <MoodSongs />
    </>
  )
}

export default App
