//引入Vue
import Vue from 'vue'
//引入App
import App from './App.vue'
//关闭Vue的生产提示
Vue.config.productionTip = false

// 引入store
import store from './store'  // 没写默认引入该文件夹下的index

//创建vm
const vm = new Vue({
	el: '#app',
	store,
	render: h => h(App),
})

