 // Selecting elements
 const taskInput = document.getElementById('taskInput');
 const addTaskButton = document.getElementById('addTaskButton');
 const taskList = document.getElementById('taskList');

 // Function to add a new task
 function addTask() {
     const taskText = taskInput.value.trim();

     if (taskText === '') {
         alert('Please enter a task!');
         return;
     }

     const li = document.createElement('li');
     li.innerHTML = `
         <span>${taskText}</span>
         <div>
             <button class="edit" onclick="editTask(this)">Edit</button>
             <button class="delete" onclick="deleteTask(this)">Delete</button>
         </div>
     `;

     taskList.appendChild(li);
     taskInput.value = '';
 }

 // Function to delete a task
 function deleteTask(button) {
     const li = button.parentElement.parentElement;
     taskList.removeChild(li);
 }

 // Function to edit a task
 function editTask(button) {
     const li = button.parentElement.parentElement;
     const span = li.querySelector('span');
     const newTask = prompt('Edit your task:', span.textContent);

     if (newTask !== null) {
         span.textContent = newTask.trim() || span.textContent;
     }
 }

 // Event listener for the Add button
 addTaskButton.addEventListener('click', addTask);

 // Allow adding tasks by pressing Enter
 taskInput.addEventListener('keypress', function (e) {
     if (e.key === 'Enter') {
         addTask();
     }
 });