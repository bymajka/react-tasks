import { ChangeEventHandler } from "react";

interface TaskCheckboxProps {
    htmlFor: string;
    labelText: string;
    checked: boolean;
    onChangeEvent: ChangeEventHandler<HTMLInputElement>;
}
const TaskCheckbox = (props: TaskCheckboxProps) => {
    return (
        <div className="flex flex-row gap-2 items-center">
            <label htmlFor={props.htmlFor} className="text-amber-400 [text-shadow:_0_2px_0_rgb(0_0_0_/_40%)] text-2xl">{props.labelText}</label>
            <input id="input-completed" checked={props.checked} className="mt-2 w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 outline-0 accent-amber-400" type="checkbox" onChange={props.onChangeEvent}/>
        </div>
    )
}

export default TaskCheckbox;