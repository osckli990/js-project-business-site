// Get the div, and when the user clicks on it, execute myFunction
document.getElementById("hidden-ham").onclick = function () { hamFunction() };

/* hamscript toggles between adding and removing the show class, which is used to hide and show the dropdown content */
function hamFunction() {
  document.getElementById("dropdown").classList.toggle("show");
  document.getElementById("bar-one").classList.toggle("change");
  document.getElementById("bar-two").classList.toggle("change");
  document.getElementById("bar-three").classList.toggle("change");
}
