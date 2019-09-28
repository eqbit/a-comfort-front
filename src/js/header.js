$(function(){
  const $menuToggle = $('[data-menu-toggle]'),
    $body = $('body');
  
  $menuToggle.on('click', function () {
    $menuToggle.toggleClass('active');
    $body.toggleClass('menu-activated');
  })
});