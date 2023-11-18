window.addEventListener("scroll", function () {
  toggleBacktop();
});

let backtop = document.getElementById("backtop");

function toggleBacktop() {
  if (
    document.body.scrollTop > 200 ||
    document.documentElement.scrollTop > 200
  ) {
    backtop.classList.add('backtop-show')
  } else {
    backtop.classList.remove('backtop-show')
  }
}


window.addEventListener("scroll", function () {
  shrink();
});

let navbar = document.getElementById("navbar");

function shrink() {
  if (scrollY > 100) {
    navbar.classList.add("navbar-shrink");
  } else {
		navbar.classList.remove("navbar-shrink");
	}
}


$(document).ready(function () {
  $("#team-carousel").owlCarousel({
    margin: 30,
    loop: true,
    nav: true,
    navText: ['<img src="./imges/prev.svg"/>', '<img src="imges/next.svg"/>'],
    dots: true,
    items:3,

    responsive: {
      280: {
        items: 1,
      },
      800: {
        items: 2,
      },
      1100: {
        items: 3,
      }
    }
    
  });
});

AOS.init();