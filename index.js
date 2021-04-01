const submitHandler = (event) => {
  event.preventDefault();
  console.log("The form was submitted");
  // (one way to) Get the name input
  /* const parkName = document.querySelector("#name-input").value;
console.log(parkName); */
  // (other way to access all form data)
  const formData = new FormData(event.target);
  const name = formData.get("name");
  console.log(name);
};

const main = () => {
  // Get the form element
  const form = document.querySelector("#park-form");

  // Attach the submit handler
  form.addEventListener("submit", submitHandler);
};

//waits for html to load
window.addEventListener("DOMContentLoaded", main);
