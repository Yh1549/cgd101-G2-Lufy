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
    //-------------------new_promotionsProduct
}

window.addEventListener("load",init,false);