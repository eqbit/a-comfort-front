$(function(){
    const $offerSlider = $('.offer-slider__carousel');
    if($offerSlider.length) {
        $offerSlider.slick({
            slidesToShow: 4,
            slidesToScroll: 1,
            infinite: true,
            dots: false,
            arrow: true,
            prevArrow: $('[data-offer-slider-prev]'),
            nextArrow: $('[data-offer-slider-next]'),
            appendDots: $('[data-offer-slider-dots]'),
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
                  breakpoint: 480,
                  settings: {
                    arrows: false,
                    slidesToShow: 1,
                    dots: true
                  }
                },
              ]
        })
    }
});