import Vue from 'vue'
import Index from '@/pages/Index.vue'
import router from '@/router/index.ts'
import ElementUI from 'element-ui'

Vue.config.productionTip = false

Vue.use(ElementUI);

import "../global/custom.scss";
import "../global/boot.less"

new Vue({
    router,
    render: h => h(Index)
}).$mount('#app')
