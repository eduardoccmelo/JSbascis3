const data = [];

let form = document.querySelector("form");
let button = document.querySelector("button");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  let person = {
    name: form["name"].value,
    age: form["age"].value,
    married: form["married"].checked,
    hobbies: form["hobbies"].value,
  };
  console.log(form["name"].value);
  console.log(form["age"].value);
  console.log(form["married"].checked);
  console.log(form["hobbies"].value);
  form.reset();
  data.push(person);
});
