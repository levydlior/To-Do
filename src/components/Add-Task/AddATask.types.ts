import { priorityType } from "../TaskItem/Taskitem.types";

export type AddATaskType = {
  title: string;
  due_date: string;
  priority: priorityType;
  completed: boolean;
};
