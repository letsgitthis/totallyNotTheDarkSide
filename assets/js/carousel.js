
// Fixed responsiveness resizing bug, 
// now need to add click responsiveness to move left and right without swiping 
  // test click function
 $(document).ready(function () {
   $(".carousel.carousel-slider").carousel({
       fullWidth: true,
       indicators: true,
   });
 });


// this is javascript for materialbox
//   document.addEventListener("DOMContentLoaded", function () {
//     var elems = document.querySelectorAll(".materialboxed");
//     var instances = M.Materialbox.init(elems, options);
//   });

  // Or with jQuery

// this runs materialbox, but does not effect youtube videos
  $(document).ready(function () {
    $(".materialboxed").materialbox();
  });

// this is the javascript for parallax
//   document.addEventListener("DOMContentLoaded", function () {
//     var elems = document.querySelectorAll(".parallax");
//     var instances = M.Parallax.init(elems, options);
//   });

  // Or with jQuery

//   this runs parallax
  $(document).ready(function () {
    $(".parallax").parallax();
  });