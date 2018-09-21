// Define UI Vars
const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');
//calling load all event listeners
loadEventListeners();

// load all event listeners
function loadEventListeners() {
  // DOM load event
  
  // add task event
  form.addEventListener('submit', addTask);
  // remove task event
  taskList.addEventListener('click', removeTask);
  // clear tasks
  clearBtn.addEventListener('click', clearTasks);
  // filter tasks event
  filter.addEventListener('keyup', filterTasks);
}

// get tasks from ls

function addTask(e) {
  if(taskInput.value === '') {
    alert('add a task')
  }
  // Create Li
  const li = document.createElement('li');
  // add class
  li.className = 'collection-item';
  // append to list
  li.appendChild(document.createTextNode(taskInput.value));
  // create new link
  const link = document.createElement('a');
  // add class
  link.className = 'delete-item secondary-content';
  // add icon HTML
  link.innerHTML = '<i class="fas fa-times"></i>'
  // append the link to li
  li.appendChild(link)
  // append li to tasklist
  taskList.appendChild(li);
  // store in LS

  // clear input
  taskInput.value ='';

  e.preventDefault();
};

// store task


// remove task
function removeTask(e) {
  if(e.target.parentElement.classList.contains('delete-item')) {
    if(confirm('Are You Sure?')) {
      e.target.parentElement.parentElement.remove();
    }
  }
};

function clearTasks() {
  // first method
  // taskList.innerHTML = '';
  // faster
  while (taskList.firstChild) {
    taskList.removeChild(taskList.firstChild);
  }
};

function filterTasks(e) {
  const text = e.target.value.toLowerCase();

  document.querySelectorAll('.collection-item').forEach(function(task){
    const item = task.firstChild.textContent;
    if(item.toLowerCase().indexOf(text) != -1){
      task.style.display = 'block';
    } else {
      task.style.display = 'none';
    }
  });
}