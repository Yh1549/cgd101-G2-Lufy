const sliderValue = document.querySelector('.indicator');
const inputSlider = document.querySelector('#slider');
inputSlider.oninput = (() => {
    let value = inputSlider.value;
    sliderValue.textContent = value;
    sliderValue.style.left = (value / 1.24) + "%";
    sliderValue.classList.add('diplay');
});
inputSlider.onblur = (() => {
    sliderValue.classList.remove('diplay');
})