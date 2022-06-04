function showCart() {

    let cartv2 = document.querySelector(".shopping_cart_box");

    cartv2.classList.toggle('hidden');


    showItem();

}



function showItem() {

    let Value = localStorage.getItem(localStorage.key(1))

    let image = document.createElement('img')
    image.src = 'images/' + Value.split('|')[1]

    let title = document.createElement('span')
    title.innerText = Value.split('|')[0]

    let price = document.createElement('span')
    price.innerText = Value.split('|')[2]

    let product = document.querySelector('.shopping-cart .product')

    if (product.hasChildNodes()) {
        while (product.childNodes.length >= 1) {
            product.removeChild(product.firstChild)
        }
    }


    let imgDiv = document.createElement('div')
    console.log(imgDiv);
    imgDiv.className = 'product-image'
    product.appendChild(imgDiv)

    imgDiv.appendChild(image);

    let productDetails = document.createElement('div')
    productDetails.className = 'product-details'
    product.appendChild(productDetails)

    let productTtitle = document.createElement('div')
    productTtitle.className = 'product-title'
    productDetails.appendChild(productTtitle)

    productTtitle.innerText = title.innerText;

    let productDescription = document.createElement('p')

    productDescription.className = ('product-description')
    productDetails.appendChild(productDescription)
    productDescription.innerText = "The best dog bones of all time. Holy crap. Your dog will be begging "

    let productPrice = document.createElement('div')
    productPrice.className = "product-price"

    product.appendChild(productPrice)
    productPrice.innerText = price.innerText
    console.log(price.innerText);













}