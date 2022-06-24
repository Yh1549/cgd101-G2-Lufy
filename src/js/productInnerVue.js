const bus = new Vue()
// 大圖
let prodImgMain = Vue.component('prodimg-main', {
    props: ['name', 'image_path'],
    data() {
        return {
            largeImg: this.image_path,
        }
    },
    computed: {
        productInfo(){
            return  `${this.image_path}`
            
        }
    },
    template: `<img :src="'images//'+largeImg" :alt="name" class="me_2 big_img">`,
    mounted() {
        bus.$on('showImg', theImg => this.largeImg = theImg ?.image_path)
    },
});
// 小圖
let prodImgSmall = Vue.component('prodimg-small', {
    props: ['name', 'image_path', 'small-img'],
    template: `<div class="small_products_img userSelectNone" @click="showLargeImg">
                <img  :src="'images//'+image_path" :alt='name' class="small">
                </div>`,
    methods: {
        showLargeImg() {
            bus.$emit('showImg', this.smallImg)
        },
    },
});
// 商品詳情
let prodInfo = Vue.component('prod-info', {
    props: ['description', 'specification'],
    data() {
        return { layout: 'desc', }
    },
    template: `<div>
        <div class="detail_switch me_2">
            <div class="descBar fontcontent userSelectNone" @click="layout = 'desc'" :class="{ barActive: layout === 'desc', }">Description</div>
            <div class="specBar fontcontent userSelectNone" @click="layout = 'spec'" :class="{ barActive: layout === 'spec', 'aaa': true, }">Specification</div>
        </div>
        <div v-if="layout === 'desc'" class="content userSelectNone">
            <p class="p2">{{description}}</p>
        </div>
        <div  v-if="layout === 'spec'" class="content userSelectNone">
            <p class="p2">{{specification}}</p>
        </div>        
    </div>
    `,
})
// 設計師簡介
let designerInfo = Vue.component('des-info', {
    props: ['des_name', 'des_text', 'des_img_path', 'des_no'],
    template: `<div>
        <div class="product_designer">
            <div class="product_designer_img mr_2 userSelectNone">
                <img :src="'images//'+des_img_path" :alt="des_name">
            </div>
            <div class="product_designer_intro_box me_2">
                <div class="product_designer_intro_content me_4">
                    <h2 class="h2 me_1 userSelectNone">{{des_name}}</h2>
                    <p class="p2 userSelectNone">{{des_text}}</p>
                </div>
                <a :href="'./designers.html?id='+des_no" class="designer_link btn_normal userSelectNone">Read More</a>
            </div>
        </div>
    </div>
    `,
})
// 購買面板
let purchasePnl = Vue.component('purchase-panel', {
    props: ['name', 'price', 'promotions_name', 'promotions_price', 'promPrice', 'add', 'product_no', 'image_path', 'specification', 'promotions_state','isFav'],
    methods: {
        setFavorite(e) {
            this.$emit('set-fav-event', !this.isFav);
        },
    },
    mounted() {
        // this.isAdd = this.add;
    },
    computed: {
        prom_price() {
            return {
                original_price: this.promotions_state == 0,
                big_price:      this.promotions_state != 0,
            }
        },
        productInfo(){
            return  `${this.product_no}|${this.name}|${this.price}|${this.image_path}|${this.specification}`            
        }
    },   
    // #region 
    template: `<div>
        <h1 class="product_name h1 me_1 userSelectNone">{{name}}</h1>
        <h2 class="promotions font_w3 p1 me_4 userSelectNone" v-if='promotions_state == 0'>{{promotions_name}}</h2>
        <div class="product_price me_4" >

            <span class="h6 userSelectNone" :class="prom_price">
                <span class="h6 userSelectNone">$</span>
            {{price}}</span> 
            
            <span class="promotions_price fontdeco_w7 font_i fontdeco h1 userSelectNone" v-if='promotions_state == 0'>
                <span class="fontdeco_w3 font_i fontdeco p2 userSelectNone">$</span>
            {{promotions_price}}</span>

        </div>
        <div class="purchase_function me_3">
            <div id="buyNow" class="buyNowButton mr_5">
                
            <span :id="product_no" class="fontcontent p1 userSelectNone"><i class="fa-solid fa-credit-card userSelectNone"></i>Buy Now
                <input type="hidden" :value="productInfo">
                </span>
            </div>
            <div class="addButton">
                <span :id="product_no" class="fontcontent p1 userSelectNone"><i class="fa-solid fa-cart-plus userSelectNone"></i> Add to Cart
                   
                     <input type="hidden" :value="productInfo">
                </span>               
            </div>
        </div>
        <div id="favoriteButton" class="favoriteButton me_4" @click="setFavorite($event)">
            <span class="material-icons heart userSelectNone" :class="isFav ? 'favActive':'abc'">favorite</span>
            <span class="fontcontent p1 userSelectNone">Favorite</span>
        </div> 
    </div>`,
    // #endRegion :class="{favActive : isSelected}"
});

