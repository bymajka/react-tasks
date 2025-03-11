import Task from "./Task";

interface Task{
  id: symbol,
  title: string,
  description: string,
  category: string,
  isCompleted: boolean
}
interface ToggleEvent {
  (id: symbol): void
}

const TaskList = (props: {tasks: Task[], onToggleCompletion: ToggleEvent, categoryName: string}) => {
    return (
      props.tasks.length !== 0 &&
      <div className="flex flex-col self-start items-center max-h-[75vh] overflow-y-auto overflow-x-hidden min-w-5/12 relative 
      [&::-webkit-scrollbar]:w-2
       [&::-webkit-scrollbar-track]:mt-18
       [&::-webkit-scrollbar-track]:mb-4
  [&::-webkit-scrollbar-track]:rounded-full
  [&::-webkit-scrollbar-track]:bg-gray-100
  [&::-webkit-scrollbar-thumb]:rounded-full
  [&::-webkit-scrollbar-thumb]:bg-gray-300
  dark:[&::-webkit-scrollbar-track]:bg-neutral-700
  dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500">
        <h1 className="text-amber-400 [text-shadow:_0_2px_0_rgb(0_0_0_/_40%)] text-4xl sticky top-0 bg-zinc-200 w-full text-center py-2">{props.categoryName}</h1>
        {props.tasks.map((task) => {
          return <Task id={task.id} title={task.title} description={task.description} isCompleted={task.isCompleted} onToggle={props.onToggleCompletion} categorie={task.category}/>
          })}
      </div>
    );
}

export default TaskList;