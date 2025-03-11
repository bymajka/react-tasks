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
    <div className="flex flex-col">
      <label
        htmlFor={htmlFor}
        className="text-amber-400 [text-shadow:_0_2px_0_rgb(0_0_0_/_40%)] text-2xl"
      >
        {labelText}
      </label>
      <input
        id={htmlFor}
        {...rest}
        type="text"
        className="border-2 rounded-md mt-5 border-amber-100 bg-amber-200 text-purple-700 pl-2 outline-amber-800"
      />
      <p className="text-red-600 [text-shadow:_1px_1px_1px_rgb(252_39_245_/_70%)] text-lg pt-2">
        {error}
      </p>
    </div>
  );
};

export default TaskLabelInput;
