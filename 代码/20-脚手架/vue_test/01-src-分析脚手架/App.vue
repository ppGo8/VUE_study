<template>
  <div>
    <!-- 也可以写自闭和,因为这里是脚手架的形式 -->
    <img src="./assets/logo.png" alt="logo" />
    <School></School>
    <Student></Student>
  </div>
</template>

<script>
// APP用来汇总所有组件
// 引入组件
import School from "./components/MySchool.vue";
import Student from "./components/MyStudent.vue";
export default {
  name: "App",
  components: {
    School,
    Student,
  },
};
</script>

<style>
</style>