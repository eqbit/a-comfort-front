"use strict";

$(function () {
  var $actionSlider = $('[data-action-slider]');

  if ($actionSlider.length) {
    $actionSlider.slick({
      slidesToShow: 1,
      infinite: true,
      prevArrow: $('[data-action-slider-prev]'),
      nextArrow: $('[data-action-slider-next]'),
      dots: true,
      appendDots: $('[data-action-slider-dots]')
    });
  }
});
"use strict";

var isMobile = function isMobile() {
  return $(window).outerWidth() < 960;
};

var validators = {
  phone: function phone(_phone) {
    var regExp = /^[+\d][\d\(\)\ -]{4,14}\d$/;
    return regExp.test(_phone);
  },
  email: function email(_email) {
    var regExp = /^[\w-\.]+@[\w-]+\.[a-z]{2,4}$/i;
    return regExp.test(_email);
  },
  name: function name(_name) {
    var regExp = /[а-яА-ЯёЁ ]/;
    return _name.length > 1 && regExp.test(_name);
  }
};
var $validation = $('[data-validation]');

var validate = function validate($this, hard) {
  var validator = $this.data('validation'),
      correct = validators[validator]($this.val()),
      $parent = $this.parent();

  if (!$parent.is('.required')) {
    return false;
  }

  if (correct) {
    $parent.removeClass('error').addClass('correct');
  } else {
    if (hard) {
      $parent.removeClass('correct').addClass('error');
    } else {
      $parent.removeClass('correct');
    }
  }
};

$validation.on('change input keypressed', function () {
  validate($(this));
});
$validation.on('blur', function () {
  validate($(this), true);
});
$('[type=tel]').inputmask({
  mask: '+7(999)999-99-99',
  showMaskOnHover: false
});
"use strict";

if (document.querySelectorAll(".basket-area").length) {
  var getGoods = function getGoods() {
    state.goods = itemsPrice.length;

    switch (state.goods) {
      case 1:
        goods.text(state.goods + ' товар');
        break;

      case 0:
        goods.text(state.goods + ' товаров');
        break;

      default:
        goods.text(state.goods + ' товара');
    }
  };

  var getInitialPrice = function getInitialPrice() {
    var arrPrice = [];
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = itemsPrice[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var item = _step.value;
        var initial = parseInt(item.innerText.replace(/\s+/g, ''));
        arrPrice.push(initial);
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator["return"] != null) {
          _iterator["return"]();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }

    return arrPrice;
  };

  var getSum = function getSum() {
    itemsPrice = $('.basket-area__goods-item--quantity-price');
    state.total = 0;
    getGoods();

    if (itemsPrice.length) {
      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {
        for (var _iterator2 = itemsPrice[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          var price = _step2.value;
          var itemContent = parseInt(price.textContent.replace(/\s+/g, ''));
          state.total += itemContent;
          document.querySelector('.basket-area__total-side--info-price span').textContent = state.total.toLocaleString() + " ₽";
        }
      } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion2 && _iterator2["return"] != null) {
            _iterator2["return"]();
          }
        } finally {
          if (_didIteratorError2) {
            throw _iteratorError2;
          }
        }
      }
    } else {
      document.querySelector('.basket-area__total-side--info-price span').textContent = 0 + " ₽";
    }
  };

  var itemsPrice = $('.basket-area__goods-item--quantity-price');
  var btnsUp = $('.quantity-changer__btn_up');
  var btnsDown = $('.quantity-changer__btn_down');
  var goods = $('.basket-area__total-side--info-gds span');
  var state = {
    total: 0,
    goods: 0,
    initialPrice: getInitialPrice()
  };
  btnsUp.on('click', function () {
    var $this = $(this);
    var initial = $this.closest(".basket-area__goods-item").attr('data-initial');
    var data = parseInt($this.siblings('.quantity-changer__total').text()) + 1;
    $this.siblings('.quantity-changer__total').text(data);
    var parent = $this.closest('.basket-area__goods-item--quantity');
    var price = $(parent).children('.basket-area__goods-item--quantity-price');
    var temp = price.text(initial * data);
    var fin = parseInt(temp.text(), 10);
    price.text(fin.toLocaleString() + " ₽");
    getSum(price.text());
  });
  btnsDown.on('click', function () {
    var $this = $(this);
    var initial = $this.closest(".basket-area__goods-item").attr('data-initial');
    var data = parseInt($this.siblings('.quantity-changer__total').text()) - 1;

    if (data >= 1) {
      $this.siblings('.quantity-changer__total').text(data);
      var parent = $this.closest('.basket-area__goods-item--quantity');
      var price = $(parent).children('.basket-area__goods-item--quantity-price');
      var temp = parseInt(price.text().replace(/\s+/g, ''), 10);
      price.text((temp - initial).toLocaleString() + " ₽");
      getSum();
    }
  });
  var $removeItem = $('[data-remove-item]');
  $removeItem.on('click', function () {
    var $this = $(this);
    $this.closest('.basket-area__goods-item').remove();
    getSum();
  });
  getSum();
}
"use strict";

