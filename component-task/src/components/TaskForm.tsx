import { SubmitHandler, useForm } from "react-hook-form";
import TaskLabelInput from "./TaskLabelInput";
import TaskCheckbox from "./TaskCheckbox";
import TaskFormCategoryInput from "./TaskFormCategoryInput";

interface Task {
    id: symbol;
    title: string;
    description: string;
    category: string;
    isCompleted: boolean;
}

interface IFormInput {
    title: string;
    description: string;
    category: string;
    isCompleted: boolean;
}

interface TaskFormProps {
    setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
}

const TaskForm = ({setTasks} : TaskFormProps) => { 
    const {register, handleSubmit} = useForm<IFormInput>();  

    const createTask: SubmitHandler<IFormInput> = (data) => {
        console.log(data);
        if(!data.title.trim()){
            alert("Enter Task title please")
            return;
        }
        const task = {id: Symbol(data.title), title: data.title, category: data.category, description: data.description, isCompleted: data.isCompleted};
        setTasks(prevTasks => [...prevTasks, task])
    }

    return(
        <form onSubmit={handleSubmit(createTask)} className="w-3xl h-30 self-center p-4 rounded-2xl bg-purple-400 flex flex-row justify-between border-b-2 border-b-amber-600 mt-10">
            <TaskLabelInput htmlFor="input-title" labelText="Title" {...register('title')} />
            <TaskLabelInput htmlFor="input-description" labelText="Description" {...register('description')} />
            <TaskFormCategoryInput {...register('category')}/>
            <div className="flex flex-col">
                <TaskCheckbox htmlFor="input-completed" labelText="Completed" {...register('isCompleted')}/>
                <button type="submit" className="border-2 rounded-md mt-5 border-amber-100 bg-amber-200 text-purple-700 hover:bg-amber-300 hover:border-amber-700">Submit</button>
            </div>
        </form>
    )
}

export default TaskForm;

