import { TASKS } from "./constants/tasks";
import { useState } from "react";
import Header from "./components/header/Header";
import TaskForm from "./components/TaskForm"
import TaskList from "./components/TaskList"

const App = () => {

  const [tasks, setTasks] = useState(TASKS);

  return (
    <>
    <Header />
    <div className="flex flex-row flex-1/2 justify-center bg-neutral-200 gap-4">
      <TaskForm tasks={tasks} setTasks={setTasks} />
      <TaskList tasks={tasks} />
    </div>
    </>
  )
}

export default App
