// Your code goes here
window.onload = function () {
  const params = new URLSearchParams(document.location.search);
  const friendName = params.get("name");
  const greetingElement = document.getElementById("friend-greeting");

  if (friendName) {
    greetingElement.textContent = `Hello this is, ${friendName}! Welcome to the website`;
  } else {
    greetingElement.textContent = "Hello, friend! And welcome to the website";
  }
  document
    .getElementById("madlib-form")
    .addEventListener("submit", function (e) {
      e.preventDefault();
      const verb = document.getElementById("verb-input").value.trim();
      const adjective = document.getElementById("adjective-input").value.trim();
      if (verb && adjective) {
        document.location.href = `/madlib.html?name=${encodeURIComponent(
          friendName
        )}&verb=${encodeURIComponent(verb)}&adjective=${encodeURIComponent(
          adjective
        )}`;
      }
    });
};
