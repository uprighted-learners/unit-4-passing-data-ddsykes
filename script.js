const computerResponse = document.getElementById("computer-response");
const userInput = document.getElementById("user-input");
const nameForm = document.getElementById("name-form");

const enemies = ["voldemort", "darth vader", "lex luthor"];

nameForm.addEventListener("submit", (event) => {
  event.preventDefault();

  let name = userInput.value;

  if (enemies.includes(name.toLowerCase())) {
    computerResponse.textContent = "Go away!";
  } else {
    document.location = `/greeting.html?name=${name}`;
  }
});
