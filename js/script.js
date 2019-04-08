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

$(window).on('load', function () {
  // Home
  $("#home-heading-1").addClass("animated fadeInDown");
  $("#home-heading-2").addClass("animated zoomIn");
  $("#home-intro").addClass("animated zoomIn");
  // Contents
  $("#contents h1").addClass("animated slideInLeft");
  $("#contents-1 h1").addClass("animated zoomIn");
  $(".contents-1").addClass("animated slideInRight");
  $("#contents-2 h1").addClass("animated lideInsRight");
  // Pictures
  $("#pictures").addClass("animated ");
});
/*===================================
           Animation Lists
===================================
/* Animation Link
https://daneden.github.io/animate.css/
———————————*/

/* ====== Animation Lists ====== */
/* Attention Seekers

bounce	flash	pulse	rubberBand
shake	headShake	swing	tada
wobble	jello heartBeat	
---------------------------------*/
/* Bouncing Entrances
          
bounceIn	bounceInDown
bounceInLeft	bounceInRight	bounceInUp
---------------------------------*/
/* Bouncing Exits
          
bounceOut bounceOutDown	bounceOutLeft
bounceOutRight	bounceOutUp
---------------------------------*/
/* Fading Entrances

fadeIn	fadeInDown	fadeInDownBig	
fadeInLeft fadeInLeftBig 
fadeInRight	fadeInRightBig	
fadeInUp fadeInUpBig
---------------------------------*/
/* Fadein Exits
          
fadeOut	fadeOutDown	fadeOutDownBig
fadeOutLeft	fadeOutLeftBig	
fadeOutRight	fadeOutRightBig
fadeOutUp	fadeOutUpBig
---------------------------------*/
/* Flippers
          
flipInX	flipInY flipOutX	flipOutY
---------------------------------*/
/* Rotating Entrances
          
rotateIn	rotateInDownLeft	
rotateInDownRight	rotateInUpLeft
rotateInUpRight
---------------------------------*/
/* Rotating Exits
          
rotateOut	rotateOutDownLeft	
rotateOutDownRight
rotateOutUpLeft	rotateOutUpRight
---------------------------------*/
/* Sliding Entrances
          
slideInDown	slideInLeft	slideInRight	
slideInUp
---------------------------------*/
/* Slideing Exits
          
slideOutDown	slideOutLeft	
slideOutRight	slideOutUp
---------------------------------*/
/* Zoom Entrances
          
zoomIn	zoomInDown
zoomInLeft	zoomInRight	zoomInUp
---------------------------------*/
/* Zoom Exits
          
zoomOut zoomOutDown	zoomOutLeft	
zoomOutRight	zoomOutUp
---------------------------------*/
/* Specials 
          
hinge	jackInTheBox rollIn	rollOut
---------------------------------*/
