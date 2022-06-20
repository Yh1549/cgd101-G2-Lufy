function $id(id) {
  return document.getElementById(id);
}
// 登入
let memberLogin = () => {
  let xhr = new XMLHttpRequest(); //註冊
  //連線完成後執行
  xhr.onload = () => {
    if (xhr.status == 200) {
      //連線成功與否的狀態碼 200=連線成功
      if (xhr.responseText == "輸入錯誤") {
        //登入失敗
        $id("member_Lightbox").style.display="flex";
        $id("responseMsg").innerText = "Login Failed";
      } else {
        //登入成功
        $id("memshow").innerText = "Hello~ \n" + xhr.responseText;
        $id("member_Lightbox").style.display = "flex";
        $id("responseMsg").innerText = "Login Sucess";
        $id("mem_Loginbtn").innerText = "Log out";
        // -----
      }
    } else {
      alert(xhr.status);
    }
  };
  //與PHP連線
  xhr.open("post", "memberlogin.php", true);
  xhr.setRequestHeader("content-type", "application/x-www-form-urlencoded");
  let data_info =
    "memId=" + $id("memId").value + "&memPsw=" + $id("memPsw").value;
  xhr.send(data_info);
};
// 會員中心選單登入紐
let sideLogintab = (e) => {
  if ($id("mem_Loginbtn").innerText == "Log in") {
    $id("member_welcome").classList.remove("member_hide");
  } else if ($id("mem_Loginbtn").innerText == "Log out") {
    for (let i = 0; i < document.querySelector(".ul").children.length; i++) {
      document.querySelectorAll(".memberform")[i].classList.add("member_hide");
    }
    $id("member_welcome").classList.remove("member_hide");
    // 登出ajax
    let xhr = new XMLHttpRequest();
    xhr.onload = function () {
      $id("mem_Loginbtn").innerText = "Log in";
      $id("idMsg").innerText = "Login First";
    };
    xhr.open("get", "memberLogout.php", true); //執行登出php(刪除session)
    xhr.send(null);
    $id("mem_Loginbtn").innerText = "Log in";
  }
};
//會員資料修改
let profiles_sub = () => {
  let profilesInput = document.querySelectorAll(".profilesInput");
  // 檢查input是否有值
  for (let i = 0; i < profilesInput.length; i++) {
    if (profilesInput[i].value == "") {
      $id("member_Lightbox").style.display = "flex";
      $id("responseMsg").innerText = "No blank!!";
      break;
    } else if (i == profilesInput.length - 1) {
      let xhr = new XMLHttpRequest();
      xhr.onload = () => {
        if (xhr.status == 200) {
          $id("member_Lightbox").style.display = "flex";
          $id("responseMsg").innerText = `${xhr.responseText}`;
        } else {
          $id("member_Lightbox").style.display = "flex";
          $id("responseMsg").innerText = `Change Fail`;
          
          // console.log(xhr.status);
        }
      };
      xhr.open("post", "membermodify.php", true);
      let profilesData = new FormData($id("profilesData"));
      xhr.send(profilesData);
    }
  }
};
let changePsw_sub = () => {
  let xhr = new XMLHttpRequest();
  xhr.onload = () => {
    $id("member_Lightbox").style.display = "flex";
    $id("responseMsg").innerText = `${xhr.responseText}`;
  };
  xhr.open("post", "membermodify.php", true);
  let changePswData = new FormData($id("changePswData"));
  xhr.send(changePswData);
};

