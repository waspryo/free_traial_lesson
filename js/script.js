/*===================================
              Animation
===================================*/
/* Pictures */
$('.wrapper li').on('click', function(){
  $('.wrapper li').toggleClass('plier');
	$(this).toggleClass('active');
});

// animate on scroll
$(function() {
  new WOW().init();
});

// Home animation on page load
$(window).on('load', function () {
  // Home
  $("#home-heading-1").addClass("animated fadeInDown");
  $("#home-heading-2").addClass("animated zoomIn");
  $("#home-intro").addClass("animated zoomIn");
  // Contents
  $("#contents h1").addClass("animated slideInLeft");
  $("#contents h2").addClass("animated slideInLeft");
  $("#contents-1 h1").addClass("animated zoomIn");
  $(".contents-1").addClass("animated slideInRight");
  $(".team-member").addClass("animated slideInDown");
  $(".top-sub-text").addClass("animated lideInsRight");
  // Pictures
  $("#pictures").addClass("animated fadeInDown");
});