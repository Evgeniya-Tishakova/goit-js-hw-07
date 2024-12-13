const inputEl = document.querySelector("input#name-input");
const spanEl = document.querySelector("span#name-output");

const handleInput = () => {
  console.log(inputEl.value);
  const str = inputEl.value.trim();
  if (str.length < 1) {
    spanEl.textContent = "Anonymous";
    return;
  }
  spanEl.textContent = str;
};

inputEl.addEventListener("input", handleInput);
