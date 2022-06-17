
let admincheck = () => {
    let xhr = new XMLHttpRequest();
    xhr.onload = () => {
        if (xhr.status == 200) {
            if (xhr.responseText == "fail") {
                alert("權限不足 即將跳轉至登入頁面");
                setTimeout(() => {
                    window.location.assign("backendLogin.html");
                }, 1000);
            }
        }
    };
    xhr.open("get", "backendCheck.php", false);
    xhr.send(null);
}

window.addEventListener("load", admincheck, false);
