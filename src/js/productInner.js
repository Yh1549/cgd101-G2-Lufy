let storage = localStorage;

function doFirst() {

    if (storage['addItemList'] == null) {
        storage['addItemList'] = '';
    }
    let list = document.querySelectorAll('.addButton');
    for (let i = 0; i < list.length; i++) {
        list[i].addEventListener('click', function (e) {
            let selector = e.target + ' input'
            let lamp = document.querySelector(`span input`).value
            addItem(e.target.id, lamp);
            // console.log(lamp);
            // console.log(e.target.id);
            // console.log(e.target.id);
        })
    }
}

function addItem(itemId, itemValue) {
   
    let image = document.createElement('img')
    image.src = 'images/' + itemValue.split('|')[3]

    let title = document.createElement('span')
    title.innerText = itemValue.split('|')[1]

    let price = document.createElement('span')
    price.innerText = itemValue.split('|')[2]

    // let newItem = document.getElementById('newItem')


    // if (newItem.hasChildNodes()) {
    //     while (newItem.childNodes.length >= 1) {
    //         newItem.removeChild(newItem.firstChild)
    //     }
    // }


    // newItem.appendChild(image)
    // newItem.appendChild(title)
    // newItem.appendChild(price)

    // 存入 storage
    if (storage[itemId]) {
        // alert('You have checked,click cart to view it.')
    } else {
        storage['addItemList'] += `${itemId}, `;
        storage.setItem(itemId, itemValue);
       
    }


    let itemString = storage.getItem('addItemList')
    let items = itemString.substr(0, itemString.length - 2).split(', ')
    


    let subtotal = 0;
    for (let i = 0; i < items.length; i++) {
        let itemInfo = storage.getItem(items[i]);
     
        let itemPrice = parseInt(itemInfo.split('|')[2]);

        subtotal += itemPrice
    }

    // document.getElementById('itemCount').innerText = items.length
    // document.getElementById('subtotal').innerText = subtotal
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

window.addEventListener("load", init, false);
let addButton = document.querySelector('.addButton')
let pImg = document.getElementById('large')

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
