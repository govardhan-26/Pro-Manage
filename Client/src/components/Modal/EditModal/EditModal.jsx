import "./EditModal.css";

import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { toast } from "sonner";
import plus from "../../../assets/plus.svg";

import { formatDate } from "../../../utils/InputTaskUtilities";
import { Button, PriorityHolder, TaskInput } from "../../index";
import "../InputModal/inputModal.css";
import { useParticularTodoQuery } from "../../../store/api/todoapi";
const _id = "65dfba601c91c6d8466b7706";
const EditModal = () => {
  const initialData = {
    title: "",
    date: new Date(),
    priority: "HIGH",
    tasks: [],
    label: "TO-DO",
  };
  const [formData, setFormData] = useState(initialData);
  const { data, isSuccess } = useParticularTodoQuery(_id);
  console.log(data);
  return <div></div>;
};

export { EditModal };
