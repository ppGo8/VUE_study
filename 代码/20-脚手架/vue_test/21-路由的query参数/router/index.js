/**
 * 该文件专门用于创建整个应用的路由器
 */
import VueRouter from 'vue-router'
import Home from '../pages/Home'
import About from '../pages/About'
import Message from '../pages/Message'
import News from '../pages/News'
import Detail from '../pages/Detail'


// 创建并暴露路由器
export default new VueRouter({
    // 配置路由规则,key:value
    routes: [
        {
            path: '/about',
            // 注意，千万不要写成<About / >
            component: About  // 组件的路径在最开始就import导入了
        },
        {
            path: '/home',
            component: Home,
            // 嵌套路由需要写在自己父亲的下面
            children: [
                {
                    // 子路由前面的path不能加斜杠/
                    path: 'news',
                    component: News
                },
                {
                    path: 'message',
                    component: Message,
                    children:[
                        {
                            path:'detail',
                            component:Detail
                        }
                    ]

                }
            ]
        },

    ]
})

