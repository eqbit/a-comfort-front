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
        dots: true,
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
  responsive: [
    {
      breakpoint: 1550,
      settings: {
        slidesToShow: 8,
        slidesToScroll: 3,
        infinite: false,
        dots: false
      }
    },
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 960,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 720,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});