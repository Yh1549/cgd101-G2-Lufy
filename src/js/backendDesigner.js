window.addEventListener("load", function() {

    document.getElementById("upFile").onchange = function(e) {
        let file = e.target.files[0]; //取得所選的file物件的參考
        let reader = new FileReader();
        reader.onload = function(e) {
            document.getElementById("myImage").src = reader.result;
        }

        reader.readAsDataURL(file); //將圖檔資訊讀出以 base64的編碼方式，以便放到img標籤中
    }
})
let introBtn = document.getElementById('introBtn');
introBtn.addEventListener("click", sendForm);

function sendForm() {
    // console.log(new FormData(document.getElementById("desIntro")));
    let xhr3 = new XMLHttpRequest();
    xhr3.onload = function() {
        alert(xhr3.responseText);
        console.log(xhr3.responseText);
    }


    xhr3.open("post", "designer_intro.php");

    xhr3.send(new FormData(document.getElementById("desIntro")));

}

// let desArticleBtn = document.getElementById('desArticleBtn');
// desArticleBtn.addEventListener("click", sendForm2);

// function sendForm2() {
//     // console.log(new FormData(document.getElementById("desIntro")));
//     let xhr4 = new XMLHttpRequest();
//     xhr4.onload = function() {
//         alert(xhr4.responseText);
//         console.log(xhr4.responseText);
//     }


//     xhr4.open("post", "designer_article.php");

//     xhr4.send(new FormData(document.getElementById("desArticle")));

// }
function sendForm3 (){
    let xhr2 = new XMLHttpRequest();
    xhr2.onload = function(){
       setInfo(xhr2.responseText);
        
    }
    xhr2.open("get","./getDesignerInfo.php",true)
    xhr2.send(null);
}
window.addEventListener("load",sendForm3);

function setInfo (json) { 
    let info = JSON.parse(json);
     let dname = document.getElementById('dname');
    dname.value = info.des_name;
    let dtext = document.getElementById('dtext');
    dtext.value = info.des_text;
    let myImage = document.getElementById('myImage');
    let a = 'images/'+ info.des_img_path.slice(1);
    console.log(a);
    
    myImage.src =  a;
}