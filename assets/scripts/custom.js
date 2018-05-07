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
/*
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
*/


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

