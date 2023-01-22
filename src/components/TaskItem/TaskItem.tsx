import { DeleteIcon, GreenCheckbox, TaskWrapper } from "./TaskItem.style";
import CircleOutlinedIcon from "@mui/icons-material/CircleOutlined";
import CheckCircleOutlinedIcon from "@mui/icons-material/CheckCircleOutlined";
import { priorityType } from "../types/priority.types";
import { deleteRequest } from "./Task.request";
import { taskType } from "../types/Task.type";

export interface taskProps {
  task: taskType,
  handleDelete: (id: number | undefined) => void
}

export const TaskItem = (taskProps: taskProps) => {
  //destructuring for ease of reading
  const { task, handleDelete } = taskProps;
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
            />
            <DeleteIcon onClick={() => deleteRequest(handleDelete, id)} />
          </div>
        </div>
      </TaskWrapper>
    </>
  );
};
