import { ChangeEventHandler} from "react";

const TaskLabelInput = (props: {htmlFor: string, labelText: string, onChangeEvent: ChangeEventHandler<HTMLInputElement>, value: any}) => {
    return(
    <div className="flex flex-col">
                <label htmlFor={props.htmlFor} className="text-amber-400 [text-shadow:_0_2px_0_rgb(0_0_0_/_40%)] text-2xl">{props.labelText}</label>
                <input id={props.htmlFor} type="text" onChange={props.onChangeEvent} value={props.value} className="border-2 rounded-md mt-5 border-amber-100 bg-amber-200 text-purple-700 pl-2 outline-amber-800"/>
            </div>
            )
}

export default TaskLabelInput;