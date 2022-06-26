function $id(id) {
    return document.getElementById(id);
};


//-------------------N開會員燈箱---------------------------------------------
function N_showEditLightBox() {//-----------開修改燈箱
    $id("N_edit_lightBox").style.display = "block";
};
function N_cancelEdit() {//-----------取消開修改燈箱
    $id("N_edit_lightBox").style.display = "none";
};



//-------------------A開商品燈箱---------------------------------------------
function A_showLightBox() {//-----------開新增燈箱
    $id("A_lightBox").style.display = "block";
};
function A_cancelNew() {//-----------取消開新增燈箱
    $id("A_lightBox").style.display = "none";
};
function A_create() {//----新增
    let xhr = new XMLHttpRequest();
    xhr.onload = function () {
        alert(xhr.responseText);
        //location.href="getProducts.php";
    }
    xhr.open("post", "backend_productsInsert.php");
    xhr.send(new FormData($id("productsForm")));

    // let xhrPm = new XMLHttpRequest();
    // xhrPm.onload = function () {
    //     // alert(xhrPm.responseText);
    // }
    // xhrPm.open("post", "backend_promotionsdetailsInsert.php");
    // xhrPm.send(new FormData($id("productsForm")));


    $id("A_lightBox").style.display = "none";
    // location.reload();
}
//----------------------------
function A_showEditLightBox() {//-----------開修改燈箱
    $id("A_edit_lightBox").style.display = "block";
};
function A_cancelEdit() {//-----------取消開修改燈箱
    $id("A_edit_lightBox").style.display = "none";
};



//-------------------O_開訂單燈箱-------------------------------------------
function O_showEditLightBox() {//-----------開修改燈箱
    $id("O_edit_lightBox").style.display = "block";
};
function O_cancelEdit() {//-----------取消開修改燈箱
    $id("O_edit_lightBox").style.display = "none";
};


//-------------------B開優惠活動燈箱------------------------------------------
function B_showLightBox() {//-----------開新增燈箱
    $id("B_lightBox").style.display = "block";
};
function B_cancelNew() {//-----------取消開新增燈箱
    $id("B_lightBox").style.display = "none";
};
// function B_create(){//----新增
//     let xhr = new XMLHttpRequest();
//     xhr.onload = function(){
//         alert(xhr.responseText);
//     };
//     xhr.open("post", "backend_promotionsInsert.php", true);
//     xhr.send(new FormData($id("promotionsForm")));
//     $id("B_lightBox").style.display = "none";
// }
//----------------------------
function B_showEditLightBox() {//-----------開修改燈箱
    $id("B_edit_lightBox").style.display = "block";
};
function B_cancelEdit() {//-----------取消開修改燈箱
    $id("B_edit_lightBox").style.display = "none";
};


//-------------------C開最新消息燈箱-------------------------------------------
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
    // location.reload();
};
//----------------------------
function C_showEditLightBox() {//-----------開修改燈箱
    $id("C_edit_lightBox").style.display = "block";
};
function C_cancelEdit() {//-----------取消開修改燈箱
    $id("C_edit_lightBox").style.display = "none";
};

//-------------------P開輪播燈箱--------------------------------------------
function P_showEditLightBox() {//-----------開修改燈箱
    $id("P_edit_lightBox").style.display = "block";
};
function P_cancelEdit() {//-----------取消開修改燈箱
    $id("P_edit_lightBox").style.display = "none";
};




//-------------------D開管理員燈箱--------------------------------------------
function D_showLightBox() {//-----------開新增燈箱
    $id("D_lightBox").style.display = "block";
};
function D_cancelNew() {//-----------取消開新增燈箱
    $id("D_lightBox").style.display = "none";
};
function D_create() {//----新增
    let xhr = new XMLHttpRequest();
    xhr.onload = function () {
        alert(xhr.responseText);

    };
    xhr.open("post", "backend_managersInsert.php");
    xhr.send(new FormData($id("managersForm")));
    $id("D_lightBox").style.display = "none";
    // location.reload();
};
//----------------------------
function D_showEditLightBox() {//-----------開修改燈箱
    $id("D_edit_lightBox").style.display = "block";
};
function D_cancelEdit() {//-----------取消開修改燈箱
    $id("D_edit_lightBox").style.display = "none";
};

