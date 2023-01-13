import { priorityTypes, TaskItem } from "../TaskItem/TaskItem";
import { AddTaskButton, MainWrapper } from "./Layout.style";

const fakeTasks = [
  {
    title: "Clean car",
    dueDate: "1/13/2022",
    completed: false,
    //dont know if this is best practice. To look into it
    priority: "low" as priorityTypes,
  },
  {
    title: "Do Laundry",
    dueDate: "1/14/2022",
    completed: false,
    priority: "medium" as priorityTypes,
  },
  {
    title: "Groceries",
    dueDate: "1/15/2022",
    completed: false,
    priority: "high" as priorityTypes,
  },
];

export const Layout = () => {
  const renderTask = fakeTasks.map(task => {
    return <TaskItem task={task} />;
  })

  return (
    <MainWrapper>
      <AddTaskButton variant="contained">Add Task</AddTaskButton>
      {renderTask}
    </MainWrapper>
  );
};
