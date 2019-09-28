$(function () {
  let $slider = $('[data-project-slider]');
  
  $slider.on('afterChange', function(event, slick, currentSlide) {
    let title = $('.slick-current').find('[data-title]').data('title');
    $('[data-project-slider-title]').text(title);
    
    $('[data-project-slider-count]').html(`${currentSlide + 1}<span>/</span>${slick.slideCount}`);
  }).slick({
    prevArrow: $('[data-project-slider-prev]'),
    nextArrow: $('[data-project-slider-next]')
  });
  
  let $form = $('[data-project-form]');
  
  $form.on('submit', function(e) {
    e.preventDefault();
    
    $validation.each(function() {
      validate($(this), true);
    });
    
    if(!$('.required.error').length) {
      $.ajax({
        url: '/ajax-url',
        data: $form.serialize(),
        type: 'POST',
        dataType: 'json',
        complete: response => {
          $('[data-hide-on-success]').hide();
          $('[data-show-on-success]').fadeIn();
          
          $([document.documentElement, document.body]).animate({
            scrollTop: $('[data-show-on-success]').offset().top - $('.header-top-wrap').outerHeight() - 50
          }, 300);
        }
      })
    } else {
      $([document.documentElement, document.body]).animate({
        scrollTop: $('.required.error').first().offset().top - $('.header-top-wrap').outerHeight() - 50
      }, 300);
    }
  });
  
  let $sendAnother = $('[data-send-another]');
  
  $sendAnother.on('click', function() {
    $form.find('input').val('').trigger('change');
    $('[data-show-on-success]').hide();
    $('[data-hide-on-success]').fadeIn();
  })
});