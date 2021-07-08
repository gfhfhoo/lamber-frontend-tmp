import Vue from 'vue'
import Backend from '@/pages/Backend.vue'
import router from '@/router/backend.ts'
import ElementUI from 'element-ui'

Vue.config.productionTip = false

Vue.use(ElementUI);

import "../global/custom.scss";
import "../global/boot.less"

new Vue({
    router,
    render: h => h(Backend)
}).$mount('#backend')
