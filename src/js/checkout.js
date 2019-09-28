$(function () {
  let $city = $('#city'),
    cities = [
      "Апрелевка",
      "Москва",
      "Лондон",
      "Париж",
      "Нью Йорк",
      "Багдад",
      "Сараево",
      "Будапешт",
      "Хельсинки",
      "Люксембург",
      "Амстердам",
      "Мухосраново"
    ],
    state = {};
  
  $city.autocomplete({
    source: cities,
    minLength: 0
  }).focus(function() {
    $(this).autocomplete("search", $(this).val());
  });
  
  $city.on('autocompleteopen', () => {
    $('.ui-widget.ui-widget-content').niceScroll({
      cursorcolor: '#FFA200'
    });
  });
  
  $city.on('autocompleteselect autocompleteclose autocompletechange', function () {
    $(this).trigger('change')
  });
  
  $city.on('change blur', function(e) {
    let city = e.target.value.toLowerCase();
    city = city.charAt(0).toUpperCase() + city.substr(1);
    
    if(cities.includes(city)) {
      $(this).parent().addClass('correct')
    } else {
      $(this).parent().removeClass('correct')
    }
  });
  
  let $checkValue = $('[data-check-value]');
  
  $checkValue.on('input change keypressed', function(e) {
    if(e.target.value) {
      $(this).parent().addClass('got-value')
    } else {
      $(this).parent().removeClass('got-value')
    }
  });
  
  let $clear = $('[data-input-clear]');
  
  $clear.on('click', function () {
    $(this).parent().find('input').val('').trigger('change')
  });
  
  let $deliveryType = $('[data-delivery-type]');
  
  $deliveryType.on('change', function(e) {
    let type = $(this).data('delivery-type');
    
    state.deliveryType = type;
    
    if(type === 'delivery') {
      $('[data-delivery]').slideDown();
      $('[data-pickup]').slideUp();
      $('[data-delivery-required]').find('.checkout__input-parent').addClass('required');
      
      $('[data-city-select]').addClass('required');
    }
  
    if(type === 'pickup') {
      $('[data-pickup]').slideDown();
      $('[data-delivery]').slideUp();
  
      $('[data-delivery-required]').find('.checkout__input-parent').removeClass('required');
  
      $('[data-city-select]').removeClass('required');
    }
    
    let typeTotal = e.target.value,
      deliveryPriceTotal = $(e.target).data('delivery-price');
    
    $('[data-delivery-type-total]').html(typeTotal);
    if(/\d/.test(deliveryPriceTotal)) {
      $('[data-delivery-price-total]').text(deliveryPriceTotal.toLocaleString() + ' ₽');
      
      let priceTotal = deliveryPriceTotal + $('[data-total]').data('total');
      
      $('[data-total]').text(priceTotal.toLocaleString());
    } else {
      $('[data-delivery-price-total]').text(deliveryPriceTotal);
      $('[data-total]').text($('[data-total]').data('total').toLocaleString());
    }
  });
  
  let $paymentType = $('[data-payment-type]');
  
  $paymentType.on('change', function (e) {
    $('[data-payment-type-total]').text(e.target.value)
  });
  
  let $form = $('[data-checkout-form]');
  
  let getSuccessMessage = (number, email) => (`
    <div class="success">
      <div class="success__title">Спасибо за покупку!</div>
      
      <div class="success-order">
        <div class="success-order__title">Ваш заказ №</div>
        <div class="success-order__number">${number}</div>
      </div>
      
      <div class="success__subtitle">Детализация вашего заказа отправлена на почту:</div>
      
      <div class="success__email">${email}</div>
      
      <a href="/" class="btn btn--primary success-btn">Продолжить покупки</a>
    </div>
  `);
  
  $form.on('change', function(e) {
    state[e.target.name] = e.target.value;
  });
  
  $form.on('submit', function(e) {
    e.preventDefault();
    
    $validation.each(function() {
      validate($(this), true);
    });
    
    if(!$('.required.error').length) {
      $.ajax({
        url: '/ajax-url',
        data: state,
        type: 'POST',
        dataType: 'json',
        complete: response => {
          $('[data-hide-on-success]').hide();
          $('[data-show-on-success]').html(getSuccessMessage('0987 0987', state.email));
  
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
  })
});