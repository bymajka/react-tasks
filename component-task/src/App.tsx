import { useState, createContext } from "react";
import { TASKS } from "./constants/tasks";

import { categories } from "./constants/categories";
import TaskList from "./components/TaskComponents/TaskList";
import Header from "./components/header/Header";
import OpenFormButton from "./components/OpenFormButton";
import TaskForm from "./components/TaskFormComponents/TaskForm";

export const AppContext = createContext({
  query: "",
  setQuery: (val: string) => {},
  removeContext: (val: symbol) => {},
  changecategory: (val: symbol, value: string) => {},
});

const App = () => {
  const [tasks, setTasks] = useState(TASKS);
  const [query, setQuery] = useState("");
  const [showModal, setShowModal] = useState(false);
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
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskIndex ? { ...task, category: value } : task
      )
    );
  };

  const handleRemoving = (taskIndex: symbol) => {
    const newTasks = tasks.filter((task) => task.id !== taskIndex);
    setTasks(newTasks);
  };

  const filteredTasks = tasks.filter((task) => {
    const { id, isCompleted, ...rest } = task;
    return Object.values(rest)
      .map((value) => value.toString().toLowerCase())
      .join("")
      .includes(query.toLowerCase());
  });

  const taskListsByCategory = categories.map((category) => (
    <TaskList
      key={category.id}
      tasks={filteredTasks.filter((task) => task.category === category.name)}
      onToggleCompletion={handleTogglecompletion}
      categoryName={category.name + category.emoji}
    />
  ));

  return (
    <AppContext.Provider
      value={{
        query,
        setQuery,
        removeContext: handleRemoving,
        changecategory: handleChangeCategory,
      }}
    >
      <Header />
      <div className="flex flex-col bg-linear-150 from-dodger-blue/50 to-white gap-4 h-[calc(100vh-60px)] pt-8 px-40px">
        <OpenFormButton showModal={setShowModal} />
        {showModal && <TaskForm setTasks={setTasks} showModal={setShowModal} />}
        <div className="flex flex-row gap-6 overflow-auto overflow-y-hidden scroll-smooth [&::-webkit-scrollbar]:h-2 [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-track]:bg-neutral-700 dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500">
          <TaskList
            tasks={filteredTasks}
            onToggleCompletion={handleTogglecompletion}
            categoryName="All Tasks 📓"
          />
          {taskListsByCategory}
        </div>
      </div>
    </AppContext.Provider>
  );
};

export default App;
