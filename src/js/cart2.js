let storage = localStorage;

function doFirst() {
    let itemString = storage.getItem('addItemList')
    let items = itemString.substr(0, itemString.length - 2).split(', ')

    newDiv = document.createElement('div')
    newTable = document.createElement('table')



    newDiv.appendChild(newTable)
    cartList.appendChild(newDiv)

    total = 0;


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
    inputItemCount.addEventListener('input', changeItemCount)

    pItemCount.appendChild(inputItemCount)
    tdItemCount.appendChild(pItemCount)
    trItemList.appendChild(tdItemCount)





}

function deleteItem(e) {

    let itemId = e.target.parentNode.id

    let itemValue = storage.getItem(itemId)
    total -= parseInt(itemValue.split('|')[2])

    document.getElementById('total').innerText = total



    storage.removeItem(itemId)

    storage['addItemList'] = storage['addItemList'].replace(`${itemId}, `, ``)


    newTable.removeChild(e.target.parentNode.parentNode)

}

function changeItemCount() {

}
window.addEventListener('load', doFirst);