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
            $id("designerInner_selfintro").innerHTML=`<img src="images/${desingerRow.des_img_path}"><div><h2 class="h1">${desingerRow.art_1}</h2><p class="h4">${desingerRow.art1_text}</p></div>`;
            $id("designerInner_lamp").innerHTML=`<h1 class="s3">Art</h1><h2 class="h1">${desingerRow.art_2}</h2><p class="h4">${desingerRow.art2_text}</p><img src="images/product_floor_lamps_claritas_02.webp" class="ms_2">`;//image路徑要改
            $id("designerInner_article").innerHTML=`<h1 class="s3">Article</h1>
            <h2 class="h1">${desingerRow.art_3}</h2>
            <p class="h4">${desingerRow.art3_text}</p>
            <img src="images/product_floor_lamps_claritas_02.webp" class="ms_2">`;
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