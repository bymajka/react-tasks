import { useState } from "react";

const Task = (props: {title: string; description: string; isCompleated: boolean}) => {

    const [compleatedState, setCompleated] = useState(props.isCompleated);

    const handleClick = () => {
        console.log('u clicked');
        setCompleated(compleatedState => !compleatedState)
    }

    return(
    <>
        <div className="flex flex-row items-center gap-1 bg-purple-400 min-w-96 rounded-md justify-between m-4 p-4" onClick={handleClick}>
            <div>
                <h1 className="text-amber-400 text-4xl [text-shadow:_0_2px_0_rgb(0_0_0_/_40%)]">{props.title}</h1>
                <p className="text-amber-200 text-2xl [text-shadow:_0_1px_0_rgb(0_0_0_/_40%)]">{props.description}</p>
            </div>
            {compleatedState && <span>✅</span>}
        </div>
    </>
    );
}

export default Task;