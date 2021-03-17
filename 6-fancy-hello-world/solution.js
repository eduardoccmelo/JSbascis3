let input = document.querySelector(".controls__input");
let title = document.querySelector(".header__text");

input.addEventListener("input", () => {
  if (!input.value) {
    title.textContent = "Hello World";
  } else {
    title.textContent = `Hello World, ${input.value}`;
  }
});
