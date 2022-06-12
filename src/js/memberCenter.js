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
        $id("idMsg").innerText = "Login Failed";
      } else {
        //登入成功
        $id("idMsg").innerText = "Login Sucess";
        $id("mem_Loginbtn").innerText = "Log out";
        // -----
      }
    } else {
      alert(xhr.status);
    }
  };
  //與PHP連線
  xhr.open("post", "member.php", true);
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
      alert("No blank!!");
      break;
    } else if (i == profilesInput.length - 1) {
      let xhr = new XMLHttpRequest();
      xhr.onload = () => {
        if (xhr.status == 200) {
          alert(xhr.responseText);
        } else {
          alert("Change Fail");
          console.log(xhr.status);
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
    alert(xhr.responseText);
  };
  xhr.open("post", "membermodify.php", true);
  let changePswData = new FormData($id("changePswData"));
  xhr.send(changePswData);
};
function getMemberinfo(e) {
  let ul = document.querySelector(".ul");
  let memberform = document.querySelectorAll(".memberform");
  let xhr = new XMLHttpRequest();
  xhr.onload = function () {
    if (xhr.responseText != "No login") {
      $id("mem_Loginbtn").innerText = "Log out";
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
      let memberinfo = JSON.parse((JSON.parse(xhr.responseText)).member);
      //會員資料寫入HTML
      $id("memName").value = memberinfo.member_name;
      $id("email").value = memberinfo.member_mail;
      $id("memBD").value = memberinfo.member_birthday;
      $id("memPhone").value = memberinfo.member_tel;
      $id("Address").value = memberinfo.member_address;
      // 會員訂單寫入

      // ----------
    } else {
      $id("idMsg").innerText = "Login First";
      $id("mem_Loginbtn").innerText = "Log in";
    }
  };
  xhr.open("get", "getMemberInfo.php", true);
  xhr.send(null);
}
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
}
window.addEventListener("load", init, false);
