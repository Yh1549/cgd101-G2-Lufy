function showCart() {
    let cart = document.querySelector(".cart");
    cart.classList.toggle('hidden');
    let cartv2 = document.querySelector(".shopping_cart_box");
    cartv2.classList.toggle('hidden');
}

function init() {
    // let shopping = document.querySelector(".cartclick");
    // shopping.addEventListener("click", showCart, false);
}
window.addEventListener("load", init, false);