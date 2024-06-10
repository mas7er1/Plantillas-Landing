$(function () {

        "use strict";

        //variable
        var html_body = $('html,body');
        var backtotop = $('.back2top');
        var mixer = mixitup('.portfolio_img');

        //preloader js
        jQuery(window).load('body', function () {
            setTimeout(function () {
                jQuery('.preloader').addClass('complete');
            }, 1000);
        });

        //animation scroll js
        $('.page-wrapper .page-content #banner .scroll_down , .sidebar-wrapper .sidebar-content .sidebar_menu ul li a , .page-wrapper .page-content #banner .banner_content a').on('click', function () {
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    html_body.animate({
                        scrollTop: target.offset().top - 0
                    }, 1000);
                    return false;
                }
            }
        });

        //sidebar js
        $("#close-sidebar").click(function () {
            $(".page-wrapper").removeClass("toggled");
        });
        $("#show-sidebar").click(function () {
            $(".page-wrapper").addClass("toggled");
        });
        var alterClass = function () {
            var ww = document.body.clientWidth;
            if (ww < 992) {
                $(".page-wrapper").removeClass("toggled");
            } else if (ww >= 992) {
                $(".page-wrapper").addClass("toggled");
            };
        };
        $(window).resize(function () {
            alterClass();
        });
        alterClass();

        //counter js
        $('.counting').counterUp({
            delay: 3,
            time: 1000,
        });

        //portfolio lightbox js
        var gallery = $('#portfolio a').simpleLightbox({
            showCounter: false,
            captions: false,
        });

        //portfolio header active js
        $(document).on('click', '#portfolio .portfolio_catagury ul li', function () {
            $(this).addClass('active').siblings().removeClass('active')
        });

        //clients slick js
        $('.clients_content').slick({
            dots: false,
            infinite: true,
            speed: 500,
            arrows: false,
            slidesToShow: 4,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 3000,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                        infinite: true,
                        dots: false,
                    }
    },
                {
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        dots: false,
                        centerMode: true,
                        arrows: false,
                    }
    },

                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        dots: false,
                        centerMode: true,
                        arrows: false,
                    }
    }
        ]
        });

        //back to top js
        backtotop.on('click', function () {
            html_body.animate({
                scrollTop: 0
            }, 1000);
        });

        //scroll js
        $(window).on('scroll', function () {

            var scrolling = $(this).scrollTop();

            if (scrolling > 300) {
                backtotop.fadeIn();
            } else {
                backtotop.fadeOut();
            }
        });
    });