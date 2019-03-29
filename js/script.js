/*===================================
              preloader
===================================*/
$(window).on('load', function() { // make sure that whole site is loaded
  $('#status').fadeOut();
  $('#preloader').delay(350).fadeOut('slow');
});

// init Isotope
var $grid = $('.grid').isotope({
  // options
});
// filter items on button click
$('.filter-button-group').on( 'click', 'button', function() {
  var filterValue = $(this).attr('data-filter');
  $grid.isotope({ filter: filterValue });
});
/*===================================
              Portfolio
===================================*/
$(window).on('load', function () {
  $("#isotope-container").isotope({
  });
  // filter items on button click
  $('.filter-button-group').on('click', 'button', function(){
    // get filter Value
    var filterValue = $(this).attr('data-filter');
    // filter portfolio
    $("#isotope-container").isotope({
        filter: filterValue

    });
    //active button
    $('.filter-button-group').find('.active').removeClass('active');
    $(this).addClass('active');
  });
});

/*===================================
              Magnifiler
===================================*/
$(function() {
  $("#portfolio-wrapper").magnificPopup({
    delegate: 'a', // child items selector, by clicking on it popup will open
    type: 'image',
    gallery: {
      enabled: true
    }
  });
});

/*===================================
           Navigation Bar
===================================*/
/* Show & Hide White Navigation */
$(function() {

  // show/hide nav on page load
  showHideNav();

  $(window).scroll(function() {

    // show/hide nav on window's scroll
    showHideNav();
  });

  function showHideNav() {
    if ($(window).scrollTop() > 0) {

      //Show back to top botton
      $("#toTopScroll").fadeIn();
    } else {

      //Hide back to top botton
      $("#toTopScroll").fadeOut();
    }
  }
});

// Smooth Scrolling
$(function() {
  $("a.smooth-scroll").click(function(even) {
    event.preventDefault();
    // get section id like #about, #services, #work, #team and etc.
    var section_id = $(this).attr("href");

    $("html, body").animate({
      scrollTop: $(section_id).offset().top - 64
    }, 1250, "easeInOutExpo");
  });
});

/*===================================
              Animation
===================================*/
// animate on scroll
$(function() {
  new WOW().init();
});

// Home animation on page load
$(window).on('load', function () {
  $("#heading-portfolio").addClass("animated fadeInDown");
  $("#isotope-filters").addClass("animated fadeInDown");
});

