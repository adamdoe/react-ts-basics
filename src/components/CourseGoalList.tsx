import { type FC, type ReactNode } from 'react'
import CourseGoal from './CourseGoal'
import { CourseGoal as CourseGoalType } from './../App'
import InfoBox from './InfoBox.tsx'

type CourseGoalProps = {
  goals: CourseGoalType[]
  onDelete: (id: number) => void
}

const CourseGoalList: FC<CourseGoalProps> = ({ goals, onDelete }) => {
  if (goals.length === 0) {
    return (
      <InfoBox mode='hint'>
        You have no course goals yet. Start adding some!
      </InfoBox>
    )
  }

  let warningBox: ReactNode

  if (goals.length >= 4) {
    warningBox = (
      <InfoBox mode='warning' severity='low'>
        You're collecting a lot of goals. Don't put too much on your plate.
      </InfoBox>
    )
  }

  return (
    <>
      <ul>
        {goals.map(goal => (
          <li>
            <CourseGoal title={goal.title} onDelete={onDelete} id={goal.id}>
              <p>{goal.description}</p>
            </CourseGoal>
          </li>
        ))}
      </ul>
      {warningBox}
    </>
  )
}

export default CourseGoalList
