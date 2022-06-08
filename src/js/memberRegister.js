let registerCheck = function(e) {
    // Name跟email檢查有無重複
    let xhr = new XMLHttpRequest();
    xhr.onload = () => {
        if (xhr.status == 200) {
            document.getElementById('idMsg').innerText = xhr.responseText;
        } else {
            alert(xhr.status);
        }
    }
    xhr.open("post", "memberRegister.php", true);
    xhr.setRequestHeader("content-type", "application/x-www-form-urlencoded");
    let data = {};
    data[e.target.name] = document.getElementById(e.target.name).value;
    let data_info = `json=${JSON.stringify(data)}`;
    xhr.send(data_info);
    console.log(data_info);
};

let register = function(){
    let xhr = new XMLHttpRequest();
    xhr.onload = () => {
        if (xhr.status == 200) {
            document.getElementById('idMsg').innerText = xhr.responseText;
        } else {
            alert(xhr.status);
        }
    }
    xhr.open("post", "memberRegister.php", true);
    xhr.setRequestHeader("content-type", "application/x-www-form-urlencoded");
    let dataReg = {};
    dataReg.memName = document.getElementById("memName").value;
    dataReg.email = document.getElementById("email").value;
    dataReg.memPsw = document.getElementById("memPsw").value;
    dataReg.memBD = document.getElementById("memBD").value;
    dataReg.memPhone = document.getElementById("memPhone").value;
    dataReg.Address = document.getElementById("Address").value;
    let data_info = `json=${JSON.stringify(dataReg)}`;
    xhr.send(data_info);
    console.log(data_info)
}
//初始化
let init = () => {
// ----Name跟email檢查
    let ip = document.querySelectorAll(".regInputCheck");
    for (let i = 0; i < ip.length; i++) {
        ip[i].onchange = registerCheck;
    } 
// ----註冊按鈕
    document.getElementById("ipReg").addEventListener("click", register, false);
}
window.addEventListener("load", init, false);