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
     localStorage.setItem("arriveTime", str4);

     let str5 = document.querySelector(".pname").value;
     localStorage.setItem("pname", str5);

     let str6 = document.querySelector(".pphone").value;
     localStorage.setItem("pphone", str6);

     let str7 = document.querySelector(".paddress").value;
     localStorage.setItem("paddress", str7);

     let str8 = document.querySelector(".card1").value;
     localStorage.setItem("card1", str8);

     let str9 = document.querySelector(".card2").value;
     localStorage.setItem("card2", str9);

     let str10 = document.querySelector(".card3").value;
     localStorage.setItem("card3", str10);













     // console.log(dateString);
     // console.log(str4);
     // console.log(typeof str4);

 }