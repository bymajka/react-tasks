import { useContext } from "react";
import { AppContext } from "../../App";

import trashBinImage from "../../assets/icons/delete.svg";

const TaskDeleteButton = (props: { index: symbol }) => {
  const appContext = useContext(AppContext);
  const handleDelete = () => {
    appContext.removeContext(props.index);
  };
  return (
    <button onClick={handleDelete} className="absolute right-4 bottom-5">
      <img
        src={trashBinImage}
        alt="Delete"
        className="cursor-pointer hover:drop-shadow-sm"
      />
    </button>
  );
};

export default TaskDeleteButton;
