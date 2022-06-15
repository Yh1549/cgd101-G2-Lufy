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

let commodity = Vue.component('product-commodity', {
    props: ['image_path', 'name', 'product_no'],
    template: `
    <a class="grid-item" :href="'./productInner.html?id=' + product_no">
        <div  class="commodityImg">
            <img :src="'images//'+image_path" :alt="name">
        </div>
        <div class="commodity">
            <h2>{{name}}</h2>
            <span class="material-icons">
                favorite
            </span>
        </div>
    </a> `,
})
const productCommodity = new Vue({
    el: '#grid_masonry',
    data: {
        commodityObject: []
    },
    mounted() {
        axios.get('productMain.php').then(function (response) {
            productCommodity.commodityObject = response.data;
        }).catch(err => console.log(err));
    },
})