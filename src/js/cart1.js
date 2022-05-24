let storage = localStorage;

function doFirst() {
    if (storage['addItemList'] == null) {
        storage['addItemList'] = '';
    }


    let list = document.querySelectorAll('.addButton');
    for (let i = 0; i < list.length; i++) {
        list[i].addEventListener('click', function(e) {

            let teddyInfo = document.querySelector(`#${e.target.id} input`).value

            addItem(e.target.id, teddyInfo)
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
        // newItem.appendChild(title)
        // newItem.appendChild(price)

    // 存入 storage
    if (storage[itemId]) {
        alert('You have checked.')
    } else {
        storage['addItemList'] += `${itemId}, `;
        storage.setItem(itemId, itemValue)
    }


    let itemString = storage.getItem('addItemList')
    let items = itemString.substr(0, itemString.length - 2).split(', ')


    subtotal = 0;
    for (let i = 0; i < items.length; i++) {
        let itemInfo = storage.getItem(items[i])
        let itemPrice = parseInt(itemInfo.split('|')[2])

        subtotal += itemPrice
    }

    document.getElementById('itemCount').innerText = items.length
    document.getElementById('subtotal').innerText = subtotal
}
window.addEventListener('load', doFirst);