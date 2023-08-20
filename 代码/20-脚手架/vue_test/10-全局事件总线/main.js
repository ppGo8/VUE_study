//引入Vue
import Vue from 'vue'
//引入App
import App from './App.vue'
//关闭Vue的生产提示
Vue.config.productionTip = false


// 使用vc构造事件总线
/* 
const Demo = Vue.extend({})
const d = new Demo()  // 因为这里没办法写,没通过标签实例化<Demo /> 
Vue.prototype.x = d
*/


//创建vm
const vm = new Vue({
	el: '#app',
	render: h => h(App),
	// 如果写在外边,是不行的;
	// 写在外面所有已经执行完了;其他的钩子在mounted的时候就已经开始调用下面的方法了,会报错;
	// 所以需要在最开始就写事件总线
	beforeCreate() {
		// 最标准的事件总线方法
		// 加$符是为了符合vue对变量名的设计,有$符的给程序员用 
		Vue.prototype.$bus = this
	}

})

