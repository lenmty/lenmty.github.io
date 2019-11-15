//jQuery for page scrolling feature - requires jQuery Easing plugin 'easeInOutExpo'

$(function($) {
	const sections = $('.section'),
		  nav = $('.navigation'),
		  navHeight = nav.outerHeight();

	$(window).on('scroll', function(){
		const position = $(this).scrollTop();

		sections.each(function(){
			const top = $(this).offset().top;
			const bottom = top + $(this).height();
			
			const id = $(this).attr('id');

			if(position > top && position < bottom) {
				$('a.active').removeClass('active');
				$('a[href="#'+id+'"]').addClass('active');
			}
		})
	})
});

$(function() {
    $('a.page-scroll').bind('click', function(event) {
        const anchor = $(this).attr('href');

        $('html, body').stop().animate({
            scrollTop: $(anchor).offset().top
        }, 600);

        event.preventDefault();
    });
});





// <!-- Smooth Scroll -->	для html
// <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.js"></script>

// <script src="js/script.js"></script>
// <script src="js/jquery.easing.min.js"></script>