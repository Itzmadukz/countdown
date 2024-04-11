import { forwardRef, useImperativeHandle, useRef } from "react"
import { createPortal } from "react-dom"

const ResultMoadal = forwardRef(function ResultModal({ targetTime, remainingTime, OnReset }, ref) {
    const dialogue = useRef()

    const userLost = remainingTime <= 0
    const formattedRemainingTime = (remainingTime / 1000).toFixed(2)
    const score = Math.round((1 - remainingTime / targetTime) * 100)


    //exposed to TimerChallenge
    useImperativeHandle(ref, () => {
        return {
            open() {
                dialogue.current.showModal()
            }
        }
    })

    return createPortal(
        <dialog ref={dialogue} className="result-modal" onClose={OnReset}>
            {userLost && <h2>You Lost</h2>}
            {!userLost && <h2>Your score: {score}</h2>}
            <p>The target time was <strong>{targetTime} seconds</strong> </p>
            <p>You stopped the timer with <strong>{formattedRemainingTime} seconds left</strong> </p>

            <form method="dialog" onSubmit={OnReset}>
                <button>Close</button>
            </form>
        </dialog>,
        document.getElementById('modal')
    )
})

export default ResultMoadal