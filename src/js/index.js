//side navigation onClick functions
function openNav() {
  document.getElementById("sidenav").style.display = "block";
  document.getElementById("sidenav").style.transitionDuration = "2s";
}

function closeNav() {
  document.getElementById("sidenav").style.display = "none";
  document.getElementById("sidenav").style.transitionDuration = "2s";
}

//sticky nav
window.onscroll = function () {
  myFunction();
};
/*
// Get the navbar
var navbar = document.getElementById("menu");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}
*/
