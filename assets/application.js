// Put your applicaiton javascript here
var mySwiper = new Swiper ('.swiper-container', {
    direction: 'horizontal',
    spaceBetween: 16,
    slidesPerView: 1.5,
    freeMode: true,
    watchOverflow: true,
    setWrapperSize: true,
    touchReleaseOnEdges: true,
    mousewheel: {
        forceToAxis: true,
    },
  
    // Scrollbar
    scrollbar: {
        el: '.swiper-scrollbar',
        hide: false,
        dragSize: 'auto',
        draggable: true,
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    breakpoints: {
        600: {
            slidesPerView: 2,
        },

        992: {
            slidesPerView: 3,
        },
    },
})
