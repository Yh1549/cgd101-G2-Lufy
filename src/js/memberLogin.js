let memberLogin = () => {
    let xhr = new XMLHttpRequest(); //註冊

    //連線完成後執行
    xhr.onload = () => {
        if (xhr.status == 200) { //連線成功與否的狀態碼 200=連線成功
            let memLoginbtn = document.querySelector("#mem_Loginbtn");
            document.getElementById('idMsg').innerText = "Login Sucess";
            memLoginbtn.innerText = "Log out";
        } else {
            alert(xhr.status);
        }
    };
    //與PHP連線
    xhr.open("post", "member.php", true);
    xhr.setRequestHeader("content-type", "application/x-www-form-urlencoded");
    let data_info = "memId=" + document.getElementById("memId").value + "&memPsw=" + document.getElementById("memPsw").value;
    xhr.send(data_info);
};

function init() {
    document.querySelector('#btnLogin').addEventListener("click", memberLogin, false);
};
window.addEventListener("load", init, false);