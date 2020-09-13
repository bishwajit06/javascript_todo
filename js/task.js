const taskForm = document.querySelector('#task-form');
const taskInput = document.querySelector('#task-input');
const addItem = document.querySelector('ul.collection');
const clearBtn = document.querySelector('.clear-task');
const filter = document.querySelector('#filter-input');

//console.log(filter);

loadEventListeners();

function loadEventListeners() {
    // Add Event
    taskForm.addEventListener('submit', addTask);

    //Remove Event
    addItem.addEventListener('click', removeTask);

    // Clear Task
    clearBtn.addEventListener('click', clearTask);

    // Filter
    filter.addEventListener('keyup', filterTask)
}


// Add Task
function addTask(e) {
    if (taskInput.value === '') {
        alert('Please add task');
    }else{
        const li = document.createElement('li');
        li.className = 'collection-item';
        li.textContent = taskInput.value;
        const link = document.createElement('a');
        link.className = 'secondary-content';
        link.setAttribute('http', '#');
        link.innerHTML = '<i class="material-icons">cancel</i>';
        li.appendChild(link);
        addItem.appendChild(li);
        taskInput.value = '';
        e.preventDefault();
    }
}

// Remove Task
function removeTask(e) {
    console.log();

    if (confirm('Are you sure')) {
        if (e.target.parentElement.className == 'secondary-content') {
            e.target.parentElement.parentElement.remove();
        }
    }
}

// Clear all Task
function clearTask(e) {
    
    if (confirm('Are you sure all clear task')) {
        addItem.innerHTML = '';
    }
    
    e.preventDefault();
}

// Filter Task
function filterTask(e) {
    const text = e.target.value.toLowerCase();

    document.querySelectorAll('.collection-item').forEach(task => {
        const item = task.textContent;
        if (item.toLowerCase().indexOf(text) != -1) {
            task.style.display = 'block';
        }
        else{
            task.style.display = 'none';
            
        }
    });

}