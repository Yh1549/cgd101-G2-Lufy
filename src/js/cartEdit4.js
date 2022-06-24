let newDiv = document.createElement('div')
let newTable = document.createElement('table')

function showOrder(json){
    let order = JSON.parse(json);
    // let order2 = JSON.stringify(order);
    console.log(order);
   
    // console.log(order[0].order_no);
    let html;
  

    newDiv.appendChild(newTable);
    cartList.appendChild(newDiv);

    for (let i = 0; i <order.length/4; i++) {
       
        let itemTitle =order[0+i*4].name
        console.log(itemTitle);
        let itemImage = 'images/' + order[0+i*4].image_path;
        console.log(itemImage);
        let itemPrice = parseInt(order[0+i*4].product_price);
        console.log(itemPrice);
    
    
        let trItemList = document.createElement('tr')
        trItemList.className = 'item'
    
        newTable.appendChild(trItemList)
    
    
        let tdImage = document.createElement('td')
        tdImage.style.width = '200px'
    
        let image = document.createElement('img')
        image.src = itemImage
        image.width = 80
        image.height = 80
    
        tdImage.appendChild(image)
        trItemList.appendChild(tdImage)
    
        let tdTitle = document.createElement('td')
        tdTitle.style.width = '280px'
        tdTitle.id = order[i].name
    
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
        pPrice.innerText = itemPrice
        let productPrice = document.querySelector('.productPrice')
    
        // fproductPrice += (itemValue.split('|')[2]) + ","
        // console.log(fproductPrice);
    
        // let theproudctPrice = fproductPrice.substring(0, fproductPrice.length - 1)
       
    
    
    
        // let ffproductPrice = theproudctPrice.slice(1)
       
    
        // productPrice.value = ffproductPrice
    
    
        tdPrice.appendChild(pPrice)
        trItemList.appendChild(tdPrice)
    
    
    
        let tdItemCount = document.createElement('td')
        tdItemCount.style.width = '170px'
    
        let pItemCount = document.createElement('p')
        let inputItemCount = document.createElement('input')
    
        let counts = order[0+i*4].order_count
        inputItemCount.disabled = true
        inputItemCount.type = 'number'
        inputItemCount.value = counts
        inputItemCount.min = 1
    
        // let productCounts = document.querySelector('.productCounts');
        // totalcounts += counts + ',';
        // console.log(totalcounts);
        // let tcounts = totalcounts.substring(0, totalcounts.length - 1);
        // console.log(tcounts);
        // var ftotalcounts = tcounts.slice(1)
    
        // productCounts.value = ftotalcounts;
    
    
    
        pItemCount.appendChild(inputItemCount)
        tdItemCount.appendChild(pItemCount)
        trItemList.appendChild(tdItemCount)
    
    
  
    }
    

   
        html = `<table class='orderTable'>
        <tr><th>orderNo: </th><td>${order[0].order_no}</td></tr>
        
        
   
        <tr><th>orderTotal: </th><td>${order[0].order_total}</td></tr>
        <tr><th>recipientAddress: </th><td>${order[0].recipient_address}</td></tr>
        <tr><th>recipientName: </th><td>${order[0].recipient_name}</td></tr>
        <tr><th>recipientPhone: </th><td>${order[0].recipient_phone}</td></tr>
        <tr><th>recipientDatetime: </th><td id=datetime></td></tr>




         
         </table>`;        
   
     document.getElementById("showPanel").innerHTML = html;
    // for(let i=0;i<order.length;i++){
    //     productnos += order[i].product_no + ",";
    //     productcounts += order[i].order_count + ",";
    //     productPrices += order[i].product_price + ",";
    // }
    // let productnos2 = productnos.substring(0,productnos.length - 1);
    // let productnos3 = productnos2.slice(1);
    // document.getElementById('productNo').innerText = productnos3;

    // let productcounts2 =  productcounts.substring(0, productcounts.length -1);
    // let productcounts3 =  productcounts2.slice(1);
    // document.getElementById('productCount').innerText = productcounts3;

    // let  productPrices2 =  productPrices.substring(0,  productPrices.length -1);
    // let  productPrices3 =  productPrices2.slice(1);
   
    // document.getElementById('productPrice').innerText =  productPrices3;

    let datetime = order[0].recipient_datetime;
    // let datetime2 = datetime.substring(0,datetime.length-7);
    document.getElementById('datetime').innerText = datetime;


}


    
function getOrder(){
    let xhr = new XMLHttpRequest();
    xhr.onload = function() {
        showOrder(xhr.responseText);
      
    }


    xhr.open("get","./getOrders.php");

    xhr.send(null);

}
window.addEventListener("load",getOrder);
let checkorder = document.getElementById('checkorder');
window.addEventListener("click",clearStorage);
function clearStorage (){
    localStorage.clear();
}