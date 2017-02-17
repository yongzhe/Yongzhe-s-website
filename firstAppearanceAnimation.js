// inspiration from http://www.sitepoint.com/scroll-based-animations-jquery-css3/

var $animation_elements = $('.animated');
var $window = $(window);

function check_if_in_view() {
  var window_height = $window.height();
  var window_top = $window.scrollTop();
  var window_bottom = (window_top + window_height);
 
  $.each($animation_elements, function() {
    var $element = $(this);
    var element_height = $element.outerHeight();
    var element_top = $element.offset().top;
    var element_bottom = (element_top + element_height);
 
    //is the current container within viewport?
    if ((element_bottom >= window_top) &&
        (element_top <= window_bottom)) {
        $element.addClass('go');
    } 
  });
}

$window.on('scroll resize', check_if_in_view);
$window.trigger('scroll');