import TaskCategoryInput from "./TaskCategoryInput";
import TaskDeleteButton from "./TaskDeleteButton";

import incompleteIcon from "../../assets/icons/incomplete-icon.svg";
import completeIcon from "../../assets/icons/complete-icon.svg";

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
    <div className="flex flex-col relative items-start gap-2 bg-white w-full justify-between p-4 border-1 border-dodger-blue/10 rounded-xl">
      <h1 className="text-black-override text-sm font-inter-black">{title}</h1>
      <p
        className="text-black-override text-sm font-inter-regular overflow-auto max-w-2/3 
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
      <TaskCategoryInput id={id} categorie={categorie} />
      <button
        onClick={() => onToggle(id)}
        className={`rounded-20px ${
          !isCompleted
            ? "bg-complete-bg-green/12 text-complete-green"
            : "bg-complete-bg-orange/20 text-complete-orange"
        }  w-24 flex items-center gap-0.5 absolute right-4 font-inter-medium text-xs px-1.5 py-1 box-border cursor-pointer transition-transform duration-500 ${
          isCompleted ? "rotate-x-[360deg]" : "rotate-y-0"
        } `}
      >
        {isCompleted ? (
          <img src={incompleteIcon} alt="Incomplete icon" />
        ) : (
          <img
            src={completeIcon}
            alt="Complete icon"
            className="drop-shadow-md"
          />
        )}
        {isCompleted ? "Incomplete" : "Complete"}
      </button>
      <TaskDeleteButton index={id} />
    </div>
  );
};

export default Task;
