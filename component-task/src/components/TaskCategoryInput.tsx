const TaskCategoryInput = (props: {id: number, categories: string[]}) =>{
    return(
        <form action="" className="flex flex-col gap-4">
            <label htmlFor={`category${props.id}`} className="text-amber-400 [text-shadow:_0_2px_0_rgb(0_0_0_/_40%)] text-2xl">Category</label>
            <select name="category" id={`category${props.id}`} className="border-2 rounded-md border-amber-100 bg-amber-200">
                {props.categories.map(category => {
                    return (<option className="selection:bg-amber-200">{category}</option>)
                })}
            </select>
        </form>
    )
}

export default TaskCategoryInput;