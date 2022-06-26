//-------------------開關商品燈箱

// function BD_showLightBox1(){
//     document.getElementById("BD_lightBox1").style.display = "block";
//     document.getElementById("articleList").style.display = "none";
   
// }
// function BD_showLightBox2(){
//     document.getElementById("BD_lightBox2").style.display = "block";
//     document.getElementById("articleList").style.display = "none"
   
// }
// function BD_showLightBox3(){
//     document.getElementById("BD_lightBox3").style.display = "block";
//     document.getElementById("articleList").style.display = "none"
   
// }
//-------------------

function BD_cancel1(){
    document.getElementById("BD_lightBox1").style.display = "none";
    document.getElementById("articleList").style.display = "block"
}
function BD_cancel2(){
    document.getElementById("BD_lightBox2").style.display = "none";
    document.getElementById("articleList").style.display = "block"
}
function BD_cancel3(){
    document.getElementById("BD_lightBox3").style.display = "none";
    document.getElementById("articleList").style.display = "block";
}
//-------------------
 function init(){
//     //-------------------showLightbox
    
//     document.getElementById("Bd_Edit1").onclick = BD_showLightBox1;
//     document.getElementById("Bd_Edit2").onclick = BD_showLightBox2;
//     document.getElementById("Bd_Edit3").onclick = BD_showLightBox3;
    //-------------------cancelLightbox
    document.getElementById("B_btnCancel1").onclick = BD_cancel1;
    document.getElementById("B_btnCancel2").onclick = BD_cancel2;
    document.getElementById("B_btnCancel3").onclick = BD_cancel3;
 }

 window.addEventListener("load",init,false);