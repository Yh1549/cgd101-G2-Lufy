Vue.component('card-component', {
    template: `
    <div class="card card-bdr">
        <div class="pic card-bdr">
            <img :src="'images//' + item.fac_pic" alt="Image">
            <div class="area" v-html="areaNameHandler(item.fac_area)">
            </div>
        </div>
        <div class="info">
            <h5>{{item.fac_name}}</h5>
            <p>{{item.fac_descrip}}</p>
        </div>
    </div>
    `,
    props: {  item: Object  },
    methods: {
        areaNameHandler(str) {
            let arr = str.split('');
            return `${ arr[0] }${ arr[1] } <br />${ arr[2] }${ arr[3] }`
        },
    }
});
// 所有設施 vue
new Vue({
    el: '#all-thrill-ride',
    data: {
        item: [],
        facilityRows: [],
        currentArea: '所有設施',
        names: ['所有設施', '紐約都會', '西部農莊', '印安部落'],
        rain: false,
        pregnant: false,
        wheelchair: false,
    },
    computed: {  // 函數也可以放這裡，但是放在這裡的函數不能傳參數，一定要有傳回值(return)
        filterTab() {
            if (this.currentArea == '所有設施') return this.facilityRows;
            return this.facilityRows.filter(v => {
                return v.fac_area == this.currentArea
            })
        },
        filterCheck() {
            return this.filterTab.filter(item => {       //return第一次篩選完的結果並且再篩一次
                let rainPass = true;    //先宣告雨天 | 孕婦 | 輪椅 =  true
                let pregnantPass = true;
                let wheelchairPass = true;
                if (this.rain) { rainPass = !!item.fac_rainy };   //如果this.rain = true(就是物件裡有自選成true的那些設施)，
                if (this.pregnant) pregnantPass = !!item.fac_preg;    //
                if (this.wheelchair) wheelchairPass = !!item.fac_wheelchair;
                // console.log(rainPass)
                return rainPass && pregnantPass && wheelchairPass;
            });
        },
    },
    mounted() {
        let xhr = new XMLHttpRequest();
        xhr.onload = () => {
            this.facilityRows = JSON.parse(xhr.responseText);
            console.log(this.facilityRows);
        }
        xhr.open("get", "./php/get_back_facility.php", true);
        xhr.send(null);
    },
})