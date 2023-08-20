<template>
  <div>
    <h2 v-text="msg" ref="title"></h2>
    <button @click="showDOM" ref="btn">点我输出上方的DOM元素</button>
    <!-- 给组件加ref,获得school组件的实例对象 -->
    <School ref="sch" />
  </div>
</template>

<script>
// 引入MySchool组件
import School from "./components/MySchool.vue";

export default {
  name: "App",
  data() {
    return { msg: "欢迎光临尚硅谷" };
  },
  components: {
    School,
  },
  methods: {
    showDOM(e) {
      // 1.原生JS方法输出DOM标签；但是这里是Vue不建议
      console.log("1:", e.target);
      // 2.Vue方法获得DOM元素
      console.log("2:", this.$refs.title);
      console.log("2:", this.$refs.btn);
      console.log("-------------------");

      // 3.给组件打ref属性,获得的是对应组件的实例对象
      console.log(this.$refs.sch);
    },
  },
};
</script>
