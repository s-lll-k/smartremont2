// SLIDER
let servicesSlider;

if (window.innerWidth <= 1024) {
    servicesSlider = new Swiper('.services__slider', {
        slidesPerView: 1,
        pagination: {
          el: '.swiper-pagination',
          type: 'bullets',
        }
    });
}
// SLIDER