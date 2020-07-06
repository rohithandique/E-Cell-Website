//side navigation onClick functions
function openNav() {
  document.getElementById("sidenav").style.display = "block";
  document.getElementById("sidenav").style.transitionDuration = "2s";
}

function closeNav() {
  document.getElementById("sidenav").style.display = "none";
  document.getElementById("sidenav").style.transitionDuration = "2s";
}

//sticky header on scroll
window.onscroll = function () {
  myFunction();
};
var header = document.getElementById("header");
var sticky = header.offsetTop;
function myFunction() {
  if (window.pageYOffset >= sticky) {
    header.classList.add("sticky");
  }
}
