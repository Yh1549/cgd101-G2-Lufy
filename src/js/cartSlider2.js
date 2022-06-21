// const { compileString } = require("sass");

function showCart() {

    let cartv2 = document.querySelector(".shopping_cart_box");

    cartv2.classList.toggle('hidden');

    let itemString = localStorage.getItem('addItemList')
    let items = itemString.substr(0, itemString.length - 2).split(', ')



    let total = 0

    for (let i = 0; i < items.length; i++) {
        let itemInfo = localStorage.getItem(items[i])
        showItem(items[i], itemInfo)

        let itemPrice = parseInt(itemInfo.split('|')[2])
        total += itemPrice
       
    }

    document.getElementById('cart-total').innerText = total


}



function showItem(itemId, Value) {

    Value = localStorage.getItem(itemId)

    let image = document.createElement('img')
    image.src = 'images/' + Value.split('|')[3]

    let title = document.createElement('span')
    title.innerText = Value.split('|')[1]

    let price = document.createElement('span')
    price.innerText = Value.split('|')[2]
  
    let text = document.createElement('p')
    text.innerText = Value.split('|')[4]
    
    // let product = document.querySelector('.shopping-cart .product')

    let shoppingCart = document.querySelector('.shopping-cart')



    let product = document.createElement('div')
    product.className = 'product'
    shoppingCart.appendChild(product)

    console.log(shoppingCart.childNodes.length);



    if (shoppingCart.hasChildNodes()) {
        while (shoppingCart.childNodes.length >= 8) {
            shoppingCart.removeChild(shoppingCart.lastChild)
        }
    }


    let imgDiv = document.createElement('div')
  
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
    productDescription.innerText = text.innerText

    let productPrice = document.createElement('div')
    productPrice.className = "product-price"

    product.appendChild(productPrice)
    productPrice.innerText = price.innerText
  













}