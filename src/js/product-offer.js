$(function () {
  $('[data-product-characteristics-link]').on('click', function () {
    $('.feature-tabs__item').eq(0).click();
  });
  
  $('[data-product-description-link]').on('click', function () {
    $('.feature-tabs__item').eq(1).click();
  });
});