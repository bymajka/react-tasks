interface TaskCheckboxProps {
  htmlFor: string;
  labelText: string;
  error?: string;
}
const TaskRadio = ({
  htmlFor,
  labelText,
  error,
  ...rest
}: TaskCheckboxProps) => {
  return (
    <div className="flex flex-col gap-3">
      <label className="font-inter-medium text-black-light">State</label>
      <fieldset className="flex flex-row gap-15 items-center">
        <div className="flex flex-row gap-2">
          <input
            className="size-6"
            type="radio"
            id="input-complete"
            name={labelText}
            value={"true"}
            {...rest}
          />
          <label htmlFor="input-complete font-inter-regular">Complete</label>
        </div>
        <div className="flex flex-row gap-2">
          <input
            className="size-6"
            type="radio"
            id="input-incomplete"
            name={labelText}
            value={"false"}
            {...rest}
          />
          <label htmlFor="input-incomplete font-inter-regular">
            Incomplete
          </label>
        </div>
      </fieldset>
      {error && <p className="text-error text-lg">{error}</p>}
    </div>
  );
};

export default TaskRadio;
