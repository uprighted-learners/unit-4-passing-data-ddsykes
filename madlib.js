//create a madlib Js File

window.onload = function () {
  const params = new URLSearchParams(document.location.search);
  const friendName = params.get("name");
  const verb = params.get("verb");
  const adjective = params.get("adjective");
  const madlibElement = document.getElementById("madlib-result");

  if (friendName && verb && adjective) {
    madlibElement.textContent = `${friendName} ${verb} ${adjective}`;
  } else {
    madlibElement.textContent = "Incomplete Mad Lib";
  }
};
