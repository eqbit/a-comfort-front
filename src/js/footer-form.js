$(function() {
  let $form = $('[data-footer-form]'),
    $errorOverlay = $form.find('[data-error-overlay]')
  
  $form.on('submit', function (e) {
    e.preventDefault();
  
    let $localValidation = $form.find('[data-validation]');
  
    $localValidation.each(function () {
      validate($(this), true);
    });
    
    if (!$form.find('.required.error').length) {
      $.ajax({
        url: '/ajax-url',
        data: $form.serialize(),
        type: 'POST',
        dataType: 'json',
        error: () => {
          $errorOverlay.show();
          $form.find('button').text('Повторить');
          
          setTimeout(() => {
            $errorOverlay.fadeOut();
          }, 2000);
        },
        success: response => {
          $('[data-hide-on-success]').hide();
          $('[data-email-success-text]').html(`
            Спасибо! Теперь вы всегда будете знать<br>
            о наших самых выгодных предложениях!
            `);
          $('[data-show-on-success]').fadeIn();
        }
      });
    }
  });
});