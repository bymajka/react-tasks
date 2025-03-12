import { useState, createContext } from "react";
import { TASKS } from "./constants/tasks";
import TaskList from "./components/TaskList";
import Header from "./components/header/Header";
import { categories } from "./constants/categories";
import OpenFormButton from "./components/OpenFormButton";

export const SearchbarContext = createContext({
  query: "",
  setQuery: (val: string) => {},
});
export const TasksContext = createContext({
  removeContext: (val: symbol) => {},
  changecategory: (val: symbol, value: string) => {},
});

const App = () => {
  const [tasks, setTasks] = useState(TASKS);
  const [query, setQuery] = useState("");
  const handleTogglecompletion = (taskIndex: symbol) => {
    setTasks((tasks) =>
      tasks.map((task) =>
        task.id === taskIndex
          ? { ...task, isCompleted: !task.isCompleted }
          : task
      )
    );
  };
  const handleChangeCategory = (taskIndex: symbol, value: string) => {
    setTasks((tasks) =>
      tasks.map((task) =>
        task.id === taskIndex ? { ...task, category: value } : task
      )
    );
  };

  const handleRemoving = (taskIndex: symbol) => {
    const newTasks = tasks.filter((task) => task.id !== taskIndex);
    setTasks(newTasks);
  };

  const filteredItems = tasks.filter((task) => {
    const { id, isCompleted, ...rest } = task;
    return Object.values(rest)
      .map((value) => value.toString().toLowerCase())
      .join("")
      .includes(query.toLowerCase());
  });

  const taskListsByCategory = categories.map((category) => (
    <TaskList
      key={category.id}
      tasks={filteredItems.filter((task) => task.category === category.name)}
      onToggleCompletion={handleTogglecompletion}
      categoryName={category.name + category.emoji}
    />
  ));

  return (
    <>
      <SearchbarContext.Provider value={{ query, setQuery }}>
        <Header />
      </SearchbarContext.Provider>
      <div className="flex flex-col bg-linear-150 from-dodger-blue/50 to-white gap-4 min-h-dvh pt-8 px-40px">
        {/* <TaskForm tasks={tasks} setTasks={setTasks} /> */}
        <OpenFormButton />
        <TasksContext.Provider
          value={{
            removeContext: handleRemoving,
            changecategory: handleChangeCategory,
          }}
        >
          <div
            className="flex flex-row gap-6 overflow-auto overflow-y-hidden 
      scroll-smooth
      [&::-webkit-scrollbar]:h-2
  [&::-webkit-scrollbar-track]:rounded-full
  [&::-webkit-scrollbar-track]:bg-gray-100
  [&::-webkit-scrollbar-thumb]:rounded-full
  [&::-webkit-scrollbar-thumb]:bg-gray-300
  dark:[&::-webkit-scrollbar-track]:bg-neutral-700
  dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500"
          >
            <TaskList
              tasks={filteredItems}
              onToggleCompletion={handleTogglecompletion}
              categoryName="All Tasks 📓"
            />
            {taskListsByCategory}
          </div>
        </TasksContext.Provider>
      </div>
    </>
  );
};

export default App;
