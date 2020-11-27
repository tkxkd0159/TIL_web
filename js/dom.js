// const title = document.getElementById("title");
// document.title = "Change Webpage title"
// const title = document.querySelector("#title");
// title.innerHTML = "Change my Title"
// title.style.color = "red"
// console.dir(document)
// console.log("title : ", title)
// console.error("fuck")

// function handleResize(event){
//     console.log(event);
// }
// window.addEventListener("resize", handleResize);

// function handleClick(){
//     title.style.color = "blue";
// }
// window.addEventListener("click", handleClick);

const title = document.querySelector("h2");
const colors = ["#1abc9c", "#3498db", "#9b59b6", "#f39c12", "#e74c3c"];
const superEventHandler = {
  hover: function () {
    title.style.color = colors[0];
    title.innerHTML = "The mouse is here!";
  },
  leave: function () {
    title.style.color = colors[1];
    title.innerHTML = "The mouse is gone!";
  },
  resize: function () {
    title.style.color = colors[2];
    title.innerHTML = "You just resized!";
  },
  rclick: function () {
    title.style.color = colors[3];
    title.innerHTML = "That was right click!";
  },
};

function myFunction() {
  document.getElementById("myCheck2").click();
}

title.addEventListener("mouseover", superEventHandler.hover);
title.addEventListener("mouseout", superEventHandler.leave);
window.addEventListener("resize", superEventHandler.resize);
window.addEventListener("contextmenu", superEventHandler.rclick);
