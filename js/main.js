$(document).ready(function(){

// Mobile hamburger menu
  $(".close, .hamburger").click(function(e){
    e.preventDefault();
    $(".main-nav").toggleClass('open-nav');
    $("body").toggleClass('nav-opened');
  });

  // Smooth scroll
  var scroll = new SmoothScroll('a[href*="#"]', {
	speed: 300
  });

  //Imagesslider
   $('.flexslider').flexslider();

});
