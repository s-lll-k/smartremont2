// SLIDER
let servicesSlider;

let descriptionSlider = new Swiper('.description-slider', {
  slidesPerView: 1,
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
  }
});

function changeDOM(){
  if (window.innerWidth <= 1024) {
    servicesSlider = new Swiper('.services__slider', {
        slidesPerView: 1,
        pagination: {
          el: '.swiper-pagination',
          type: 'bullets',
        }
    });
    if (document.querySelector('.pc-content')) {
      document.querySelector('.pc-content__inner').appendChild(document.querySelector('.filling__products'));
    }

    document.querySelector('.add-pc-button').appendChild(document.querySelector('.filling__description-add'));
  } else {
    document.querySelector('.aside-constructor__content').appendChild(document.querySelector('.filling__products'));

    document.querySelector('.filling__description-row').appendChild(document.querySelector('.filling__description-add'));
  }
  if (window.innerWidth <= 768) {
    if (document.querySelector('.pagination-pc')) {
      document.querySelector('.pagination-pc').appendChild(document.querySelector('.filter-constructor__pagination'));
    }
  } else {
    document.querySelector('.filter-constructor__bottom').appendChild(document.querySelector('.filter-constructor__pagination'));
  }
}
changeDOM();
window.addEventListener('resize', event => {
  changeDOM();
}, false);
// SLIDER