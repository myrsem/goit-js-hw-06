const controlFont = document.querySelector("#font-size-control");

const text = document.querySelector("#text");

controlFont.oninput = function() {
  text.style.fontSize = controlFont.value + "px";
};