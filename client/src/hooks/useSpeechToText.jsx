import React, { useEffect, useRef, useState } from "react"

function useSpeechToText(options) {
  const [listening, setListening] = useState(false)
  const [transcript, setTranscript] = useState("")
  const recognitionRef = useRef(null)

  useEffect(() => {
    if (!("webkitSpeechRecognition" in window)) {
      console.log("Speech recognition is not supported")
      return
    }

    recognitionRef.current = new window.webkitSpeechRecognition()
    const recognition = recognitionRef.current

    recognition.interimResults = options.interimResults || true
    recognition.lang = options.lang || "en-US"
    recognition.continuous = true

    if ("webkitSpeechRecognition" in window) {
      const grammer =
        "#JSGF V1.0; grammar punctuation; public <punc> = . | , | ? | ! | : | ; | - | ( | ) | [ | ] | { | } | \" | ' ;"
      const speechRecognitionList = new window.webkitSpeechGrammarList()
      speechRecognitionList.addFromString(grammer, 1)
      recognition.grammars = speechRecognitionList
    }

    recognition.onresult = (event) => {
      let finalTranscript = ""

      for (let i = 0; i < event.results.length; i++) {
        finalTranscript += event.results[i][0].transcript
      }

      setTranscript(finalTranscript)
    }

    recognition.onerror = (event) => {
      console.log("Error occurred in recognition: " + event.error)
    }

    recognition.onend = () => {
      setListening(false)
      setTranscript("")
    }

    return () => {
      recognition.stop()
    }
  }, [])

  const startListening = () => {
    if (recognitionRef.current && !listening) {
      recognitionRef.current.start()
      setListening(true)
    }
  }
  const stopListening = () => {
    if (recognitionRef.current && listening) {
      recognitionRef.current.stop()
      setListening(false)
    }
  }
  return {
    listening,
    transcript,
    startListening,
    stopListening,
  }
}

export default useSpeechToText
