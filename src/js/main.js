document.addEventListener("DOMContentLoaded", function() { 
  // Учитываем высоту экрана без нижних меню на мобилках
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);

  // Свайп меню
  if(document.querySelector('.total-mob')){
    const mobileCloseBtn = document.querySelector('.total-mob__btn');
    const elBlock = document.querySelector('.total-mob__content');
    document.querySelector('.total-mob').addEventListener('touchmove', function(e) {
      e.preventDefault();
    }, false);
    mobileCloseBtn.addEventListener('swiped-up', function () {
      console.log('swiped up!');     
      elBlock.classList.add('_active');
      elBlock.style.height = `${ elBlock.scrollHeight }px`;
    });
    mobileCloseBtn.addEventListener('swiped-down', function () {
      console.log('swiped down!'); 
      elBlock.classList.remove('_active');
      elBlock.style.height = `${ elBlock.scrollHeight }px`;
      window.getComputedStyle(elBlock, null).getPropertyValue("height");
      elBlock.style.height = "0";    
    });
    elBlock.addEventListener("transitionend", () => {
      if (elBlock.style.height !== "0px") {
          elBlock.style.height = "auto";
      }
    });
  }

  // АККардеон
  let accordeon = document.querySelectorAll('.checkout-material__box');
  for (let i = 0; i < accordeon.length; i++) {
    accordeon[i].addEventListener('click', function() {
      this.parentNode.classList.toggle('_active');
    });
  }
  let accordeonFinishing = document.querySelectorAll('.finishing__select-btn');
  for (let i = 0; i < accordeonFinishing.length; i++) {
    accordeonFinishing[i].addEventListener('click', function() {
      this.parentNode.classList.toggle('_active');
    });
  }
  // АККардеон

  // SLIDER
  let servicesSlider;
  
  let descriptionSlider = new Swiper('.description-slider', {
    slidesPerView: 1,
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
    }
  });

  let constructorSlider = new Swiper('.finishing__slider', {
    slidesPerView: 1,
    navigation: {
      nextEl: '.finishing__slider-arrow._next',
      prevEl: '.finishing__slider-arrow._prev',
    },
  });

  
  function changeDOM(){
    if (window.innerWidth <= 1200) {
      if (document.querySelector('.finishing__box')) {
        document.querySelector('.finishing__box').appendChild(document.querySelector('.finishing__furniture'));
        document.querySelector('.finishing__selects').appendChild(document.querySelector('.finishing__select._package'));
        document.querySelector('.finishing__selects').appendChild(document.querySelector('.finishing__select._room'));
      }
      if (document.querySelector('.finishing-mob')) {
        document.querySelector('.finishing-mob__inner').appendChild(document.querySelector('.finishing__form'));
      }
    } else{
      if (document.querySelector('.finishing__box')) {
        document.querySelector('.finishing__slider-btns').appendChild(document.querySelector('.finishing__furniture'));
        document.querySelector('.finishing__slider-btns').appendChild(document.querySelector('.finishing__select._package'));
        document.querySelector('.finishing__slider-btns').appendChild(document.querySelector('.finishing__select._room'));
      }
      if (document.querySelector('.finishing-mob')) {
        document.querySelector('.aside-constructor__content').appendChild(document.querySelector('.finishing__form'));
      }
    }
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
  
      if (document.querySelector('.add-pc-button')) {
        document.querySelector('.add-pc-button').appendChild(document.querySelector('.filling__description-add'));
      }
      if (document.querySelector('.inform-pc')) {
        document.querySelector('.inform-pc').appendChild(document.querySelector('.inform'));
      }
    } else {
      if (document.querySelector('.pc-content')) {
        document.querySelector('.aside-constructor__content').appendChild(document.querySelector('.filling__products'));
      }
  
      if (document.querySelector('.add-pc-button')) {
        document.querySelector('.filling__description-row').appendChild(document.querySelector('.filling__description-add'));
      }
  
      if (document.querySelector('.inform-pc')) {
        document.querySelector('.aside-constructor__content').prepend(document.querySelector('.inform'));
      }
    }
    if (window.innerWidth <= 768) {
      if (document.querySelector('.pagination-pc')) {
        document.querySelector('.pagination-pc').appendChild(document.querySelector('.filter-constructor__pagination'));
      }
      // POPUP
      let popups = document.querySelectorAll('.popup-call');
      for (let i = 0; i < popups.length; i++) {
        popups[i].addEventListener('click', function() {
          if (document.querySelector('.modals-content__inner .popup__content')) {
            document.querySelector('.popup._active').appendChild(document.querySelector('.modals-content__inner .popup__content'));
            document.querySelector('.popup._active').classList.remove('_active');
            document.querySelector('.constructor-item__dot._active').classList.remove('_active');
          }
          this.classList.add('_active');
          let id = this.dataset.popup;
          document.getElementById(id).classList.add('_active');
          document.querySelector('.modals-content__inner').appendChild(document.getElementById(id).querySelector('.popup__content'));
        });
      }
      // POPUP
    } else {
      // POPUP
      let popups = document.querySelectorAll('.popup-call');
      for (let i = 0; i < popups.length; i++) {
        popups[i].addEventListener('click', function() {
            let id = this.dataset.popup;
            document.getElementById(id).classList.add('_active');
            document.getElementById(id).parentNode.classList.add('_active');
        });
      }

      let popupCloseBtns = document.querySelectorAll('.popup-close');
      for (let i = 0; i < popupCloseBtns.length; i++) {
        popupCloseBtns[i].addEventListener('click', function() {
            document.querySelector('.popup._active').classList.remove('_active');
            document.querySelector('.modals-section').classList.remove('_active');
        });
      }
      document.querySelector('.modals-section__back').addEventListener('click', function() {
        document.querySelector('.popup._active').classList.remove('_active');
        document.querySelector('.modals-section').classList.remove('_active');
      });
      // POPUP
      if (document.querySelector('.filter-constructor__bottom')) {
        document.querySelector('.filter-constructor__bottom').appendChild(document.querySelector('.filter-constructor__pagination'));
      }
    }
  }
  changeDOM();
  window.addEventListener('resize', event => {
    changeDOM();
  }, false);
  // SLIDER


});