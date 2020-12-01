const todoForm = document.querySelector(".js-todo-input");
const todoInput = todoForm.querySelector("input");
const todoListHTML = document.querySelector(".js-todo-list");
const finishListHTML = document.querySelector(".js-finish-list");

const TODOS = "todo";
let todoList = [];
const FINISH = "finish";
let finishList = [];

function idxArrange(array) {
  for (let idx = 0; idx < array.length; idx++) {
    array[idx].id = idx + 1;
  }
  return array;
}
function drawFinish(obj, option="default") {
  const finishElement = document.createElement("li");
  const delBtn = document.createElement("button");
  delBtn.className = "del-todo-button"
  const returnBtn = document.createElement("button");
  returnBtn.className = "return-todo-button"
  const span = document.createElement("span");
  delBtn.innerHTML = "❌";
  returnBtn.innerHTML = "🔼";
  span.innerHTML = obj.text;

  delBtn.addEventListener("click", (event) => {
    const finishElement = event.target.parentNode;
    finishListHTML.removeChild(finishElement);
    const cleanFinish = finishList.filter((finish) => {
      return finish.id !== parseInt(finishElement.id);
    });
    finishList = idxArrange(cleanFinish);
    saveFinish();
    const finishHTMLson = finishListHTML.querySelectorAll("li");
    idxArrange(finishHTMLson);
  });

  returnBtn.addEventListener("click", (event) => {
    const finishElement = event.target.parentNode;
    finishListHTML.removeChild(finishElement);
    const cleanFinish = finishList.filter((finish) => {
      return finish.id !== parseInt(finishElement.id);
    });
    if (finishList !== []) {
      const addTodo = finishList.filter((finish) => {
        return finish.id === parseInt(finishElement.id);
      });
      addTodo[0].id = todoList.length + 1;
      todoList.push(addTodo[0]);
      saveTodo();
      drawTodo(addTodo[0]);
    }

    finishList = idxArrange(cleanFinish);
    const finishHTMLson = finishListHTML.querySelectorAll("li");
    idxArrange(finishHTMLson);
    saveTodo();
    saveFinish();
  });

  if (option === "load"){
    finishList.push(obj);
  }

  finishElement.appendChild(returnBtn);
  finishElement.appendChild(delBtn);
  finishElement.appendChild(span);
  finishElement.id = obj.id;
  finishListHTML.appendChild(finishElement);
}


function drawTodo(input, option="default") {
  const todoElement = document.createElement("li");
  const delBtn = document.createElement("button");
  delBtn.className = "del-todo-button"
  const chkBtn = document.createElement("button");
  chkBtn.className = "chk-todo-button"
  const span = document.createElement("span");
  delBtn.innerHTML = "❌";
  chkBtn.innerHTML = "✅";
  if (option === "submit") {
    span.innerHTML = input;
  } else {
    span.innerHTML = input.text;
  }

  delBtn.addEventListener("click", (event) => {
    const todoElement = event.target.parentNode;
    todoListHTML.removeChild(todoElement);
    const cleanTodo = todoList.filter((todo) => {
      return todo.id !== parseInt(todoElement.id);
    });
    todoList = idxArrange(cleanTodo);
    const todoHTMLson = todoListHTML.querySelectorAll("li");
    idxArrange(todoHTMLson);
    saveTodo();
  });
  chkBtn.addEventListener("click", (event) => {
    const todoElement = event.target.parentNode;
    todoListHTML.removeChild(todoElement);
    const cleanTodo = todoList.filter((todo) => {
      return todo.id !== parseInt(todoElement.id);
    });
    if (todoList !== []) {
      const addFinish = todoList.filter((todo) => {
        return todo.id === parseInt(todoElement.id);
      });
      addFinish[0].id = finishList.length + 1;
      finishList.push(addFinish[0]);
      saveFinish();
      drawFinish(addFinish[0]);
    }
    todoList = idxArrange(cleanTodo);
    const todoHTMLson = todoListHTML.querySelectorAll("li");
    idxArrange(todoHTMLson);
    saveTodo();
    saveFinish();
  });



  if (option === "submit") {
    const todoIndex = todoList.length + 1;
    todoElement.id = todoIndex;

    const todoObj = {
      text: input,
      id: todoIndex,
    };
    todoList.push(todoObj);

  } else {
    todoElement.id = input.id;
    if(option ==="load"){
      todoList.push(input);
    }
  }
  todoElement.appendChild(chkBtn);
  todoElement.appendChild(delBtn);
  todoElement.appendChild(span);

  todoListHTML.appendChild(todoElement);

  saveTodo();
}

function saveTodo() {
  localStorage.setItem(TODOS, JSON.stringify(todoList));
}
function saveFinish() {
  localStorage.setItem(FINISH, JSON.stringify(finishList));
}

function loadTodo() {
  let loadTodos = localStorage.getItem(TODOS);
  if (loadTodos !== null) {
    loadTodos = JSON.parse(loadTodos);
    loadTodos.forEach((todo) => {
      drawTodo(todo, "load");
    });
  }
}

function loadFinish() {
  let loadFinishes = localStorage.getItem(FINISH);

  if (loadFinishes !== null) {
    loadFinishes = JSON.parse(loadFinishes);
    loadFinishes.forEach((finish) => {
      drawFinish(finish, "load");
    });
  }
}

function init() {
  loadTodo();
  loadFinish();
  todoForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const currentValue = todoInput.value;
    drawTodo(currentValue, "submit");
    todoInput.value = "";
  });
}

init();
