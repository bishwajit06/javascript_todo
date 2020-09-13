//Add Item

// const li = document.createElement('li');
// li.className = 'collection-item';
// li.textContent = 'List item 5'
// const link = document.createElement('a');
// link.className = 'secondary-content';
// link.innerHTML = '<i class="material-icons">cancel</i>';
// li.appendChild(link)
// const addItem = document.querySelector('ul.collection');
// addItem.append(li);

// Remove Item

//const list = document.querySelectorAll('li.collection-item');
// list[1].remove()
//console.log(list);

// const list = document.querySelectorAll('li.collection-item');
// const listItem = document.querySelector('ul.collection');
// listItem.removeChild(list[2])


// const clearTask = document.querySelector('.clear-task');

// clearTask.addEventListener('click', clickClear);

// function clickClear(e) {
//     let val;

//     val = e.target.className;

//     e.target.textContent = 'Hello';

//     e.defaultPrevent
//     //e.preventDefault()
    
//     //console.log(val)
// }


const taskForm = document.querySelector('#task-form');
const taskInput = document.querySelector('#task-input');
const addItem = document.querySelector('ul.collection');

function addRow(itemName){
    var htmlString = `
    <li class="collection-item">
        ${itemName}
        <a href="#" class="secondary-content">
            <i class="material-icons">cancel</i>
        </a>
    </li>`;
    
    if(taskInput.value !== ''){
        addItem.insertAdjacentHTML('beforeend', htmlString);
    }
}

taskForm.addEventListener('submit', runEvent);

function runEvent(e) {
    addRow(taskInput.value);
    taskInput.value = '';
    e.preventDefault()
}

document.addEventListener('click', function(e){
    if(e.target && e.target.className == 'material-icons'){
        e.target.parentNode.parentNode.remove();
    }
})




