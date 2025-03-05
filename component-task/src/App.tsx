import TaskForm from "./components/TaskForm"
import { useState, createContext} from "react";
import { TASKS } from "./constants/tasks";
import TaskList from "./components/TaskList"

export const TasksContext = createContext((val:symbol) => {});

const App = () => {
  
  const [tasks, setTasks] = useState(TASKS);
  const handleTogglecompletion = (taskIndex:Symbol) => {
    setTasks(tasks => tasks.map(task => task.id === taskIndex ? {...task, isCompleted: !task.isCompleted} : task));
  }
  const handleRemoving = (taskIndex:Symbol) => {
    const newTasks = tasks.filter((task) => task.id !== taskIndex);
    setTasks(newTasks);
  }

  return (
    <div className="flex flex-row flex-1/2 justify-center bg-neutral-200 gap-4">
      <TaskForm tasks={tasks} setTasks={setTasks} />
      <TasksContext.Provider value={handleRemoving}>
      <TaskList tasks={tasks} onToggleCompletion={handleTogglecompletion}/>
      </TasksContext.Provider>
    </div>
  )
}

export default App
