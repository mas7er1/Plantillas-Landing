/* 
Template Name: Robotix
*/

(function($) { 

"use strict";

	/*PRELOADER JS*/
	$(window).on('load', function() { 
		$('.status').fadeOut();
		$('.preloader').delay(350).fadeOut('slow'); 
	});		
	
	
	// Active Slick Nav 			
	$('.navigation').slicknav({
		label: '',
		duration: 1000,
		easingOpen: "easeOutBounce", //available with jQuery UI
		prependTo:'#mobile_menu',
		closeOnClick: true,
		easingClose:"swing", 
		easingOpen:"swing", 
		openedSymbol: "&#9660;",
		closedSymbol: "&#9658;" 	
	});
	
	//On Scroll Functionality
	$(window).scroll( () => {
		var windowTop = $(window).scrollTop();
		windowTop > 100 ? $('#header-area').addClass('navShadow') : $('#header-area').removeClass('navShadow');
		
	});
			
	// YouTubePopUp		
	jQuery("a.vid_btn").YouTubePopUp({ autoplay: 0 });
	
	$(document).ready(function(){"use strict";
	
		//Scroll back to top
		
		var progressPath = document.querySelector('.progress-wrap path');
		var pathLength = progressPath.getTotalLength();
		progressPath.style.transition = progressPath.style.WebkitTransition = 'none';
		progressPath.style.strokeDasharray = pathLength + ' ' + pathLength;
		progressPath.style.strokeDashoffset = pathLength;
		progressPath.getBoundingClientRect();
		progressPath.style.transition = progressPath.style.WebkitTransition = 'stroke-dashoffset 10ms linear';		
		var updateProgress = function () {
			var scroll = $(window).scrollTop();
			var height = $(document).height() - $(window).height();
			var progress = pathLength - (scroll * pathLength / height);
			progressPath.style.strokeDashoffset = progress;
		}
		updateProgress();
		$(window).scroll(updateProgress);	
		var offset = 50;
		var duration = 550;
		jQuery(window).on('scroll', function() {
			if (jQuery(this).scrollTop() > offset) {
				jQuery('.progress-wrap').addClass('active-progress');
			} else {
				jQuery('.progress-wrap').removeClass('active-progress');
			}
		});				
		jQuery('.progress-wrap').on('click', function(event) {
			event.preventDefault();
			jQuery('html, body').animate({scrollTop: 0}, duration);
			return false;
		})
		
		
	});
	
	/*START Pricing JS*/
	$('.pricing-tab-switcher').on('click', function() {
		$(this).toggleClass('active');

		$('.pricing-amount').toggleClass('change-subs-duration');
	});
	/*END Pricing JS */
		
	/*Testimonials JS */	
	$('.review-slider').slick({
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: true,
		arrows: false,

	})	
	
	/*Partner JS */	
	$('.partner-area').slick({
		infinite: true,
		slidesToShow: 5,
		slidesToScroll: 5,
		dots: false,
		autoplay: true,
		arrows: false,
		  responsive: [
			{
			  breakpoint: 1024,
			  settings: {
				slidesToShow: 3,
				slidesToScroll: 3,

			  }
			},
			{
			  breakpoint: 600,
			  settings: {
				slidesToShow: 2,
				slidesToScroll: 2
			  }
			},
			{
			  breakpoint: 480,
			  settings: {
				slidesToShow: 2,
				slidesToScroll: 2
			  }
			}
			// You can unslick at a given breakpoint now by adding:
			// settings: "unslick"
			// instead of a settings object
		  ]
	})

	// Current Year
	
	const d = new Date();
	let year = d.getFullYear();
	document.getElementById("curyear").innerHTML = year;
	
})(jQuery);