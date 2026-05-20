document.addEventListener("DOMContentLoaded", () => {
  // your code here
  //
  //Select Form
  const form = document.querySelector("#create-task-form") 
  // Add an event listener to the form and use preventDefault
  function handleSubmit(event) {
    event.preventDefault()
    //Handle form data 
    const newTask = document.querySelector("#new-task-description").value
    buildToDo(newTask)
  }
  //Create function and call it
  function buildToDo(newTask) {
    //create a new li element
    const taskList = document.querySelector("#tasks")
    const li = document.createElement("li")
    li.textContent = newTask
    taskList.append(li)

    console.log(newTask)
  }

  form.addEventListener("submit", (event) => {
    handleSubmit(event)
  })
});
