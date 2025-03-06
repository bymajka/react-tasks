import { useState, createContext} from "react";
import { TASKS } from "./constants/tasks";
import TaskList from "./components/TaskList"
import TaskForm from "./components/TaskForm"
import Header from "./components/header/Header";

export const SearchbarContext = createContext({query: '', setQuery: (val:string) => {}});
export const TasksContext = createContext({removeContext:(val:symbol) => {}, changecategory:(val:symbol, value:string) => {}});

const App = () => {
  
  const [tasks, setTasks] = useState(TASKS);
  const [query, setQuery] = useState('');
  const handleTogglecompletion = (taskIndex:symbol) => {
    setTasks(tasks => tasks.map(task => task.id === taskIndex ? {...task, isCompleted: !task.isCompleted} : task));
  }
  const handleChangeCategory = (taskIndex:symbol, value:string) => {
    setTasks(tasks => tasks.map(task => task.id === taskIndex ? {...task, category: value} : task));
  }
  
  const handleRemoving = (taskIndex:symbol) => {
    const newTasks = tasks.filter((task) => task.id !== taskIndex);
    setTasks(newTasks);
  }

  const filteredItems = tasks.filter(task => {
    const { id, isCompleted, ...rest } = task;
    return Object.values(rest).map(value => value.toString().toLowerCase()).join('').includes(query.toLowerCase());
  })

  return (
    <>
    <SearchbarContext.Provider value={{query, setQuery}}>
    <Header />
    </SearchbarContext.Provider>
    <div className="flex flex-col bg-neutral-200 gap-4 min-h-dvh">
      <TaskForm tasks={tasks} setTasks={setTasks} />
      <TasksContext.Provider value={{removeContext:handleRemoving, changecategory:handleChangeCategory}}>
      <TaskList tasks={filteredItems} onToggleCompletion={handleTogglecompletion}/>
      </TasksContext.Provider>
    </div>
    </>
  )
}

export default App
