import { useState, createContext, useEffect} from "react";
import { TASKS } from "./constants/tasks";
import TaskList from "./components/TaskList"
import TaskForm from "./components/TaskForm"

export const TasksContext = createContext({removeContext:(val:symbol) => {}, changecategory:(val:symbol, value:string) => {}});

const App = () => {
  
  const [tasks, setTasks] = useState(TASKS);
  const handleTogglecompletion = (taskIndex:symbol) => {
    setTasks(tasks => tasks.map(task => task.id === taskIndex ? {...task, isCompleted: !task.isCompleted} : task));
  }
  const handleChangeCategory = (taskIndex:symbol, value:string) => {
    setTasks(tasks => tasks.map(task => task.id === taskIndex ? {...task, category: value} : task));
  }

  useEffect(() => {
    console.log("Updated tasks:", tasks);
}, [tasks]); 
  
  const handleRemoving = (taskIndex:symbol) => {
    const newTasks = tasks.filter((task) => task.id !== taskIndex);
    setTasks(newTasks);
  }

  return (
    <div className="flex flex-col justify-center bg-neutral-200 gap-4">
      <TaskForm tasks={tasks} setTasks={setTasks} />
      <TasksContext.Provider value={{removeContext:handleRemoving, changecategory:handleChangeCategory}}>
      <TaskList tasks={tasks} onToggleCompletion={handleTogglecompletion}/>
      </TasksContext.Provider>
    </div>
  )
}

export default App
