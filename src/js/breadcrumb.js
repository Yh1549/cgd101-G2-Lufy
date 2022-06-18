let bb = Vue.component('breadcrumb-list', {
    props: ['breadcrumb'],
    template: `
    <ol class="breadcrumbList">
        <li class="breadcrumbItem" v-for="item in breadcrumb">
            <a :href="item.link">{{item.name}}</a>
        </li>
    </ol> `,
})
const bCb = new Vue({
    el: `#breadcrumb_list`,
    data: {
        breadCrumbRow: [],
    },
    methods: {
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
    },
    mounted() {
        this.setBreadcrumb();
    },
})