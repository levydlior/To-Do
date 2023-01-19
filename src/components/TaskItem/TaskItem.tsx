import { DeleteIcon, GreenCheckbox, TaskWrapper } from "./TaskItem.style";
import CircleOutlinedIcon from "@mui/icons-material/CircleOutlined";
import CheckCircleOutlinedIcon from "@mui/icons-material/CheckCircleOutlined";
import { taskType, priorityType } from "./Taskitem.types";
import { deleteRequest, updateRequest } from "./Task.request";


export const TaskItem = (taskObject: taskType) => {
  //destructuring for ease of reading
  const { task, handleDelete, handleTaskUpdate } = taskObject;
  const { title, due_date, priority, id, completed } = task;

  const renderColorPriority = (priority: priorityType) => {
    if (priority === "low") {
      return "priority-low"
    }
    if (priority === "medium") {
      return "priority-medium"
    }
    if (priority === "high") {
      return "priority-high"
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
