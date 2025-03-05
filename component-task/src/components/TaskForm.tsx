import { useState } from "react";
import TaskLabelInput from "./TaskLabelInput";
import TaskCheckbox from "./TaskCheckbox";

const TaskForm = (props: {setTasks: React.Dispatch<React.SetStateAction<{
    id: symbol;
    title: string;
    description: string;
    isCompleted: boolean;
}[]>>, tasks: {title: string, description: string, isCompleted: boolean}[]}) => {   
    const [task, setTask] = useState({
        id: Symbol(),
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
        setTask({id: Symbol(task.title), title: '', description: '', isCompleted: false});
    }

    return(
        <form action='post' onSubmit={createTask} className="w-2xl h-30 self-center p-4 rounded-2xl bg-purple-400 flex flex-row justify-between border-b-2 border-b-amber-600">
            <TaskLabelInput htmlFor="input-title" labelText="Title" onChangeEvent={handleTitleChange} value={task.title} />
            <TaskLabelInput htmlFor="input-description" labelText="Description" onChangeEvent={handleDescriptionChange} value={task.description} />
            <div className="flex flex-col">
                <TaskCheckbox htmlFor="input-completed" labelText="Completed" checked={task.isCompleted} onChangeEvent={handleCompletedChange} />
                <button type="submit" className="border-2 rounded-md mt-5 border-amber-100 bg-amber-200 text-purple-700 hover:bg-amber-300 hover:border-amber-700">Submit</button>
            </div>
        </form>
    )
}

export default TaskForm;