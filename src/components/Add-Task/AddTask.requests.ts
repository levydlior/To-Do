import { taskType } from "../types/Task.type";
import { TaskArray } from "./../Layout/Layout.types";

export const addATaskCreate = (
  taskForm: taskType,
  callbackFunction: (taskObject: TaskArray) => void
) => {
  fetch("/tasks", {
    method: "POST",
    headers: {
      "content-type": "application/json",
      accept: "application/json",
    },
    body: JSON.stringify(taskForm),
  }).then((response) => {
    if (response.ok) {
      response.json().then((parsedResponse) => {
        callbackFunction(parsedResponse);
      });
    } else {
      response.json().then((parsedResponse) => console.log(parsedResponse));
    }
  });
};
