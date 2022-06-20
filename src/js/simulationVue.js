new Vue({
    el: '#simulation_luminosity',
    data() {
        return {
            // color: `#f9f7cd`,
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
                // opacity: this.opacity / 175,
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

// #region
// const sliderValue = document.querySelector('.indicator');
// const inputSlider = document.querySelector('#slider');
// inputSlider.oninput = (() => {
//     let value = inputSlider.value;
//     sliderValue.textContent = value;
//     sliderValue.style.left = (value / 1.25) + "%";
//     sliderValue.classList.add('display');
// });
// inputSlider.onblur = (() => {
//     sliderValue.classList.remove('display');
// })
// #endregion