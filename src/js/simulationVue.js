new Vue({
    el: '#simulation_luminosity',
    data() {
        return {
            hue: 40,
            saturation: 0,
            opacity: 50,
        }
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
});