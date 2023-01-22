import { priorityType } from "./priority.types";

export type taskType = {
  id?: number;
  title: string;
  due_date: string;
  priority: priorityType;
  completed: boolean;
};
