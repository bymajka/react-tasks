import Task from "./Task";

const TaskList = (props: {tasks: {title: string, description: string, isCompleted: boolean}[]}) => {
    return (
        <>
      <div className="flex flex-col justify-center items-center h-fit min-h-dvh">
        {props.tasks.map((task) => {
          return <Task title={task.title} description={task.description} isCompleted={task.isCompleted}/>
          })}
      </div>
    </>
    );
}

export default TaskList;