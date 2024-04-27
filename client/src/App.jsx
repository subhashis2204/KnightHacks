import "./App.css"
import "@fontsource/poppins" // Defaults to weight 400
import "@fontsource/poppins/400.css" // Specify weight
import "@fontsource/poppins/400-italic.css" // Specify weight and style
import { Routes, Route } from "react-router-dom"
import { useState } from "react"
import HomePage from "./components/HomePage"
import SpeechPage from "./components/speechPage"

function App() {
  const [embedUrl, setEmbedUrl] = useState("")
  const [duration, setDuration] = useState(0)
  const [transcript, setTranscript] = useState("")

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <HomePage setEmbedUrl={setEmbedUrl} setDuration={setDuration} />
          }
        />
        <Route
          path="/app"
          element={
            <SpeechPage
              embedUrl={embedUrl}
              duration={duration}
              setTranscript={setTranscript}
            />
          }
        />
      </Routes>
    </>
  )
}

export default App