$(function () {
  var $toggle = $('[data-brands-row-togle]'),
      $items = $('[data-brands-row-item]');
  $toggle.on('click', function () {
    $items.toggleClass('visible');
    $toggle.toggleClass('active');

    if ($toggle.is('.active')) {
      $toggle.text('Скрыть');
    } else {
      $toggle.text('Все...');
    }
  });
});
"use strict";

$(function () {
  var $showMore = $('[data-show-more-filters]');
  $showMore.on('click', function () {
    $('[data-extra-filter]').slideToggle();
    $showMore.toggleClass('active');
  });
  var $filterGroupHead = $('[data-filter-head]');
  $filterGroupHead.on('click', function () {
    var $this = $(this);

    if (!isMobile()) {
      $this.toggleClass('active').next().slideToggle();
    } else {
      if (!$this.is('.active')) {
        $filterGroupHead.removeClass('active').next().hide();
        $this.addClass('active').next().slideDown();
      } else {
        $filterGroupHead.removeClass('active').next().slideUp();
      }
    }
  });
});
"use strict";

$(function () {
  var $catalogItem = $('[data-catalog-item-toggle]');

  if (isMobile()) {
    $catalogItem.on('click', function () {
      var $this = $(this).parent();
      $this.toggleClass('active');

      if ($this.is('.active')) {
        $this.find('[data-catalog-item-body]').slideDown();
        console.log('don');
      } else {
        $this.find('[data-catalog-item-body]').slideUp();
      }
    });
  }
});
"use strict";

