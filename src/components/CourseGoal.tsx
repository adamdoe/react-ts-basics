import { type PropsWithChildren } from 'react'

export type CourseGoalProps = PropsWithChildren<{
  title: string
  id: number
  onDelete: (id: number) => void
}>

export const CourseGoal = ({
  title,
  children,
  id,
  onDelete
}: CourseGoalProps) => {
  return (
    <article>
      <div>
        <h2>{title}</h2>
        {children}
      </div>
      <button onClick={() => onDelete(id)}>Remove</button>
    </article>
  )
}

export default CourseGoal
