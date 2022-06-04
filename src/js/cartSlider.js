function showCart() {

    let cartv2 = document.querySelector(".shopping_cart_box");

    cartv2.classList.toggle('hidden');

    for (let i = 1; i < localStorage.length; i++)
        showItem(i);

}



function showItem(i) {
    let Value = localStorage.getItem(localStorage.key(i))

    let image = document.createElement('img')
    image.src = 'images/' + Value.split('|')[1]

    let title = document.createElement('span')
    title.innerText = Value.split('|')[0]

    let price = document.createElement('span')
    price.innerText = Value.split('|')[2]

    let productTitle = document.querySelector('.product .product-details .product-title')

    let productImage = document.querySelector('.product .product-image');

    let productPrice = document.querySelector('.product .product-price');


    if (productImage.hasChildNodes()) {
        while (productImage.childNodes.length >= 1) {
            productImage.removeChild(productImage.firstChild)
        }
    }

    if (productTitle.hasChildNodes()) {
        while (productTitle.childNodes.length >= 1) {
            productTitle.removeChild(productTitle.firstChild)
        }
    }
    if (productPrice.hasChildNodes()) {
        while (productPrice.childNodes.length >= 1) {
            productPrice.removeChild(productPrice.firstChild)
        }
    }

    productImage.appendChild(image);
    productTitle.appendChild(title);
    productPrice.appendChild(price);



}