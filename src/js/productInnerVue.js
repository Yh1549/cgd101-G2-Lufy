// let prodImg = Vue.component('prod-img', {
//     props: ['name', 'image_path'],
//     template: `
//     <div>
//         <img :image_path="prodInfoRow[0]?.image_path" :alt="name" class="me_2 big_img">
//         <div class="product_overlay hidden">
//             <h2>Added to cart</h2>
//             <i class='fa fa-check'></i>
//         </div>
//         <div class="small_products_img">
//             <img :src="'images//'+image_path" :alt='name'class="small">
//         </div>
//     </div>`,
// })
let prodImgMain = Vue.component('prodimg-main', {
    props: ['name', 'image_path'],
    template: `<img :src="'images//'+image_path" :alt="name" class="me_2 big_img">`,
});
let prodImgSmall = Vue.component('prodimg-small', {
    props: ['name', 'image_path'],
    template: `<div class="small_products_img">
                <img  :src="'images//'+image_path" :alt='name'class="small">
                </div>`,
});
let purchasePnl = Vue.component('purchase-panel', {
    props: ['name', 'price', 'promotions_name', 'promotions_price', 'promPrice'],
    methods: {
        setFavorite() {
            const product_no = window.location.search.split('id=')[1];
            axios.get(`favorite.php?id=${product_no
                }&add=true`).then((response) => {
                    console.log('response.data :', response.data)
                }).catch(err => console.log(err));
        }
    },
    computed: {
        prom_price() {
            return {
                orignal_price: this.promotions_price,
                big_price: !this.promotions_price,
            }
        },
    },
    // #region 
    template: `<div>
        <h2 class="promotions font_w3 p1 me_4">{{promotions_name}}</h2>
        <h1 class="product_name h1 me_4">{{name}}</h1>
        <div class="product_price me_4">
            <span class="h6" :class="prom_price"><span class="h6">$</span>{{price}}</span>
            <span class="promotions_price fontdeco_w7 font_i fontdeco h1" v-if='promotions_price'><span class="fontdeco_w3 font_i fontdeco p2">$</span>{{promotions_price}}</span>
        </div>
        <div class="purchase_function me_3">
            <div id="buyNow" class="buyNowButton mr_5">
                <i class="fa-solid fa-credit-card"></i>
                <span class="fontcontent p1">Buy Now</span>
                <input type="hidden" value="lamp1|aboutus.lamp1.png|50000">
            </div>
            <div class="addButton">
                <span id="A1001" class="fontcontent p1"><i class="fa-solid fa-cart-plus"></i> Add to Cart
                    <input type="hidden" value="lamp1|aboutus.lamp1.png|50000|lamp1 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore dicta obcaecati id fuga consectetur accusantium, debitis consequatur odit iste dolorum.">
                </span>
            </div>
        </div>
        <div id="favoriteButton" class="favoriteButton me_4" @click='setFavorite()'>
            <i class="fa-regular fa-heart"></i>
            <span class="fontcontent p1">Favorite</span>
            <input type="hidden" value="lamp1|aboutus.lamp1.png|50000">
        </div> 
    </div>`,
    // #endRegion
});
let prodInfo = Vue.component('prod-info', {
    props: ['description', 'specification'],
    data() {
        return { show: true, }
    },
    computed: {
        show_info() { return { show: true } }
    },
    template: `<div>
        <div class="detail_switch me_2">
            <div @click='show=true' class="describe font_w5 fontcontent" :class="byclicked">Description</div>
            <div @click='show=false' class="specification fontcontent">Specification</div>
        </div>
        <div v-if='show' class="product_describe">
            <p class="content p2">{{description}}</p>
        </div>
        <div v-else class="product_specification">
            <p class="content p2">{{specification}}</p>
        </div>        
    </div>
    `,
    mounted: {
        byClick() { }
    }
})
let designerInfo = Vue.component('des-info', {
    props: ['des_name', 'des_text'],
    template: `<div>
        <div class="product_designer">
            <div class="product_designer_img mr_2">
                <img src="./images/designer4.jpg" :alt="des_name">
            </div>
            <div class="product_designer_intro_box me_2">
                <div class="product_designer_intro_content me_4">
                    <h2 class="h2 me_1">{{des_name}}</h2>
                    <p class="p2">{{des_text}}</p>
                </div>
                <a href="./designers.html" class="designer_link btn_normal">Read More</a>
            </div>
        </div>
    </div>
    `,
})
const mainProductImg = new Vue({
    el: `#product`,
    data: {
        prodInfoRow: [],
    },
    methods: {
        setProductimage() {
            const product_no = window.location.search.split('id=')[1];
            axios.get(`productInner.php?id=${product_no
                }`).then((response) => {
                    this.prodInfoRow = response.data;
                    console.log(response.data)
                }).catch(err => console.log(err));
        },        
    },
    mounted() {
        this.setProductimage();
    },
})