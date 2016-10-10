$(function() {

  // Toggle the nav menu when the menu button is clicked
  var siteNav = $('.site-nav');
  $('.open-menu-button, .close-menu-button').on('click', function() {
    siteNav.toggleClass('open');
  });

});
