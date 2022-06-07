let changeTab = (e) => {
    // console.log(e.target);
    let memberform = document.querySelectorAll(".memberform");


    for (
        let i = 0; i < document.querySelector(".ul").children.length; i++
    ) {
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
    }
    // console.log(memberform[0]);

};

let memberLogin = () => {
    let xhr = new XMLHttpRequest(); //註冊

    xhr.onload = () => {
        if (xhr.status == 200) {
            document.getElementById('idMsg').innerText = xhr.responseText;
            console.log(xhr.responseText);

        } else {
            alert(xhr.status);
        }
    };



    xhr.open("post", "member.php", true);
    xhr.setRequestHeader("content-type", "application/x-www-form-urlencoded")

    let data_info = "memId=" + document.getElementById("memId").value;
    //  + "&memPsw=" + document.getElementById("memPsw").value;

    xhr.send(data_info);

};

function init() {
    let ul = document.querySelector(".ul");
    // console.log(ul.children[0]);
    ul.addEventListener("click", changeTab, false);
    document.querySelector('#btnLogin').addEventListener("click", memberLogin, false);


};
window.addEventListener("load", init, false);