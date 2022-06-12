function showInfro() {



    let name = localStorage.getItem("name");

    let receiverName = document.querySelector('.receiverName');
    receiverName.value = name;

    let discount = localStorage.getItem("discount");

    let orderPrice = document.querySelector('.orderPrice');
    orderPrice.value = discount;



    let phone = localStorage.getItem("phone");

    let receiverPhone = document.querySelector('.receiverPhone');
    receiverPhone.value = phone;

    let address = localStorage.getItem("address");

    let receiverAddress = document.querySelector('.receiverAddress');
    receiverAddress.value = address;

    let arriveTime = localStorage.getItem("arriveTime");

    let arriveDate = document.querySelector('.arriveDate');
    arriveDate.value = arriveTime;

}
window.addEventListener("load", showInfro, false)