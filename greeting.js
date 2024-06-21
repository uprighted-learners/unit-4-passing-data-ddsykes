const friendGreeting = document.querySelector("#friend-greeting");

// Getting the name from the URL
const params = new URLSearchParams(document.location.search);
const friendName = params.get("name");

friendGreeting.textContent = `Welcome ${friendName}!`;
