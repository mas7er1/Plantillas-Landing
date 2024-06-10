/*---------- Counter-Up ----------*/

// When the document (web page) is fully loaded and ready
$(document).ready(function(){

  // For each element with the 'count' class on the page
  $('.count').each(function() {
    var $this = $(this),
        countTo = $this.attr('data-count'); // Get the target count from the 'data-count' attribute

    // Use jQuery's 'animate' function to gradually increase the count
    $({ countNum: $this.text() }).animate({
      countNum: countTo // Animate from the current count to the target count
    },
    {
      duration: 5000, // Animation duration in milliseconds (5 seconds)
      step: function() {
        $this.text(Math.floor(this.countNum)); // Update the displayed count as the animation progresses
      },
      complete: function() {
        $this.text(this.countNum + '+'); // When the animation is complete, display the final count with a '+' sign
      }
    });
  })
  
});
