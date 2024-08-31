document.getElementById('add-btn').addEventListener('click', addTask);

function addTask() {
    const todoInput = document.getElementById('todo-input');
    const todoList = document.getElementById('todo-list');

    const taskText = todoInput.value.trim();
    if (taskText === '') return;

    const todoItem = document.createElement('li');
    todoItem.className = 'todo-item';

    const taskSpan = document.createElement('span');
    taskSpan.textContent = taskText;

    const completeBtn = document.createElement('button');
    completeBtn.textContent = '✔';
    completeBtn.className = 'complete-btn';
    completeBtn.addEventListener('click', () => {
        todoItem.classList.toggle('completed');
    });

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = '✖';
    deleteBtn.className = 'delete-btn';
    deleteBtn.addEventListener('click', () => {
        todoList.removeChild(todoItem);
    });

    todoItem.appendChild(taskSpan);
    todoItem.appendChild(completeBtn);
    todoItem.appendChild(deleteBtn);
    todoList.appendChild(todoItem);

    todoInput.value = '';
}

document.getElementById('todo-input').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        addTask();
    }
});
