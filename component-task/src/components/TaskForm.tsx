import { useState } from "react";
import TaskLabelInput from "./TaskLabelInput";

const TaskForm = (props: {setTasks: React.Dispatch<React.SetStateAction<{
    title: string;
    description: string;
    isCompleted: boolean;
}[]>>, tasks: {title: string, description: string, isCompleted: boolean}[]}) => {   
    const [task, setTask] = useState({
        title: '',
        description: '',
        isCompleted: false
    });
    const handleTitleChange = (e) => {
        setTask({
            ...task,
            title: e.target.value
        });
    }
    const handleDescriptionChange = (e) => {
        setTask({
            ...task,
            description: e.target.value
        })
    }
    const handleCompletedChange = (e) => {
        setTask({
            ...task,
            isCompleted: (e.target.checked)
        })
    }
    const createTask = (e: React.FormEvent) => {
        e.preventDefault();
        if(!task.title.trim()){
            alert("Enter Task title please")
            return;
        }
        props.setTasks(prevTasks => [...prevTasks, task])
        setTask({title: '', description: '', isCompleted: false});
    }

    return(
        <form action='post' onSubmit={createTask} className="w-2xl h-30 self-center p-4 rounded-2xl bg-purple-400 flex flex-row justify-between border-b-2 border-b-amber-600">
            <TaskLabelInput htmlFor="input-title" labelText="Title" onChangeEvent={handleTitleChange} value={task.title} />
            <TaskLabelInput htmlFor="input-description" labelText="Description" onChangeEvent={handleDescriptionChange} value={task.description} />
            <div className="flex flex-col">
                <div className="flex flex-row gap-2 items-center">
                    <label htmlFor="input-completed" className="text-amber-400 [text-shadow:_0_2px_0_rgb(0_0_0_/_40%)] text-2xl">Completed</label>
                    <input id="input-completed" checked={task.isCompleted} className="mt-2 w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 outline-0 accent-amber-400" type="checkbox" onChange={handleCompletedChange}/>
                </div>
                <button type="submit" className="border-2 rounded-md mt-5 border-amber-100 bg-amber-200 text-purple-700">Submit</button>
            </div>
        </form>
    )
}

export default TaskForm;