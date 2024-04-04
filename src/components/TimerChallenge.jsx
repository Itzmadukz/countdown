export default function TimerChallenger({ title, targetTime }) {
    return (
        <section className="challenge">
            <h2>{title}</h2>
            <p className="challenger-time">
                {targetTime} second{targetTime > 1 ? 's' : ''}
            </p>
            <p>
                <button>Start Challenge </button>
            </p>
            <p className="">Time is running ... / Timer inactive</p>
        </section>

    )
}