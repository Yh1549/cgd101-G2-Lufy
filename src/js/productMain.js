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
let bread = Vue.component('breadcrumb-list', {
    props: ['breadcrumb'],
    template: `
    <ol class="breadcrumbList">
        <li class="breadcrumbItem" v-for="item in breadcrumb">
            <a :href="item.link">{{item.name}}</a>
        </li>
    </ol> `,
})

let category = Vue.component('product-category', {
    props: ['category_imgpath', 'category_name','category_no'],
    template: `
    <div class="category"  @click="filterhandler(category_no)">
        <img :src="'images//'+category_imgpath" :alt="category_name">
        <p class="p1">{{category_name}}</p>
    </div>`,

    methods: {
        filterhandler(category_no) {
            this.$emit('filtercategory', category_no)
        }
    },
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
        breadCrumbRow: [],
        focusId: NaN,
        categoryName: 'all'
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
        setCategory() {
            console.log(mounted)
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
        changeFocusId(num) {
            this.focusId = num
        },
        callMasonry() { 
            var grid = document.querySelector('.grid');
            new Masonry(grid, {
                itemSelector: '.grid-item',
                gutter: '.gutter-sizer',
                columnWidth: ".grid-sizer",
                percentPosition: true,
                originLeft: false,
                originTop: true,
            });
        }
    },
    computed: {
        // 篩選商品
        filterList() {
            if (isNaN(this.focusId)) return this.commodityObject;
            return this.commodityObject.filter(item => item.category_no == this.focusId);
        },
    },
    created() { 
        
    },
    mounted() {
        this.setBreadcrumb();
        this.setCategoryimage();
        this.setProductimage();
        // this.callMasonry();
    },
})