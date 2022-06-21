let storage = localStorage;

let newDiv = document.createElement('div')
let newTable = document.createElement('table')
let total = 0;

function doFirst() {
    let itemString = storage.getItem('addItemList')
    let items = itemString.substr(0, itemString.length - 2).split(', ')


    newDiv.appendChild(newTable)
    cartList.appendChild(newDiv)



    for (let i = 0; i < items.length; i++) {
        let itemInfo = storage.getItem(items[i])
        createCartList(items[i], itemInfo)

        let itemPrice = parseInt(itemInfo.split('|')[2])
        total += itemPrice
    }
    document.getElementById('total').innerText = total

}

function createCartList(itemId, itemValue) {

    let itemTitle = itemValue.split('|')[1]
    let itemImage = 'images/' + itemValue.split('|')[3]
    let itemPrice = parseInt(itemValue.split('|')[2])


    let trItemList = document.createElement('tr')
    trItemList.className = 'item'

    newTable.appendChild(trItemList)


    let tdImage = document.createElement('td')
    tdImage.style.width = '200px'

    let image = document.createElement('img')
    image.src = itemImage
    image.width = 80

    tdImage.appendChild(image)
    trItemList.appendChild(tdImage)

    let tdTitle = document.createElement('td')
    tdTitle.style.width = '280px'
    tdTitle.id = itemId

    let pTitle = document.createElement('p')
    pTitle.innerText = itemTitle

    let delButton = document.createElement('button')
    delButton.innerText = 'Delete'
    delButton.addEventListener('click', deleteItem)

    tdTitle.appendChild(pTitle)
    tdTitle.appendChild(delButton)

    trItemList.appendChild(tdTitle)



    let tdPrice = document.createElement('td')
    tdPrice.style.width = '170px'

    let pPrice = document.createElement('p')
    pPrice.innerText = itemPrice



    console.log(pPrice);
    tdPrice.appendChild(pPrice)
    trItemList.appendChild(tdPrice)



    let tdItemCount = document.createElement('td')
    tdItemCount.style.width = '170px'

    let pItemCount = document.createElement('p')
    let inputItemCount = document.createElement('input')

    inputItemCount.type = 'number'
    inputItemCount.value = 1
    inputItemCount.min = 1
    inputItemCount.className = 'js-count'
    inputItemCount.addEventListener('input', changeItemCount)

    pItemCount.appendChild(inputItemCount)
    tdItemCount.appendChild(pItemCount)
    trItemList.appendChild(tdItemCount)





}
// let total;

function deleteItem(e) {

    // let total;

    let itemId = e.target.parentNode.id
    console.log(itemId);

    let itemValue = storage.getItem(itemId)
    console.log(itemValue);
    total -= parseInt(itemValue.split('|')[2])

    document.getElementById('total').innerText = total;
    storage.removeItem(itemId);
    storage['addItemList'] = storage['addItemList'].replace(`${itemId}, `, ``);
    newTable.removeChild(e.target.parentNode.parentNode);

}



function changeItemCount(e) {
    // let a = document.getElementsByTagName('input')
    // let b = a.parentNode.parentNode.parentNode.children[1].id
    // console.log(b)

    let sum = 0;
    let list = document.querySelectorAll('.js-count');
    list.forEach(item => {
        let itemId = item.parentNode.parentNode.parentNode.children[1].id;
        // let itemClass = item.parentNode.parentNode.parentNode.children[1].classList;
        let itemValue = storage.getItem(itemId);
        console.log(itemValue);
        let newPrice = parseInt(itemValue.split('|')[2]) * (item.value);
        console.log(newPrice);
        // item.parentNode.parentNode.previousSibling.children[0].innerText = newPrice;
        sum += newPrice;

        let itemName = itemValue.split('|')[1];
        let counts = item.value

        storage.setItem(itemName, counts);




        // storage.setItem(itemId, newPrice);
        // console.log(storage.getItem(itemId))
        // console.log(newPrice);
        // storage.clear();
        // storage.setItem(itemId, newPrice);

    })
    document.getElementById('total').innerText = sum;

}
window.addEventListener('load', doFirst);

// let checkout = document.getElementById('checkout')

// function setStorage {


// }



// checkout.addEventListener('clcik', setStorage, false);