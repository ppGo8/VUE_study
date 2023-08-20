/**
 * 该文件专门用于创建整个应用的路由器
 */
import VueRouter from 'vue-router'
import Home from '../pages/Home'
import About from '../pages/About'
import Message from '../pages/Message'
import News from '../pages/News'
import Detail from '../pages/Detail'

// 创建路由器
const router = new VueRouter({
    // 修改路由器的工作模式
    mode: 'history',
    // 配置路由规则,key:value
    routes: [
        {
            // 路由命名
            name: 'guanyu',
            path: '/about',
            // 注意，千万不要写成<About / >
            component: About,  // 组件的路径在最开始就import导入了
            meta: { title: '关于' }
        },
        {
            name: 'shoye',
            path: '/home',
            component: Home,
            meta: { title: '首页' },
            // 嵌套路由需要写在自己父亲的下面
            children: [
                {
                    name: 'xinwen',
                    // 子路由前面的path不能加斜杠/
                    path: 'news',
                    component: News,
                    meta: { isAuth: true, title: '新闻' },
                    // 独享路由守卫——只有前置没有后置
                    // beforeEnter: (to, from, next) => {
                    //     // 逻辑和全局前置守卫的逻辑一样
                    //     if (to.meta.isAuth) {
                    //         if (JSON.parse(localStorage.getItem('school')) === 'atguigu') {
                    //             next()
                    //         } else {
                    //             alert('学校名不对,不与通过!')
                    //         }
                    //     } else {
                    //         // 其他页面全部允许访问,不做任何限制
                    //         next()
                    //     }
                    // }

                },
                {
                    name: 'xiaoxi',
                    path: 'message',
                    component: Message,
                    meta: { isAuth: true, title: '消息' },
                    children: [
                        {
                            name: 'xiangqing',
                            path: 'detail/:id/:title', // 使用占位符 声明接受pramas参数
                            component: Detail,
                            meta: { isAuth: true, title: '详情' }

                        }
                    ]

                }
            ]
        },

    ]
})


// 创建全局前置路由守卫
// 调用时机: 1.初始化的时候调用 2.每次路由切换之前
// 都会调用beforeEach中的函数
// router.beforeEach((to, from, next) => {
//     console.log('@我是前置路由守卫!');
//     // to 要去哪里
//     // from 来自哪里

//     // 不告诉路由守卫放行,他是不会放行的;拦截式操作
//     // 路由守卫会把所有的东西都拦住,需要写next()方法才会放行
//     // next  


//     // 如果想访问以下两个页面,且是尚硅谷学校的就放行
//     // if (to.path === '/home/news' || to.path === '/home/message') {
//     // 使用路由元数据代替上述写法
//     if (to.meta.isAuth) {
//         if (JSON.parse(localStorage.getItem('school')) === 'atguigu') {
//             next()
//         } else {
//             alert('学校名不对,不与通过!')
//         }
//     } else {
//         // 其他页面全部允许访问,不做任何限制
//         next()
//     }

// })

// 全局后置路由守卫
// 调用时机: 1.初始化时调用 2.每次路由切换之后
// 后置路由守卫没有next方法
// router.afterEach((to, from) => {
//     console.log('@我是后置路由守卫!');
//     // 应用场景:在切换页面之后,更换浏览器页签中的标题为页面对应的内容
//     // console.log(to.meta.title);
//     document.title = to.meta.title || '硅谷系统'
// })



export default router