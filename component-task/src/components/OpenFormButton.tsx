import plusIcon from "../assets/icons/plus-icon.svg";

const OpenFormButton = () => {
  return (
    <button className="flex gap-1 p-4 text-sm font-inter-semibold bg-addtask-button rounded-xl w-32 text-white self-end cursor-pointer hover:brightness-90 transition-normal duration-500">
      <img src={plusIcon} alt="plus" />
      ADD TASK
    </button>
  );
};

export default OpenFormButton;
