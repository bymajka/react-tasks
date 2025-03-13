interface TaskLabelProps {
  htmlFor: string;
  labelText: string;
  error?: string;
}

const TaskLabelInput = ({
  htmlFor,
  labelText,
  error,
  ...rest
}: TaskLabelProps) => {
  return (
    <div className="flex flex-col gap-2.5">
      <label htmlFor={htmlFor} className="font-inter-medium text-black-light">
        {labelText}
      </label>
      <input
        id={htmlFor}
        {...rest}
        type="text"
        placeholder="Type here"
        className="border-2 rounded-10px w-[528px] min-h-14 border-searchbar-border p-4 bg-white outline-addtask-button caret-addtask-button placeholder:text-placeholder font-inter-regular text-black-override"
      />
      <p className="text-red-600 [text-shadow:_1px_1px_1px_rgb(252_39_245_/_70%)] text-lg">
        {error}
      </p>
    </div>
  );
};

export default TaskLabelInput;
