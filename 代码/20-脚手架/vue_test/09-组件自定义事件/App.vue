<template>
  <div class="app">
    <h1>{{ msg }}</h1>
    <!-- 通过父组件传递给子组件函数类型的props,可以接受到子组件的数据 -->
    <School :getSchoolName="getSchoolName" />

    <!-- 1.通过父组件给子组件绑定一个自定义事件:实现子给父传递数据 -->
    <!-- <Student @atguigu="demo" /> -->

    <!-- 2.子组件绑定事件的另一个方法 -->
    <Student ref="student" />
  </div>
</template>

<script>
import Student from "./components/Student";
import School from "./components/School";

export default {
  name: "App",
  data() {
    return {
      msg: "你好啊",
    };
  },
  components: { School, Student },
  methods: {
    getSchoolName(name) {
      console.log("APP收到了学校名:", name);
    },
    demo(name) {
      console.log("APP收到了学生名:", name);
    },
  },
  mounted() {
    // 另外一种给子组件绑定事件的方法
    // 需求:等待3s再触发时间
    setTimeout(() => {
      this.$refs.student.$on("atguigu", this.demo);
      // 要求只触发一次
      // this.$refs.student.$once("atguigu", this.demo);
    }, 1000);
  },
};
</script>

<style scoped>
.app {
  background-color: gray;
  padding: 5px;
}
</style>
