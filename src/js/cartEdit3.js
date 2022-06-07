let storage = localStorage;
let itemString = storage.getItem('addItemList')
let items = itemString.substr(0, itemString.length - 2).split(', ')

let newDiv = document.createElement('div')
let newTable = document.createElement('table')
let total = 0;

function doFirst() {




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

    let itemTitle = itemValue.split('|')[0]
    let itemImage = 'images/' + itemValue.split('|')[1]
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
        // delButton.addEventListener('click', deleteItem)

    tdTitle.appendChild(pTitle)
        // tdTitle.appendChild(delButton)

    trItemList.appendChild(tdTitle)



    let tdPrice = document.createElement('td')
    tdPrice.style.width = '170px'

    let pPrice = document.createElement('p')
    let newPrice = storage.getItem(itemValue.split('|')[0])

    pPrice.className = 'tPrice'
    pPrice.innerText = newPrice


    tdPrice.appendChild(pPrice)
    trItemList.appendChild(tdPrice)



    let tdItemCount = document.createElement('td')
    tdItemCount.style.width = '170px'

    let pItemCount = document.createElement('p')
    let inputItemCount = document.createElement('input')

    let counts = storage.getItem(newPrice)
    inputItemCount.disabled = true
    inputItemCount.type = 'number'
    inputItemCount.value = counts
    inputItemCount.min = 1
        // inputItemCount.addEventListener('input', changeItemCount)

    pItemCount.appendChild(inputItemCount)
    tdItemCount.appendChild(pItemCount)
    trItemList.appendChild(tdItemCount)


    let sum = 0;
    let list = document.querySelectorAll('.tPrice');
    list.forEach(tPrice => {
        tPrice.innerText = newPrice




        sum += parseInt(newPrice);
        console.log(sum);





        // storage.setItem(itemId, newPrice);
        // console.log(storage.getItem(itemId))
        // console.log(newPrice);
        // storage.clear();
        // storage.setItem(itemId, newPrice);

    })
    document.getElementById('total2').innerText = sum;






}




window.addEventListener('load', doFirst);

let discount = document.getElementById('discount')

function goDiscount() {
    let total = document.getElementById('total2').innerText

    if (discount.value == 1) {
        document.getElementById('dtotal').innerText = total * 0.9
    } else if (discount.value == 2) {
        document.getElementById('dtotal').innerText = total * 0.88
    } else {
        document.getElementById('dtotal').innerText = total

    }
    console.log(discount.value)

}
discount.addEventListener("change", goDiscount, false)

let sendBtn = document.querySelector('.sendBtn')

function setDiscount() {
    let dtotal = document.getElementById('dtotal').innerText



    localStorage.setItem("discount", dtotal);
}


sendBtn.addEventListener("click", setDiscount, false)