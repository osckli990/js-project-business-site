//declaring variables. (with a constant?)
const email = document.getElementById("email");
const form = document.getElementById('form');
const correct = false

//add a listener to prevent default submit before validation
form.addEventListener("submit", event => {

  validateInputs();

  if (correct === false) {
    event.preventDefault();
  }
  else {
    NaN;
  }

});

//checks for valid email adress using const i found. Returns email i lowercase
const isValidEmail = email => {

  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

//the validate function. .trim removes whitespaces and shortens the value. ! = not. 
const validateInputs = () => {

  const emailValue = email.value.trim();

  if (!isValidEmail(emailValue)) {
    alert("not valid");
  }

  else {
    correct = true
  }
};

// Get the div, and when the user clicks on it, execute myFunction
document.getElementById("hidden-ham").onclick = function () { hamFunction() };

/* hamscript toggles between adding and removing the show class, which is used to hide and show the dropdown content */
function hamFunction() {
  document.getElementById("dropdown").classList.toggle("show");
  document.getElementById("bar-one").classList.toggle("change");
  document.getElementById("bar-two").classList.toggle("change");
  document.getElementById("bar-three").classList.toggle("change");
}








//ADD VALIDATION FOR FORM, ADD DARKMODE/LIGHTMODE