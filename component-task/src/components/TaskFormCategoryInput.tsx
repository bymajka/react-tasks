import { categories } from "../constants/categories";

const TaskFormCategoryInput = ({...reg}) => {
    return (
        <form action="" className="flex flex-col gap-5">
            <label
                htmlFor="category"
                className="text-amber-400 [text-shadow:_0_2px_0_rgb(0_0_0_/_40%)] text-2xl"
            >
                Category
            </label>
            <select {...reg} 
                name="category"
                id="category"
                className="border-2 rounded-md border-amber-100 bg-amber-200"
            >
                {categories.map((category, index) => (
                    <option key={index} className="selection:bg-amber-200" value={category.name}>
                        {category.name}
                    </option>
                ))}
            </select>
        </form>
    );
}

export default TaskFormCategoryInput;