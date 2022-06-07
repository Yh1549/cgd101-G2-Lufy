let registerCheck = function(e){
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
    let data_info = `${e.target.name}=` + document.getElementById(`${e.target.name}`).value;
    xhr.send(data_info);
};


let init=()=>{
   let ip = document.querySelectorAll(".regInput");
   for(let i=0; i<ip.length; i++){
    ip[i].onchange = registerCheck;
    // console.log(ip[0]); 
   }
//    console.log(ip[0]); 
}

window.addEventListener("load", init, false);