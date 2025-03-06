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
      <div className="flex flex-col justify-center items-center h-fit">
        {props.tasks.map((task) => {
          return <Task id={task.id} title={task.title} description={task.description} isCompleted={task.isCompleted} onToggle={props.onToggleCompletion} categorie={task.category}/>
          })}
      </div>
    );
}

export default TaskList;