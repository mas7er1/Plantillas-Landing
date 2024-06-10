/*---------- Menu Gallery ----------*/

// Select the container that holds the menu tabs
var menuTabs = document.querySelector('.menu .menu-btn-tabs');

// Add a click event listener to the menu tabs container
menuTabs.addEventListener('click', function(e){

    // Check if what was clicked is a menu button and is not already active
    if(e.target.classList.contains('menu-btn') && !e.target.classList.contains('active')){
        
        var target = e.target.getAttribute('data-target'); // Get the name of the menu gallery we want to show
        menuTabs.querySelector('.active').classList.remove('active'); // Remove the active state from the currently selected menu button
        e.target.classList.add('active'); // Highlight the clicked menu button by adding the active state

        var menuSection = document.querySelector('.menu'); // Select the whole menu section
        menuSection.querySelector('.menu-gallery.active').classList.remove('active'); // Hide the currently displayed menu gallery
        menuSection.querySelector(target).classList.add('active'); // Show the menu gallery related to the clicked menu button

    }
    
})
