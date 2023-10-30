import CourseGoalList from './components/CourseGoalList.tsx'
import goalsImage from './assets/goals.jpg'
import Header from './components/Header.tsx'
import NewGoal from './components/NewGoal.tsx'
import { useState } from 'react'

export type CourseGoal = {
  title: string
  description: string
  id: number
}

const App = () => {
  const [goals, setGoals] = useState<CourseGoal[]>([])

  const handleAddGoal = (goal: string, summary: string) => {
    setGoals(prevGoals => {
      return [
        ...prevGoals,
        { title: goal, description: summary, id: Math.random() }
      ]
    })
  }

  const handleDeleteGoal = (id: number) => {
    setGoals(prevGoals => prevGoals.filter(goal => goal.id !== id))
  }

  return (
    <main>
      <Header image={{ src: goalsImage, alt: 'A list of goals' }}>
        <h1>Your Course Goals</h1>
      </Header>
      <NewGoal onAddGoal={handleAddGoal} />
      <CourseGoalList
        goals={goals}
        onDelete={handleDeleteGoal}
      ></CourseGoalList>
    </main>
  )
}

export default App
