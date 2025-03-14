import { Controller, Resolver, SubmitHandler, useForm } from "react-hook-form";
import { useRef } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import TaskLabelInput from "./TaskLabelInput";
import TaskRadio from "./TaskRadio";
import TaskFormCategoryInput from "./TaskFormCategoryInput";

import plusImage from "../../assets/icons/plus-icon.svg";

interface Task {
  id: symbol;
  title: string;
  description: string;
  category: string;
  isCompleted: boolean;
}

interface IFormInput {
  title: string;
  description: string;
  category: { value: string; label: string } | null;
  isCompleted: boolean;
}

interface TaskFormProps {
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
  showModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const schema = yup.object().shape({
  title: yup.string().min(3).max(20).required(),
  description: yup.string().max(100),
  category: yup.object().shape({
    value: yup.string().required(),
    label: yup.string().required(),
  }),
  isCompleted: yup.boolean().required(),
});

const TaskForm = ({ setTasks, showModal }: TaskFormProps) => {
  const modalRef = useRef<HTMLDivElement>(null);

  const closeModal = (e: React.MouseEvent) => {
    if (modalRef.current === e.target) {
      showModal(false);
    }
  };

  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isValid },
    reset,
  } = useForm<IFormInput>({
    resolver: yupResolver(schema) as Resolver<IFormInput>,
  });

  const createTask: SubmitHandler<IFormInput> = (data) => {
    console.log(data);
    if (!data.title.trim()) {
      alert("Enter Task title please");
      return;
    }
    const task = {
      id: Symbol(data.title),
      title: data.title,
      category: data.category?.value || "",
      description: data.description,
      isCompleted: data.isCompleted,
      isDeleted: false,
    };
    setTasks((prevTasks) => [task, ...prevTasks]);
    showModal(false);
  };

  return (
    <div
      className="fixed background-blur-sm inset-0 z-20 w-screen h-screen bg-black/40 flex items-center justify-center"
      ref={modalRef}
      onClick={closeModal}
    >
      <form
        onSubmit={handleSubmit(createTask)}
        className="flex self-center p-4 gap-2 rounded-20px bg-white flex-col"
      >
        <p className="font-inter-black text-center">Add Task</p>
        <TaskLabelInput
          htmlFor="input-title"
          labelText="Title"
          error={errors.title?.message}
          {...register("title")}
        />
        <Controller
          name="category"
          control={control}
          render={({ field: { onChange, value } }) => (
            <TaskFormCategoryInput
              error={errors.category?.value?.message}
              value={value}
              onChange={onChange}
            />
          )}
        />
        <TaskLabelInput
          htmlFor="input-description"
          labelText="Description"
          error={errors.description?.message}
          {...register("description")}
        />
        <div className="flex flex-col">
          <TaskRadio
            error={errors.isCompleted?.message}
            htmlFor="input-completed"
            labelText="State"
            {...register("isCompleted")}
          />
          <button
            type="submit"
            className={`rounded-xl ${
              isValid ? "bg-addtask-button" : "bg-grey-light"
            } flex flex-row items-center justify-center cursor-pointer text-white py-4 mt-4`}
          >
            <img src={plusImage} alt="plus" />
            ADD TASK
          </button>
        </div>
      </form>
    </div>
  );
};

export default TaskForm;
