import { DeleteIcon, GreenCheckbox, TaskWrapper } from "./TaskItem.style";
import CircleOutlinedIcon from "@mui/icons-material/CircleOutlined";
import CheckCircleOutlinedIcon from "@mui/icons-material/CheckCircleOutlined";

export type taskType = {
  //Figure out how to not have to make this be an object in an object
  task: {
    id: number;
    priority: priorityTypes;
    title: string;
    due_date: string;
    completed: boolean;
  };
};

export type priorityTypes = "low" | "medium" | "high";

export const TaskItem = (taskObject: taskType, handleTaskDelete :any) => {
  //destructuring for ease of reading
  const { task } = taskObject;
  const { title, due_date, priority, id, completed } = task;

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
console.log(task)
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
            <DeleteIcon onClick={(id) => handleTaskDelete}/>
          </div>
        </div>
      </TaskWrapper>
    </>
  );
};
