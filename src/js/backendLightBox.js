//-------------------開商品燈箱
function A_showLightBox(){
    document.getElementById("A_lightBox").style.display = "block";
}
//-------------------開優惠活動燈箱
function B_showLightBox(){
    document.getElementById("B_lightBox").style.display = "block";
}
//-------------------開最新消息燈箱
function C_showLightBox(){
    document.getElementById("C_lightBox").style.display = "block";
}
//-------------------開設計師燈箱
function D_showLightBox(){
    document.getElementById("D_lightBox").style.display = "block";
}
//-------------------
function A_cancelNew(){
    document.getElementById("A_lightBox").style.display = "none";
}
function B_cancelNew(){
    document.getElementById("B_lightBox").style.display = "none";
}
function C_cancelNew(){
    document.getElementById("C_lightBox").style.display = "none";
}
function D_cancelNew(){
    document.getElementById("D_lightBox").style.display = "none";
}
//-------------------
function A_create(){
    
    let xhr = new XMLHttpRequest();
    xhr.onload = function(){
        alert(xhr.responseText);
        location.href="getNews.php";
    }
    xhr.open("post", "newsInsert.php");
    xhr.send(new FormData(document.getElementById("myForm")));
}


//-------------------
function init(){
    //-------------------showLightbox
    document.getElementById("A_New").onclick = A_showLightBox;
    document.getElementById("B_New").onclick = B_showLightBox;
    document.getElementById("C_New").onclick = C_showLightBox;
    document.getElementById("D_New").onclick = D_showLightBox;
    
    //-------------------cancelLightbox
    document.getElementById("A_btnCancel").onclick = A_cancelNew;
    document.getElementById("B_btnCancel").onclick = B_cancelNew;
    document.getElementById("C_btnCancel").onclick = C_cancelNew;
    document.getElementById("D_btnCancel").onclick = D_cancelNew;
    //-------------------confirmLightbox
    document.getElementById("btnAdd").onclick = A_create;
    //-------------------new_promotionsProduct



    document.getElementById("upFile").onchange = function(e){

        let file = e.target.files[0]; //取得所選的file物件的參考
        let reader = new FileReader();
        reader.onload = function(e){
            document.getElementById("newsImage").src = reader.result;
        }

        reader.readAsDataURL(file); //將圖檔資訊讀出以 base64的編碼方式，以便放到img標籤中
    }
}

window.addEventListener("load",init,false);