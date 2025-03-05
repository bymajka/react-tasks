import TaskCategoryInput from "./TaskCategoryInput";
import { categories } from "../constants/categories";
import TaskDeleteButton from "./TaskDeleteButton";

const Task = (props: {id: symbol, title: string; description: string; isCompleted: boolean; iterationValue: number; onToggle: (id: symbol) => void}) => {
    return(
        <div className={`flex flex-row items-center gap-2 bg-purple-400 min-w-xl rounded-md justify-between m-4 p-4 border-0 border-b-4 border-l-2 border-r-2 ${props.isCompleted ? 'border-green-500' : 'border-red-700'}`}>
            <div>
                <h1 className="text-amber-400 text-4xl [text-shadow:_0_2px_0_rgb(0_0_0_/_40%)]">{props.title}</h1>
                <p className="text-amber-200 text-2xl [text-shadow:_0_1px_0_rgb(0_0_0_/_40%)]">{props.description}</p>
            </div>
            <TaskCategoryInput id={props.iterationValue} categories={categories.map(category => category.name)} />
            <div className="flex flex-col content-between gap-2 items-center">
                <button onClick={() => props.onToggle(props.id)} className="bg-amber-200 rounded-md p-1 text-purple-600 hover:bg-amber-300 hover:text-amber-800">{props.isCompleted ? 'uncomplete' : 'complete'}</button>
                <TaskDeleteButton index={props.id}/>
            </div>
        </div>
    );
}

export default Task;