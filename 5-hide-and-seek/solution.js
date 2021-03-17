let button = document.querySelector(".show-hide-button");
let box = document.querySelector(".box");

button.addEventListener("click", (event) => {
  box.classList.toggle("hidden");
  event.target.textContent =
    event.target.textContent == "Hide" ? "Show" : "Hide";
});
