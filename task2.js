// Load tasks from local storage
document.addEventListener('DOMContentLoaded', loadTasks);

function loadTasks() {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.forEach(task => {
        addTaskToDOM(task.text, task.completed);
    });
}

function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();

    if (taskText === '') {
        alert('Please enter a task!');
        return;
    }

    addTaskToDOM(taskText, false);
    saveTaskToLocalStorage(taskText, false);
    taskInput.value = '';
}

function addTaskToDOM(taskText, completed) {
    const taskList = document.getElementById('taskList');
    const li = document.createElement('li');
    li.className = completed ? 'completed' : '';
    
    li.innerHTML = `
        <span onclick="toggleTask(this)">${taskText}</span>
        <button class="delete" onclick="deleteTask(this)">Delete</button>
    `;
    
    taskList.appendChild(li);
}

function toggleTask(taskElement) {
    const li = taskElement.parentElement;
    li.classList.toggle('completed');
    updateTaskInLocalStorage(li);
}

function deleteTask(deleteButton) {
    const li = deleteButton.parentElement;
    li.remove();
    removeTaskFromLocalStorage(li);
}
