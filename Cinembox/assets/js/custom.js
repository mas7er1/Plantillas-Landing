(function ($) {

  // Back to top script

  var btn = $('#button');

  $(window).scroll(function () {
    if ($(window).scrollTop() > 300) {
      btn.addClass('show');
    } else {
      btn.removeClass('show');
    }
  });

  btn.on('click', function (e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: 0 }, '300');
  });

  // loader

  $(window).on('load', function () {
    $('#js-preloader').addClass('loaded');
  });

// sticky menu script

window.onscroll = function () { myFunction() };

var header = document.getElementById("sticky-header");
var sticky = header.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}

// search toggler

$('.site-search').click(function () {
  $('.site-header').toggleClass('hide');

  if (!$('.site-header-search').is('.hide')) {
    $('.site-search-input').focus();
  }
});


  // slider script

  var owl = $('.slider');
  owl.owlCarousel({
    animateOut: 'fadeOut',
    items: 1,
    loop: true,
    margin: 10,
    autoplay: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: true
  });


  // gallery script

  $('.gallery').owlCarousel({
    loop: true,
    margin: 30,
    lazyLoad: true,
    nav: false,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 3
      },
      1000: {
        items: 5
      }
    }
  });

  // testimonial script

  $('.testimonial').owlCarousel({
    loop: true,
    margin: 0,
    lazyLoad: true,
    nav: false,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 1
      },
      1000: {
        items: 1
      }
    }
  });


  // team script

  $('.team').owlCarousel({
    loop: true,
    margin: 50,
    lazyLoad: true,
    nav: false,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 3
      },
      1000: {
        items: 4
      }
    }
  });

  // blog script

  $('.blog').owlCarousel({
    loop: true,
    margin: 20,
    lazyLoad: true,
    nav: false,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 2
      },
      1000: {
        items: 3
      }
    }
  });


  // brand script

  $('.brand').owlCarousel({
    loop: true,
    margin: 0,
    lazyLoad: true,
    nav: false,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 3
      },
      1000: {
        items: 5
      }
    }
  });

})(window.jQuery);