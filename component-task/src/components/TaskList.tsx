// import { categories } from "../constants/categories";
import Task from "./Task";

const TaskList = (props: {tasks: {id: symbol, title: string, description: string, category: string, isCompleted: boolean}[], onToggleCompletion: (taskIndex:symbol) => void}) => {
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
          return <Task id={task.id} title={task.title} description={task.description} isCompleted={task.isCompleted} iterationValue={rangeIterator.next().value} onToggle={props.onToggleCompletion} categorie={task.category}/>
          })}
      </div>
    </>
    );
}

export default TaskList;