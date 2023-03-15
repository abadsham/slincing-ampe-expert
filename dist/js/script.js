// Hamburger

const hamburger = documen.querySelector('#hamburger');

hamburger.addEventListener('click', function() {
    hamburger.classList.toggle('hamburger-active')
})

function myFunction() {
  var x = document.getElementById("navbar-default");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}