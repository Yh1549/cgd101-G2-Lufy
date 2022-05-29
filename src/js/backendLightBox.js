function showLightBox(){
    document.getElementById("lightBox").style.display = "block";
}
function cancelNew(){
    document.getElementById("lightBox").style.display = "none";
}



function init(){
    // showLightbox
    document.getElementById("spanNew").onclick = showLightBox;
    // cancelLightbox
    document.getElementById("btnCancel").onclick = cancelNew;
    // confirmLightbox
    // new_promotionsProduct
}

window.addEventListener("load",init,false);