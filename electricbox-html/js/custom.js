$(function() {
    'use strict'; // Start of use strict


    /*--------------------------
    scrollUp
    ---------------------------- */
    $.scrollUp({
        scrollText: '<i class="fa fa-angle-up"></i>',
        easingType: 'linear',
        scrollSpeed: 900,
        animation: 'fade'
    });
 
	/*------------------------------------------------------------------
        Year
    ------------------------------------------------------------------*/
	$(function(){
    var theYear = new Date().getFullYear();
    $('#year').html(theYear);
	});
    
    "use strict";
    /*mobile_menu*/
    function clone_main_menu() {
        var _clone_menu = $('#header .clone-main-menu');
        var _target = $('#box-mobile-menu .clone-main-menu');
        var _data_width = $('#header .main-navigation').data('width');
        if ($(window).innerWidth() <= _data_width) {
            if (_clone_menu.length > 0) {
                _clone_menu.each(function () {
                    $(this).appendTo('#box-mobile-menu .box-inner');
                });
            }
        } else {
            if (_target.length > 0) {
                _target.each(function () {
                    $(this).appendTo('#header .main-navigation');
                });
            }
        }

        function action_addClass() {
            $('body').addClass('box-mobile-menu-open');
            return false;
        }

        function action_removeClass() {
            $('body').removeClass('box-mobile-menu-open');
            return false;
        }

        $(".mobile-navigation").on('click', action_addClass);
        $("#box-mobile-menu .close-menu, .body-overlay").on('click', action_removeClass);
    }

    function box_mobile_menu() {
        var _content = $('#box-mobile-menu .clone-main-menu');
        if ($(window).innerWidth() <= 1024) {
            _content.each(function () {
                var t = $(this);
                t.addClass('active');
                $(this).find('.toggle-submenu').on('click', function () {
                    t.removeClass('active');
                    var text_next = $(this).prev().text();
                    $('#box-mobile-menu .box-title').html(text_next);
                    t.find('li').removeClass('mobile-active');
                    $(this).parent().addClass('mobile-active');
                    $(this).parent().closest('.submenu').css({
                        'position': 'static',
                        'height': '0',
                    });
                    $('#box-mobile-menu #back-menu').css('display', 'block');
                })
            });
            $('#box-mobile-menu #back-menu').on('click', function () {
                _content.find('li.mobile-active').each(function () {
                    _content.find('li').removeClass('mobile-active');
                    if ($(this).parent().hasClass('main-menu')) {
                        _content.addClass('active');
                        $('#box-mobile-menu .box-title').html('MAIN MENU');
                        $('#box-mobile-menu #back-menu').css('display', 'none');
                    } else {
                        _content.removeClass('active');
                        $(this).parent().parent().addClass('mobile-active');
                        $(this).parent().css({
                            'position': 'absolute',
                            'height': 'auto',
                        });
                        var text_prev = $(this).parent().parent().children('a').text();
                        $('#box-mobile-menu .box-title').html(text_prev);
                    }
                })
            });
        }
        $('.mobile-navigation').on('click', function () {
            $('body').addClass('box-mobile-menu-open');
        });
        $('#box-mobile-menu .close-menu, .body-overlay').on('click', function () {
            $('body').removeClass('box-mobile-menu-open');
        });
    }

    $(window).on("resize", function () {
        clone_main_menu();
    });
    $(window).on("load", function () {
        clone_main_menu();
        box_mobile_menu();
    });


    var wind = $(window);


    // scrollIt
    $.scrollIt({
        upKey: 38,                // key code to navigate to the next section
        downKey: 40,              // key code to navigate to the previous section
        easing: 'swing',          // the easing function for animation
        scrollTime: 600,          // how long (in ms) the animation takes
        activeClass: 'active',    // class given to the active nav element
        onPageChange: null,       // function(pageIndex) that is called when page is changed
        topOffset: -70            // offste (in px) for fixed top navigation
    });

    // CounterUp
    if ($.fn.counterUp) {
        $('.counter').counterUp({
            delay: 10,
            time: 1500
        });
    }


    // navbar scrolling background
    wind.on("scroll", function () {

        var bodyScroll = wind.scrollTop(),
            navbar = $(".navbar"),
            logo = $(".navbar .logo> img");

        if (bodyScroll > 100) {

            navbar.addClass("nav-scroll");
            logo.attr('src', 'images/logo-dark.png');

        } else {

            navbar.removeClass("nav-scroll");
            logo.attr('src', 'images/logo-light.png');
        }
    });


    // close navbar-collapse when a  clicked
    $(".sb-nav .nav-item a").on('click', function () {
        $("body").removeClass("box-mobile-menu-open");
    });

    
    // sections background image from data background
    var pageSection = $(".bg-img, section");
    pageSection.each(function (indx) {

        if ($(this).attr("data-background")) {
            $(this).css("background-image", "url(" + $(this).data("background") + ")");
        }
    });

});

/*------------------------------------------------------------------
 Loader 
------------------------------------------------------------------*/
jQuery(window).on("load scroll", function() {
    'use strict'; // Start of use strict
    // Loader 
     $('#dvLoading').fadeOut('slow', function () {
            $(this).remove();
        });
	$('.google-map').on('click', function() {
            $('.google-map').find('iframe').css("pointer-events", "auto");
        });

	  
});
	