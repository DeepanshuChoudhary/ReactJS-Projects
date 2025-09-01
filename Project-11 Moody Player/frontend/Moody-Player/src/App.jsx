import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import FaceDetector from './components/FaceExpression/FaceDetector'
import MoodSongs from './components/MoodSongs'

function App() {

  const [Songs, setSongs] = useState([
        {
            title:"test_title",
            artist:"test_artist",
            url:"test_url"
        },
        {
            title:"test_title",
            artist:"test_artist",
            url:"test_url"
        },
        {
            title:"test_title",
            artist:"test_artist",
            url:"test_url"
        },
    ]);

  return (
    <>
      <FaceDetector setSongs={setSongs} />
      <MoodSongs Songs={Songs} />
    </>
  )
}

export default App
