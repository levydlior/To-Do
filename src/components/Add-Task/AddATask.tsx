import { useState } from "react"
import { AddATaskType } from "./AddATask.types"
import React from "react"
import { priorityType } from "../TaskItem/Taskitem.types"
import { AddATaskForm } from "./AddATask.style"
import TextField from '@mui/material/TextField';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import { addATaskCreate } from './AddTask.requests'
import { AddATaskProps } from './../Layout/Layout.types'


function AddATask(addTaskObject: AddATaskProps) {
  const { handleTaskCreate } = addTaskObject

  const [priorityError, setPriorityError] = useState("")

  const [taskForm, setTaskForm] = useState<AddATaskType>({
    title: "",
    priority: "first",
    due_date: "",
    completed: false
  })
  const { title, priority, due_date } = taskForm

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const target = event.target.name
    const value = event.target.value

    setTaskForm({ ...taskForm, [target]: value })
  }

  const handleSelectChange = (event: SelectChangeEvent) => {
    const value = event.target.value
    setTaskForm({ ...taskForm, priority: value as priorityType })
  }

  const handleTaskSubmit = (event: any) => {
    event.preventDefault()
    if (priority === "first") {
      setPriorityError("please select a priority")
    } else {
      setPriorityError("")
      addATaskCreate(taskForm, handleTaskCreate)
    }
  }

  return (
    <div>
      <AddATaskForm onSubmit={handleTaskSubmit}>
        <label htmlFor="title">Task Name:</label>
        <TextField id="standard-basic"
          label="Standard"
          variant="standard"
          value={title}
          name="title"
          required
          onChange={handleInputChange} />
        <Select
          name="priority"
          variant="standard"
          value={priority}
          required
          onChange={handleSelectChange}
        >
          <MenuItem value={"first"} disabled>Priority</MenuItem>
          <MenuItem value={"low"}>Low</MenuItem>
          <MenuItem value={"medium"}>Medium</MenuItem>
          <MenuItem value={"high"}>High</MenuItem>
        </Select>
        <label htmlFor="due_date">Complete by:</label>
        <TextField id="standard-basic"
          variant="standard"
          value={due_date}
          name="due_date"
          type="date"
          required
          onChange={handleInputChange} />
        {priorityError ? <p>{priorityError}</p> : null}
        <Button type="submit" variant="outlined" sx={{ "textTransform": "none" }}>Add Task</Button>
      </AddATaskForm>
    </div>
  )
}

export default AddATask

