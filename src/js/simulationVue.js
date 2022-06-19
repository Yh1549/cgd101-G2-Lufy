new Vue({
    el: '#simulation_luminosity',
    data() {
        return {
            color: `#f9f7cd`,
            alpha: 0,
        }
    },
    computed: {
        output() {
            console.log(this.color)
            return {}
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