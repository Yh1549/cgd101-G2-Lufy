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
        document.cookie = "memName=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/phplab/LUFY/dist;";
        document.cookie = "memId=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/phplab/LUFY/dist;";
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

function init() {
    let ul = document.querySelector(".ul");
    ul.addEventListener("click", changeTab, false);
    let memLoginbtn = document.querySelector("#mem_Loginbtn");
    memLoginbtn.addEventListener("click", Logintab, false);
    if (document.cookie == "") {
        memLoginbtn.innerText = "Log in"
        console.log(2);
    } else {
        memLoginbtn.innerText = "Log out"
        console.log(1);
    }
};
window.addEventListener("load", init, false);