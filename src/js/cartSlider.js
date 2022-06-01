function showCart() {
    let cart = document.querySelector(".cart");
    cart.classList.toggle('hidden');

}

function init() {
    let shopping = document.querySelector(".cartclick");
    shopping.addEventListener("click", showCart, false);


}

window.addEventListener("load", init);