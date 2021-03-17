let button = document.querySelector(".show-hide-button");
let box = document.querySelector(".box");

button.addEventListener("click", (event) => {
  box.classList.toggle("hidden");
  if (button.textContent === "Hide") {
    button.textContent = "Show";
  } else {
    button.textContent = "Hide";
  }
  // COMPACT SOLUTION
  // event.target.textContent =
  //   event.target.textContent == "Hide" ? "Show" : "Hide";
});
