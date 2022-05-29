const sliderValue = document.querySelector('span');
const inputSlider = document.querySelector('input');
inputSlider.oninput = (() => {
    let value = inputSlider.value;
    sliderValue.textContent = value;
});