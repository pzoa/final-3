var nav = document.getElementById('main-nav');
var menu = document.getElementById('menu');
menu.addEventListener('click', function () {
  'use strict';
  nav.classList.toggle('mostrar');
});

$(".menu-bar").click(function() {
			event.preventDefault();
			if($(".nav").hasClass("visible")) {
				$(".nav").removeClass("visible");
				} else {
					$(".nav").addClass("visible");
				}
		});

