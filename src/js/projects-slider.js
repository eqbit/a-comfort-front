$(function () {
  const $projectsSlider = $('[data-projects-slider]');
  
  if($projectsSlider.length) {
    $projectsSlider.slick({
      infinite: true,
      prevArrow: $('[data-projects-slider-prev]'),
      nextArrow: $('[data-projects-slider-next]'),
      dots: true,
      appendDots: $('[data-projects-slider-dots]'),
      slidesToShow: 2,
      responsive: [
        {
          breakpoint: 1190,
          settings: {
            slidesToShow: 1
          }
        }
      ]
    })
  }
});