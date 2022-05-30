
    let changeTab = (e) => {
      // console.log(e.target);
      let memberform = document.querySelectorAll(".memberform");
      for (
        let i = 0;
        i < document.querySelector(".ul").children.length;
        i++
      ) {
        if (e.target == document.querySelector(".ul").children[i]) {
          memberform[i].classList.remove("member_hide");
          document
            .querySelector("#member_welcome")
            .classList.add("member_hide");
        } else if (e.target == document.querySelector(".ul")) {
          document
            .querySelector("#member_welcome")
            .classList.remove("member_hide");
          memberform[i].classList.add("member_hide");
        } else {
          memberform[i].classList.add("member_hide");
        }
      }
      console.log(memberform[0]);

    };
    function init (){
      let ul = document.querySelector(".ul");
      // console.log(ul.children[0]);
      ul.addEventListener("click", changeTab, false);
    };
    window.addEventListener("load", init, false);
