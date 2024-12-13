const ListEl = document.querySelectorAll("ul#categories li.item");

console.log("numbers of categories: ", ListEl.length);

ListEl.forEach((elem) => {
  console.log("categories: ", elem.querySelector("h2").textContent);
  console.log("elemenrs: ", elem.querySelectorAll("li").length);
});