const mainProductImg = new Vue({
    el: `#product`,
    data: {
        prodInfoRow: [],
        add: true,
        locationSearch: window.location.search,
        favItems: [],
    },
    methods: {
        setProductimage() {
            const product_no = window.location.search.split('id=')[1];
            // productInner.html ? id =
            axios.get(`productInner.php?id=${product_no
                }`).then((response) => {
                    console.log(response.data)
                    this.prodInfoRow = response.data;
                    this.prodInfoRow.forEach(item => {
                        const isInIt = this.favItems?.find(i => i?.product_no == item.product_no);
                        item.isFav = !!isInIt ? true : false;
                    });
                // console.log(response.data)
            }).catch(err => console.log(err));
        },
        // 新增/刪除收藏
        setFavorite(e) {
            console.log('new vue', e)
            const product_no = window.location.search.split('id=')[1];
            axios.get(`favorite.php?id=${product_no
                }&add=${e}`).then((response) => {
                    console.log(response)
                    if (response.data == 'add success') {
                        this.add = false;
                        // e.target.classList.add('favActive');
                    } else {
                        this.add = true;
                        // e.target.classList.remove('favActive');
                    }
                    this.favoriteCheck()
                }).catch(err => console.log(err));
        },
        // 一進到頁面做商品是否已加入蒐藏檢查的函式
        favoriteCheck() {
            axios.get(`membergetInfo.php`)
                .then((response) => response?.data?.memberfavorite)
                .then(res => { this.favItems = (res);  return res})
                .then(res => {
                    console.log(res)
                    this.setProductimage();
                })
        },
        // #region
        // favoriteCheck() {
        //     let favCheck = new XMLHttpRequest();
        //     favCheck.onload = () => {
        //         if (favCheck.responseText != "No login") {
        //             let memberfavorite = favCheck.responseText.memberfavorite;
        //             console.log(memberfavorite)
        //             let idParams = new URLSearchParams(window.location.search);
        //             let pageid = parseInt(idParams.get("id"));
        //             for (let i = 0; i < memberfavorite.length; i++) {
        //                 if (memberfavorite[i].product_no == pageid) {
        //                     // console.log(memberfavorite[i].product_no+"sucess");
        //                     this.add = false;
        //                     document.querySelector('.favoriteButton .heart').classList.add('favActive');
        //                     // favorite按鈕變色的js放這 已加入蒐藏
        //                     break;
        //                 } else {
        //                     this.add = true;
        //                     document.querySelector('.favoriteButton .heart').classList.remove('favActive');
        //                     // favorite按鈕變色的js放這 未加入蒐藏
        //                     // console.log("fail");
        //                 }
        //             };
        //             // console.log(this.add);
        //         } else {
        //             console.log("未登入");
        //         }
        //     };
        //     favCheck.open("get", "membergetInfo.php", true);
        //     favCheck.send(null);
        // }
        // #endregion
    },
    created() {
        // this.setProductimage();
        this.favoriteCheck();
    },
})