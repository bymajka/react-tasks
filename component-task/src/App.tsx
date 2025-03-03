import Task from './components/Task'
import {TASKS} from "../src/constants/tasks.ts"

const App = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center h-dvh bg-zinc-300">
        {TASKS.map((task) => {
          return <Task title={task.title} description={task.description} isCompleated={task.isCompleated}/>
          })}
      </div>
    </>
  )
}

export default App
