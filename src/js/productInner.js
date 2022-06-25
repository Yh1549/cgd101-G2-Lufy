let storage = localStorage;

// let list = document.querySelectorAll('.addButton');
// for (let i = 0; i < list.length; i++) {
//     list[i].addEventListener('click', function (e) {
//         let selector = e.target + ' input'
//         let lamp = document.querySelector(`span input`).value
//         var xhr = new XMLHttpRequest();
//         xhr.onload = function () {
//             if (xhr.status == 200) {
//                 if(xhr.responseText == "已登入"){
//                     addItem(e.target.id, lamp);
//                     alert("已加入購物車");
                    
//                 }else
//                     alert("請登入");
                
          
//         }
//     }
//         xhr.open("get","./checkMemberState.php",true); //執行登出php(刪除session)
//         xhr.send(null);
       
//         // location.reload();
//         // console.log(lamp);
//         // console.log(e.target.id);
//         // console.log(e.target.id);
//     })
// }
// let list2 = document.querySelectorAll('.buyNowButton');
// for (let i = 0; i < list2.length; i++) {
//     list2[i].addEventListener('click', function (e) {
//         let selector = e.target + ' input'
//         let lamp = document.querySelector(`span input`).value;
//         var xhr = new XMLHttpRequest();
//         xhr.onload = function () {
//             if (xhr.status == 200) {
//                 if(xhr.responseText == "已登入"){
//                     addItem(e.target.id, lamp);
//                     window.location.href="cartEdit.html";
                    
//                 }else
//                     alert("請登入");
                
          
//         }
//     }
//         xhr.open("get","./checkMemberState.php",true); //執行登出php(刪除session)
//         xhr.send(null);
//         addItem(e.target.id, lamp);
       
//         // location.reload();
//         // console.log(lamp);
//         // console.log(e.target.id);
//         // console.log(e.target.id);
//     })
// }

// function doFirst() {

//     if (storage['addItemList'] == null) {
//         storage['addItemList'] = '';
//     }
  
   
    
// }

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