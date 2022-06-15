//-------------------開商品燈箱-------------------
function A_showLightBox(){//-----------開新增燈箱
    document.getElementById("A_lightBox").style.display = "block";
}
function A_cancelNew(){//-----------取消開新增燈箱
    document.getElementById("A_lightBox").style.display = "none";
}


//-------------------開優惠活動燈箱-------------------
function B_showLightBox(){//-----------開新增燈箱
    document.getElementById("B_lightBox").style.display = "block";
}
function B_cancelNew(){//-----------取消開新增燈箱
    document.getElementById("B_lightBox").style.display = "none";
}


//-------------------開最新消息燈箱---------------------------------
function C_showLightBox(){//-----------開新增燈箱
    document.getElementById("C_lightBox").style.display = "block";
}
function C_cancelNew(){//-----------取消開新增燈箱
    document.getElementById("C_lightBox").style.display = "none";
}
function C_create(){//----新增
    let xhr = new XMLHttpRequest();
    xhr.onload = function(){
        alert(xhr.responseText);
        location.href="getNews.php";
    }
    xhr.open("post", "newsInsert.php");
    xhr.send(new FormData(document.getElementById("newsForm")));
}
//----------------------------
function C_showEditLightBox(){//-----------開修改燈箱
    document.getElementById("C_edit_lightBox").style.display = "block";
}
function C_cancelEdit(){//-----------取消開修改燈箱
    document.getElementById("C_edit_lightBox").style.display = "none";
}
// function C_edit(){//----修改
//     let xhr = new XMLHttpRequest();
//     xhr.onload = function(){
//         alert(xhr.responseText);
//         location.href="getNews.php";
//     }
//     xhr.open("post", "newsInsert.php");
//     xhr.send(new FormData(document.getElementById("newsForm")));
// }







//-------------------開設計師燈箱-------------------
function D_showLightBox(){//-----------開新增燈箱
    document.getElementById("D_lightBox").style.display = "block";
}
function D_cancelNew(){//-----------取消開新增燈箱
    document.getElementById("D_lightBox").style.display = "none";
}












//-----------------------init-------------------------------
function init(){
    //-------------------showLightbox
    document.getElementById("A_New").onclick = A_showLightBox;
    document.getElementById("B_New").onclick = B_showLightBox;
    
    document.getElementById("D_New").onclick = D_showLightBox;
    
    //-------------------cancelLightbox
    document.getElementById("A_btnCancel").onclick = A_cancelNew;
    document.getElementById("B_btnCancel").onclick = B_cancelNew;
    
    document.getElementById("D_btnCancel").onclick = D_cancelNew;

    //-------------------新增 C_最新消息按鈕--------------------
    document.getElementById("C_New").onclick = C_showLightBox;//----新增最新消息-New鈕
    document.getElementById("C_btnAdd").onclick = C_create;//----新增最新消息-Confirm鈕
    document.getElementById("C_btnCancel").onclick = C_cancelNew;//----新增最新消息-取消鈕
    document.getElementById("C_upFile").onchange = function(e){//----新增最新消息上傳圖片鈕
        let file = e.target.files[0]; //取得所選的file物件的參考
        let reader = new FileReader();
        reader.onload = function(e){
            document.getElementById("C_newsImage").src = reader.result;
        }
        reader.readAsDataURL(file); //將圖檔資訊讀出以 base64的編碼方式，以便放到img標籤中
    }
    //-------------------修改 C_最新消息按鈕--------------------
    let CdEts = document.querySelectorAll("#C_Edit");//----列表的修改最新消息Edit鈕
	for (let i=0; i<CdEts.length; i++){
        CdEts[i].onclick = C_showEditLightBox;
	}
    //----document.getElementById("C_EditBtnAdd").onclick = C_edit;//----修改最新消息-Edit鈕
    document.getElementById("C_EditBtnCancel").onclick = C_cancelEdit;//----修改最新消息-取消鈕
    /*document.getElementById("E_upFile").onchange = function(e){//----新增最新消息上傳圖片鈕
        let file = e.target.files[0]; //取得所選的file物件的參考
        let reader = new FileReader();
        reader.onload = function(e){
            document.getElementById("E_newsImage").src = reader.result;
        }
        reader.readAsDataURL(file); //將圖檔資訊讀出以 base64的編碼方式，以便放到img標籤中
    }*/

    //-------------------new_promotionsProduct


}

window.addEventListener("load",init,false);