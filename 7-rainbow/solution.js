let button = document.querySelector(".shine-button");
let list = document.querySelector(".list");
let item = document.querySelectorAll("li");
let colors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];

button.addEventListener("click", () => {
  for (var i = 0; i < colors.length; i++) {
    item[i].style.color = colors[i];
  }
});
