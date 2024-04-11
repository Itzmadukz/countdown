import { useRef, useState } from "react"
import ResultModal from "./ResultModal"

export default function TimerChallenger({ title, targetTime }) {
    const timer = useRef()
    const dialogue = useRef()

    const [timerRemaining, setTimeRemaining] = useState(targetTime * 1000)

    const timerActive = timerRemaining > 0 && timerRemaining < targetTime * 1000

    if (timerRemaining <= 0) {
        clearInterval(timer.current)
        dialogue.current.open()
    }


    function handleStart() {
        timer.current = setInterval(() => {
            setTimeRemaining(prev => prev - 10)
        }, 10)
    }

    function handeReset() {
        setTimeRemaining(targetTime * 1000)

    }

    function handleStop() {
        dialogue.current.open()
        clearInterval(timer.current)
    }

    return (
        <>
            {timerExpired && <ResultModal
                ref={dialogue}
                targetTime={targetTime}
                remainingTime={timerRemaining}
                onReset = {handeReset}
            />}
            <section className="challenge">
                <h2>{title}</h2>
                {timerExpired && <p>You lost</p>}
                <p className="challenger-time">
                    {targetTime} second{targetTime > 1 ? 's' : ''}
                </p>
                <p>
                    <button onClick={timerActive ? handleStop : handleStart}>
                        {timerActive ? 'Start' : 'Stop'}</button>
                </p>
                <p className={timerActive ? 'active' : undefined}>
                    {timerStarted ? 'Time is running' : 'Timer incactive'}</p>
            </section>
        </>
    )
}