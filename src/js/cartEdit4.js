function showInfro(j) {

    let orderno = document.querySelector('.orderno')
    var random_no = "";
    for (var i = 0; i < j; i++) //j位隨機數，用以加在時間戳後面。
    {
        random_no += Math.floor(Math.random() * 10);
    }
    random_no = new Date().getTime() + random_no;

    orderno.innerHTML = random_no

    let name = localStorage.getItem("name");

    let receiverName = document.querySelector('.receiverName');
    receiverName.innerHTML = name;

    let discount = localStorage.getItem("discount");

    let orderPrice = document.querySelector('.orderPrice');
    orderPrice.innerHTML = discount;



    let phone = localStorage.getItem("phone");

    let receiverPhone = document.querySelector('.receiverPhone');
    receiverPhone.innerHTML = phone;

    let address = localStorage.getItem("address");

    let receiverAddress = document.querySelector('.receiverAddress');
    receiverAddress.innerHTML = address;

    let arriveTime = localStorage.getItem("arriveTime");

    let arriveDate = document.querySelector('.arriveDate');
    arriveDate.innerHTML = arriveTime;

}
window.addEventListener("load", showInfro, false)