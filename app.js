  // Get elements
  const taskInput = document.getElementById('taskInput');
  const addTaskButton = document.getElementById('addTask');
  const taskListContainer = document.getElementById('taskList');
  const taskCountElement = document.getElementById('taskCount');

  // Tasks array to store user input
  const tasks = [];

  // Function to add a new task
  const addTask = () => {
    const taskText = taskInput.value.trim();
    if (taskText !== '') {
      tasks.push(taskText);
      taskInput.value = ''; // Clear input field

      // Display tasks
      displayTasks();
      // Task count
      updateTaskCount();
    }
  };

  // Function to remove a task
  const removeTask = (index) => {
    tasks.splice(index, 1);
    displayTasks();
    // Task count
    updateTaskCount();

  };

  // Function to display tasks
  const displayTasks = () => {
    taskListContainer.innerHTML = ''; // Clear previous content

    tasks.forEach((task, index) => {
      const taskSection = document.createElement('section');
      taskSection.innerHTML = `
        <input type="text" value="${task}" readonly />
        <i class="fas fa-trash" style="color: red; cursor: pointer ;" onclick="removeTask(${index})"></i>
      `;
      taskListContainer.appendChild(taskSection);
    });
  };
   // Function to update task count
 const updateTaskCount = () => {
    const taskCount = tasks.length;
    let message = `You have ${taskCount} pending task`;
    if (taskCount !== 1) {
      message += 's';
    }
    taskCountElement.textContent = message;
    
  };
  // Event listener for adding a new task
  addTaskButton.addEventListener('click', addTask);