function $id(id) {
    return document.getElementById(id);
}
// 登入
let memberLogin = () => {
    let xhr = new XMLHttpRequest(); //註冊
    //連線完成後執行
    xhr.onload = () => {
        if (xhr.status == 200) { //連線成功與否的狀態碼 200=連線成功
            $id("idMsg").innerText = "Login Sucess";
            $id("mem_Loginbtn").innerText = "Log out";
            // 預計會員資料寫入HTML
            let memberinfo = JSON.parse(xhr.responseText);
            let memberinfo_member = JSON.parse(memberinfo.member);
            console.log(memberinfo_member);
            $id("memName").value = memberinfo_member.member_name;
            $id("email").value = memberinfo_member.member_mail;
            $id("memBD").value = memberinfo_member.member_birthday;
            $id("memPhone").value = memberinfo_member.member_tel;
            $id("Address").value = memberinfo_member.member_address;


            // -----
        } else {
            alert(xhr.status);
        }
    };
    //與PHP連線
    xhr.open("post", "member.php", true);
    xhr.setRequestHeader("content-type", "application/x-www-form-urlencoded");
    let data_info = "memId=" + $id("memId").value + "&memPsw=" + $id("memPsw").value;
    xhr.send(data_info);
};

function imgPreload() {
    $id("memphoto").onchange = (e) => {
        let file = e.target.files[0];
        let reader = new FileReader();
        reader.onload = (e) => {
            $id("memphotoPreview").src = reader.result;
        };
        reader.readAsDataURL(file);
    };
}

let Logintab = (e) => {
    // memLoginbtn = $id("mem_Loginbtn");

    if ($id("mem_Loginbtn").innerText == "Log in") {
        $id("member_welcome").classList.remove("member_hide");
        // if (document.cookie != "") {
        //     memLoginbtn.innerText = "Log out";
        // }
    } else if ($id("mem_Loginbtn").innerText == "Log out") {
        for (let i = 0; i < document.querySelector(".ul").children.length; i++) {
            document.querySelectorAll(".memberform")[i].classList.add("member_hide");
        }
        document.querySelector("#member_welcome").classList.remove("member_hide");
        // 登出ajax
        let xhr = new XMLHttpRequest();
        xhr.onload = function() {
            $id("mem_Loginbtn").innerText = "Log in";
        };
        xhr.open("get", "memberLogout.php", true);
        xhr.send(null);
        $id("mem_Loginbtn").innerText = "Log in";
    }
};

// let changeTab = (e) => {
//     // console.log(e.target);
//     let memberform = document.querySelectorAll(".memberform");
//     // let memLoginbtn = document.querySelector("#mem_Loginbtn");
//     for (let i = 0; i < document.querySelector(".ul").children.length; i++) {
//         if (document.cookie != "") {
//             if (e.target == document.querySelector(".ul").children[i]) {
//                 memberform[i].classList.remove("member_hide");
//                 document.querySelector("#member_welcome").classList.add("member_hide");
//             } else if (e.target == document.querySelector(".ul")) {
//                 document
//                     .querySelector("#member_welcome")
//                     .classList.remove("member_hide");
//                 memberform[i].classList.add("member_hide");
//             } else {
//                 memberform[i].classList.add("member_hide");
//             }
//         } else {
//             alert("Login First");
//             // console.log(document.cookie);
//             break;
//         }
//     }
// };

function getMemberinfo(e) {
    let xhr = new XMLHttpRequest();
    xhr.onload = function() {
        // console.log(xhr.responseText);
        if (xhr.responseText != "No login") {
            let member = JSON.parse(xhr.responseText);
            let memberform = document.querySelectorAll(".memberform");
            // let memLoginbtn = document.querySelector("#mem_Loginbtn");
            for (let i = 0; i < document.querySelector(".ul").children.length; i++) {
                if (e.target == document.querySelector(".ul").children[i]) {
                    memberform[i].classList.remove("member_hide");
                    document.querySelector("#member_welcome").classList.add("member_hide");
                } else if (e.target == document.querySelector(".ul")) {
                    document
                        .querySelector("#member_welcome")
                        .classList.remove("member_hide");
                    memberform[i].classList.add("member_hide");
                } else {
                    memberform[i].classList.add("member_hide");
                }
            }
            $id("mem_Loginbtn").innerText = "Log out";
        } else {
            alert("Login First");
            $id("mem_Loginbtn").innerText = "Log in";
        }
    };
    xhr.open("get", "getMemberInfo.php", true);
    xhr.send(null);
}

function init() {
    getMemberinfo();
    imgPreload();
    // 會員中心選單
    let ul = document.querySelector(".ul");
    ul.addEventListener("click", getMemberinfo, false);
    // 會員中心選單登入紐
    let memLoginbtn = document.querySelector("#mem_Loginbtn");
    memLoginbtn.addEventListener("click", Logintab, false);
    // 登入
    document.querySelector('#btnLogin').addEventListener("click", memberLogin, false);

}
window.addEventListener("load", init, false);