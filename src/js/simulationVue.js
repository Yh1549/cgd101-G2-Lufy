new Vue({
    el: '#simulation_luminosity',
    data() {
        return {
            hue: 40,
            saturation: 0,
            opacity: 50,
        }
    },    
    methods: {
        letterAnimate() {
            const textWrapper = document.querySelector('.slogan');
            textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

            anime.timeline({ loop: true })
                .add({
                    targets: '.slogan.text',
                    scaleX: [0, 1],
                    opacity: [0.5, 1],
                    easing: "easeInOutExpo",
                    duration: 1000
                }).add({
                    targets: '.slogan.title',
                    opacity: [0, 1],
                    translateX: [40, 0],
                    translateZ: 0,
                    scaleX: [0.3, 1],
                    easing: "easeOutExpo",
                    duration: 1000,
                    offset: '-=600',
                    delay: (el, i) => 150 + 25 * i
                }).add({
                    targets: '.sloganBox',
                    opacity: 0,
                    duration: 1000,
                    easing: "easeOutExpo",
                    delay: 8000
                });
        },
    },
    computed: {
        hueOutput() {
            // style
            return {
                background: `hsla(${this.hue}, ${this.saturation}%, 40%, .8)`,
                backdropFilter: `saturate(${this.saturation / 100 * 10}) contrast(100%)`,
            }
        },
        opacityOutput() {
            return {
                opacity: (100 - this.opacity) / 100,
            }
        },
    },
    mounted() {
        this.letterAnimate();
    },
});