$(function () {
  var $city = $('#city'),
      cities = ["Апрелевка", "Москва", "Лондон", "Париж", "Нью Йорк", "Багдад", "Сараево", "Будапешт", "Хельсинки", "Люксембург", "Амстердам", "Мухосраново"],
      state = {};
  $city.autocomplete({
    source: cities,
    minLength: 0
  }).focus(function () {
    $(this).autocomplete("search", $(this).val());
  });
  $city.on('autocompleteopen', function () {
    $('.ui-widget.ui-widget-content').niceScroll({
      cursorcolor: '#FFA200'
    });
  });
  $city.on('autocompleteselect autocompleteclose autocompletechange', function () {
    $(this).trigger('change');
  });
  $city.on('change blur', function (e) {
    var city = e.target.value.toLowerCase();
    city = city.charAt(0).toUpperCase() + city.substr(1);

    if (cities.includes(city)) {
      $(this).parent().addClass('correct');
    } else {
      $(this).parent().removeClass('correct');
    }
  });
  var $checkValue = $('[data-check-value]');
  $checkValue.on('input change keypressed', function (e) {
    if (e.target.value) {
      $(this).parent().addClass('got-value');
    } else {
      $(this).parent().removeClass('got-value');
    }
  });
  var $clear = $('[data-input-clear]');
  $clear.on('click', function () {
    $(this).parent().find('input').val('').trigger('change');
  });
  var $deliveryType = $('[data-delivery-type]');
  $deliveryType.on('change', function (e) {
    var type = $(this).data('delivery-type');
    state.deliveryType = type;

    if (type === 'delivery') {
      $('[data-delivery]').slideDown();
      $('[data-pickup]').slideUp();
      $('[data-delivery-required]').find('.checkout__input-parent').addClass('required');
      $('[data-city-select]').addClass('required');
    }

    if (type === 'pickup') {
      $('[data-pickup]').slideDown();
      $('[data-delivery]').slideUp();
      $('[data-delivery-required]').find('.checkout__input-parent').removeClass('required');
      $('[data-city-select]').removeClass('required');
    }

    var typeTotal = e.target.value,
        deliveryPriceTotal = $(e.target).data('delivery-price');
    $('[data-delivery-type-total]').html(typeTotal);

    if (/\d/.test(deliveryPriceTotal)) {
      $('[data-delivery-price-total]').text(deliveryPriceTotal.toLocaleString() + ' ₽');
      var priceTotal = deliveryPriceTotal + $('[data-total]').data('total');
      $('[data-total]').text(priceTotal.toLocaleString());
    } else {
      $('[data-delivery-price-total]').text(deliveryPriceTotal);
      $('[data-total]').text($('[data-total]').data('total').toLocaleString());
    }
  });
  var $paymentType = $('[data-payment-type]');
  $paymentType.on('change', function (e) {
    $('[data-payment-type-total]').text(e.target.value);
  });
  var $form = $('[data-checkout-form]');

  var getSuccessMessage = function getSuccessMessage(number, email) {
    return "\n    <div class=\"success\">\n      <div class=\"success__title\">\u0421\u043F\u0430\u0441\u0438\u0431\u043E \u0437\u0430 \u043F\u043E\u043A\u0443\u043F\u043A\u0443!</div>\n      \n      <div class=\"success-order\">\n        <div class=\"success-order__title\">\u0412\u0430\u0448 \u0437\u0430\u043A\u0430\u0437 \u2116</div>\n        <div class=\"success-order__number\">".concat(number, "</div>\n      </div>\n      \n      <div class=\"success__subtitle\">\u0414\u0435\u0442\u0430\u043B\u0438\u0437\u0430\u0446\u0438\u044F \u0432\u0430\u0448\u0435\u0433\u043E \u0437\u0430\u043A\u0430\u0437\u0430 \u043E\u0442\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0430 \u043D\u0430 \u043F\u043E\u0447\u0442\u0443:</div>\n      \n      <div class=\"success__email\">").concat(email, "</div>\n      \n      <a href=\"/\" class=\"btn btn--primary success-btn\">\u041F\u0440\u043E\u0434\u043E\u043B\u0436\u0438\u0442\u044C \u043F\u043E\u043A\u0443\u043F\u043A\u0438</a>\n    </div>\n  ");
  };

  $form.on('change', function (e) {
    state[e.target.name] = e.target.value;
  });
  $form.on('submit', function (e) {
    e.preventDefault();
    var $localValidation = $form.find('[data-validation]');
    $localValidation.each(function () {
      validate($(this), true);
    });

    if (!$form.find('.required.error').length) {
      $.ajax({
        url: '/ajax-url',
        data: state,
        type: 'POST',
        dataType: 'json',
        complete: function complete(response) {
          $('[data-hide-on-success]').hide();
          $('[data-show-on-success]').html(getSuccessMessage('0987 0987', state.email));
          $([document.documentElement, document.body]).animate({
            scrollTop: $('[data-show-on-success]').offset().top - $('.header-top-wrap').outerHeight() - 50
          }, 300);
        }
      });
    } else {
      $([document.documentElement, document.body]).animate({
        scrollTop: $('.required.error').first().offset().top - $('.header-top-wrap').outerHeight() - 50
      }, 300);
    }
  });
});
"use strict";

