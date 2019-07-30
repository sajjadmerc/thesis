var navMenu = document.querySelector(".nav-menu");
navMenu.classList.add('hidden');

var navMenuIcon = document.querySelector(".nav-hamburger");
navMenuIcon.classList.add("hidden");

// determine to show full menu or icon
function reportWindowSize() {
  var width = window.innerWidth;

  if(width < 900) {
  	navMenuIcon.classList.remove('hidden');
	navMenu.classList.add('hidden');
  } else {
  	navMenuIcon.classList.add('hidden');
	navMenu.classList.remove('hidden');
  }
}

window.onresize = reportWindowSize;
reportWindowSize();