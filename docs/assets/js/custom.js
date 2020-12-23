(function($) {
	'use strict';
	
	// START MENU JS
	function mianMenu() {
		$('.navbar-nav li a').on('click', function(e){
			var anchor = $(this);
			$('html, body').stop().animate({
				scrollTop: $(anchor.attr('href')).offset().top - 50
			}, 1000);
			e.preventDefault();
		});
	
		$(document).on('click','.navbar-collapse.show',function(e) {
			if( $(e.target).is('a') && $(e.target).attr('class') != 'dropdown-toggle' ) {
				$(this).collapse('hide');
			}
		});	
	}

	function stickyHeader() {
		var nav = $('.main-navbar');
		var scrollFromtop = $(window).scrollTop();
		var scrollLimit = $('.main-navbar').height() + 50;

		if (scrollFromtop < scrollLimit) {
			nav.removeClass('menu-shrink');
		} else {
			nav.addClass('menu-shrink');
		}
	}

	// ===== 05. Popup video
	function popupVideo() {
		$('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
			disableOn: 300,
			type: 'iframe',
			mainClass: 'mfp-fade',
			removalDelay: 160,
			preloader: false,
			fixedContentPos: false
		});
	}

	// Odometer JS
	function odometerPlugin() {
		$('.odometer').appear(function(e) {
			var odo = $(".odometer");
			odo.each(function() {
				var countNumber = $(this).attr("data-count");
				$(this).html(countNumber);
			});
		});
    }

	// Tabs
	$('.tab ul.tabs').addClass('active').find('> li:eq(0)').addClass('current');
	$('.tab ul.tabs li').on('click', function (g) {
		var tab = $(this).closest('.tab'), 
		index = $(this).closest('li').index();
		tab.find('ul.tabs > li').removeClass('current');
		$(this).closest('li').addClass('current');
		tab.find('.tab-content').find('div.tabs-item').not('div.tabs-item:eq(' + index + ')').slideUp();
		tab.find('.tab-content').find('div.tabs-item:eq(' + index + ')').slideDown();
		g.preventDefault();
	});

	// Testimonials slider JS
	$('.testimonials-slider').owlCarousel({
		items: 1,
		loop: true,
		margin: 0,
		nav: true,
		autoplay: true,
		autoplayHoverPause: true,
		dots: false,
		navText: [
			"<i class='las la-long-arrow-alt-left'></i>",
			"<i class='las la-long-arrow-alt-right'></i>"
		]
	});
	
	// Go to Top
	$(window).on('scroll', function() {
        if ($(this).scrollTop() > 0) {
            $('.go-top').addClass('active');
        } else {
            $('.go-top').removeClass('active');
        }
	});	

	
	// ===== 19. Back to top
	function gtToTop() {
		$('.go-top').on('click', function(e) {
			$("html, body").animate({ scrollTop: "0" },  1200);
			e.preventDefault();
        });
	}

	/*---------------------
	=== DOCUMENT READY  ===
	----------------------*/
	$(document).ready(function () {
		mianMenu();
		popupVideo();
		odometerPlugin();
		//testimonialsSlider();
		gtToTop();
	});

	/*--------------------
	=== WINDOW SCROLL  ===
	----------------------*/
	$(window).on('scroll', function () {
		var scrolled = $(window).scrollTop();
        if (scrolled > 600) $('.go-top').addClass('active');
        if (scrolled < 600) $('.go-top').removeClass('active');
		stickyHeader()
	});

	/*------------------
	=== WINDOW LOAD  ===
	--------------------*/
	$(window).on('load', function () {
		//preloader();
		$(".preloader").fadeOut(500);
		new WOW().init();
	});

})(jQuery);