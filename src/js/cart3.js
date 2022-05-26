//綁定 .setBtn
var setBtn = document.querySelector(".setBtn");
//監聽 setBtn
setBtn.addEventListener("click", setInputItem, false);
//建立 function
function setInputItem(e) {
    var str = document.querySelector(".text").value; //選擇到表單輸入的值
    localStorage.setItem("textName", str); //存入 localStorage
}
console.log("textName");