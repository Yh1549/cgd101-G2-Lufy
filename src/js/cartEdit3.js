let storage = localStorage;
let itemString = storage.getItem('addItemList')
let items = itemString.substr(0, itemString.length - 2).split(', ')

let newDiv = document.createElement('div')
let newTable = document.createElement('table')
let total = 0;
let totalcounts = 0;
let fproductPrice = 0;

function doFirst() {




    let pname = localStorage.getItem("pname");

    let payerName = document.querySelector('.payerName');
    payerName.value = pname;

    let pphone = localStorage.getItem("pphone");

    let payerPhone = document.querySelector('.payerPhone');
    payerPhone.value = pphone;

    let paddress = localStorage.getItem("paddress");

    let payerAddress = document.querySelector('.payerAddress');
    payerAddress.value = paddress;

    let card1 = localStorage.getItem("card1");

    let creditCard1 = document.querySelector('.creditCard1');
    creditCard1.value = card1;

    let card2 = localStorage.getItem("card2");

    let creditCard2 = document.querySelector('.creditCard2');
    creditCard2.value = card2;

    let card3 = localStorage.getItem("card3");

    let creditCard3 = document.querySelector('.creditCard3');
    creditCard3.value = card3;


    let name = localStorage.getItem("name");

    let receiverName = document.querySelector('.receiverName');
    receiverName.value = name;

    let discount = localStorage.getItem("discount");

    let orderTotal = document.querySelector('.orderTotal');
    orderTotal.value = discount;



    let phone = localStorage.getItem("phone");

    let receiverPhone = document.querySelector('.receiverPhone');
    receiverPhone.value = phone;

    let address = localStorage.getItem("address");

    let receiverAddress = document.querySelector('.receiverAddress');
    receiverAddress.value = address;

    let arriveTime = localStorage.getItem("arriveTime");

    let arriveDate = document.querySelector('.arriveDate');
    arriveDate.value = arriveTime;

    let notes = localStorage.getItem('notes');
    console.log(notes);
    let theNotes = document.querySelector('.notes');
    theNotes.value = notes;



    newDiv.appendChild(newTable)
    cartList.appendChild(newDiv)
    let productsNo = 0;

    for (let i = 0; i < items.length; i++) {
        let itemInfo = storage.getItem(items[i])
        createCartList(items[i], itemInfo)

        let productNo = document.querySelector('.productNo');
         productsNo += (itemInfo.split('|')[4])+",";
         let  productsNo2 = productsNo.substring(0, productsNo.length - 1);
         let  productsNo3 = productsNo2.slice(1)
         console.log(productsNo2);
      


        productNo.value = productsNo3;




        let itemPrice = parseInt(itemInfo.split('|')[2])
        total += itemPrice
    }
    // document.getElementById('total2').innerText = total

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
        // let newPrice = storage.getItem(itemValue.split('|')[0])

    pPrice.className = 'tPrice'
    pPrice.innerText = parseInt(itemValue.split('|')[2])
    let productPrice = document.querySelector('.productPrice')

    fproductPrice += (itemValue.split('|')[2]) + ","
    console.log(fproductPrice);

    let theproudctPrice = fproductPrice.substring(0, fproductPrice.length - 1)
   



    let ffproductPrice = theproudctPrice.slice(1)
   

    productPrice.value = ffproductPrice


    tdPrice.appendChild(pPrice)
    trItemList.appendChild(tdPrice)



    let tdItemCount = document.createElement('td')
    tdItemCount.style.width = '170px'

    let pItemCount = document.createElement('p')
    let inputItemCount = document.createElement('input')

    let counts = storage.getItem(itemValue.split('|')[0])
    inputItemCount.disabled = true
    inputItemCount.type = 'number'
    inputItemCount.value = counts
    inputItemCount.min = 1

    let productCounts = document.querySelector('.productCounts');
    totalcounts += counts + ',';
    console.log(totalcounts);
    let tcounts = totalcounts.substring(0, totalcounts.length - 1);
    console.log(tcounts);
    var ftotalcounts = tcounts.slice(1)

    productCounts.value = ftotalcounts;



    pItemCount.appendChild(inputItemCount)
    tdItemCount.appendChild(pItemCount)
    trItemList.appendChild(tdItemCount)


    let sum = 0;
    let list = document.querySelectorAll('.tPrice');

    list.forEach(item => {
        let price = item.innerText;
        // console.log(item.innerText);

        let fcounts = item.parentNode.nextSibling.firstChild.firstChild.value
            // console.log(fcounts);

        let newPrice = price * fcounts
        sum += newPrice;
        // console.log(sum);
        // storage.setItem(itemId, newPrice);
        // console.log(storage.getItem(itemId))
        // console.log(newPrice);
        // storage.clear();
        // storage.setItem(itemId, newPrice);

    })
    document.getElementById('total2').innerText = sum;
    // console.log(sum);

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
    let orderTotal = document.querySelector('.orderTotal')
    orderTotal.value = document.getElementById('dtotal').innerText


    let orderTime = document.querySelector('.orderTime');

    var today = new Date();

    var currentDateTime =

        today.getFullYear() + '/' +

        (today.getMonth() + 1) + '/' +

        today.getDate() + '/(' +

        today.getHours() + ':' + today.getMinutes() +

        ')';

    orderTime.value = currentDateTime;




}
discount.addEventListener("change", goDiscount, false)

let sendBtn = document.querySelector('.sendBtn')

function setDiscount() {
    let dtotal = document.getElementById('dtotal').innerText



    localStorage.setItem("discount", dtotal);
}


sendBtn.addEventListener("click", setDiscount, false)
window.addEventListener("load", function() {
    //-----------------
    document.getElementById("btnNext").onclick = function() {
        let xhr = new XMLHttpRequest();
        xhr.onload = function() {
            alert(xhr.responseText);

        }

        xhr.open("post", "./prodInsert.php");
        xhr.send(new FormData(document.getElementById("myForm2")));
        console.log(document.getElementById("myForm2"));

    }


})