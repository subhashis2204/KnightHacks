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

  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage setUrl={setEmbedUrl} />} />
        <Route path="/app" element={<SpeechPage />} />
      </Routes>
    </>
  )
}

export default App
