$(function() {


	/*-------------------------------------
	 	Back to top
	-------------------------------------*/
	$(function() {
        var backToTop = {
            element: $('.al-btn-to-top'),
            offset: 350,
            duration: 350
        };
        $(window).on('scroll', function() {
            if ($(this).scrollTop() > backToTop.offset) {
                backToTop.element.removeClass('is-hidden').addClass('is-visible');
            } else {
                backToTop.element.removeClass('is-visible').addClass('is-hidden');
            }
        });
        backToTop.element.on('click', function() {
            $('html, body').animate({
                scrollTop: 0
            }, backToTop.duration);
            return false;
        });
	});
	/*-------------------------------------
		Top menu - Textillate
		-------------------------------------*/

		$('.al-tlt-text').textillate({
			selector: '.texts',
			loop: true,
			minDisplayTime: 500,
			initialDelay: 0,
			autoStart: true,
			inEffects: [],
			outEffects: [ 'hinge' ],
			in: {
				effect: 'rollIn',
				delayScale: 0.4,
				delay: 50,
				sync: false,
				shuffle: false,
				reverse: false,
				callback: function () {}
			},
			out: {
				effect: 'fadeOutDown',
				delayScale: 0.5,
				delay: 70,
				sync: false,
				shuffle: false,
				reverse: false,
				callback: function () {}
			},
			type: 'char'
		});

	/*-------------------------------------
	Top nav
	-------------------------------------*/
	$(function(){
		// scroll is still position
		  var scroll = $(document).scrollTop(),
			  window_view = $(window),
			  $body = $('body'),
			  headerHeight = $('.page-header').outerHeight();
  
		  //console.log(headerHeight);
  
		  /*-------------------------------------
		  Top menu - fixed
		  -------------------------------------*/
		  window_view.on('scroll', function() {
			  var winTop = window_view.scrollTop(),
				  top_nav = $("#top-nav");
  
				  if(winTop >= 150){
			  top_nav.addClass("is-sticky");
			  }else{
				  top_nav.removeClass("is-sticky");
			  }
			  /*-------------------------------------
				  Back to top link
			  -------------------------------------*/
			  $(function(){
				  var y = $(this).scrollTop(),
					  top = $('.top');
				  if (y > 1000) {
					  top.fadeIn('slow');
				  } else {
					  top.fadeOut('slow');
				  }
			  });
  
			  /*-------------------------------------
			  Hide Header on on scroll down
			  -------------------------------------*/
			  $(function(){
				  // scrolled is new position just obtained
				  var scrolled = $(document).scrollTop(),
					  page_header = $('.page-header');
  
  
					  if (scrolled > headerHeight){
						  page_header.addClass('off-canvas-menu');
					  } else {
						  page_header.removeClass('off-canvas-menu');
					  }
  
					  if (scrolled > scroll){
						   // scrolling down
						   page_header.removeClass('fixed-tp-menu');
						  $body.removeClass('al-admin-off-menu');
						} else {
							//scrolling up
							page_header.addClass('fixed-tp-menu');
							$body.addClass('al-admin-off-menu');
					  }
  
					  scroll = $(document).scrollTop();
				  });
			  })
	  });

	/*-------------------------------------
	 Top menu - Superfish
	 -------------------------------------*/
	 $('ul.sf-menu').superfish({
        delay: 300,
        speed: 200,
        animation:     ({opacity:'show',  height:'show'}),
        animationOut:  ({opacity:'hide', height:'hide'}),
        cssArrows: true,
        disableHI: false,
        easing: 'fadeInUp',
        touchMove: false,
        swipe: false
	});

	/*-------------------------------------
	 	Tilt
	 -------------------------------------*/
    $('.al-tilt, .al-play-video').tilt();

	/*-------------------------------------
	 Portfolio
	 -------------------------------------*/
	 $(function(){

    	var section = $('.al-masonry-posts');

    	section.imagesLoaded().done(function(){
			section.isotope({
				itemSelector: 'article',
				masonry: {
					columnWidth: 'article',
                    gutter: '.gutter-sizer',
				},
                transitionDuration: '0.8s',
                percentPosition: true
			});
		});

        $(window).on('resize', function() {
            section.isotope();
        }).trigger('resize');
	});

	/*-------------------------------------
	Mailchimp subscribe form processing
	-------------------------------------*/
	$('#al-subscribe-form').on('submit', function( e ) {
		e.preventDefault();
		// update user interface
		$('#response').html('Adding email address...');
		
		// Prepare query string and send AJAX request
		jQuery.ajax({
			url: 'mailchimp/store-address.php',
			data: 'ajax=true&email=' + escape($('#mailchimp_email').val()),
			success: function(msg) {
				$('#response').html(msg);
				$('#response').slideToggle('slow');
			}
		});
	});

	/*-------------------------------------
		Google maps API
	-------------------------------------*/
	if (typeof $.fn.gmap3 !== 'undefined') {
	
		$("#al-map").each(function() {
			
			var data_zoom = 15,
				data_height;
			
			if ($(this).attr("data-zoom") !== undefined) {
				data_zoom = parseInt($(this).attr("data-zoom"),10);
			}
			if ($(this).attr("data-height") !== undefined) {
				data_height = parseInt($(this).attr("data-height"),10);
			}
			
			
			$(this).gmap3({
				
				marker: {
					values: [{
						address: $(this).attr("data-address"),
						data: $(this).attr("data-address-details")
					}],
					options:{
						draggable: false,
						icon: $(this).attr("data-marker")
					},
					events:{
						mouseover: function(marker, event, context){
							var map = $(this).gmap3("get"),
							infowindow = $(this).gmap3({get:{name:"infowindow"}});
							if (infowindow){
								infowindow.open(map, marker);
								infowindow.setContent(context.data);
							} else {
								$(this).gmap3({
									infowindow:{
										anchor:marker, 
										options:{content: context.data}
									}
								});
							}
						},
						mouseout: function(){
							var infowindow = $(this).gmap3({get:{name:"infowindow"}});
							if (infowindow){
								infowindow.close();
							}
						}
					}
				},
				map: {
					options: {
						mapTypeId: google.maps.MapTypeId.ROADMAP,
						zoom: data_zoom,
						scrollwheel: false,
						styles: [{"featureType":"administrative","elementType":"all","stylers":[{"saturation":"-100"}]},{"featureType":"administrative.province","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"landscape","elementType":"all","stylers":[{"saturation":-100},{"lightness":65},{"visibility":"on"}]},{"featureType":"poi","elementType":"all","stylers":[{"saturation":-100},{"lightness":"50"},{"visibility":"simplified"}]},{"featureType":"road","elementType":"all","stylers":[{"saturation":"-100"}]},{"featureType":"road.highway","elementType":"all","stylers":[{"visibility":"simplified"}]},{"featureType":"road.arterial","elementType":"all","stylers":[{"lightness":"30"}]},{"featureType":"road.local","elementType":"all","stylers":[{"lightness":"40"}]},{"featureType":"transit","elementType":"all","stylers":[{"saturation":-100},{"visibility":"simplified"}]},{"featureType":"water","elementType":"geometry","stylers":[{"hue":"#ffff00"},{"lightness":-25},{"saturation":-97}]},{"featureType":"water","elementType":"labels","stylers":[{"lightness":-25},{"saturation":-100}]}]
					}
				}
			});
			$(this).css("height", data_height + "px");
		});
		
	}


	/*-------------------------------------
		Price Tabs
	-------------------------------------*/

	$(".al-price-table").animated("fadeIn");

	/*-------------------------------------
		PlayBTN
	-------------------------------------*/
	$('.al-play-video__button').magnificPopup({
		type: 'iframe',
		autoFocusLast: false,
		mainClass: 'mfp-with-zoom',
		iframe: {
			markup: '<div class="mfp-iframe-scaler">'+
			'<div class="mfp-close"></div>'+
			'<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>'+
			'</div>', // HTML markup of popup, `mfp-close` will be replaced by the close button

			patterns: {
				youtube: {
					index: 'youtube.com/', // String that detects type of video (in this case YouTube). Simply via url.indexOf(index).
					id: 'v=', // String that splits URL in a two parts, second part should be %id%
						// Or null - full URL will be returned
						// Or a function that should return %id%, for example:
						// id: function(url) { return 'parsed id'; }
					src: '//www.youtube.com/embed/%id%?autoplay=1' // URL that will be set as a source for iframe.
				},

				vimeo: {
					index: 'vimeo.com/',
					id: '/',
					src: '//player.vimeo.com/video/%id%?autoplay=1'
				},

				gmaps: {
					index: '//maps.google.',
					src: '%id%&output=embed'
				}

			},
			zoom: {
				enabled: true, // By default it's false, so don't forget to enable it

				duration: 300, // duration of the effect, in milliseconds
				easing: 'ease-in-out', // CSS transition easing function

				// The "opener" function should return the element from which popup will be zoomed in
				// and to which popup will be scaled down
				// By defailt it looks for an image tag:
				opener: function(openerElement) {
					// openerElement is the element on which popup was initialized, in this case its <a> tag
					// you don't need to add "opener" option if this code matches your needs, it's defailt one.
					return openerElement.is('img') ? openerElement : openerElement.find('img');
					}
			},

			srcAction: 'iframe_src', // Templating object key. First part defines CSS selector, second attribute. "iframe_src" means: find "iframe" and set attribute "src".
		}
	});

	/*-------------------------------------
	 Portfolio control
	 -------------------------------------*/
    $(function() {
        if ($("#al-control-portfolio").length) {

            $('#al-control-portfolio li').on('click', function (e) {
                e.preventDefault();
                var $this = $(this);
                $('#al-control-portfolio li').removeClass('active');
                $(this).addClass('active');
                $('.al-masonry-posts').isotope({
                    filter: $(this).attr('data-filter'),
                    masonry: {
                        columnWidth: 'article',
                        gutter: '.gutter-sizer'
					},
					transitionDuration: '0.8s',
					percentPosition: true
                });
                return false;
            });

        }
	});
	
	$('.al-masonry-posts').on('click', '.al-gallery-portfolio', function(){
        $('.slider-portfolio-single').slick('refresh');
	});

	$('.image-modal').each(function(){
        $(this).magnificPopup({
            type:'inline',
            fixedContentPos: true,
            removalDelay: 100,
            closeBtnInside: true,
            preloader: true,
            mainClass: 'mfp-fade',
            callbacks: {
                open: function () {
                    $('.slider-portfolio-single').not('.slick-initialized').slick('refresh');
                    $('html').css('margin-right', '5px');
                }
                // e.t.c.
            }
        });
	});


	/*-------------------------------------
		Slider
	-------------------------------------*/

	$.fn.al_slider_wrap = function() {
        $(this).each(function() {
            var $dots = $(this).find('.al-dots-control');
            var $arrows = $(this).find('.al-control-portfolio-slider');
            var $next = $arrows.children(".wrap-next");
            var $prev = $arrows.children(".wrap-prev");

            var $slick_slider = $(this).children(".slider-portfolio-single");

            // $arrows.css('display', 'none');
            $slick_slider.not('.slick-initialized').slick({
                dots: true,
                fade: true,
                appendDots: $dots,
                dotsClass: 'dots',
                autoplay: true,
                autoplaySpeed: 8000,
                autoHeight: false,
                infinite: true,
                cssEase: 'linear',
                adaptiveHeight: true,
                prevArrow: $prev,
                nextArrow: $next
            });

        });
    };

    $('.slider-wrap').al_slider_wrap();
	
	/*-------------------------------------
		directionalHover
	-------------------------------------*/
	$('.dh-container').directionalHover();

	/*-------------------------------------
		E-mail Ajax Send
	-------------------------------------*/
	$('.al-contact-form').on('submit',function() {
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			th.trigger("reset");
			th.find('.success-msg').slideToggle('slow');
			setTimeout(function() {
				// Done Functions
				th.find('.success-msg').slideToggle('hide');
			}, 3000);
		});
		return false;
	});
	
	/*-------------------------------------
	 Background function
	 -------------------------------------*/
	 $.fn.al_background_image = function() {
        $(this).each(function() {
            var url = $(this).attr('data-image');
            if(url){
                $(this).css('background-image', 'url(' + url + ')');
            }
        });
    };
	$('.al-bg-img').al_background_image();

	/*-------------------------------------
	 Slick Slider
	 -------------------------------------*/
	$.fn.al_slider_wrap = function() {
        $(this).each(function() {
            var $dots = $(this).find('.al-dots-control');
            var $arrows = $(this).find('.al-control-portfolio-slider');
            var $next = $arrows.children(".wrap-next");
            var $prev = $arrows.children(".wrap-prev");

            var $slick_slider = $(this).children(".slider-container");

            // $arrows.css('display', 'none');
            $slick_slider.not('.slick-initialized').slick({
                dots: true,
                fade: true,
                appendDots: $dots,
                dotsClass: 'dots',
                autoplay: true,
                autoplaySpeed: 8000,
                // autoHeight: false,
                infinite: true,
                cssEase: 'linear',
                adaptiveHeight: true,
                prevArrow: $prev,
                nextArrow: $next
            });

        });
    };

	$('#home-slider').al_slider_wrap();

	/*-------------------------------------
	Accordion
	-------------------------------------*/
	$('.al-faq:nth-child(1n)').accordion({
		heightStyle: 'content',
		active: true
		
	});
	
	
	/*-------------------------------------
		Drag images restagt
	-------------------------------------*/
	$('img, a').on('dragstart', function(event) { event.preventDefault(); });

		/*-------------------------------------
		Smooth Scroll to link

	 , .al-no-click, .image-modal
	-------------------------------------*/

    $(document).on('click', 'a[href^="#"]', function(e) {

        var id = $(this).attr('href');
        // target element
        var $id = $(id);
        if ($id.length === 0) {
            return;
        }
        if($(this).is('.al-no-click, .image-modal, .ui-tabs-anchor')){
        	console.log('has');
		}else{
            if($('.single-product').length === 0){
                e.preventDefault();
                var pos = $id.offset().top;
                $('html, body').stop().animate({
                    scrollTop: pos
                }, {
                    duration: 1000,
                    specialEasing: {
                        width: "linear",
                        height: "easeInOutCubic"
                    }
                });
            }
		}
	});

	
	$(function(){
		$('.al-post__share> .share-toggle').on('click', function(e){ 
			e.preventDefault();
			$(this).parent().find( 'div' ).toggleClass( 'al-post__share__social--active' );
			$(this).toggleClass('share-expanded');
		});
	});
	/*-------------------------------------
		Mobile menu - full screen menu
	-------------------------------------*/
	$(function() {

		$('ul.sf-menu').find('li').clone().appendTo('.al-mobile-menu > ul');

		var $menu = $('.al-mobile-menu'),
			$body = $('body'),
			$fn = $('.al-mobile-menu'),
			$fnToggle = $('.toggle-mnu'),
			$logo = $('.al-logo'),
			$window = $(window);

			$menu.find('.menu-item-has-children > a').on('click', function(e) {
				e.preventDefault();
				if ($(this).next('ul').is(':visible')) {
					$(this).removeClass('sub-active').next('ul').slideUp(250);
				} else {
					$(this).addClass('sub-active').next('ul').slideToggle(250);
				}
			});

			var fnOpen = false;

			var fnToggleFunc = function() {
				fnOpen = !fnOpen;
				$fn.stop().fadeToggle(500);
				$fn.toggleClass("active");
				$('.toggle-mnu').toggleClass('on');
				$logo.toggleClass('on');
				$logo.toggleClass('al-dark-logo');
				return false;
			};

			$fnToggle.on('click', fnToggleFunc);

			$(document).on('keyup', function(e) {
				if (e.keyCode == 27 && fnOpen) {
					fnToggleFunc();
				}

			});

			// $fn.find('li > a').one('click', function() {
			// 	fnToggleFunc();
			// 	return true;
			// });

			$menu.on('click', function(){
				fnToggleFunc();
				return true;
			});

			$('.inner-wrap, .fullscreen-menu-toggle').on('click', function(e){
				e.stopPropagation();
			});
	});


	/*-------------------------------------
		Skills
	-------------------------------------*/
	$('.al-skillbar').each(function(){
		var $ths_out = $(this).find('.al-skillbar__content__progress'),
			$ths_in = $(this).find('.al-skillbar__content__progress__bar');


		$ths_in.waypoint(function (dir) {
			if (dir === "down") {
				$ths_in.animate({
					width:$ths_out.attr('data-percent')
				},1500);
			}
			else {
				$ths_in.css('width', '0');
			}
			}, {
				offset: "90%"
			});
	});
	
	/*-------------------------------------
		How we works
	-------------------------------------*/
	$.fn.al_how_works = function() {
        $(this).each(function() {
            var $dots = $(this).find('.al-how-works__nav__dots');
            var $arrows = $(this).find('.al-how-works__nav__arrows');
            var $next = $arrows.children(".al-how-works__nav__arrows__next");
            var $prev = $arrows.children(".al-how-works__nav__arrows__prev");

			var $slick_slider = $(this).children(".al-how-works__content");
			
            $slick_slider.not('.slick-initialized').slick({
                dots: true,
                appendDots: $dots,
                dotsClass: 'dots',
                autoplay: false,
                autoHeight: true,
                infinite: false,
                cssEase: 'linear',
                adaptiveHeight: true,
                prevArrow: $prev,
				nextArrow: $next,
				responsive: [
					{
						breakpoint: 650,
							settings: {
							arrows: false,
							dots: true
						}
					},
				]
			});

			// On before slide change
			$slick_slider.on('beforeChange', function(event, slick, currentSlide, nextSlide){
				var count = $dots.find('li').length,
					slide = nextSlide + 1,
					width = 100 / count * slide,
					width_done = "";
					
				if(slide === 1){
					width_done = 0;
				}else{
					width_done = width;
				}			
				$arrows.find('.al-how-works__nav__progress__count').css('width', +width_done+'%');			
			});

			$slick_slider.on('afterChange', function(event, slick){
				var $items = slick.$dots.find('li.slick-active');
				slick.$dots.find('li').addClass('al-dots-li-active');
				$items.prevAll().addClass('al-dots-li-active');
				$items.nextAll().removeClass('al-dots-li-active');
			});

        });
    };

	$('.al-how-works').al_how_works();


	/*-------------------------------------
		Testimonials
	-------------------------------------*/
	$.fn.al_testimonials = function() {
        $(this).each(function() {
            var $dots = $(this).find('.al-how-works__nav__dots');
            var $arrows = $(this).find('.al-testimonials__nav');
            var $next = $arrows.children(".al-arrow-right");
			var $prev = $arrows.children(".al-arrow-left");

			var $slick_slider = $(this).children(".al-testimonials__container");
			
            $slick_slider.not('.slick-initialized').slick({
                dots: true,
                appendDots: $dots,
                dotsClass: 'dots',
                autoplay: true,
                autoHeight: true,
                infinite: true,
                cssEase: 'linear',
				adaptiveHeight: true,
				slidesToShow: 2,
  				slidesToScroll: 1,
                prevArrow: $prev,
				nextArrow: $next,
				responsive: [
					{
						breakpoint: 810,
							settings: {
							slidesToShow: 1,
							slidesToScroll: 1,
							infinite: false,
							dots: true,
							arrows: false

						}
					},
				]
			});

        });
    };

	$('#al-testimonials').al_testimonials();
	/*-------------------------------------
		Blog Recent Posts
	-------------------------------------*/
	$.fn.al_blog_recent_posts = function() {
        $(this).each(function() {
            var $dots = $(this).find('.al-blog-recent-posts__dots');
            var $arrows = $(this).find('.al-blog-recent-posts__arrows');
            var $next = $arrows.children(".al-wrap-next");
			var $prev = $arrows.children(".al-wrap-prev");

			var $slick_slider = $(this).children(".al-blog-recent-posts__content");
			
            $slick_slider.not('.slick-initialized').slick({
                dots: true,
                appendDots: $dots,
                dotsClass: 'dots',
                autoplay: true,
                autoHeight: true,
                infinite: true,
                cssEase: 'linear',
				adaptiveHeight: true,
				slidesToShow: 3,
  				slidesToScroll: 1,
                prevArrow: $prev,
				nextArrow: $next,
				responsive: [
					{
						breakpoint: 810,
							settings: {
							slidesToShow: 1,
							slidesToScroll: 1,
							infinite: false,
							arrows: false,
							dots: true
						}
					},
				]
			});

        });
    };

	$('.al-blog-recent-posts').al_blog_recent_posts();
	/*-------------------------------------
		Animations
	-------------------------------------*/
	$(function () {
		if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
			} else {
				// $(".al-heading > .al-heading__title").animated("fadeInDown");
				// $(".al-heading > .al-heading__description").animated("fadeInUp");
				// $(".al-team").animated("fadeIn");
				// $(".al-faq__title").animated("fadeInUp");
				// $(".al-contact, .al-service-item").animated("zoomIn");
				// $(".al-contact-map").animated("fadeInDown");
			}
	}());

	/*-------------------------------------
		Into slider
	-------------------------------------*/
	$(function() {
		var introHeader = $('.al-intro'),
			window_view = $(window),
			intro = $('.al-intro');

		buildModuleHeader(introHeader);

		window_view.resize(function() {
			var width = Math.max(window_view.width(), window_view.innerWidth);
			buildModuleHeader(introHeader);
		});

		window_view.scroll(function() {
			effectsModuleHeader(introHeader, this);
		});

		function buildModuleHeader(introHeader) {
		};
		function effectsModuleHeader(introHeader, scrollTopp) {
			if (introHeader.length > 0) {
				var homeSHeight = introHeader.height();
				var topScroll = $(document).scrollTop();
				if ((introHeader.hasClass('al-intro')) && ($(scrollTopp).scrollTop() <= homeSHeight)) {
					// introHeader.css('top', (topScroll * .4));
				}
				if (introHeader.hasClass('al-intro') && ($(scrollTopp).scrollTop() <= homeSHeight)) {
					introHeader.css('opacity', (1 - topScroll/introHeader.height() * 1));
				}
			}
		};
	});


	/*-------------------------------------
		Tabs
	-------------------------------------*/
	$( ".al-tabs:nth-child(1n)" ).tabs({
		hide: 'fade', 
		show: 'fade'
	});


});
