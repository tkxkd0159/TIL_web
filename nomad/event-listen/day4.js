// const screenSize = screen.width;

const myBody = document.querySelector("body");

const initFrameWidth = window.innerWidth;

function handleResize() {
  const currentFrameWidth = window.innerWidth;
  if (currentFrameWidth < initFrameWidth / 2) {
    myBody.id = "bodySmall";
  } else if (
    currentFrameWidth >= initFrameWidth / 2 &&
    currentFrameWidth <= (initFrameWidth * 3) / 4
  ) {
    myBody.id = "bodyMedium";
  } else {
    myBody.id = "";
  }
}

function main() {
  window.addEventListener("resize", handleResize);
}

main();
