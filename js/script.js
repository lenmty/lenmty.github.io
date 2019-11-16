// scroll nav with active tab
$(function($) {
	const sections = $('.section'),
		nav = $('.navigation'),
		navHeight = nav.outerHeight();

	$(window).on('scroll', function(){
		const position = $(this).scrollTop();

		sections.each(function(){
			const top = $(this).offset().top - navHeight;
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


// carousel
const rules = $('.rules div');
var i = 0;

$('a.prev').bind('click', function(event){
	rules[i].className = '';
    i--;
     
    if(i < 0){
        i = rules.length - 1;
    }
 
	rules[i].className = 'active';
});

$('a.next').bind('click', function(event){
	rules[i].className = '';
    i++;
     
    if(i >= rules.length){
    	i = 0;
 	}
 
	rules[i].className = 'active';
});