import { categories } from "../constants/categories";
import Select, { SingleValue } from "react-select";

const CheckIcon = ({
  color,
  visibility,
}: {
  color: string;
  visibility: string;
}) => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`absolute right-5 ${visibility}`}
  >
    <path
      d="M13.3334 4L6.00002 11.3333L2.66669 8"
      stroke={color}
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

interface TaskLabelProps {
  error?: string;
  value: { value: string; label: string } | null;
  onChange: (value: SingleValue<{ value: string; label: string }>) => void;
}

const TaskFormCategoryInput = ({ error, value, onChange }: TaskLabelProps) => {
  return (
    <div className="flex flex-col gap-2.5">
      <label htmlFor="category" className="font-inter-medium text-black-light">
        Category
      </label>
      <Select
        options={categories.map((c) => ({ value: c.name, label: c.name }))}
        placeholder="Select"
        value={value}
        formatOptionLabel={(option) => (
          <div className="flex items-center gap-2">
            <CheckIcon
              color="#ffffff"
              visibility={value?.value === option.value ? "visible" : "hidden"}
            />
            <span>{option.label}</span>
          </div>
        )}
        onChange={onChange}
        styles={{
          control: (base, state) => ({
            ...base,
            backgroundColor: "#ffffff",
            border: state.isFocused ? "1px solid #5967FF" : "1px solid #edefff",
            height: "56px",
            borderRadius: "10px",
          }),
          option: (base, state) => ({
            ...base,
            paddingLeft: "20px",
            backgroundColor: state.isSelected
              ? "#5967FF"
              : state.isFocused
              ? "#5967FF26"
              : "#ffffff",
            color: state.isSelected
              ? "#ffffff"
              : state.isFocused
              ? "#5967FF"
              : "#282828",
          }),
          singleValue: (base) => ({
            ...base,
            paddingLeft: "10px",
          }),
          menu: (base) => ({
            ...base,
            borderRadius: "10px",
          }),
          placeholder: (base) => ({
            ...base,
            color: "#BEC1DB",
            paddingLeft: "10px",
          }),
          input: (base) => ({
            ...base,
            color: "#282828",
            paddingLeft: "10px",
          }),
          indicatorSeparator: (base) => ({
            ...base,
            display: "none",
          }),
          dropdownIndicator: () => ({
            color: "#5967FF",
            paddingRight: "10px",
          }),
        }}
      />
      {error && (
        <p className="text-red-600 [text-shadow:_1px_1px_1px_rgb(252_39_245_/_70%)] text-lg">
          {error}
        </p>
      )}
    </div>
  );
};

export default TaskFormCategoryInput;
