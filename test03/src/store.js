import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        //所有狀態
        drawer: false,
    },
    mutations: {
        //所有方法
        testLogin(){
            this.state.drawer = !this.state.drawer;
            console.log('store drawer: ' + this.state.drawer);
        }
    },
    actions: {}
});