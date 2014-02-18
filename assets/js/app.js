
// Foundation JavaScript
// Documentation can be found at: http://foundation.zurb.com/docs
$(document).foundation();
$(document).ready(function(){
	$('.top-bar-section a,section.title a').each(function(i,el){

		$(el).attr('goto',$(el).attr('href'));
		$(el).attr('href','javascript:void(0);');

		$(el).on('click', function(e) {
			e.preventDefault();
			$(window).scrollTo($($(e.currentTarget).attr('goto')), 800 );
		});

	});
	$(document).on('opened', '[data-reveal]', function () {
	  var modal = $(this);
	  $(modal).find('video').get(0).play();
	});

	$(document).on('closed', '[data-reveal]', function () {
	  var modal = $(this);
	  $(modal).find('video').get(0).pause();
	});
	
	
	$(window).scroll(function() {
	        var titlePos = $('section.title').position();

		if( (titlePos.top+$('.title').outerHeight())-($window.scrollTop()+$window.height())<=0 ){
			$('section.title').css('background-attachment','scroll');
		}else{
			$('section.title').css('background-attachment','fixed');
		}
			
	});
});


