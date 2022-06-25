let $id=(id)=>{
    return document.getElementById(id);
  }
let getDesigner =(id)=>{
    let xhr = new XMLHttpRequest();
    xhr.onload=()=>{
        if(xhr.status == 200){
            let desingerRow = JSON.parse(xhr.responseText);
            // console.log(desingerRow)
            $id("designerInner_name").innerText = desingerRow.des_name;

            $id("designerInner_selfintro").innerHTML = `<div class="designer_img"><img src="images/${desingerRow.des_img_path}"></div><div class="designer_info"><h2 class="s3 me_2">${desingerRow.art_1}</h2><p class="h4 me_2">${desingerRow.art1_text}</p></div>`;

            $id("designerInner_lamp").innerHTML = `<div class="art"><div class="art_content"><h1 class="s3 me_1">Art</h1><h2 class="h1 me_1">${desingerRow.art_2}</h2><p class="h4 me_2">${desingerRow.art2_text}</p></div><div class="art_photo"><img src="images/product_floor_lamps_claritas_02.webp"></div></div>`;//image路徑要改
            
            $id("designerInner_article").innerHTML =`<div class="art"><div class="art_content"><h1 class="s3 me_1">Article</h1>
            <h2 class="h1 me_1">${desingerRow.art_3}</h2>
            <p class="h4 me_2">${desingerRow.art3_text}</p></div>
            <div class="art_photo"><img src="images/product_floor_lamps_claritas_02.webp"></div></div>`;
        };
    };
    let url = `designerInner.php?id=${id}`
    xhr.open("get", url, true);
    xhr.send(null);
};
let init=()=>{
    let para = new URLSearchParams(document.location.search);
    let desId = para.get("id");
    getDesigner(desId);
};
window.addEventListener("load", init, false);