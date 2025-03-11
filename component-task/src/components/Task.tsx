import TaskCategoryInput from "./TaskCategoryInput";
import TaskDeleteButton from "./TaskDeleteButton";

interface TaskProps {
  id: symbol;
  title: string;
  description: string;
  isCompleted: boolean;
  categorie: string;
  onToggle: (id: symbol) => void;
}

const Task = ({
  id,
  title,
  description,
  isCompleted,
  categorie,
  onToggle,
}: TaskProps) => {
  return (
    <div
      className={`flex flex-row items-center gap-2 bg-purple-400 w-xl rounded-md justify-between m-4 p-4 border-0 border-b-4 border-l-2 border-r-2 ${
        isCompleted ? "border-green-500" : "border-red-700"
      }`}
    >
      <div>
        <h1 className="text-amber-400 text-4xl [text-shadow:_0_2px_0_rgb(0_0_0_/_40%)]">
          {title}
        </h1>
        <p
          className="text-amber-200 text-2xl [text-shadow:_0_1px_0_rgb(0_0_0_/_40%)] overflow-auto max-w-72 
          [&::-webkit-scrollbar]:h-2
       [&::-webkit-scrollbar-track]:mt-18
       [&::-webkit-scrollbar-track]:mb-4
  [&::-webkit-scrollbar-track]:rounded-full
  [&::-webkit-scrollbar-track]:bg-gray-100
  [&::-webkit-scrollbar-thumb]:rounded-full
  [&::-webkit-scrollbar-thumb]:bg-gray-300
  dark:[&::-webkit-scrollbar-track]:bg-neutral-700
  dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500"
        >
          {description}
        </p>
      </div>
      <TaskCategoryInput id={id} categorie={categorie} />
      <div className="flex flex-col content-between gap-2 items-center">
        <button
          onClick={() => onToggle(id)}
          className="bg-amber-200 rounded-md p-1 text-purple-600 hover:bg-amber-300 hover:text-amber-800"
        >
          {isCompleted ? "uncomplete" : "complete"}
        </button>
        <TaskDeleteButton index={id} />
      </div>
    </div>
  );
};

export default Task;
