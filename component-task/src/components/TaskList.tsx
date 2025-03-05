import Task from "./Task";

const TaskList = (props: {tasks: {id: Symbol, title: string, description: string, isCompleted: boolean}[], onToggleCompletion: (taskIndex:Symbol) => void}) => {
function* makeRangeIterator(start = 0, end = Infinity, step = 1) {
    let iterationCount = 0;
    for (let i = start; i < end; i += step) {
      iterationCount++;
      yield i;
    }
    return iterationCount;}
let rangeIterator = makeRangeIterator();

    return (
        <>
      <div className="flex flex-col justify-center items-center h-fit min-h-dvh">
        {props.tasks.map((task) => {
          return <Task id={task.id} title={task.title} description={task.description} isCompleted={task.isCompleted} iterationValue={rangeIterator.next().value} onToggle={props.onToggleCompletion}/>
          })}
      </div>
    </>
    );
}

export default TaskList;