function $id(id) {
    return document.getElementById(id);
}
let Logintab = (e) => {
    let memLoginbtn = document.querySelector("#mem_Loginbtn");
    if (memLoginbtn.innerText == "Log in") {
        document.querySelector("#member_welcome").classList.remove("member_hide");
        if (document.cookie != "") {
            memLoginbtn.innerText = "Log out";
        }
    } else if (memLoginbtn.innerText == "Log out") {
        for (
            let i = 0; i < document.querySelector(".ul").children.length; i++
        ) {
            document.querySelectorAll(".memberform")[i].classList.add("member_hide");
        }
        document.querySelector("#member_welcome").classList.remove("member_hide");
        let xhr = new XMLHttpRequest();
        xhr.onload = function() {
            memLoginbtn.innerText = "Log in";
        }
        xhr.open("get", "memberLogout.php", true);
        xhr.send(null);
        memLoginbtn.innerText = "Log in";
    }
};

let changeTab = (e) => {
    // console.log(e.target);
    let memberform = document.querySelectorAll(".memberform");
    let memLoginbtn = document.querySelector("#mem_Loginbtn");
    for (
        let i = 0; i < document.querySelector(".ul").children.length; i++
    ) {
        if (document.cookie != "") {
            if (e.target == document.querySelector(".ul").children[i]) {
                memberform[i].classList.remove("member_hide");
                document
                    .querySelector("#member_welcome")
                    .classList.add("member_hide");
            } else if (e.target == document.querySelector(".ul")) {
                document
                    .querySelector("#member_welcome")
                    .classList.remove("member_hide");
                memberform[i].classList.add("member_hide");
            } else {
                memberform[i].classList.add("member_hide");
            }
        } else {
            alert("Login First");
            // console.log(document.cookie);
            break;
        }

    }
};

function getMemberinfo() {
    let xhr = new XMLHttpRequest();
    xhr.onload = function() {
        member = JSON.parse(xhr.responseText);
        if (member.memName) {
            $id("memName").innerText = member.memName;
            $id("spanLogin").innerText = "登出";
        }
    }
    xhr.open("get", "getMemberInfo.php", true);
    xhr.send(null);
};

function init() {
    getMemberinfo();
    let ul = document.querySelector(".ul");
    ul.addEventListener("click", changeTab, false);
    let memLoginbtn = document.querySelector("#mem_Loginbtn");
    memLoginbtn.addEventListener("click", Logintab, false);
};
window.addEventListener("load", init, false);