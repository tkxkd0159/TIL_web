const title = document.querySelectorAll(".jstest");

const BASE_COLOR = "rgb(52, 73, 94)";
const intFrameWidth = window.innerWidth;
const outFrameWidth = window.outerWidth;

function handleHover() {
  let myLink = document.querySelector("#myLink");
  if (myLink === null) {
    myLink = document.querySelector("#myLinkOff");
  }

  const currentClass = myLink.className;
  console.log(`Current classes are : ${currentClass}`);
  const hasTestClass = myLink.classList.contains("test");
  if (hasTestClass) {
    myLink.classList.remove("test");
    myLink.classList.toggle("test2");   // 해당 class가 있으면 remove 없으면 add
  } else {
    myLink.classList.add("test");
  }

  const currentID = myLink.id;

  if (currentID !== "myLink") {
    myLink.id = "myLink";
  } else {
    myLink.id = "myLinkOff";
  }

  const currentColor = [];
  for (let i = 0; i < title.length; i++) {
    currentColor[i] = title[i].style.color;

    if (currentColor[i] === BASE_COLOR) {
      title[i].style.color = "#9b59b6";
    } else {
      title[i].style.color = BASE_COLOR;
    }
  }
}

function init() {
  for (let i = 0; i < title.length; i++) {
    title[i].style.color = BASE_COLOR;
    title[i].addEventListener("mouseenter", handleHover);
    title[i].addEventListener("mouseleave", handleHover);
  }
  title[0].innerHTML = `Google : <a href="https://google.com" target="_blank"><span id="myLink">${intFrameWidth} + ${outFrameWidth}</span></a>`;

  window.addEventListener("online", (event) => {
    console.log("You are now connected to the network.");
  });
}

init();
