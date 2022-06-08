let registerCheck = function(e) {
    console.log(e.target.name);
    let xhr = new XMLHttpRequest();
    xhr.onload = () => {
        if (xhr.status == 200) {
            document.getElementById('idMsg').innerText = xhr.responseText;
        } else {
            alert(xhr.status);
        }
    }
    console.log(e.target.name);
    xhr.open("post", "memberRegister.php", true);
    xhr.setRequestHeader("content-type", "application/x-www-form-urlencoded");
    // let data_info = `${e.target.name}=` + document.getElementById(`${e.target.name}`).value;
    let data_info = {

    };
    console.log(e.target.name);
    xhr.send(data_info);
};


let init = () => {
    let ip = document.querySelectorAll(".regInputCheck");
    for (let i = 0; i < ip.length; i++) {
        ip[i].onchange = registerCheck;
        // console.log(ip[0]); 
    }
    //    console.log(ip[0]); 
}

window.addEventListener("load", init, false);