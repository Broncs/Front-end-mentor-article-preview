const button = document.querySelector(".avatar ul img");
const popUp = document.querySelector(".pop-up");
const flexPop = document.querySelector(".pop-flex");

let state = (popUp.style.visibility = "hidden");
button.addEventListener("click", showing);

function showing() {
  let width = displayWidth();
  if (state == (popUp.style.visibility = "hidden")) {
    state = popUp.style.visibility = "visible";
    if (width < 600) {
      button.style.background = "#fff";
    } else {
      button.style.background = "hsl(217, 19%, 35%)";
    }
  } else if (state == (popUp.style.visibility = "visible")) {
    state = popUp.style.visibility = "hidden";
    button.style.background = "hsl(210, 46%, 95%)";
  }
}

window.addEventListener("resize", displayWidth);

function displayWidth() {
  let w = document.documentElement.clientWidth;
  return w;
}
