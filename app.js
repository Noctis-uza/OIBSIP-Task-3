const newTaskInput = document.getElementById("new-task");
const pendingList = document.getElementById("pending-list");
const completedList = document.getElementById("completed-list");
function createTaskElement(taskText, isCompleted) 
{
    const li = document.createElement("li");
    li.innerHTML = `
        <span class="task-text ${isCompleted ? 'completed' : ''}">${taskText}</span>
        <button onclick="editTask(this)">Edit</button>
        <button onclick="deleteTask(this)">Delete</button>
        <button onclick="toggleComplete(this)">Complete</button>
    `;
    return li;
}
function addTask() 
{
    const taskText = newTaskInput.value;
    if (taskText.trim() !== "") 
    {
        const li = createTaskElement(taskText, false);
        pendingList.appendChild(li);
        newTaskInput.value = "";
    }
}
function editTask(button) 
{
    const li = button.parentElement;
    const taskText = li.querySelector(".task-text").textContent;
    const newText = prompt("Edit task:", taskText);
    if (newText !== null) 
    {
        li.querySelector(".task-text").textContent = newText;
    }
}
function deleteTask(button) 
{
    const li = button.parentElement;
    li.remove();
}
function toggleComplete(button) 
{
    const li = button.parentElement;
    li.querySelector(".task-text").classList.toggle("completed");
    const buttonText = button.textContent;
    if (buttonText === "Complete") 
    {
        button.textContent = "Incomplete";
        completedList.appendChild(li);
    } 
    else 
    {
        button.textContent = "Complete";
        pendingList.appendChild(li);
    }
}