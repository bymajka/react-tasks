import { useState } from "react";

const Task = (props: {title: string; description: string; isCompleted: boolean}) => {

    const [completedState, setCompleated] = useState(props.isCompleted);

    const handleClick = () => {
        setCompleated(compleatedState => !compleatedState);
    }



    return(
    <>
        <div className={`flex flex-row items-center gap-1 bg-purple-400 min-w-96 rounded-md justify-between m-4 p-4 border-0 border-b-4 border-l-2 border-r-2 ${completedState ? 'border-green-500' : 'border-red-700'}`}>
            <div>
                <h1 className="text-amber-400 text-4xl [text-shadow:_0_2px_0_rgb(0_0_0_/_40%)]">{props.title}</h1>
                <p className="text-amber-200 text-2xl [text-shadow:_0_1px_0_rgb(0_0_0_/_40%)]">{props.description}</p>
            </div>
            <button onClick={handleClick} className="bg-amber-200 rounded-md p-1 text-purple-600 hover:bg-amber-300 hover:text-amber-800">{completedState ? 'uncomplete' : 'complete'}</button>
        </div>
    </>
    );
}

export default Task;