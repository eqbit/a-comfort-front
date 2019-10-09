$(function () {
  let $showMore = $('[data-show-more-filters]');
  
  $showMore.on('click', function () {
    $('[data-extra-filter]').slideToggle();
    $showMore.toggleClass('active');
  });
  
  let $filterGroupHead = $('[data-filter-head]');
  
  $filterGroupHead.on('click', function () {
    let $this = $(this);
    
    if (!isMobile()) {
      $this.toggleClass('active').next().slideToggle();
    } else {
      if(!$this.is('.active')) {
        $filterGroupHead.removeClass('active').next().hide();
        $this.addClass('active').next().slideDown();
      } else {
        $filterGroupHead.removeClass('active').next().slideUp();
      }
    }
  });
});