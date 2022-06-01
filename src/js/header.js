/* 導覽列 scrollY 函式 */
function scroll(mainNav) {
    // console.log(123)
    if (window.scrollY > 300) {
        mainNav.classList.add('hidden');
    } else {
        mainNav.classList.remove('hidden');
    }
}
/* 導覽列 mouseover 函式 */
function showUp() {
    let mainNav = document.querySelector('#mainnav')
    mainNav.classList.remove('hidden');
}
/* main_menu_box 滑入函式 */
function slideIn() {
    let mainMenuBox = document.querySelector('.main_menu_box')
    mainMenuBox.classList.toggle('slide_in');
}
function slideInMobile() {
    let mainMenuBox = document.querySelector('.main_menu_box')
    mainMenuBox.classList.toggle('slide_in_mobile');
}

function init() {
    let hamburger = document.querySelector('#hamburger')
    hamburger.addEventListener('click', slideIn, false);
    let hamburgerMobile = document.querySelector('#hamburger_mobile')
    hamburgerMobile.addEventListener('click', slideInMobile, false);
    // console(hamburger);
    hamburger.addEventListener('mouseover', showUp, false);
    // console(hamburger);
    let mainNav = document.querySelector('#mainnav')
    window.addEventListener('scroll', function () {
        scroll(mainNav)
    }, false);
    // console.log(mainNav)
};
window.addEventListener("load", init, false);