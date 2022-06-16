function $id(id) {
    return document.getElementById(id);
}
let registerCheck = (e) => {
    // Name跟email檢查有無重複
    let xhr = new XMLHttpRequest();
    xhr.onload = () => {
        if (xhr.status == 200) {
            $id('idMsg').innerText = xhr.responseText;
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
};

let register = function () {
    let regInput = document.querySelectorAll(".regInput");
    for (let i = 0; i < regInput.length; i++) {
        if (regInput[i].value == "") {
            alert("No blank!!");
            break;
        } else if (i == regInput.length - 1) {
            let xhr = new XMLHttpRequest();
            xhr.onload = () => {
                if (xhr.status == 200) {
                    $id('idMsg').innerText = xhr.responseText;
                    if (xhr.responseText == "Register Sucess") {
                        setTimeout(() => {
                            window.location.assign("memberCenter.html")
                        }, 1000);
                    }
                } else {
                    alert(xhr.status);
                }
            }
            xhr.open("post", "memberRegister.php", true);
            xhr.setRequestHeader("content-type", "application/x-www-form-urlencoded");
            let dataReg = {};
            dataReg.memName = $id("memName").value;
            dataReg.email = $id("email").value;
            dataReg.memPsw = $id("memPsw").value;
            dataReg.memBD = $id("memBD").value;
            dataReg.memPhone = $id("memPhone").value;
            dataReg.Address = $id("Address").value;
            let data_info = `json=${JSON.stringify(dataReg)}`;
            xhr.send(data_info);
            console.log(data_info)
        }
    }
}
//初始化
let init = () => {
    // ----Name跟email檢查
    let ip = document.querySelectorAll(".regInputCheck");
    for (let i = 0; i < ip.length; i++) {
        ip[i].onchange = registerCheck;
    }
    // ----註冊按鈕
    $id("ipReg").addEventListener("click", register, false);
}
window.addEventListener("load", init, false);