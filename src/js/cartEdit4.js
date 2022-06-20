function showOrder(json){
    let order = JSON.parse(json);
    // let order2 = JSON.stringify(order);
    console.log(order);
    console.log(order.length);
    // console.log(order[0].order_no);
    let html;
    let productnos = 0; 
    let productcounts = 0;
    let  productPrices = 0;
    

   
        html = `<table class='orderTable'>
        <tr><th>orderNo: </th><td>${order[0].order_no}</td></tr>
        
        
        <tr><th>productNo: </th><td id=productNo></td></tr>
        <tr><th>productCount: </th><td id=productCount></td></tr>
        <tr><th>productPrice: </th><td id=productPrice></td></tr>
        <tr><th>orderTotal: </th><td>${order[0].order_total}</td></tr>
        <tr><th>recipientAddress: </th><td>${order[0].recipient_address}</td></tr>
        <tr><th>recipientName: </th><td>${order[0].recipient_name}</td></tr>
        <tr><th>recipientPhone: </th><td>${order[0].recipient_phone}</td></tr>
        <tr><th>recipientDatetime: </th><td id=datetime></td></tr>




         
         </table>`;        
   
    document.getElementById("showPanel").innerHTML = html;
    for(let i=0;i<order.length;i++){
        productnos += order[i].product_no + ",";
        productcounts += order[i].order_count + ",";
        productPrices += order[i].product_price + ",";
    }
    let productnos2 = productnos.substring(0,productnos.length - 1);
    let productnos3 = productnos2.slice(1);
    document.getElementById('productNo').innerText = productnos3;

    let productcounts2 =  productcounts.substring(0, productcounts.length -1);
    let productcounts3 =  productcounts2.slice(1);
    document.getElementById('productCount').innerText = productcounts3;

    let  productPrices2 =  productPrices.substring(0,  productPrices.length -1);
    let  productPrices3 =  productPrices2.slice(1);
    console.log(productPrices3);
    document.getElementById('productPrice').innerText =  productPrices3;

    let datetime = order[0].recipient_datetime;
    let datetime2 = datetime.substring(0,datetime.length-7);
    document.getElementById('datetime').innerText = datetime2;


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