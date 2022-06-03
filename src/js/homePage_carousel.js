const hot_swiper = new Swiper("#index_carousel", {
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
    },
    pagination: {
        el: ".swiper-pagination"
    },
    loop: true, // 循環播放：https://swiperjs.com/swiper-api#param-loop

    disableOnInteraction: true,//滑鼠事件設定
    autoplay: {
        delay: 8000,
    },
    mousewheel: false,
    keyboard: true,

});
const hot_autoplay = document.getElementById('index_carousel');

hot_autoplay.addEventListener('mouseenter', function () {
    hot_swiper.autoplay.stop();
})
hot_autoplay.addEventListener('mouseleave', function () {
    hot_swiper.autoplay.start();
})