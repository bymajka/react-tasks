import Task from "./Task";

interface Task {
  id: symbol;
  title: string;
  description: string;
  category: string;
  isCompleted: boolean;
}
interface ToggleEvent {
  (id: symbol): void;
}

const TaskList = (props: {
  tasks: Task[];
  onToggleCompletion: ToggleEvent;
  categoryName: string;
}) => {
  return (
    props.tasks.length !== 0 && (
      <div
        className="flex flex-col rounded-20px bg-white self-start px-4 pb-4 gap-3 items-center max-h-[75vh] overflow-y-auto overflow-x-hidden flex-1/4 relative
      [&::-webkit-scrollbar]:w-2
       [&::-webkit-scrollbar-track]:mt-13
       [&::-webkit-scrollbar-track]:mb-4
       [&::-webkit-scrollbar-track]:mr-6
  [&::-webkit-scrollbar-track]:rounded-full
  [&::-webkit-scrollbar-track]:bg-gray-100
  [&::-webkit-scrollbar-thumb]:rounded-full
  [&::-webkit-scrollbar-thumb]:bg-gray-300
  dark:[&::-webkit-scrollbar-track]:bg-neutral-700
  dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500"
      >
        <h1 className="text-black-override font-inter-black sticky top-0 bg-white w-full text-center pt-4 z-10">
          {props.categoryName}
          {`(${props.tasks.length})`}
        </h1>
        {props.tasks.map((task) => {
          return (
            <Task
              id={task.id}
              title={task.title}
              description={task.description}
              isCompleted={task.isCompleted}
              onToggle={props.onToggleCompletion}
              categorie={task.category}
            />
          );
        })}
      </div>
    )
  );
};

export default TaskList;
