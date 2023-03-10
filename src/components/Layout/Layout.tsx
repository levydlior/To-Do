import React, { useEffect, useState } from "react";
import { TaskItem } from "../TaskItem/TaskItem";
import { AddTaskButton, MainWrapper } from "./Layout.style";
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import AddATask from "../Add-Task/AddATask";
import { taskType } from "../types/Task.type";

export const Layout = () => {
  const [tasksArray, setTaskArray] = useState<taskType[]>([])
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);

  const handleDelete = (id: number | undefined) => {
    const filteredTasksArray = tasksArray.filter((singleTask) => {
      return singleTask.id !== id
    })
    setTaskArray(filteredTasksArray)
  }

  const handleTaskUpdate = (updatedTask: taskType) => {
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
    return <TaskItem task={task} handleDelete={handleDelete} handleTaskUpdate={handleTaskUpdate} key={task.id} />;
  })


  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  const handleTaskCreate = (taskObject: taskType) => {
    setTaskArray([...tasksArray, taskObject])
    setAnchorEl(null)
  }

  return (
    <MainWrapper>
      <AddTaskButton aria-describedby={id} variant="contained" onClick={handleClick} >Add Task</AddTaskButton>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
      >
        <Typography sx={{ p: 2 }}><AddATask handleTaskCreate={handleTaskCreate} /></Typography>
      </Popover>
      {renderTask}
    </MainWrapper>
  );
};
