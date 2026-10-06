let randomColor = document.querySelector(".randomColor");
let applyColor = document.querySelector(".applyColor");
let colorInput = document.querySelector("#colorInput");
let currentColor = document.querySelector(".currentColor span");
let body = document.querySelector("body");

let newColor;

const gernerateRandomColor = () => {
  let n = Math.floor(Math.random() * 0xfffff * 1000000 ).toString(16)

  return '#' + n.slice(0, 6)
};

const randomColorFunc = () => {
  newColor = gernerateRandomColor();

  body.style.backgroundColor = newColor;

  if (body.style.backgroundColor) {
    currentColor.textContent = newColor;
    colorInput.value = "";
  } else {
    currentColor.textContent = `${newColor} is not valid color.`;
  }
}

const applyColorFunc =  () => {
  newColor = colorInput.value.trim().toLowerCase();

  if (!newColor) {
    return;
  }

  body.style.backgroundColor = newColor;

  if (body.style.backgroundColor === newColor) {
    currentColor.textContent = newColor;
    colorInput.value = "";
  } else {
    currentColor.textContent = `${newColor} is not valid color.`;
  }
}

const applyColorKeyFunc = (event) => {
  if (event.key === "Enter") {
    newColor = colorInput.value.trim().toLowerCase();

    if (!newColor) {
      return;
    }

    body.style.backgroundColor = newColor;

    if (body.style.backgroundColor === newColor) {
      currentColor.textContent = newColor;
      colorInput.value = "";
    } else {
      currentColor.textContent = `${newColor} is not valid color.`;
    }
  }
}

randomColor.addEventListener("click", randomColorFunc);

applyColor.addEventListener("click", applyColorFunc);

colorInput.addEventListener("keydown",applyColorKeyFunc);