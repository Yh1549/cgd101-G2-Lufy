//-------------------開關商品燈箱
function A_showLightBox(){
    document.getElementById("A_lightBox").style.display = "block";
}
//-------------------
function A_cancelNew(){
    document.getElementById("A_lightBox").style.display = "none";
}
//-------------------
function init(){
    //-------------------showLightbox
    document.getElementById("A_Edit").onclick = A_showLightBox;
    //-------------------cancelLightbox
    document.getElementById("A_btnCancel").onclick = A_cancelNew;
}

window.addEventListener("load",init,false);