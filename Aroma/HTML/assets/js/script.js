// This code will run when the document (web page) is fully loaded and ready
$(document).ready(function(){

  $('.scroll-top').hide(); // Initially, hide the scroll-to-top button

  /*--------------- Navbar Toggler ---------------*/
  // When the menu button is clicked
  $('#menu-btn').click(function(){
    $(this).toggleClass('fa-times'); // Toggle the menu icon to close (fa-times) and open (fa-bars)
    $('.navbar').toggleClass('active'); // Toggle the 'active' class to show/hide the mobile navigation menu
  });

  /*--------------- Scroll-Top ---------------*/

  // When the user scrolls the webpage
  $(window).on('scroll',function(){
    
    // Close the mobile menu by removing the 'fa-times' class and 'active' class from the navbar
    $('#menu-btn').removeClass('fa-times');
    $('.navbar').removeClass('active');

    // STICKY HEADER: If the user scrolls down more than 0 pixels, make the header sticky
    if($(window).scrollTop() > 0){
      $(".header").addClass("sticky");
    }else{
      $(".header").removeClass("sticky");
    }

    // SCROLL-TO-TOP BUTTON: Show or hide the scroll-to-top button based on the user's scroll position
    $(window).scroll(function () {
      if ($(this).scrollTop() > 100) {
        $('.scroll-top').fadeIn(); // If scrolled more than 100 pixels, show the scroll-to-top button
      } else {
        $('.scroll-top').fadeOut(); // Otherwise, hide the scroll-to-top button
      }
    });

  });

});
