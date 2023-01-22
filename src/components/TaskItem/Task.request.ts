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
