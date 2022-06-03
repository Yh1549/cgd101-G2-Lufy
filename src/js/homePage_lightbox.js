// 鎖住畫面
function noscroll() {
    window.scrollTo(0, 0);
}
// 開燈        
const lampWrapper = document.querySelector('.wrapper');
const light = document.querySelector('.light');
lampWrapper.addEventListener('mousemove', e => {
    light.style.background = `radial-gradient(circle at ${e.clientX}px ${e.clientY}px, transparent 5%, rgba(0, 0, 0, 0.95) 15%)`;
})

function shutDown() {
    let turnBtn = document.querySelector('.turn_on');
    lampWrapper.classList.add('shut_down');
    light.classList.add('shut_down');
    turnBtn.classList.add('shut_down');
    window.removeEventListener("scroll", noscroll);
}
function init() {
    let turnOn = document.querySelector('.turn_on');
    turnOn.addEventListener('click', shutDown);
    setTimeout(() => { shutDown() }, 666000);
};
window.addEventListener("scroll", noscroll);
window.addEventListener("load", init, false);

window.addEventListener("load", function touchTracer(e) {
    let lightArea = document.querySelector('.first');
    let lightBubble = document.querySelector('.light');
    lightArea.addEventListener('touchmove', (e) => {
        lightBubble.style.background = `radial-gradient(circle at ${e.touches[0].pageX
            }px ${e.touches[0].pageY}px, transparent 5%, rgba(0, 0, 0, 0.95) 15%)`;
    });
});