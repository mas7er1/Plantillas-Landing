/*--------------------------------------------------------
* Template Name    : Bronson - Personal Portfolio Template
* Author           : MouriThemes 
* Version          : 1.0.0
* File Description : Main js file of the template
*--------------------------------------------------------- 
*/




$(document).ready(function () {
    'use strict';

	//********* page loader js

	setTimeout(function () {
		$('.loader_bg').fadeToggle(); 
	}, 2000);


	//********** menu background color change while scroll

	$(window).on('scroll', function () {
		var menu_area = $('.nav-area');
		if ($(window).scrollTop() > 200) {
			menu_area.addClass('sticky_navigation');
		} else {
			menu_area.removeClass('sticky_navigation');
		}
	});


	//********** menu hides after click (mobile menu)

	$(document).on('click', '.navbar-collapse.in', function (e) {
		if ($(e.target).is('a') && $(e.target).attr('class') != 'dropdown-toggle') {
			$(this).collapse('hide');
		}
	});
    
    //********* typed js

    var element = $(".text-affect");

    $(function(){
       element.typed({
           strings: ["Designer.", "Developer.", "Freelaner."],
           loop: true,
           typeSpeed: 90 
       });
    });


	//*********** scrollspy js

	$('body').scrollspy({
		target: '.navbar-collapse',
		offset: 195
	});


	//************ smooth scroll js

	$('a.smooth-menu,a.about-btn,a.offer-btn').on("click", function (e) {
		e.preventDefault();
		var anchor = $(this);
		$('html, body').stop().animate({
			scrollTop: $(anchor.attr('href')).offset().top - 50 
		}, 1000);
	});
	
	
	//************* Owl Carousel

  //********* Client testimonial

    $('.client-testimonial-carousel').owlCarousel({
        loop: true,
        margin: 10,
        nav: false,
        dots: true,
        autoplay: false,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:2
            }
        }
    })   	
    
    
    $('.zoom,.zoom1').magnificPopup({
            type: 'image',
            gallery: {
                enabled: true
            }
        }); 
    
    
    
    
    //*************** Isotope filter

        var $Container = $('#img-filter');
        if( $Container.length>0 ) {
            $Container.isotope({
                itemSelector: '.single-port',
                transitionDuration: '0.8s'
            });
            $(".img-filter").on("click", function (e){
                $(".img-filter.active").removeClass("active");
                $(this).addClass("active");
                var selector = $(this).attr('data-filter');
                $Container.isotope({
                    filter: selector
                });
                return false;
            });

            $(window).resize(function(){
                setTimeout(function(){
                    $Container.isotope();
                },1000);
            }).trigger('resize'); 
        }
    
    
    //***********YTplayer js

    $('.video-bg').mb_YTPlayer({
        showControls:false,
        autoPlay:true,
        loop:true,
        mute:true,
        startAt:0,
        opacity:1,
        quality:'default'
    });


    
	


});