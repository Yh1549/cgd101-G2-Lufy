let chandeliers = Vue.component('product-chandeliers', {
    props: ['chandeliersImg', 'chandeliersName', 'chandeliersInfoLink'],
    template: ` <a class="category_card" :href="chandeliersInfoLink">
                <div  class="category_img">
                    <img :src="chandeliersImg" :alt="chandeliersName">
                </div>
                <div class="category_content">
                    <h2>{{chandeliersName}}</h2>
                    <span class="material-icons">
                        favorite
                    </span>
                </div>
            </a> `,
})
new Vue({   // Vue instance
    el: '#chandeliers_wrap',
    data: {
        chandeliersObject: [
            {
                chandeliersImg: `./images/aboutus.lamp1.png`,
                chandeliersName: `chandeliers Name1`,
                chandeliersInfoLink: './productInner.html',
            },
            {
                chandeliersImg: `./images/aboutus.lamp2.png`,
                chandeliersName: `chandeliers Name2`,
                chandeliersInfoLink: './productInner.html',
            },
            {
                chandeliersImg: `./images/aboutus.lamp3.png`,
                chandeliersName: `chandeliers Name3`,
                chandeliersInfoLink: './productInner.html',
            },
        ],
    },     //變數放這裡!            
    mounted: {},
    methods: {},  // 函數大部分放這裡!            
    computed: {},
    components: {},
});