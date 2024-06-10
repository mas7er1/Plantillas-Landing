// Get all sections on the webpage
var sections = $('section');

// When the user scrolls the webpage
$(window).on('scroll', function () {

  // For each section on the webpage
  sections.each(function () {
    
    let top = $(window).scrollTop(); // Get the current position of the top of the window
    let offset = $(this).offset().top - 200; // Get the offset (position) of the current section minus 200 pixels
    let id = $(this).attr('id'); // Get the 'id' attribute of the current section
    let height = $(this).height(); // Get the height of the current section

    // Check if the top of the window is within the section's range
    if (top >= offset && top < offset + height) {
      $('.navbar a').removeClass('active'); // Remove the 'active' class from all navigation links
      $('.navbar').find(`[href="#${id}"]`).addClass('active'); // Add the 'active' class to the navigation link corresponding to the current section
    }

  })
  
});
