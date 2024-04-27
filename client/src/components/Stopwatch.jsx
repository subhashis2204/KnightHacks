import { useTimer } from "react-timer-hook"
import CustomButton from "./CutomButton"

function MyTimer({ expiryTimestamp, stopTranscript }) {
  const {
    totalSeconds,
    seconds,
    minutes,
    hours,
    days,
    isRunning,
    start,
    pause,
    resume,
    restart,
  } = useTimer({
    expiryTimestamp,
    onExpire: () => console.warn("onExpire called"),
  })
  let Number = Intl.NumberFormat("en-US", {
    minimumIntegerDigits: 2,
  })

  const changeListening = () => {
    stopListening(false)
  }

  return (
    <div style={{ textAlign: "center" }}>
      <div style={{ fontSize: "80px" }}>
        <span>{Number.format(minutes)}</span>:
        <span>{Number.format(seconds)}</span>
      </div>
      <p>Remaining Time</p>
      <div className="flex gap-2 items-center justify-center p-2">
        <CustomButton onClick={start} text={"Start"} />
        <CustomButton onClick={pause} text={"Pause"} />
        <CustomButton onClick={stopTranscript} text={"Stop"} />
      </div>

      {/* <p>{isRunning ? "Running" : "Not running"}</p>
      <div className="flex gap-2 items-center justify-center pt-2">
        <CustomButton onClick={start} text={"Start"} />
        <CustomButton onClick={pause} text={"Pause"} />
        <CustomButton onClick={resume} text={"Resume"} />
      </div> */}
    </div>
  )
}

function Stopwatch({ duration, stopTranscript }) {
  const time = new Date()
  time.setSeconds(time.getSeconds() + duration * 60) // 10 minutes timer
  return (
    <div>
      <MyTimer expiryTimestamp={time} stopTranscript={stopTranscript} />
    </div>
  )
}

export default Stopwatch
