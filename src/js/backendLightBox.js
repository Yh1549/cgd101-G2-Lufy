function $id(id) {
    return document.getElementById(id);
};

//-------------------開會員燈箱---------------------------------------------
function N_showLightBox() {//-----------開新增燈箱
    $id("N_lightBox").style.display = "block";
};
function N_cancelNew() {//-----------取消開新增燈箱
    $id("N_lightBox").style.display = "none";
};

//-------------------開商品燈箱---------------------------------------------
function A_showLightBox() {//-----------開新增燈箱
    $id("A_lightBox").style.display = "block";
};
function A_cancelNew() {//-----------取消開新增燈箱
    $id("A_lightBox").style.display = "none";
};
function A_create(){//----新增
    let xhr = new XMLHttpRequest();
    xhr.onload = function(){
        alert(xhr.responseText);
        location.href="getProducts.php";
    }
    xhr.open("post", "backend_productsInsert.php");
    xhr.send(new FormData($id("productssForm")));
}
//----------------------------
function A_showEditLightBox() {//-----------開修改燈箱
    $id("A_edit_lightBox").style.display = "block";
};
function A_cancelEdit() {//-----------取消開修改燈箱
    $id("A_edit_lightBox").style.display = "none";
};


//-------------------開優惠活動燈箱------------------------------------------
function B_showLightBox() {//-----------開新增燈箱
    $id("B_lightBox").style.display = "block";
};
function B_cancelNew() {//-----------取消開新增燈箱
    $id("B_lightBox").style.display = "none";
};
function B_create(){//----新增
    let xhr = new XMLHttpRequest();
    xhr.onload = function(){
        alert(xhr.responseText);
    };
    xhr.open("post", "backend_promotionsInsert.php");
    xhr.send(new FormData($id("promotionsForm")));
    $id("B_lightBox").style.display = "none";
}
//----------------------------
function B_showEditLightBox() {//-----------開修改燈箱
    $id("B_edit_lightBox").style.display = "block";
};
function B_cancelEdit() {//-----------取消開修改燈箱
    $id("B_edit_lightBox").style.display = "none";
};


//-------------------開最新消息燈箱-------------------------------------------
function C_showLightBox() {//-----------開新增燈箱
    $id("C_lightBox").style.display = "block";
};
function C_cancelNew() {//-----------取消開新增燈箱
    $id("C_lightBox").style.display = "none";
};
function C_create() {//----新增
    let xhr = new XMLHttpRequest();
    xhr.onload = function () {
        alert(xhr.responseText);
        //location.href = "getNews.php";
    };
    xhr.open("post", "backend_newsInsert.php");
    xhr.send(new FormData($id("newsForm")));
    $id("C_lightBox").style.display = "none";
};
//----------------------------
function C_showEditLightBox() {//-----------開修改燈箱
    $id("C_edit_lightBox").style.display = "block";
};
function C_cancelEdit() {//-----------取消開修改燈箱
    $id("C_edit_lightBox").style.display = "none";
};


//-------------------開設計師燈箱--------------------------------------------
function D_showLightBox() {//-----------開新增燈箱
    $id("D_lightBox").style.display = "block";
};
function D_cancelNew() {//-----------取消開新增燈箱
    $id("D_lightBox").style.display = "none";
};

//----------------------------
function D_showEditLightBox() {//-----------開修改燈箱
    $id("D_edit_lightBox").style.display = "block";
};
function D_cancelEdit() {//-----------取消開修改燈箱
    $id("D_edit_lightBox").style.display = "none";
};


