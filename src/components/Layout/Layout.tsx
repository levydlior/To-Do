import { useEffect, useState } from "react";
import { TaskItem } from "../TaskItem/TaskItem";
import { AddTaskButton, MainWrapper } from "./Layout.style";
import { TaskArray } from "./Layout.types";

export const Layout = () => {

  const [tasksArray, setTaskArray] = useState<TaskArray[]>([])

  const handleDelete = (id: number) => {
    const filteredTasksArray = tasksArray.filter((singleTask) => {
      return singleTask.id !== id
    })
    setTaskArray(filteredTasksArray)
  }

  useEffect(() => {
    fetch("/tasks")
      .then(response => response.json())
      .then(parsedResponse => {
        setTaskArray(parsedResponse)
      })
  }, [])

  const renderTask = tasksArray.map(task => {
    return <TaskItem task={task} handleDelete={handleDelete} />;
  })

  return (
    <MainWrapper>
      <AddTaskButton variant="contained">Add Task</AddTaskButton>
      {renderTask}
    </MainWrapper>
  );
};
