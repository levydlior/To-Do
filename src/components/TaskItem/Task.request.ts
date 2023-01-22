import { taskType } from "../types/Task.type";

export const deleteRequest = (
  callbackFunction: (id: number | undefined) => void,
  id: number | undefined
) => {
  fetch(`/tasks/${id}`, { method: "DELETE" }).then((response) => {
    if (response.ok) {
      response
        .json()
        .then((parsedResponse) => callbackFunction(parsedResponse.id));
    } else {
      response.json().then((parsedError) => console.log(parsedError));
    }
  });
};

export const updateRequest = (
  handleTaskUpdate: (task: taskType) => void,
  task: taskType,
  id: number | undefined,
  completed: boolean
) => {
  fetch(`/tasks/${id}`, {
    method: "PATCH",
    headers: {
      "content-type": "application/json",
      accept: "application/json",
    },
    body: JSON.stringify({ ...task, completed: !completed }),
  }).then((response) => {
    if (response.ok) {
      response.json().then((parsedResponse) => {
        handleTaskUpdate(parsedResponse);
      });
    } else {
      response.json().then((parsedResponse) => console.log(parsedResponse));
    }
  });
};
