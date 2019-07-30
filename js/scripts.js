var navMenu = document.querySelector(".nav-menu");
navMenu.classList.add('hidden');

var navMenuIcon = document.querySelector(".nav-hamburger");
navMenuIcon.classList.add("hidden");

// determine to show full menu or icon
var hidden = true;
function menuHandler() {
	if(!hidden) {
		navMenu.classList.add('hidden');
	} else {
		navMenu.classList.remove('hidden');
		navMenu.classList.add('mobile');
	}
	hidden = !hidden;
}
function reportWindowSize() {
  var width = window.innerWidth;

  if(width < 900) {
  	navMenuIcon.classList.remove('hidden');
	navMenu.classList.add('hidden');
  } else {
  	navMenuIcon.classList.add('hidden');
	navMenu.classList.remove('mobile');
	navMenu.classList.remove('hidden');
  }
}

navMenuIcon.onclick = menuHandler;
window.onresize = reportWindowSize;
reportWindowSize();