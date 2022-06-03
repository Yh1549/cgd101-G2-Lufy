 //綁定 .setBtn
 var setBtn = document.querySelector(".setBtn");
 //監聽 setBtn
 setBtn.addEventListener("click", setInputItem, false);
 //建立 function
 function setInputItem(e) {
     let str = document.querySelector(".name").value; //選擇到表單輸入的值
     localStorage.setItem("name", str); //存入 localStorage

     let str2 = document.querySelector(".phone").value;
     localStorage.setItem("phone", str2);

     let str3 = document.querySelector(".address").value;
     localStorage.setItem("address", str3);


     let str4 = document.querySelector(".arriveTime").value;

     // let dateString = str4.toString();

     localStorage.setItem("arriveTime", str4);

     // console.log(dateString);
     // console.log(str4);
     // console.log(typeof str4);

 }