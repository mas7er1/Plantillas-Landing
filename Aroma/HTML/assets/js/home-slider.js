/*--------------- Home Slider ---------------*/

// Create a new slider using the Swiper library
var swiper = new Swiper(".home-slider", {

  // Enable continuous looping of slides
  loop: true,

  // Set up automatic slideshow with a 5-second delay
  autoplay: {
    delay: 5000, // 5000 milliseconds (5 seconds)
    disableOnInteraction: false, // Continue autoplay even if user interacts with the slider
  },

  // Enable pagination dots for slide navigation
  pagination: {
    el: ".swiper-pagination1", // Selector for the pagination container
    clickable: true, // Allow users to click on pagination dots to navigate slides
  },

  // Enable navigation buttons (next and previous) for slide navigation
  navigation: {
    nextEl: ".swiper-button-next", // Selector for the next button
    prevEl: ".swiper-button-prev", // Selector for the previous button
  },

});