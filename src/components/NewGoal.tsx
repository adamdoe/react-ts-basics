import { type FormEvent, useRef } from 'react'

type NewGoalProps = {
  onAddGoal: (goal: string, summary: string) => void
}

const NewGoal = (props: NewGoalProps) => {
  const { onAddGoal } = props
  const goal = useRef<HTMLInputElement>(null)
  const summary = useRef<HTMLInputElement>(null)

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    // IF THERE ARE NAMES ON THE INPUTS
    // let formData = new FormData(event.currentTarget)
    // for (const [key, value] of formData) {
    //   console.log(`${key}: ${value}`)
    // }

    const enteredGoal = goal.current!.value
    const enteredSummary = summary.current!.value

    // Reset Form
    event.currentTarget.reset()

    // Add Goal
    onAddGoal(enteredGoal, enteredSummary)
  }

  return (
    <form onSubmit={handleSubmit}>
      <p>
        <label htmlFor='goal'>Your Goal</label>
        <input type='text' id='goal' name='goal' ref={goal} />
      </p>
      <p>
        <label htmlFor='summary'>Summary</label>
        <input type='text' id='summary' name='summary' ref={summary} />
      </p>
      <p>
        <button>Add Goal</button>
      </p>
    </form>
  )
}

export default NewGoal
