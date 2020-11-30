const todoForm = document.querySelector(".js-todo-input");
const todoInput = todoForm.querySelector("input");
const todoListHTML = document.querySelector(".js-todo-list");
const finishListHTML = document.querySelector(".js-finish-list");

const TODOS = "todo";
let todoList = [];
const FINISH = "finish";
let finishList = [];

function idxArrange(array){
    for(let idx=0; idx < array.length; idx++){
        array[idx].id = idx+1;
    }
    return array;
}
function drawFinishFromTodo(text) {
  const finishElement = document.createElement("li");
  const delBtn = document.createElement("button");
  const returnBtn = document.createElement("button");
  const span = document.createElement("span");
  const finishIndex = finishList.length;
  delBtn.innerHTML = "❌";
  returnBtn.innerHTML = "🔼";
  span.innerHTML = text;

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
      drawTodoFromFinish(addTodo[0].text);
    }

    finishList = idxArrange(cleanFinish);
    const finishHTMLson = finishListHTML.querySelectorAll("li");
    idxArrange(finishHTMLson);
    saveTodo();
    saveFinish();
  });

  finishElement.appendChild(span);
  finishElement.appendChild(delBtn);
  finishElement.appendChild(returnBtn);

  finishElement.id = finishIndex;
  finishListHTML.appendChild(finishElement);
}
function drawFinishFromLoad(obj) {
  const finishElement = document.createElement("li");
  const delBtn = document.createElement("button");
  const returnBtn = document.createElement("button");
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
      drawTodoFromFinish(addTodo[0].text);
    }

    finishList = idxArrange(cleanFinish);
    const finishHTMLson = finishListHTML.querySelectorAll("li");
    idxArrange(finishHTMLson);
    saveTodo();
    saveFinish();
  });

  finishList.push(obj);
  finishElement.appendChild(span);
  finishElement.appendChild(delBtn);
  finishElement.appendChild(returnBtn);
  finishElement.id = obj.id;
  finishListHTML.appendChild(finishElement);
}
function drawTodoFromFinish(text) {
  const todoElement = document.createElement("li");
  const delBtn = document.createElement("button");
  const chkBtn = document.createElement("button");
  const span = document.createElement("span");
  const todoIndex = todoList.length;
  delBtn.innerHTML = "❌";
  chkBtn.innerHTML = "✅";
  span.innerHTML = text;

  delBtn.addEventListener("click", (event) => {
    const todoElement = event.target.parentNode;
    todoListHTML.removeChild(todoElement);
    const cleanTodo = todoList.filter((todo) => {
      return todo.id !== parseInt(todoElement.id);
    });
    todoList = idxArrange(cleanTodo);
    const todoHTMLson = todoListHTML.querySelectorAll("li")
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
      drawFinishFromTodo(addFinish[0].text);
    }

    todoList = idxArrange(cleanTodo);
    const todoHTMLson = todoListHTML.querySelectorAll("li")
    idxArrange(todoHTMLson);
    saveTodo();
    saveFinish();
  });

  todoElement.appendChild(span);
  todoElement.appendChild(delBtn);
  todoElement.appendChild(chkBtn);
  todoElement.id = todoIndex;
  todoListHTML.appendChild(todoElement);
}
function drawTodo(text) {
  const todoElement = document.createElement("li");
  const delBtn = document.createElement("button");
  const chkBtn = document.createElement("button");
  const span = document.createElement("span");

  const todoIndex = todoList.length + 1;
  delBtn.innerHTML = "❌";
  chkBtn.innerHTML = "✅";
  span.innerHTML = text;

  delBtn.addEventListener("click", (event) => {
    const todoElement = event.target.parentNode;
    todoListHTML.removeChild(todoElement);
    const cleanTodo = todoList.filter((todo) => {
      return todo.id !== parseInt(todoElement.id);
    });
    todoList = idxArrange(cleanTodo);
    const todoHTMLson = todoListHTML.querySelectorAll("li")
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
      drawFinishFromTodo(addFinish[0].text);
    }
    todoList = idxArrange(cleanTodo);
    const todoHTMLson = todoListHTML.querySelectorAll("li")
    idxArrange(todoHTMLson);
    saveTodo();
    saveFinish();
  });

  todoElement.appendChild(span);
  todoElement.appendChild(delBtn);
  todoElement.appendChild(chkBtn);
  todoElement.id = todoIndex;
  todoListHTML.appendChild(todoElement);

  const todoObj = {
    text: text,
    id: todoIndex,
  };
  todoList.push(todoObj);
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
      drawTodo(todo.text);
    });
  }
}

function loadFinish() {
  let loadFinishes = localStorage.getItem(FINISH);

  if (loadFinishes !== null) {
    loadFinishes = JSON.parse(loadFinishes);
    loadFinishes.forEach((finish) => {
      drawFinishFromLoad(finish);
    });
  }
}

function init() {
  loadTodo();
  loadFinish();
  todoForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const currentValue = todoInput.value;
    drawTodo(currentValue);
    todoInput.value = "";
  });
}

init();
