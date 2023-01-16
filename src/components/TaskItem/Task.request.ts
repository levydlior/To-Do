export const deleteRequest = (
  callbackFunction: (id: number) => void,
  id: number
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
  callbackFunction: (id: number) => void,
  updatedTask: any,
  id: number,
  completed: boolean
) => {
  fetch(`/tasks/${id}`, {
    method: "PATCH",
    headers: {
      "content-type": "application/json",
      accept: "application/json",
    },
    body: JSON.stringify({ ...updatedTask, completed: !completed }),
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