//-----------------------init-------------------------------------------------------------
function init() {
    //-------------------新增 C_最新消息按鈕--------------------
    $id("C_New").onclick = C_showLightBox;//----新增最新消息-New鈕
    $id("C_btnAdd").onclick = C_create;//----新增最新消息-Confirm鈕
    $id("C_btnCancel").onclick = C_cancelNew;//----新增最新消息-取消鈕
    $id("C_upFile").onchange = function (e) {//----新增最新消息上傳圖片鈕
        let file = e.target.files[0]; //取得所選的file物件的參考
        let reader = new FileReader();
        reader.onload = function (e) {
            $id("C_newsImage").src = reader.result;
        };
        reader.readAsDataURL(file); //將圖檔資訊讀出以 base64的編碼方式，以便放到img標籤中
    };
    //-------------------修改 C_最新消息按鈕--------------------
    let CdEts = document.querySelectorAll("#C_Edit");//----列表的修改最新消息Edit鈕
    for (let i = 0; i < CdEts.length; i++) {
        CdEts[i].onclick = C_showEditLightBox;
    };
    //----//----修改最新消息-Edit鈕
    $id("C_EditBtnCancel").onclick = C_cancelEdit;//----修改最新消息-取消鈕
    $id("C_E_upFile").onchange = function (e) {//----新增最新消息上傳圖片鈕
        let file = e.target.files[0]; //取得所選的file物件的參考
        let reader = new FileReader();
        reader.onload = function (e) {
            $id("C_E_newsImage").src = reader.result;
        };
        reader.readAsDataURL(file); //將圖檔資訊讀出以 base64的編碼方式，以便放到img標籤中
    };
    
    //-------------------showLightbox
    // $id("D_New").onclick = D_showLightBox;
    // //-------------------cancelLightbox
    // $id("D_btnCancel").onclick = D_cancelNew;

    /*
    //-------------------新增 A_商品按鈕--------------------
    $id("A_New").onclick = A_showLightBox;//----新增最新消息-New鈕
    $id("A_btnAdd").onclick = A_create;//----新增最新消息-Confirm鈕
    $id("A_btnCancel").onclick = A_cancelNew;//----新增最新消息-取消鈕
    $id("A1_upFile").onchange = function (e) {//----新增最新消息上傳圖片鈕
        let file = e.target.files[0]; //取得所選的file物件的參考
        let reader = new FileReader();
        reader.onload = function (e) {
            $id("A1_newsImage").src = reader.result;
        };
        reader.readAsDataURL(file); //將圖檔資訊讀出以 base64的編碼方式，以便放到img標籤中
    };
    $id("A2_upFile").onchange = function (e) {//----新增最新消息上傳圖片鈕
        let file = e.target.files[0]; //取得所選的file物件的參考
        let reader = new FileReader();
        reader.onload = function (e) {
            $id("A2_newsImage").src = reader.result;
        };
        reader.readAsDataURL(file); //將圖檔資訊讀出以 base64的編碼方式，以便放到img標籤中
    };
    $id("A3_upFile").onchange = function (e) {//----新增最新消息上傳圖片鈕
        let file = e.target.files[0]; //取得所選的file物件的參考
        let reader = new FileReader();
        reader.onload = function (e) {
            $id("A3_newsImage").src = reader.result;
        };
        reader.readAsDataURL(file); //將圖檔資訊讀出以 base64的編碼方式，以便放到img標籤中
    };
    //-------------------修改 A_最新消息按鈕--------------------
    let AdEts = document.querySelectorAll("#A_Edit");//----列表的修改最新消息Edit鈕
    for (let i = 0; i < AdEts.length; i++) {
        AdEts[i].onclick = A_showEditLightBox;
    };
    //----//----修改最新消息-Edit鈕
    $id("A_EditBtnCancel").onclick = A_cancelEdit;//----修改最新消息-取消鈕
    $id("A_E_upFile").onchange = function (e) {//----新增最新消息上傳圖片鈕
        let file = e.target.files[0]; //取得所選的file物件的參考
        let reader = new FileReader();
        reader.onload = function (e) {
            $id("A_E_newsImage").src = reader.result;
        };
        reader.readAsDataURL(file); //將圖檔資訊讀出以 base64的編碼方式，以便放到img標籤中
    };
    */
    //-------------------新增 B_優惠活動按鈕--------------------
    $id("B_New").onclick = B_showLightBox;//----新增優惠活動-New鈕
    $id("B_btnAdd").onclick = B_create;//----新增優惠活動-Confirm鈕
    $id("B_btnCancel").onclick = B_cancelNew;//----新增優惠活動-取消鈕
    $id("B_upFile").onchange = function (e) {//----新增優惠活動上傳圖片鈕
        let file = e.target.files[0]; //取得所選的file物件的參考
        let reader = new FileReader();
        reader.onload = function (e) {
            $id("B_promotionsImage").src = reader.result;
        };
        reader.readAsDataURL(file); //將圖檔資訊讀出以 base64的編碼方式，以便放到img標籤中
    };
    //-------------------修改 B_優惠活動按鈕--------------------
    let BdEts = document.querySelectorAll("#B_Edit");//----列表的修改優惠活動Edit鈕
    for (let i = 0; i < BdEts.length; i++) {
        BdEts[i].onclick = B_showEditLightBox;
    };
    //----//----修改優惠活動-Edit鈕
    $id("B_EditBtnCancel").onclick = B_cancelEdit;//----修改優惠活動-取消鈕
    $id("B_E_upFile").onchange = function (e) {//----新增優惠活動上傳圖片鈕
        let file = e.target.files[0]; //取得所選的file物件的參考
        let reader = new FileReader();
        reader.onload = function (e) {
            $id("B_E_promotionsImage").src = reader.result;
        };
        reader.readAsDataURL(file); //將圖檔資訊讀出以 base64的編碼方式，以便放到img標籤中
    };
    //-------------------new_promotionsProduct
};

window.addEventListener("load", init, false);