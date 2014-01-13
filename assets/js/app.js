// Foundation JavaScript
// Documentation can be found at: http://foundation.zurb.com/docs
$(document).foundation();
$(document).ready(function(){
	$('header').delay(5000).addClass('animate');
	$('header .base img').hover(function(){
		$('header').addClass('hover');
	});
	$('header .base img').mouseout(function(){
		$('header').removeClass('hover');
	});
});
