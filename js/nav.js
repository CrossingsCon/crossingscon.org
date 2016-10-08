$(function() {

  // Toggle the nav menu when the menu button is clicked
  var siteNav = $('.site-nav');
  siteNav.on('click', '.menu-button', function() {
    siteNav.toggleClass('open');
  });

});
