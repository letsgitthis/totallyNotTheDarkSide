
// this runs carousel - test click function
$(document).ready(function () {
  $(".carousel.carousel-slider").carousel({
      fullWidth: true,
      indicators: true,
  });
});


// this runs materialbox, but does not effect youtube videos
$(document).ready(function () {
  $(".materialboxed").materialbox();
});


//  this runs parallax
$(document).ready(function () {
  $(".parallax").parallax();
});


// this runs the dropdown
$(document).ready(function () {
  $('.collapsible').collapsible();
});

// this runs the mobile side bar
$(document).ready(function () {
  $('.sidenav').sidenav();
});
