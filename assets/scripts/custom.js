$(document).ready(function() {
  
  /*just toggle*/
  $('.toggleTrigger').click(function(event) {
    event.preventDefault();
    $('.toggleWrap').slideToggle();
  });

  /*Collapsable*/
  // $(".collapsable h3").on('click', function(event){
  //   event.preventDefault();
  //   $(this).closest('.collapsable').find('.collapse').stop().slideToggle('fast');
  //   $(this).closest('.collapsable').find('.h3 span').stop().toggleClass('fa-angle-down fa-angle-up');
  // });

  /*Categories Panel Collapsable*/
  // $(".collapsable a").on('click', function(event){
  //   event.preventDefault();
  //   $(this).closest('.collapsable').find('.nav-tab-line').stop().slideToggle('fast');
  //   $(this).closest('.collapsable').find('.check-circle span').stop().toggleClass('fa-angle-right fa-angle-down');
  // });

});



$(window).load(function() {
  
});

// wow animation
var wow = new WOW(
  {
    boxClass:     'wow',      // animated element css class (default is wow)
    animateClass: 'animated', // animation css class (default is animated)
    offset:       0,          // distance to the element when triggering the animation (default is 0)
    mobile:       true,       // trigger animations on mobile devices (default is true)
    live:         true,       // act on asynchronously loaded content (default is true)
    callback:     function(box) {
      // the callback is fired every time an animation is started
      // the argument that is passed in is the DOM node being animated
    },
    scrollContainer: null // optional scroll container selector, otherwise use window
  }
);
wow.init();



/*Plain JS*/

/*Year for Footer*/
function showCurrentYear() {
  var yearFormula = new Date().getFullYear();
  return yearFormula;
}
document.getElementById("yearJS").innerHTML = showCurrentYear();

/*if window is resized - check*/
$(window).resize(function(){
  // code here
});


/* animate to top */
$('.top').click(function () {$('body,html').animate({scrollTop: 0}, 800,'easeInOutExpo');
      return false;
});


/*
// stick header starts
$(window).scroll(function() {    
    var scroll = $(window).scrollTop();

    if (scroll >= 10) {
        $(".navbar-fixed-top").addClass("top-opacity");
    } else {
        $(".navbar-fixed-top").removeClass("top-opacity");
    }
});
// stick header ends
*/

/////// Bootstrap Accordian FIX - move control to the top of opened tab - onclick - start
$('#accordion').on('shown.bs.collapse', function (e) {

  // Validate this panel belongs to this accordian, and not an embedded one
  var actualAccordianId = $('a[href="#' + $(e.target).attr('id') + '"').data('parent');
  var targetAccordianId = '#' + $(this).attr('id');
  if (actualAccordianId !== targetAccordianId) return;

  var clickedHeader = $(this).find('.panel > .collapse.in').closest('.panel').find('.panel-heading');
  var offset = clickedHeader.offset();
  var top = $(window).scrollTop();
  if(offset) {
    var topOfHeader = offset.top;
    if(topOfHeader < top) {
      $('html,body').animate({ scrollTop: topOfHeader}, 100, 'swing');
    }
  }
});
/////// Bootstrap Accordian FIX - move control to the top of opened tab - onclick - end

/*
// jquery tabs
$(function() { $( "#tabs" ).tabs(); });
// jquery tabs
// stop jerk on click # based links
$('#tabs a').click(function(event) {
event.preventDefault();
});
// stop jerk on click # based links ends

// ADD SLIDEDOWN ANIMATION TO DROPDOWN 
$('.dropdown').on('show.bs.dropdown', function(e){
  $(this).find('.dropdown-menu').first().stop(true, true).slideDown("slow");
});

// ADD SLIDEUP ANIMATION TO DROPDOWN //
$('.dropdown').on('hide.bs.dropdown', function(e){
  $(this).find('.dropdown-menu').first().stop(true, true).slideUp("fast");
});

// bootstrap accordian - toggle icons - help page
var selectIds = $('#collapseOne,#collapseTwo,#collapseThree,#collapseFour,#collapseFive,#collapseSix,#collapseSeven,#collapseEight,#collapseNine,#collapseTen');
$(function ($) {
    selectIds.on('show.bs.collapse hidden.bs.collapse', function () {
        $(this).prev().find('.glyphicon').toggleClass('glyphicon-plus glyphicon-minus');
    })
});
// bootstrap accordian - toggle icons - help page
*/