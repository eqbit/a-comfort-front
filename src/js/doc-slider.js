$(function () {
  const $docSlider = $('[data-doc-slider]');
  
  if($docSlider.length) {
    $docSlider.slick({
      infinite: true,
      prevArrow: $('[data-doc-slider-prev]'),
      nextArrow: $('[data-doc-slider-next]'),
      dots: true,
      appendDots: $('[data-doc-slider-dots]'),
      slidesToShow: 6,
      swipeToSlide: true,
      responsive: [
        {
          breakpoint: 1190,
          settings: {
            slidesToShow: 4
          }
        },
        {
          breakpoint: 900,
          settings: {
            slidesToShow: 3
          }
        },
        {
          breakpoint: 700,
          settings: {
            slidesToShow: 1
          }
        }
      ]
    })
  }
});