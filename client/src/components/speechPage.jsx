import Stopwatch from "./Stopwatch"
import TileList from "./TileList"
import useSpeechToText from "../hooks/useSpeechToText"
import { useEffect, useState } from "react"

function SpeechPage({ embedUrl, duration, setTranscript }) {
  const { listening, transcript, startListening, stopListening } =
    useSpeechToText({})

  useEffect(() => {
    startstoplistening()
  }, [])

  const [textinput, setTextinput] = useState("")
  const startstoplistening = () => {
    if (listening) {
      stopvoiceinput()
    } else {
      console.log("hello world")
      startListening()
    }
  }
  const stopvoiceinput = () => {
    setTextinput((prevous) => {
      const text =
        prevous +
        (transcript.length ? (prevous.length ? " " : "") + transcript : "")

      setTranscript(text)
      return text
    })
    stopListening()
  }

  const handleTextChange = () => {
    stopvoiceinput()
  }

  return (
    <>
      <div className="grid grid-cols-3">
        <div className="col-start-1 col-span-2">
          <iframe
            src={embedUrl}
            width="1010px"
            height="695"
            allowFullScreen="true"
            mozallowfullscreen="true"
            webkitallowfullscreen="true"
            style={{ padding: "8px", borderRadius: "20px" }}
          ></iframe>
        </div>
        <div className="col-start-3 col-span-1 p-2 flex flex-col gap-2">
          <div className="rounded-md p-2 w-full min-h-[5rem] bg-gray-300">
            <Stopwatch duration={duration} stopTranscript={handleTextChange} />
          </div>
          <TileList />
        </div>
      </div>

      <textarea
        name=""
        id=""
        cols="30"
        rows="10"
        value={
          listening
            ? textinput +
              (transcript.length
                ? (textinput.length ? " " : "") + transcript
                : "")
            : textinput
        }
        onChange={(e) => setTextinput(e.target.value)}
        disabled={listening}
        className="hidden"
      ></textarea>
    </>
  )
}

export default SpeechPage
