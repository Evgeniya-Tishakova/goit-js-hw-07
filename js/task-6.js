function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

// Є input, у який користувач вводить бажану кількість елементів.

const inputEl = document.querySelector('#controls input[type="number"]');
const createButton = document.querySelector("#controls [data-create]");
const destroyButton = document.querySelector("#controls [data-destroy]");
const boxesEl = document.querySelector("#boxes");

const handleCreateButtonClick = () => {
  boxesEl.innerHTML = createBoxes(inputEl.value);
};

// Після натискання на кнопку Create
createButton.addEventListener("click", handleCreateButtonClick);
// Після натискання на кнопку Destroy
destroyButton.addEventListener("click", destroyBoxes);

function createBoxes(amount) {
  let res = "";

  for (let i = 0; i < amount; i++) {
    res += `<div style="width: ${30 + i * 10}px; height: ${
      30 + i * 10
    }px; background-color: ${getRandomHexColor()}"></div>`;
  }
  inputEl.value = "";
  return res;
}

function destroyBoxes() {
  boxesEl.innerHTML = "";
  inputEl.value = "";
}
