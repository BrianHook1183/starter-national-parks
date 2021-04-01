// *Validation
//  returns true if the value is not null and the string contains at least one none-space character
function validateExists(value) {
  return value && value.trim();
}

// validate that a given value is actually a number
function validateNumber(value) {
  return !isNaN(value);
}
// validates the number in a specific range.
function validateRange(value, min, max) {
  return value >= min && value <= max;
}

function validateForm(formData) {
  const errors = {};

  // check if name was entered
  if (!validateExists(formData.get("name"))) {
    errors.name = "Please enter a name";
  }

  // check if rating was entered
  if (!validateExists(formData.get("rating"))) {
    errors.rating = "Please enter a rating";
  } else {
    //check if the rating is a number
    if (!validateNumber(formData.get("rating"))) {
      errors.rating = "Rating must be a number";
    } else {
      // since it is a number, convert it
      const rating = Number.parseFloat(formData.get("rating"));
      //check that the rating is between 1 and 5 inclusive
      if (!validateRange(rating, 1, 5)) {
        errors.rating = "Rating must be between 1 and 5 inclusive";
      }
    }
  }

  // check if description was entered
  if (!validateExists(formData.get("description"))) {
    errors.description = "Please enter short description";
  }

  // check if established date was entered
  if (!validateExists(formData.get("established"))) {
    errors.established = "Please enter date";
  }

  // check if area was entered
  if (!validateExists(formData.get("area"))) {
    errors.area = "Please enter the area of the park";
  }

  // check if location date was entered
  if (!validateExists(formData.get("location"))) {
    errors.location = "Please enter the location of the park";
  }

  return errors;
}

const submitHandler = (event) => {
  event.preventDefault();

  const form = event.target;
  const formData = new FormData(form);

  const errors = validateForm(formData);

  // clear all previous errors
  const errorElements = document.querySelectorAll(".error");
  for (let element of errorElements) {
    element.style.display = "none";
  }

  // display any new errors
  Object.keys(errors).forEach((key) => {
    // find the specific error element
    const errorElement = document.querySelector(`#${key}-form .error`);
    errorElement.innerHTML = errors[key];
    errorElement.style.display = "block";
  });
};

const main = () => {
  // Get the form element
  const form = document.querySelector("#park-form");

  // Attach the submit handler
  form.addEventListener("submit", submitHandler);
};

//waits for html to load
window.addEventListener("DOMContentLoaded", main);
