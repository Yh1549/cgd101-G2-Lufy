//-------------------開關商品燈箱
function A_showLightBox(){
    document.getElementById("A_lightBox").style.display = "block";
}
function B_showLightBox(){
    document.getElementById("B_lightBox").style.display = "block";
}
//-------------------
function A_cancelNew(){
    document.getElementById("A_lightBox").style.display = "none";
}
function B_cancelNew(){
    document.getElementById("B_lightBox").style.display = "none";
}
//-------------------
function init(){
    //-------------------showLightbox
    document.getElementById("A_Edit").onclick = A_showLightBox;
    document.getElementById("B_Edit").onclick = B_showLightBox;
    //-------------------cancelLightbox
    document.getElementById("A_btnCancel").onclick = A_cancelNew;
    document.getElementById("B_btnCancel").onclick = B_cancelNew;
}

window.addEventListener("load",init,false);