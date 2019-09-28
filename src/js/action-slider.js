$(function(){
    const $actionSlider = $('[data-action-slider]');

    if($actionSlider.length) {
        $actionSlider.slick({
            slidesToShow: 1,
            infinite: true,
            prevArrow: $('[data-action-slider-prev]'),
            nextArrow: $('[data-action-slider-next]'),
            dots: true,
            appendDots: $('[data-action-slider-dots]')
        })
    }
})