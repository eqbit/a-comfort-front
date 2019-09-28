$(function(){
  const $catalogItem = $('[data-catalog-item-toggle]')
  if(isMobile()) {
    $catalogItem.on('click', function() {
      let $this = $(this).parent();
      $this.toggleClass('active');
      
      if($this.is('.active')) {
        $this.find('[data-catalog-item-body]').slideDown();
        console.log('don')
      } else {
        $this.find('[data-catalog-item-body]').slideUp();
      }
    })
  }
});