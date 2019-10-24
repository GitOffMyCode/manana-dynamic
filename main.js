const form = document.getElementById('addTask');
const doItList = document.getElementById('doItItem');

form.addEventListener('submit', addIt); 
doItList.addEventListener('click', deleteItem);

function addIt (event) {
    event.preventDefault();
    const taskValue = document.getElementById('add-task').value;
    if (taskValue.length >= 1) {
        const li = document.createElement('li');
        li.className = "mx-3 taskText";
        li.appendChild(document.createTextNode(taskValue))
        const deleteBtn = document.createElement('button');
        deleteBtn.className = "fa fa-trash icon-bin";
        deleteBtn.style = "float: right;";
        const hr = document.createElement('hr');
        hr.className = "taskDivider";
        li.append(deleteBtn);
        doItList.append(li);
        doItList.append(hr);
    }
}


function deleteItem(event) {
    if(event.target.classList.contains('icon-bin')) {
        const li = event.target.parentElement;
        const hr = event.target.parentElement.nextElementSibling;
        doItList.removeChild(li);
        doItList.removeChild(hr);
    }
}