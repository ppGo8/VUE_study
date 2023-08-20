/**
 * 该文件用于创建Vuex最为核心的store
 */

// 引入Vue
import Vue from 'vue'
// 引入Vuex
import Vuex from 'vuex'
// 使用Vuex插件
Vue.use(Vuex)

// 准备actions--用于响应组件中的动作
const actions = {
    // context上下文,就是小型的store,包含需要的操作内容
    // value传入的数据
    // jia(context, value) {
    //     console.log('jia');
    //     context.commit('JIA', value)  // commit封装在context上下文之中
    // },
    // jian(context, value) {
    //     console.log('jian');
    //     context.commit('JIAN', value)

    // },
    jiaOdd(context, value) {
        if (context.state.sum % 2) {
            context.commit('JIA', value)
        }

    },
    jiaWait(context, value) {
        console.log('actions中的jiaWait被调用了');
        setTimeout(() => {
            context.commit('JIA', value)
        }, 500)

    }
}
// 准备mutations--用于操作数据(state)
const mutations = {
    // 这里的key写成大写
    JIA(state, value) {
        state.sum += value
    },
    JIAN(state, value) {
        state.sum -= value
    },
    ADD_PERSON(state, value) {
        console.log('@mutations中的ADD_PERSON被调用了');
        state.personList.unshift(value)
    }

}
// 准备state--用于存储数据
const state = {
    sum: 0, // 用来求和
    school: '尚硅谷',
    study: '前端',
    personList: [
        { id: '001', name: 'ppgo' },
        { id: '002', name: 'ppzhu' }
    ]
}

// 准备getters——用于将state中的数据进行加工
const getters = {
    // 有些类似计算属性，但是不完全是
    // 返回值赋值给函数名
    bigSum(state) {
        return state.sum * 10
    }
}



// 创建并暴露store
export default new Vuex.Store({
    // 采用对象的简写形式
    actions: actions,
    mutations,
    state,
    getters,

})

// 导出/暴露store
// export default store