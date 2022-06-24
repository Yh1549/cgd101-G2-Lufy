Vue.component('carousel-rows', {
    props: ['carousel'],
    template: `<div class="swiper-slide">
                    <img :src="'images//'+carousel.carousel_path" :alt="carousel.carousel_name" />
                </div>`,
})
const index_carousel = new Vue({
    el: '#index_carousel_app',
    data: {
        carouselImg: [],
    },
    mounted() {
        // this.getCarouselXHR();
        this.getCarouselAxios();
    },
    methods: {
        getCarouselAxios() {
            axios.get(`getCarousels.php`).then((response) => {
                console.log(response.data);
                index_carousel.carouselImg = response.data;
                this.showCarousels(response.data)
                this.$nextTick(this.swiperInitial)
            }).catch(err => console.log(err));
        },
        getCarouselXHR() {
            let xhr = new XMLHttpRequest();
            xhr.onload = () => {

                if (xhr.status === 200) {
                    console.log(xhr.responseText);
                    this.showCarousels(xhr.responseText);
                }
                else { console.log(xhr.status) }
            }
            xhr.open('get', 'getCarousels.php', true);
            xhr.send(null);
        },
        showCarousels(json) {
            // let carouselRows = (json);
            // let html = "";
            // for (let i in carouselRows) {
            //     html += `<div class="swiper-slide">
            //                 <img src="images//${carouselRows[i].carousel_path}" alt="" />
            //             </div>`;
            // }
            // document.getElementById('carouselRows').innerHTML = html;
        },
        swiperInitial() {
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
        }
    },
})