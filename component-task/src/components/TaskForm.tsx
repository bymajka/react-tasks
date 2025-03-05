import { useState } from "react";
import TaskLabelInput from "./TaskLabelInput";
import TaskCheckbox from "./TaskCheckbox";

interface Task {
    id: symbol;
    title: string;
    description: string;
    isCompleted: boolean;
}
interface TaskFormProps {
    setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
}

const TaskForm = ({setTasks} : TaskFormProps) => {   
    const [task, setTask] = useState<Task>({
        id: Symbol(),
        title: '',
        description: '',
        isCompleted: false
    });
    const handleChange = (key: keyof Task) => (e: React.ChangeEvent<HTMLInputElement>) => {
        setTask({
            ...task,
            [key]: key === 'isCompleted' ? e.target.checked : e.target.value
        });
    }
    const handleTitleChange = handleChange('title');
    const handleDescriptionChange = handleChange('description');
    const handleCompletedChange = handleChange('isCompleted');

    const createTask = (e: React.FormEvent) => {
        e.preventDefault();
        if(!task.title.trim()){
            alert("Enter Task title please")
            return;
        }
        setTasks(prevTasks => [...prevTasks, task])
        setTask({id: Symbol(task.title), title: '', description: '', isCompleted: false});
    }

    return(
        <form action='post' onSubmit={createTask} className="w-2xl h-30 self-center p-4 rounded-2xl bg-purple-400 flex flex-row justify-between border-b-2 border-b-amber-600 mt-10">
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
