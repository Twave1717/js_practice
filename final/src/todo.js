const todoBox = document.querySelector('.todo-box');
const todoForm = todoBox.querySelector('form');
const todoInput = todoBox.querySelector('input');

const TODOS_KEY = 'todos';

let toDos = [];


function deleteToDo(event){
    const targetNode = event.target.parentNode;
    targetNode.remove();
    toDos = toDos.filter(toDo => toDo.id !== parseInt(targetNode.id))
    localStorage.setItem('todos', JSON.stringify(toDos));
}

function saveToDos(){
    localStorage.setItem('todos', JSON.stringify(toDos));
}

function printToDo(newToDo){
    const span = document.createElement('span');
    span.innerText = newToDo.text;
    const button = document.createElement('button');
    button.innerText = '🙌';
    button.addEventListener('click', deleteToDo);
    const div = document.createElement('div');
    div.id = newToDo.id;
    div.appendChild(button);
    div.appendChild(span);
    
    todoBox.appendChild(div);
}

function onTodoSubmit(event){
    event.preventDefault();

    newToDo = {
        text: todoInput.value,
        id: Date.now()
    };
    toDos.push(newToDo);

    saveToDos();
    printToDo(newToDo);
    todoInput.value='';
}

todoForm.addEventListener('submit', onTodoSubmit);

const savedToDos = localStorage.getItem('todos');
if(savedToDos){
    toDos = JSON.parse(savedToDos);
    toDos.forEach(printToDo);
}
