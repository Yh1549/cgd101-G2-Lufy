let breadcrumb = Vue.component('breadcrumb-list', {
    data() {
        return {
            breadCrumbRow: [],
        };
    },
    template: `<ol class="breadcrumbList">
                        <li class="breadcrumbItem" v-for="item in breadCrumbRow">
                            <a :href="item.link">{{item.name}}</a>
                        </li>
                    </ol> `,
    methods: {
        setBreadcrumb() {
            // /product/projustlist/item.html
            let arr = window.location.pathname.split('.html')[0].split('/');
            //['', 'product','projustlist' ,'item']
            arr.splice(0, 1);
            //['product','projustlist', 'item']

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