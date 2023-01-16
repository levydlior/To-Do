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

  const handleTaskUpdate = (updatedTask: any) => {
    const updatedTasks = tasksArray.map(task => {
      if (task.id === updatedTask.id) {
        return updatedTask
      } else {
        return task
      }
    })
    setTaskArray(updatedTasks)
  }

  useEffect(() => {
    fetch("/tasks")
      .then(response => response.json())
      .then(parsedResponse => {
        setTaskArray(parsedResponse)
      })
  }, [])

  const renderTask = tasksArray.map(task => {
    return <TaskItem task={task} handleDelete={handleDelete} key={task.id} handleTaskUpdate={handleTaskUpdate} />;
  })

  return (
    <MainWrapper>
      <AddTaskButton variant="contained">Add Task</AddTaskButton>
      {renderTask}
    </MainWrapper>
  );
};