$(function () {
  var $docSlider = $('[data-doc-slider]');

  if ($docSlider.length) {
    $docSlider.slick({
      infinite: true,
      prevArrow: $('[data-doc-slider-prev]'),
      nextArrow: $('[data-doc-slider-next]'),
      dots: true,
      appendDots: $('[data-doc-slider-dots]'),
      slidesToShow: 6,
      swipeToSlide: true,
      responsive: [{
        breakpoint: 1190,
        settings: {
          slidesToShow: 4
        }
      }, {
        breakpoint: 960,
        settings: {
          slidesToShow: 3
        }
      }, {
        breakpoint: 700,
        settings: {
          slidesToShow: 1
        }
      }]
    });
  }
});
"use strict";

$(function () {
  var $form = $('[data-footer-form]'),
      $errorOverlay = $form.find('[data-error-overlay]');
  $form.on('submit', function (e) {
    e.preventDefault();
    var $localValidation = $form.find('[data-validation]');
    $localValidation.each(function () {
      validate($(this), true);
    });

    if (!$form.find('.required.error').length) {
      $.ajax({
        url: '/ajax-url',
        data: $form.serialize(),
        type: 'POST',
        dataType: 'json',
        error: function error() {
          $errorOverlay.show();
          $form.find('button').text('Повторить');
          setTimeout(function () {
            $errorOverlay.fadeOut();
          }, 2000);
        },
        success: function success(response) {
          $('[data-hide-on-success]').hide();
          $('[data-email-success-text]').html("\n            \u0421\u043F\u0430\u0441\u0438\u0431\u043E! \u0422\u0435\u043F\u0435\u0440\u044C \u0432\u044B \u0432\u0441\u0435\u0433\u0434\u0430 \u0431\u0443\u0434\u0435\u0442\u0435 \u0437\u043D\u0430\u0442\u044C<br>\n            \u043E \u043D\u0430\u0448\u0438\u0445 \u0441\u0430\u043C\u044B\u0445 \u0432\u044B\u0433\u043E\u0434\u043D\u044B\u0445 \u043F\u0440\u0435\u0434\u043B\u043E\u0436\u0435\u043D\u0438\u044F\u0445!\n            ");
          $('[data-show-on-success]').fadeIn();
        }
      });
    }
  });
});
"use strict";

$(function () {
  var $menuToggle = $('[data-menu-toggle]'),
      $body = $('body');
  $menuToggle.on('click', function () {
    $menuToggle.toggleClass('active');
    $body.toggleClass('menu-activated');
  });
});
"use strict";

var $map = $('#map');

if ($map.length) {
  var init = function init() {
    var myMap = new ymaps.Map('map', {
      center: dataCentrCoord['moscow'],
      zoom: 10
    }, {
      searchControlProvider: 'yandex#search'
    }),
        myGeoObject = new ymaps.GeoObject(),
        myPieChart = new ymaps.Placemark();
    myMap.geoObjects.add(myGeoObject).add(myPieChart).add(new ymaps.Placemark([55.799243, 37.274593], {
      balloonContent: ''
    }, {
      preset: 'islands#icon',
      iconColor: '#0095b6'
    })).add(new ymaps.Placemark([55.547397, 37.064956], {
      balloonContent: ''
    }, {
      preset: 'islands#icon',
      iconColor: '#0095b6'
    })).add(new ymaps.Placemark([55.54698, 37.07782], {
      balloonContent: ''
    }, {
      preset: 'islands#icon',
      iconColor: '#0095b6'
    })).add(new ymaps.Placemark([55.796289, 49.108795], {
      balloonContent: ''
    }, {
      preset: 'islands#icon',
      iconColor: '#0095b6'
    }));

    function clickGoto() {
      var pos = this.getAttribute('data-city');
      myMap.panTo(dataCentrCoord[pos], {
        flying: 1
      });
      return false;
    }

    for (var i = 0; i < tabs.length; i++) {
      tabs[i].addEventListener('click', clickGoto);
    }
  };

  ymaps.ready(init);
  var tabs = $('.contact-tabs__item');
  var dataCentrCoord = {
    moscow: [55.70, 37.25],
    kazan: [55.796289, 49.108795]
  };
}
"use strict";

