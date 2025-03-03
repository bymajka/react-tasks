import { useState } from "react";
import { TASKS } from "../constants/tasks";
import Task from "./Task";

const TaskList = () => {

    const [tasks, setTasks] = useState(TASKS);

    return (
        <>
      <div className="flex flex-col justify-center items-center h-dvh bg-zinc-300">
        {tasks.map((task) => {
          return <Task title={task.title} description={task.description} isCompleted={task.isCompleated}/>
          })}
      </div>
    </>
    );
}

export default TaskList;