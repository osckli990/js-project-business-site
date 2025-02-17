//declaring variables. (with a constant?)
const email = document.getElementById("email");
const form = document.getElementById('form');

//add a listener to prevent default submit before validation
form.addEventListener("submit", event => {

  if (!validateInputs()) {
    event.preventDefault(); // Prevent form submission if validation fails
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
    alert("Not a valid email address");
    return false;
  }

  return true; // Validation passed
};

/*
This is the original code

Get the div, and when the user clicks on it, execute myFunction
document.getElementById("hidden-ham").onclick = function () { hamFunction() };

hamscript toggles between adding and removing the show class, which is used to hide and show the dropdown content 

function hamFunction() {
  document.getElementById("dropdown").classList.toggle("show");
  document.getElementById("bar-one").classList.toggle("change");
  document.getElementById("bar-two").classList.toggle("change");
  document.getElementById("bar-three").classList.toggle("change");
}
*/

/*improved code! with help from chatGPT. adds an event to listen for "click" on the element with id "hidden-ham". id with same class toggle are put in an array where they are cycled through to either remove or add the class "change"*/
document.getElementById("hidden-ham").addEventListener("click", function () {
  document.getElementById("dropdown").classList.toggle("show");
  ["bar-one", "bar-two", "bar-three"].forEach(id =>
    document.getElementById(id).classList.toggle("change")
  );
});






//ADD DARKMODE/LIGHTMODE. DISABLE SCROLLING DURING START ANIMATION