$(function () {
  var $offerSlider = $('.offer-slider__carousel');

  if ($offerSlider.length) {
    $offerSlider.slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      infinite: true,
      dots: false,
      arrow: true,
      prevArrow: $('[data-offer-slider-prev]'),
      nextArrow: $('[data-offer-slider-next]'),
      appendDots: $('[data-offer-slider-dots]'),
      responsive: [{
        breakpoint: 1200,
        settings: {
          arrows: true,
          slidesToShow: 3
        }
      }, {
        breakpoint: 960,
        settings: {
          arrows: false,
          slidesToShow: 2,
          dots: true
        }
      }, {
        breakpoint: 480,
        settings: {
          arrows: false,
          slidesToShow: 1,
          dots: true
        }
      }]
    });
  }
});
"use strict";

$(function () {
  var $btn = $('[data-add-to-basket]');
  $btn.on('click', function (e) {
    e.preventDefault();
  });
});
"use strict";

$(function () {
  var closeSearchBtn = $('#popup-search--close-btn');
  var popupSearch = $('.popup-search');
  var searchBtns = $('[data-search-toggle]');
  searchBtns.on('click', function () {
    popupSearch.fadeIn();
  });
  closeSearchBtn.on('click', function () {
    popupSearch.fadeOut();
  });
  $('.popup-search__wrap').on('click', function (event) {
    if (!event.target === $('.popup-search__field')[0] || $('.popup-search__field').has(event.target).length === 0) {
      popupSearch.fadeOut();
    }
  }); //

  var regionBtns = $('[data-region-toggle]');
  var popupRegion = $('.popup-region');
  regionBtns.on('click', function () {
    popupRegion.fadeIn();
  });
  $('.popup-region__wrap').on('click', function (event) {
    if (!event.target === $('.popup-region__list')[0] || $('.popup-region__list').has(event.target).length === 0) {
      popupRegion.fadeOut();
    }
  });
});
"use strict";

$(function () {
  $('[data-product-characteristics-link]').on('click', function () {
    $('.feature-tabs__item').eq(0).click();
  });
  $('[data-product-description-link]').on('click', function () {
    $('.feature-tabs__item').eq(1).click();
  });
});
"use strict";

$(function () {
  var $slider = $('[data-project-slider]');
  $slider.on('afterChange', function (event, slick, currentSlide) {
    var title = $('.slick-current').find('[data-title]').data('title');
    $('[data-project-slider-title]').text(title);
    $('[data-project-slider-count]').html("".concat(currentSlide + 1, "<span>/</span>").concat(slick.slideCount));
  }).slick({
    prevArrow: $('[data-project-slider-prev]'),
    nextArrow: $('[data-project-slider-next]')
  });
  var $form = $('[data-project-form]');
  $form.on('submit', function (e) {
    e.preventDefault();
    $validation.each(function () {
      validate($(this), true);
    });

    if (!$('.required.error').length) {
      $.ajax({
        url: '/ajax-url',
        data: $form.serialize(),
        type: 'POST',
        dataType: 'json',
        complete: function complete(response) {
          $('[data-hide-on-success]').hide();
          $('[data-show-on-success]').fadeIn();
          $([document.documentElement, document.body]).animate({
            scrollTop: $('[data-show-on-success]').offset().top - $('.header-top-wrap').outerHeight() - 50
          }, 300);
        }
      });
    } else {
      $([document.documentElement, document.body]).animate({
        scrollTop: $('.required.error').first().offset().top - $('.header-top-wrap').outerHeight() - 50
      }, 300);
    }
  });
  var $sendAnother = $('[data-send-another]');
  $sendAnother.on('click', function () {
    $form.find('input').val('').trigger('change');
    $('[data-show-on-success]').hide();
    $('[data-hide-on-success]').fadeIn();
  });
});
"use strict";

$(function () {
  var $projectsSlider = $('[data-projects-slider]');

  if ($projectsSlider.length) {
    $projectsSlider.slick({
      infinite: true,
      prevArrow: $('[data-projects-slider-prev]'),
      nextArrow: $('[data-projects-slider-next]'),
      dots: true,
      appendDots: $('[data-projects-slider-dots]'),
      slidesToShow: 2,
      responsive: [{
        breakpoint: 1190,
        settings: {
          slidesToShow: 1
        }
      }]
    });
  }
});
"use strict";

