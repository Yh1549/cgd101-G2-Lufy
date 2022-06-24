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
            alert("已加入購物車");
            // location.reload();
            // console.log(lamp);
            // console.log(e.target.id);
            // console.log(e.target.id);
        })
    }
    let list2 = document.querySelectorAll('.buyNowButton');
    for (let i = 0; i < list2.length; i++) {
        list2[i].addEventListener('click', function (e) {
            let selector = e.target + ' input'
            let lamp = document.querySelector(`span input`).value
            addItem(e.target.id, lamp);
           
            // location.reload();
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

   
    if (storage[itemId]) {
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
}
window.addEventListener('load', doFirst, false);