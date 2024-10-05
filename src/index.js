document.addEventListener("DOMContentLoaded", (event) => {
  event.preventDefault();
  const form = document.getElementById("create-task-form");
  let listContainer = document.getElementById("list");
  form.onsubmit = (e) =>{
    e.preventDefault(); 
    let newTask = document.getElementById("new-task-description").value;
    let colors = document.getElementById("colors").value;
    listContainer.appendChild(listFuction(newTask, colors));
    form.reset();
  }
  function listFuction(task, color){
    // generates a new li element
    let lists = document.createElement("li");
    // adds the task input to the lists & assigns color
    lists.textContent = task;
    lists.style.color = color;
    // creates an eddit button to the list
    let edit = document.createElement("button");
    edit.textContent = "edit";
    // perform an edit when button is clicked
    edit.onclick = () =>{
      // prompts an elert to the user to modify the existing task
      let newContent = prompt("Edit item", task);
      if ( newContent !== "") {
          lists.textContent = newContent;
          lists.appendChild(del)
          lists.appendChild(edit)
      }
    };
    lists.appendChild(edit)
    let del = document.createElement("button");
    del.textContent = "X";
    del.onclick = () => {
        lists.remove();
    }
    lists.appendChild(del)
    return lists; 
  }
});