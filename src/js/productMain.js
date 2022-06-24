let bread = Vue.component('breadcrumb-list', {
    props: ['breadcrumb'],
    template: `
    <ol class="breadcrumbList">
        <li class="breadcrumbItem" v-for="item in breadcrumb">
            <a class="userSelectNone" :href="item.link">{{item.name}}</a>
        </li>
    </ol> `,
})
let category = Vue.component('product-category', {
    props: ['category_imgpath', 'category_name', 'category_no', 'focusId'],
    template: `
    <div class="category userSelectNone"  @click="filterhandler(category_no)" :class="(focusId === category_no)?'active':''">
        <img :src="'images//'+category_imgpath" :alt="category_name">
        <p class="p1 userSelectNone">{{category_name}}</p>
    </div>`,

    methods: {
        filterhandler(category_no) {
            this.$emit('filtercategory', category_no)
        }
    },
})

let commodity = Vue.component('product-commodity', {
    props: ['image_path', 'name', 'product_no', 'add', 'isFav'],
    data() { 
        return {
            isAdd: false,
        }
    },
    methods: {
        addFav() {
            console.log(this.product_no)
        },
        goDetailPage() {
            window.location = `./productInner.html?id=${this.product_no}`
        },
        setFavorite(e, id) {
            const product_no = id
            axios.get(`favorite.php?id=${product_no
                }&add=${this.isAdd}`).then((response) => {
                    if (response.data == 'add success') {
                        this.isAdd = false;
                        e.target.classList.add('favActive');
                    } else {
                        this.isAdd = true;
                        e.target.classList.remove('favActive');
                    }
                }).catch(err => console.log(err));
        },
    },
    mounted() { 
        this.isAdd = this.add;
    },   
    template: `
    <div class="grid-item" @click="goDetailPage">
        <div class="commodityImg">
            <img :src="'images//'+image_path" :alt="name">
        </div>
        <div class="commodity">
            <h2 class="userSelectNone">{{name}}</h2>
            <span class="material-icons favoriteButton userSelectNone userSelectNone" :class="isFav ? 'favActive':'abc'"
            @click.stop="addFav;setFavorite($event, product_no)">favorite</span>
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
        categoryName: 'all',
        favItems: [],
    },
    methods: {
        // 麵包屑
        setBreadcrumb() {
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
        // 取商品類別圖
        setCategoryimage() {
            axios.get('productCategory.php').then((response) => {
                console.log(response.data)
                productCommodity.categoryObject = response.data;
            }).catch(err => console.log(err));
        },
        // 取商品圖片
        async setProductimage() {
            axios.get('productMain.php').then((response) => {
                console.log(response.data)
                this.commodityObject = response.data;
                this.$nextTick(this.callMasonry)

                this.commodityObject.forEach(item => {
                    const isInIt = this.favItems?.find(i => i?.product_no == item.product_no);
                    item.isFav = !!isInIt ? true : false;
                });
                console.log(this.commodityObject)
               
            }).catch(err => console.log(err));
        },
        changeFocusId(num) {
            this.focusId =
                (this.focusId === num) ? NaN : num;
        },
        callMasonry() {
            const grid = document.querySelector('.grid');
            console.log(grid)
            new Masonry(grid, {
                itemSelector: '.grid-item',
                gutter: '.gutter-sizer',
                columnWidth: ".grid-sizer",
                percentPosition: true,
                originLeft: false,
                originTop: true,
            });

            this.$nextTick(() => {
                setTimeout(this.resetGrid, 1000)
            })
        },
        // 【refresh 瀑布流】
        resetGrid() {
            const gridEl = document.querySelector('.grid')
            if (!Masonry.data(gridEl)) return;
            Masonry.data(gridEl).reloadItems()
            this.$nextTick(() => {
                Masonry.data(gridEl).layout()
            })
        },
        // 加入收藏的商品
        favoriteCheck() {
            axios.get(`membergetInfo.php`)
            .then((response) => (response?.data?.memberfavorite))
            .then(res => this.favItems = (res))
            .then(res => {
                this.setProductimage();
            })
        },
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
        this.favoriteCheck();
    },
})