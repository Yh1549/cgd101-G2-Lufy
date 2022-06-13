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
    let xhr = new XMLHttpRequest();
    xhr.onload = function() {
        alert(xhr.responseText);
        console.log(xhr.responseText);
    }


    xhr.open("post", "designer_intro.php");

    xhr.send(new FormData(document.getElementById("desIntro")));

}

let desArticleBtn = document.getElementById('desArticleBtn');
desArticleBtn.addEventListener("click", sendForm2);

function sendForm2() {
    // console.log(new FormData(document.getElementById("desIntro")));
    let xhr = new XMLHttpRequest();
    xhr.onload = function() {
        alert(xhr.responseText);
        console.log(xhr.responseText);
    }


    xhr.open("post", "designer_article.php");

    xhr.send(new FormData(document.getElementById("desArticle")));

}