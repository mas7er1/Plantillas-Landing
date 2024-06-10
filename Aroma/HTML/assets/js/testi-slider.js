/*--------------- Testimonial Slider ---------------*/ 

// Create a testimonial slider using the Swiper library
var swiper = new Swiper(".testimonial-slider", {

  spaceBetween: 20, // Set the space between slides to 20 pixels
  loop: true, // Enable continuous looping of slides

  // Set up automatic slideshow with a 5-second delay
  autoplay: {
    delay: 5000, // 5000 milliseconds (5 seconds)
    disableOnInteraction: false, // Continue autoplay even if user interacts with the slider
  },

  // Enable pagination dots for slide navigation
  pagination: {
    el: ".swiper-pagination2", // Selector for the pagination container
    clickable: true, // Allow users to click on pagination dots to navigate slides
  },

  // Adjust the number of slides displayed based on screen width
  breakpoints: {
    0: {
      slidesPerView: 1, // Display 1 slide on screens with width less than 768px
    },
    768: {
      slidesPerView: 1, // Display 1 slide on screens with width between 768px and 1024px
    },
    1024: {
      slidesPerView: 1, // Display 1 slide on screens with width greater than or equal to 1024px
    }
  },

});