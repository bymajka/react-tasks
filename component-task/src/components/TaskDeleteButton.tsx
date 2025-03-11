import trashBinImage from "../assets/delete-icon.svg";
import { useContext } from "react";
import { TasksContext } from "../App";

const TaskDeleteButton = (props: { index: symbol }) => {
  const tasksContext = useContext(TasksContext);

  return (
    <button
      onClick={() => {
        tasksContext.removeContext(props.index);
      }}
    >
      <img
        src={trashBinImage}
        alt="Delete"
        className="cursor-pointer hover:invert"
      />
    </button>
  );
};

export default TaskDeleteButton;
