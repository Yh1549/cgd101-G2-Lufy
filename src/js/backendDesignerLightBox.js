//-------------------開關商品燈箱
function AD_showLightBox(){
    document.getElementById("AD_lightBox").style.display = "block";
}
function BD_showLightBox(){
    document.getElementById("BD_lightBox").style.display = "block";
}
//-------------------
function AD_cancel(){
    document.getElementById("AD_lightBox").style.display = "none";
}
function BD_cancel(){
    document.getElementById("BD_lightBox").style.display = "none";
}
//-------------------
function init(){
    //-------------------showLightbox
    let AdEts = document.querySelectorAll("#Ad_Edit");
	for (let i=0; i<AdEts.length; i++){
		AdEts[i].onclick = AD_showLightBox;
	}
    let BdEts = document.querySelectorAll("#Bd_Edit");
	for (let i=0; i<BdEts.length; i++){
		BdEts[i].onclick = BD_showLightBox;
	}
    //-------------------cancelLightbox
    document.getElementById("A_btnCancel").onclick = AD_cancel;
    document.getElementById("B_btnCancel").onclick = BD_cancel;
}

window.addEventListener("load",init,false);