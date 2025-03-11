import { useState, createContext, useEffect } from "react";
import { TASKS } from "./constants/tasks";
import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";
import Header from "./components/header/Header";
import { categories } from "./constants/categories";

export const SearchbarContext = createContext({
  query: "",
  setQuery: (val: string) => {},
});
export const TasksContext = createContext({
  removeContext: (val: symbol) => {},
  changecategory: (val: symbol, value: string) => {},
});

const App = () => {
  const [tasks, setTasks] = useState<typeof TASKS>(() => {
    const saved = localStorage.getItem("tasks");
    const initialValue = saved
      ? JSON.parse(saved).map((task: any) => ({
          ...task,
          id: Symbol(task.title),
        }))
      : TASKS;
    return initialValue;
  });
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
      tasks.map((task) => {
        if (task.id === taskIndex) {
          return { ...task, category: value };
        }
        return task;
      })
    );
  };

  const handleRemoving = (taskIndex: symbol) => {
    const newTasks = tasks.filter((task) => task.id !== taskIndex);
    setTasks(newTasks);
  };

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

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
      <div className="flex flex-col bg-neutral-200 gap-4 min-h-dvh">
        <TaskForm setTasks={setTasks} />
        <TasksContext.Provider
          value={{
            removeContext: handleRemoving,
            changecategory: handleChangeCategory,
          }}
        >
          <div
            className="flex flex-row gap-2 overflow-auto overflow-y-hidden px-6 
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
