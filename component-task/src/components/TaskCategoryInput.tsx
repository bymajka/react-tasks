import { useContext } from "react";
import { TasksContext } from "../App";
import { categories } from "../constants/categories";

const TaskCategoryInput = (props: {
  id: symbol;
  categorie: string;
  onChangeEvent?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}) => {
  const tasksContext = useContext(TasksContext);

  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newCategory = e.target.value;
    tasksContext.changecategory(props.id, newCategory);
    props.onChangeEvent?.(e);
  };

  return (
    <form action="" className="flex flex-col gap-5">
      <label
        htmlFor={`category${props.id?.toString() ?? ""}`}
        className="text-amber-400 [text-shadow:_0_2px_0_rgb(0_0_0_/_40%)] text-2xl"
      >
        Category
      </label>
      <select
        name="category"
        id={`category${props.id?.toString() ?? ""}`}
        value={props.categorie}
        className="border-2 rounded-md border-amber-100 bg-amber-200"
        onChange={handleCategoryChange}
      >
        {categories.map((category, index) => (
          <option
            key={index}
            className="selection:bg-amber-200"
            value={category.name}
          >
            {category.name}
          </option>
        ))}
      </select>
    </form>
  );
};

export default TaskCategoryInput;
