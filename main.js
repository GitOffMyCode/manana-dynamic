// access the ADD IT form by creating a variable
const form = document.getElementById('addTask');
// access DO IT list of items by creating a variable
const doItList = document.getElementById('doItItem');

// ADD IT EVENT
form.addEventListener('submit', addIt); 

// DELETE EVENT
doItList.addEventListener('click', deleteItem);

function addIt (e) {
    // prevent default form submission
    e.preventDefault();
    // get input value saved to a variable
    const taskValue = document.getElementById('task').value;

    // create new li
    const li = document.createElement('li');
    // add a class
    li.className = "mx-3 taskText";
    // add new value to new li element
    li.appendChild(document.createTextNode(taskValue))

    // create new span
    const span = document.createElement('span');
    // add style
    span.style = "float: right;";

    // create new deleteBtn
    const deleteBtn = document.createElement('button');
    // add classes to del button
    deleteBtn.className = "fa fa-trash icon-bin delete";

    // create new hr
    const hr = document.createElement('hr');
    hr.className = "taskDivider";

    // append button to span
    span.appendChild(deleteBtn);
    // append span to li
    li.appendChild(span);
    // append li to doItList
    doItList.appendChild(li);
    // add hr to doItList
    doItList.appendChild(hr);
}


function deleteItem(e) {
    if(e.target.classList.contains('delete')) {
            // this bit not working right!!!
            const li = e.target.parentElement;
            doItList.removeChild(li);
    }
}