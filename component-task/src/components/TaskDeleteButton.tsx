import trashBinImage from "../assets/icons/delete.svg";
import { useContext } from "react";
import { TasksContext } from "../App";

const TaskDeleteButton = (props: { index: symbol }) => {
  const tasksContext = useContext(TasksContext);

  return (
    <button
      onClick={() => {
        tasksContext.removeContext(props.index);
      }}
      className="absolute right-4 bottom-5"
    >
      <img
        src={trashBinImage}
        alt="Delete"
        className="cursor-pointer hover:drop-shadow-sm"
      />
    </button>
  );
};

export default TaskDeleteButton;
