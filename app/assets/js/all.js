// programming languages swiper
var swiper = new Swiper('.programmingLanguagesSwiper', {
  // 跑馬燈效果
  autoplay: {
    disableOnInteraction: false,
    delay: 0
  },
  speed: 1500,
  loop: true,
  spaceBetween: 16,
  slidesPerView: 3,
  //多欄
  breakpoints: {
    768: {
        slidesPerView: 4
    },
    992: {
        slidesPerView: 5
    },
    1200: {
        slidesPerView: 6
    }
  }
});

// feedback swiper
var swiper = new Swiper('.feedbackSwiper', {
  // Optional parameters
  effect: 'fade',
  fadeEffect: {
    crossFade: true
  },

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  autoplay: {
    delay: 5000,
  },
});

// datepicker
const elem = document.querySelector('input[name="datepicker"]');
const datepicker = new Datepicker(elem, {
  language: 'zh-TW',
  buttonClass: 'btn',
}); 