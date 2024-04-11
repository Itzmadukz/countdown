import { forwardRef, useImperativeHandle, useRef } from "react"

const ResultMoadal = forwardRef(function ResultModal({ result, targetTime }, ref) {
   const dialogue =  useRef()

   //exposed to TimerChallenge
    useImperativeHandle(ref, () => { 
        return { 
            open() { 
                dialogue.current.showModal()
            }
        }
    })

    return <dialog ref={dialogue} className="result-modal" open>
        <h2>You {result}</h2>
        <p>The target time was <strong>{targetTime} seconds</strong> </p>
        <p>You stopped the timer with <strong>X seconds left</strong> </p>

        <form method="dialog">
            <button>Close</button>
        </form>
    </dialog>
})

export default ResultMoadal