$(document).ready(function () {

	// Start Slider

	var winH = $(window).height();

	$('.carousel-inner > .carousel-item').height(winH);

	// End Slider


	// Start Change Color

	$('.change-color > i').on('click', function() {
		$(this).parent().toggleClass('show');
	});

	$('.change-color > li').on('click', function() {

		$(':root').css('--mainColor', $(this).data('color'));

	});

	// End Change Color

	// Start Loading Page

	$(window).on('load', function() {
		$('.loading-page').fadeOut(2500);
	});

	// End Laoding Page

	// Start Scroll To Top

	var offset 		= 1000,
		duration 	= 1500;

	$(window).scroll(function() {

		if ($(this).scrollTop() > offset) {
			$('.scroll-to-top').fadeIn(duration);
		} else {
			$('.scroll-to-top').fadeOut(duration);
		}

		$('::-webkit-scrollbar').css('width', '50px');

	});

	$('.scroll-to-top').click(function () {
		$('html, body').animate({scrollTop: 0}, duration);
	});

	// End Scroll To Top

});
