import { useEffect, useState } from "react";
import { TaskItem } from "../TaskItem/TaskItem";
import { AddTaskButton, MainWrapper } from "./Layout.style";
import { taskType } from "../TaskItem/TaskItem";

export const Layout = () => {

  const [tasksArray, setTaskArray] = useState<Array<{ id: number, priority: string, title: string, due_date: string, completed: boolean }>>([])

  const handleDelete = (id: number) => {
    const filteredTasksArray = tasksArray.filter((singleTask) => {
      console.log(singleTask)
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
