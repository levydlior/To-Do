import { DeleteIcon, GreenCheckbox, TaskWrapper } from "./TaskItem.style";
import CircleOutlinedIcon from "@mui/icons-material/CircleOutlined";
import CheckCircleOutlinedIcon from "@mui/icons-material/CheckCircleOutlined";
import { priorityType } from "../types/priority.types";
import { deleteRequest, updateRequest } from "./Task.request";
import { taskType } from "../types/Task.type";

export interface taskProps {
  task: taskType,
  handleDelete: (id: number | undefined) => void,
  handleTaskUpdate: (task: taskType) => void
}

export const TaskItem = (taskProps: taskProps) => {
  const { task, handleDelete, handleTaskUpdate } = taskProps;
  const { title, due_date, priority, id, completed } = task;

  const renderColorPriority = (priority: priorityType) => {
    if (priority === "low") {
      return "priority-high"
    }
    if (priority === "medium") {
      return "priority-medium"
    }
    if (priority === "high") {
      return "priority-low"
    }
  }

  const handleCheckedClick = () => {
    updateRequest(handleTaskUpdate, task, id, completed)
  }

  return (
    <>
      <TaskWrapper>
        <div className={renderColorPriority(priority)}></div>
        <div className="main">
          <div className="content">
            <div>{title}</div>
            <div>{due_date}</div>
          </div>
          <div className="actions">
            <GreenCheckbox
              icon={<CircleOutlinedIcon />}
              checkedIcon={<CheckCircleOutlinedIcon />}
              checked={completed}
              onClick={handleCheckedClick}
            />
            <DeleteIcon onClick={() => deleteRequest(handleDelete, id)} />
          </div>
        </div>
      </TaskWrapper>
    </>
  );
};

