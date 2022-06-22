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
            //tibamef2e.com/cgd101/g2/productMain.html
            let arr = window.location.pathname.split('.html')[0].split('/');
            //['', 'tibamef2e.com','cgd101' ,'g2','productMain']

            arr.splice(0, 3);

            //['tibamef2e.com','cgd101' ,'g2','productMain']

            this.breadCrumbRow = [
                {
                    name: 'Home',
                    link: `homePage.html`,
                },
            ];

            arr.forEach((v, i) => {
                this.breadCrumbRow.push({
                    name: v,
                    link: `${arr.slice(0, i + 1).join('/')}.html${window.location.search}`,
                })
            })
        },
    },
    mounted() {
        this.setBreadcrumb();
    },
})

// home > productMain > Chair

// 目前狀況：
// https://tibamef2e.com/cgd101/g2/.html


// 首頁：
// https://tibamef2e.com/cgd101/g2/homePage.html

// 商品總覽：
// https://tibamef2e.com/cgd101/g2/productMain.html

// 商品內頁；
// https://tibamef2e.com/cgd101/g2/productInner.html?id=6