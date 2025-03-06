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

const TaskList = (props: {tasks: Task[], onToggleCompletion: ToggleEvent}) => {
    return (
      <div className="flex flex-col self-start items-center h-fit min-w-xl">
        <h1 className="text-amber-400 [text-shadow:_0_2px_0_rgb(0_0_0_/_40%)] text-4xl">All tasks</h1>
        {props.tasks.map((task) => {
          return <Task id={task.id} title={task.title} description={task.description} isCompleted={task.isCompleted} onToggle={props.onToggleCompletion} categorie={task.category}/>
          })}
      </div>
    );
}

export default TaskList;