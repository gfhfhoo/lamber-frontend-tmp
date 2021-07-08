import Vue from 'vue';
import Main from './CustomMessageBox.vue';

let Constructor = Vue.extend(Main)

let instance;

const Message = (opt: any) => {
    if (Vue.prototype.$isServer) return;
    opt = opt || {};
    if (typeof opt === 'string') {
        opt = {
            message: opt
        };
    }
    instance = new Constructor({
        data: opt
    }).$mount();
    document.body.appendChild(instance.$el);
    instance.isOpen = true;
    return instance;
}

export default Message;