let storage = localStorage;

function doFirst() {

    if (storage['addItemList'] == null) {
        storage['addItemList'] = '';
    }
    let list = document.querySelectorAll('.addButton');
    for (let i = 0; i < list.length; i++) {
        list[i].addEventListener('click', function(e) {
            let lamp = document.querySelector(`#${e.target.id} input`).value;
            addItem(e.target.id, lamp);
            // console.log(lamp);
        })
    }



}

function addItem(itemId, itemValue) {

    let image = document.createElement('img')
    image.src = 'images/' + itemValue.split('|')[1]

    let title = document.createElement('span')
    title.innerText = itemValue.split('|')[0]

    let price = document.createElement('span')
    price.innerText = itemValue.split('|')[2]

    let newItem = document.getElementById('newItem')


    if (newItem.hasChildNodes()) {
        while (newItem.childNodes.length >= 1) {
            newItem.removeChild(newItem.firstChild)
        }
    }


    newItem.appendChild(image)
    newItem.appendChild(title)
    newItem.appendChild(price)

    // 存入 storage
    if (storage[itemId]) {
        // alert('You have checked,click cart to view it.')
    } else {
        storage['addItemList'] += `${itemId}, `;
        storage.setItem(itemId, itemValue);
        console.log(itemValue);
    }


    let itemString = storage.getItem('addItemList')
    let items = itemString.substr(0, itemString.length - 2).split(', ')
    console.log(itemString);
    console.log(items);


    let subtotal = 0;
    for (let i = 0; i < items.length; i++) {
        let itemInfo = storage.getItem(items[i]);
        console.log(itemInfo);
        let itemPrice = parseInt(itemInfo.split('|')[2]);

        subtotal += itemPrice
    }

    document.getElementById('itemCount').innerText = items.length
    document.getElementById('subtotal').innerText = subtotal
}
window.addEventListener('load', doFirst, false);


function showLarge(e) {
    document.getElementById("large").src = e.target.src;

}

function init() {
    let imgs = document.getElementsByClassName("small");
    for (let i = 0; i < imgs.length; i++) {
        imgs[i].onclick = showLarge;
    }

}

window.addEventListener("load", init, false);


let discribe = document.getElementById("discribe");
let format = document.getElementById("format");
let divDiscribe = document.querySelector(".product_discribe")
let divFormat = document.querySelector(".product_format")

function showDiscribe() {
    if (divDiscribe.classList.contains("hidden")) {
        divDiscribe.classList.remove("hidden");
        divFormat.classList.add("hidden");
    }
}

function showFormat() {
    if (divFormat.classList.contains("hidden")) {
        divFormat.classList.remove("hidden");
        divDiscribe.classList.add("hidden");

    }
}

function init2() {
    discribe.addEventListener("click", showDiscribe)
    format.addEventListener("click", showFormat)
}
window.addEventListener("load", init, false);
let addButton = document.querySelector('.addButton')
let pImg = document.querySelector('.main_product_img');
let issue = document.querySelector('.product_overlay')

function showIssue() {

    pImg.classList.add("hidden");


    issue.classList.remove("hidden");

    gsap.fromTo('.product_overlay', {

        rotate: 0,
        duration: 1


    }, {
        rotate: 360,
    });

    setTimeout(returnImg, 1500)
}

function returnImg() {
    pImg.classList.remove("hidden");


    issue.classList.add("hidden");


}

addButton.addEventListener("click", showIssue, false)
window.addEventListener("load", init2, false);