function getMemberinfo(e) {
  let ul = document.querySelector(".ul");
  let memberform = document.querySelectorAll(".memberform");
  let xhr = new XMLHttpRequest();
  xhr.onload = () => {
    if (xhr.responseText != "No login") {
      $id("mem_Loginbtn").innerText = "Log out";
      if (e != undefined) {
        for (let i = 0; i < ul.children.length; i++) {
          if (e.target == ul.children[i]) {
            memberform[i].classList.remove("member_hide");
            ul.children[i].classList.add("member_colstay");
            $id("member_welcome").classList.add("member_hide");
          } else if (e.target == ul) {
            $id("member_welcome").classList.remove("member_hide");
            memberform[i].classList.add("member_hide");
            ul.children[i].classList.remove("member_colstay");
          } else {
            memberform[i].classList.add("member_hide");
            ul.children[i].classList.remove("member_colstay");
          }
        }
      }
      let memberinfo = JSON.parse(JSON.parse(xhr.responseText).member); //會員資料陣列放進memberinfo
      let memberorder = JSON.parse(JSON.parse(xhr.responseText).memberorder); //會員訂單陣列放進memberorder
      let memberfavorite = JSON.parse(JSON.parse(xhr.responseText).memberfavorite); //會員蒐藏陣列放進memberorder
      $id("memshow").innerText = "Hello~ \n" + memberinfo.member_name;
      //會員資料寫入HTML
      $id("memName").value = memberinfo.member_name;
      $id("email").value = memberinfo.member_mail;
      $id("memBD").value = memberinfo.member_birthday;
      $id("memPhone").value = memberinfo.member_tel;
      $id("Address").value = memberinfo.member_address;
      // 會員訂單寫入
      let orderHtml = ``;
      for (let i = 0; i < memberorder.length; i++) {
        orderHtml += `<div class='memtable_container'><table class="memtable h4"><thead><tr><th>Order Number</th><th>Order Date</th><th>Order Status</th><th>Total</th></tr></thead><tbody><tr>
        <td>${memberorder[i].order_no}</td>
        <td>${memberorder[i].order_datetime}</td>
        <td>${memberorder[i].order_state}</td>
        <td>${memberorder[i].order_total}</td></tr></tbody></table><button id='orderDetail' class="btn_normal">查看明細</button></div>`;
      }
      $id("orderInsert").innerHTML = orderHtml;
      $id("orderDetail").onclick=()=>{
        
      };
      // ----------
      // 蒐藏寫入
      let favoriteHtml = ``;
      for (let i = 0; i < memberfavorite.length; i++) {
        favoriteHtml += `<div class='memtable_container'><table class="memtable h4"><thead><tr><th>Product Image</th><th>Product Name</th><th>Product Status</th><th>Price</th></tr></thead><tbody><tr>
        <td><img src="images/${memberfavorite[i].image_path}"></td>
        <td>${memberfavorite[i].name}</td>
        <td>${memberfavorite[i].on_market ? "on the market" : "off the market"}</td>
        <td>${memberfavorite[i].price}</td></tr></tbody></table><input type="hidden" value="${memberfavorite[i].product_no}"><button id='favoriteCancel' class="btn_normal">Delete</button></div>`;
      }
      $id("favoriteInsert").innerHTML = favoriteHtml;
      // 取消蒐藏紐
      $id("favoriteCancel").onclick = favoriteCancel;
      // ---------
    } else {
      $id("member_Lightbox").style.display = "flex";
      $id("responseMsg").innerText = `Login First`;
      $id("mem_Loginbtn").innerText = "Log in";
    }
  };
  xhr.open("get", "membergetInfo.php", true);
  xhr.send(null);
}
// 取消蒐藏
let favoriteCancel = (e) => {
  let xhr = new XMLHttpRequest();
  xhr.onload = () => {
    $id("member_Lightbox").style.display = "flex";
    $id("responseMsg").innerText = `${xhr.responseText}`;
  
  };
  let url = "favorite.php?id="+`${e.target.parentNode.firstChild.nextElementSibling.value}`+ "&add=" + "false";
  xhr.open("get", url, true);
  xhr.send(null);
};
//img預載
function imgPreload() {
  $id("memphoto").onchange = (e) => {
    let file = e.target.files[0];
    let reader = new FileReader();
    reader.onload = (e) => {
      $id("memphotoPreview").src = reader.result;
    };
    reader.readAsDataURL(file);
  };
}

function init() {
  getMemberinfo(); //檢查登入狀態(提取session資料)
  imgPreload();
  // 會員中心選單
  document.querySelector(".ul").addEventListener("click", getMemberinfo, false);
  // 會員中心選單登入紐
  $id("mem_Loginbtn").addEventListener("click", sideLogintab, false);
  // 登入
  $id("btnLogin").addEventListener("click", memberLogin, false);
  //會員資料修改
  $id("profiles_sub").onclick = profiles_sub;
  //會員密碼修改
  $id("changePsw_sub").onclick = changePsw_sub;
  //燈箱關閉
  $id("memberLightbox_cancel").onclick=()=>{
    $id("member_Lightbox").style.display = "none";
    location.reload();
  }
}
window.addEventListener("load", init, false);
