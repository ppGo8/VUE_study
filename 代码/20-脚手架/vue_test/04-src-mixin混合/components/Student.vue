<template>
  <div>
    <h1 v-text="msg"></h1>
    <h2 @click="showName">学生姓名：{{ name }}</h2>
    <h2>学生性别：{{ sex }}</h2>
  </div>
</template>

<script>
// 引入一个混合
import { mixin,hunhe2 } from "../mixin";
export default {
  name: "Student",
  data() {
    return {
      name: "张三",
      sex: "男",
    };
  },
  mixins: [mixin,hunhe2],
};
</script>
