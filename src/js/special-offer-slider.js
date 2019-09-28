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
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        arrows: true,
        slidesToShow: 3
      }
    },
    {
      breakpoint: 960,
      settings: {
        arrows: false,
        slidesToShow: 2,
        dots: true
      }
    },
    {
      breakpoint: 481,
      settings: {
        arrows: false,
        slidesToShow: 1,
        dots: true
      }
    }
  ]
});