import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { GreenCheckbox, TaskWrapper } from "./TaskItem.style";
import CircleOutlinedIcon from "@mui/icons-material/CircleOutlined";
import CheckCircleOutlinedIcon from "@mui/icons-material/CheckCircleOutlined";

export type taskType = {
  //Figure out how to not have to make this be an object in an object
  task: {
    priority: priorityTypes;
    title: string;
    dueDate: string;
    completed: boolean;
  };
};

export type priorityTypes = "low" | "medium" | "high";

export const TaskItem = (taskObject: taskType) => {
  //destructuring for ease of reading
  const { task } = taskObject;
  const { title, dueDate } = task;

  const renderColorPriority = (priority: string) => {
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
        <div className={renderColorPriority(task.priority)}></div>
        <div className="main">
          <div className="content">
            <div>{title}</div>
            <div>{dueDate}</div>
          </div>
          <div className="actions">
            <GreenCheckbox
              icon={<CircleOutlinedIcon />}
              checkedIcon={<CheckCircleOutlinedIcon />}
            />
            <DeleteOutlineIcon />
          </div>
        </div>
      </TaskWrapper>
    </>
  );
};