var topProductPopup = $('#top-product-popup');
var iconsTop = $('.top-product__delivery-icon');
var popupsTop = $('.top-product__delivery-popup');
var iconSp = $('.special-offer__slider-item--sale-icon');
var popupSp = $('.special-offer__quest-popup');

var _loop = function _loop(i) {
  $(iconsTop[i]).on('click', function () {
    $(popupsTop[i]).fadeIn();
  });
  $(document).mouseup(function (e) {
    var div = $(popupsTop[i]);

    if (!div.is(e.target) && div.has(e.target).length === 0) {
      div.fadeOut();
    }
  });
};

for (var i = 0; i < iconsTop.length; i++) {
  _loop(i);
}

var _loop2 = function _loop2(_i) {
  $(iconSp[_i]).on('click', function () {
    $(popupSp[_i]).fadeIn();
  });
  $(document).mouseup(function (e) {
    var div = $(popupSp[_i]);

    if (!div.is(e.target) && div.has(e.target).length === 0) {
      div.fadeOut();
    }
  });
};

for (var _i = 0; _i < iconSp.length; _i++) {
  _loop2(_i);
} // $('body').on('click', iconSp[1], function(){
//     console.log('svg')
// })
"use strict";

$(document).ready(function () {
  $("[data-smooth-scroll]").click(function () {
    var _href = $(this).attr("href");

    $("html, body").animate({
      scrollTop: $(_href).offset().top - 55 + "px"
    });
    return false;
  });
});
"use strict";

$('.special-offer__carousel').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  infinite: false,
  dots: false,
  prevArrow: $('[data-so-slider-prev]'),
  nextArrow: $('[data-so-slider-next]'),
  appendDots: $('[data-so-slider-dots]'),
  arrows: true,
  centerMode: false,
  focusOnSelect: true,
  responsive: [{
    breakpoint: 1200,
    settings: {
      arrows: true,
      slidesToShow: 3
    }
  }, {
    breakpoint: 960,
    settings: {
      arrows: false,
      slidesToShow: 2,
      dots: true
    }
  }, {
    breakpoint: 481,
    settings: {
      arrows: false,
      slidesToShow: 1,
      dots: true
    }
  }]
});
"use strict";

$(function () {
  $(".contact-tabs__tab").not(":first").hide();
  $(".contact-tabs__item").click(function () {
    $(".contact-tabs__item").removeClass("contact-tabs__tab_active").eq($(this).index()).addClass("contact-tabs__tab_active");
    $(".contact-tabs__tab").hide().eq($(this).index()).fadeIn();
  }).eq(0).addClass("contact-tabs__tab_active");
});
"use strict";

$(function () {
  $(".feature-tabs__tab").not(":first").hide();
  $(".feature-tabs__item").click(function () {
    $(".feature-tabs__item").removeClass("feature-tabs__tab_active").eq($(this).index()).addClass("feature-tabs__tab_active");
    $(".feature-tabs__tab").hide().eq($(this).index()).fadeIn();
  }).eq(0).addClass("feature-tabs__tab_active");
});
"use strict";

$('.top-product__slick-main').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: '.top-product__slick-list',
  responsive: [{
    breakpoint: 720,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1,
      appendDots: $('[top-product-dots]'),
      dots: true
    }
  }]
});
$('.top-product__slick-list').slick({
  slidesToShow: 8,
  slidesToScroll: 1,
  asNavFor: '.top-product__slick-main',
  arrows: false,
  dots: false,
  centerMode: false,
  focusOnSelect: true,
  responsive: [{
    breakpoint: 1550,
    settings: {
      slidesToShow: 8,
      slidesToScroll: 3,
      infinite: false,
      dots: false
    }
  }, {
    breakpoint: 1200,
    settings: {
      slidesToShow: 5,
      slidesToScroll: 2
    }
  }, {
    breakpoint: 960,
    settings: {
      slidesToShow: 4,
      slidesToScroll: 1
    }
  }, {
    breakpoint: 720,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1
    }
  }]
});
//# sourceMappingURL=app.js.map
