function showOrder(json){
    let order = JSON.parse(json);
    let order2 = JSON.stringify(order);
    console.log(order);
    console.log(order.order_no);
    let html;

   
        html = `<table class='memTable'>
        <tr><th>orderNo</th><td>${order2}</td></tr>
        
        </table>`;        
   
    document.getElementById("showPanel").innerHTML = html;
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