function admin() {
    let xhr = new XMLHttpRequest();
    xhr.onload = function () {
        if (xhr.status == 200) {
            alert("登出成功");
            window.location.assign("backendLogin.html");
        };
    };
    xhr.open("get", "memberLogout.php");
    xhr.send(null);
};
//-----------------------init-------------------------------------------------------------
function init() {


    //-------------------修改 N_會員管理按鈕--------------------
    let NdEts = document.querySelectorAll("#N_Edit");//----列表的修改會員管理Edit鈕
    for (let i = 0; i < NdEts.length; i++) {
        NdEts[i].onclick = N_showEditLightBox;
    };

    //----//----修改會員管理-Edit鈕
    $id("N_EditBtnCancel").onclick = N_cancelEdit;//----修改會員管理-取消鈕



    //-------------------新增 A_商品按鈕--------------------
    $id("A_New").onclick = A_showLightBox;//----新增商品-New鈕
    $id("A_btnAdd").onclick = A_create;//----新增商品-Confirm鈕
    $id("A_btnCancel").onclick = A_cancelNew;//----新增商品-取消鈕
    $id("A_one_upFile").onchange = function (e) {//----新增商品上傳圖片鈕
        let file = e.target.files[0]; //取得所選的file物件的參考
        let reader = new FileReader();
        reader.onload = function (e) {
            $id("A_one_membersImage").src = reader.result;
        };
        reader.readAsDataURL(file); //將圖檔資訊讀出以 base64的編碼方式，以便放到img標籤中
    };
    $id("A_two_upFile").onchange = function (e) {//----新增商品上傳圖片鈕
        let file = e.target.files[0]; //取得所選的file物件的參考
        let reader = new FileReader();
        reader.onload = function (e) {
            $id("A_two_membersImage").src = reader.result;
        };
        reader.readAsDataURL(file); //將圖檔資訊讀出以 base64的編碼方式，以便放到img標籤中
    };
    $id("A_three_upFile").onchange = function (e) {//----新增商品上傳圖片鈕
        let file = e.target.files[0]; //取得所選的file物件的參考
        let reader = new FileReader();
        reader.onload = function (e) {
            $id("A_three_membersImage").src = reader.result;
        };
        reader.readAsDataURL(file); //將圖檔資訊讀出以 base64的編碼方式，以便放到img標籤中
    };
    $id("A_four_upFile").onchange = function (e) {//----新增商品上傳圖片鈕
        let file = e.target.files[0]; //取得所選的file物件的參考
        let reader = new FileReader();
        reader.onload = function (e) {
            $id("A_four_membersImage").src = reader.result;
        };
        reader.readAsDataURL(file); //將圖檔資訊讀出以 base64的編碼方式，以便放到img標籤中
    };
    //-------------------修改 A_商品按鈕--------------------

    let AdEts = document.querySelectorAll("#A_Edit");//----列表的修改商品Edit鈕
    for (let i = 0; i < AdEts.length; i++) {
        AdEts[i].onclick = A_showEditLightBox;
    };
    //----//----修改商品-Edit鈕
    $id("A_EditBtnCancel").onclick = A_cancelEdit;//----修改商品-取消鈕
    /*
    let A_E_upFiles = document.getElementsByClassName("A_E_upFile");
    for (let i in A_E_upFiles) {
            A_E_upFiles[i].onchange = function (e) {//----新增商品上傳圖片鈕
            let file = e.target.files[0]; //取得所選的file物件的參考
            let reader = new FileReader();
            let imgPreview = e.target.nextElementSibling.firstElementChild;
            alert(imgPreview.className)
            reader.onload = function (e) {

                //document.getElementsByClassName("A_E_newsImage").src = reader.result;
                imgPreview.src = reader.result;
            };
            reader.readAsDataURL(file); //將圖檔資訊讀出以 base64的編碼方式，以便放到img標籤中
        };
    }
    */


    //-------------------修改 O_訂單按鈕--------------------
    let OdEts = document.querySelectorAll("#O_Edit");//----列表的修改訂單Edit鈕
    for (let i = 0; i < OdEts.length; i++) {
        OdEts[i].onclick = O_showEditLightBox;
    };

    //----//----修改訂單-Edit鈕
    $id("O_EditBtnCancel").onclick = O_cancelEdit;//----修改訂單-取消鈕





    //-------------------新增 B_優惠活動按鈕--------------------
    $id("B_New").onclick = B_showLightBox;//----新增優惠活動-New鈕
    //$id("B_btnAdd").onclick = B_create;//----新增優惠活動-Confirm鈕
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



    //-------------------修改 P_輪播按鈕--------------------
    let PdEts = document.querySelectorAll("#P_Edit");//----列表的修改輪播Edit鈕
    for (let i = 0; i < PdEts.length; i++) {
        PdEts[i].onclick = P_showEditLightBox;
    };
    //----//----修改輪播-Edit鈕
    $id("P_EditBtnCancel").onclick = P_cancelEdit;//----修改輪播-取消鈕
    $id("P_E_upFile").onchange = function (e) {//----新增輪播上傳圖片鈕
        let file = e.target.files[0]; //取得所選的file物件的參考
        let reader = new FileReader();
        reader.onload = function (e) {
            $id("P_E_carouselsImage").src = reader.result;
        };
        reader.readAsDataURL(file); //將圖檔資訊讀出以 base64的編碼方式，以便放到img標籤中
    };




    //-------------------新增 D管理員按鈕--------------------
    $id("D_New").onclick = D_showLightBox;//----新增管理員-New鈕
    $id("D_btnAdd").onclick = D_create;//----新增管理員-Confirm鈕
    $id("D_btnCancel").onclick = D_cancelNew;//----新增管理員-取消鈕

    //-------------------修改 D_管理員按鈕--------------------
    let DdEts = document.querySelectorAll("#D_Edit");//----列表的修改管理員Edit鈕
    for (let i = 0; i < DdEts.length; i++) {
        DdEts[i].onclick = D_showEditLightBox;
    };
    //----//----修改管理員-Edit鈕
    $id("D_EditBtnCancel").onclick = D_cancelEdit;//----修改管理員-取消鈕
};

window.addEventListener("load", init, false);