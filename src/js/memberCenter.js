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
        $id("member_Lightbox").style.display = "flex";
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
        }
      };
      xhr.open("post", "membermodify.php", true);
      let profilesData = new FormData($id("profilesData"));
      xhr.send(profilesData);
    }
  }
};
// 會員相片
let profilesPhoto_sub =()=>{
  let photoxhr = new XMLHttpRequest();
  photoxhr.onload=()=>{
    $id("member_Lightbox").style.display = "flex";
    $id("responseMsg").innerText = `${photoxhr.responseText}`;
  };
  photoxhr.open("post","memberphotomodify.php", true);
  let profilesPhotosend = new FormData($id("profilesPhoto"));
  photoxhr.send(profilesPhotosend);
};
// 會員密碼修改
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
      $id("memphotoPreview").src=`images/${memberinfo.member_pic}`;
      // 會員訂單寫入
      let orderHtml = ``;
      for (let i = 0; i < memberorder.length; i++) {
        orderHtml += `<div class='memtable_container'><table class="memtable h4"><thead><tr><th>Order Number</th><th>Order Date</th><th>Order Status</th><th>Total</th></tr></thead><tbody><tr>
        <td>${memberorder[i].order_no}</td>
        <td>${memberorder[i].order_datetime}</td>
        <td>${memberorder[i].order_state}</td>
        <td>${memberorder[i].order_total}</td></tr></tbody></table><input type="hidden" value="${memberorder[i].order_no}"><button class="btn_normal orderDetail">查看明細</button></div>`;
      };
      $id("orderInsert").innerHTML = orderHtml;

      let orderDetail_btn = document.querySelectorAll(".orderDetail");
      for (let i = 0; i < orderDetail_btn.length; i++) {
        orderDetail_btn[i].onclick = (e) => {
          let orderDetailxhr = new XMLHttpRequest;
          orderDetailxhr.onload = () => {
            let orderDetail = JSON.parse(JSON.parse(orderDetailxhr.responseText).orderRow)[0];
            let orderDetail_product = JSON.parse(JSON.parse(orderDetailxhr.responseText).detailRow);
            console.log(orderDetail);
            let orderHtml = ` 
                <p class="h4" id="orderDetail_memberInsert">
                會員帳號: ${orderDetail.member_name}<br>
                收件人姓名: ${orderDetail.recipient_name}<br>
                收件人手機: ${orderDetail.recipient_phone}<br>
                address : ${orderDetail.recipient_address}<br>
                creditcard : ${orderDetail.credit_card}`;
            $id("orderDetail_member").innerHTML = orderHtml;
            let orderDetailHtml = `
                <ul style="background-color: rgba(207, 161, 131, 0.3);">
                    <li class="h4">name</li>
                    <li class="h4">number</li>
                    <li class="h4">price</li>
                </ul>`;
            for (let i = 0; i < orderDetail_product.length; i++) {
              orderDetailHtml += `
              <ul>
              <li class="h4">${orderDetail_product[i].name}</li>
              <li class="h4">${orderDetail_product[i].order_count}</li>
              <li class="h4">${orderDetail_product[i].product_price}</li>
            </ul>`;
            };
            orderDetailHtml += `<div>
              <p class="h3">Total Price : ${orderDetail.order_total}</p>
            </div>`;
            $id("orderDetail_productInsert").innerHTML = orderDetailHtml;
            $id("orderdetail_container").style.display = "flex";
          };
          let url = "member_orderDetail.php?id=" + `${e.target.parentNode.firstChild.nextElementSibling.value}`;
          orderDetailxhr.open("get", url, true);
          orderDetailxhr.send(null);
        };
      };
      // ----------
      // 蒐藏寫入
      let favoriteHtml = ``;
      for (let i = 0; i < memberfavorite.length; i++) {
        favoriteHtml += `<div class='memtable_container'><table class="memtable h4"><thead><tr><th>Product Image</th><th>Product Name</th><th>Product Status</th><th>Price</th></tr></thead><tbody><tr>
        <td><img src="images/${memberfavorite[i].image_path}"></td>
        <td>${memberfavorite[i].name}</td>
        <td>${memberfavorite[i].on_market ? "on the market" : "off the market"}</td>
        <td>${memberfavorite[i].price}</td></tr></tbody></table><input type="hidden" value="${memberfavorite[i].product_no}"><button class="btn_normal favoriteCancel">Delete</button></div>`;
      }
      $id("favoriteInsert").innerHTML = favoriteHtml;
      // 取消蒐藏紐
      for (let i = 0; i < memberfavorite.length; i++){
        document.querySelectorAll(".favoriteCancel")[i].onclick = favoriteCancel;
      }
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
  let url = "favorite.php?id=" + `${e.target.parentNode.firstChild.nextElementSibling.value}` + "&add=" + "false";
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
  // 會員相片修改
  $id("profilesPhoto_sub").onclick = profilesPhoto_sub;
  //會員密碼修改
  $id("changePsw_sub").onclick = changePsw_sub;
  //燈箱關閉
  $id("memberLightbox_cancel").onclick = () => {
    $id("member_Lightbox").style.display = "none";
    // location.reload();
  }
  //訂單燈箱關閉
  $id("orderLightbox_cancel").onclick = () => {
    $id("orderdetail_container").style.display = "none";
  }
}
window.addEventListener("load", init, false);
