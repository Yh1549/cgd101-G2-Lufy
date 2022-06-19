window.onload = () => {
    const grid = document.querySelector('.grid');
    const masonry = new Masonry(grid, {
        itemSelector: '.grid-item',
        gutter: '.gutter-sizer',
        columnWidth: ".grid-sizer",
        percentPosition: true,
        originLeft: false,
        originTop: true,
    });
}
let bb = Vue.component('breadcrumb-list', {
    props: ['breadcrumb'],
    template: `
    <ol class="breadcrumbList">
        <li class="breadcrumbItem" v-for="item in breadcrumb">
            <a :href="item.link">{{item.name}}</a>
        </li>
    </ol> `,
})

let category = Vue.component('product-category', {
    props: ['category_imgpath', 'category_name'],
    template: `<div class="category">
        <img :src="'images//'+category_imgpath" :alt="category_name">
        <p class="p1">{{category_name}}</p>
    </div>`,
})

let commodity = Vue.component('product-commodity', {
    props: ['image_path', 'name', 'product_no'],
    methods: {
        addFav() {
            // php
            console.log(this.product_no)
        },
        goDetailPage() {
            window.location = `./productInner.html?id=${this.product_no}`
        },
    },
    template: `
    <div class="grid-item" @click="goDetailPage">
        <div class="commodityImg">
            <img :src="'images//'+image_path" :alt="name">
        </div>
        <div class="commodity">
            <h2>{{name}}</h2>
            <span class="material-icons" @click.stop="addFav">favorite</span>
        </div>
    </div> `,
})

const productCommodity = new Vue({
    el: '#product',
    data: {
        categoryObject: [],
        commodityObject: [],
        focusId: NaN,
    },
    methods: {
        // 麵包屑
        setBreadcrumb() {
            // /product/productlist/item.html
            let arr = window.location.pathname.split('.html')[0].split('/');
            //['', 'product','productlist' ,'item']
            arr.splice(0, 1);
            //['product','productlist', 'item']

            this.breadCrumbRow = [
                {
                    name: 'Home',
                    link: `homePage.html`,
                },
            ];

            arr.forEach((v, i) => {
                this.breadCrumbRow.push({
                    name: v,
                    link: `${arr.slice(0, i + 1).join('/')}.html`
                })
            })
        },
        // 商品類別取值
        clickHandler(id) {
            if (this.activetab !== id) this.activetab = id;
            else this.activetab = NaN;
        },
        setCategory() {
            console.log(mouted)
            axios.get('productCategory.php').then(function (response) {
                this.commodityObject = response.data;
                console.log(response.data)
            });
        },
        // 取商品類別圖
        setCategoryimage() {
            axios.get('productCategory.php').then((response) => {
                console.log(response.data)
                productCommodity.categoryObject = response.data;
            }).catch(err => console.log(err));
        },
        // 取商品圖片
        setProductimage() {
            axios.get('productMain.php').then((response) => {
            console.log(response.data)
            productCommodity.commodityObject = response.data;
        }).catch(err => console.log(err)); 
        },
    },
    computed: {
        // 篩選商品
        filterList() {
            if (isNaN(this.focusId)) return this.list;
            return this.list.filter(item => item.cat_no == this.focusId);
        },
    },
    mounted() {
        this.setBreadcrumb();
        // this.clickHandler();
        // this.setCategory();
        this.setCategoryimage();
        this.setProductimage();
        // this.filterList();
    },
})