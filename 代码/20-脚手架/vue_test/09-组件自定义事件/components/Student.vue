<template>
  <div class="student">
    <h2>学生姓名：{{ name }}</h2>
    <h2>学生性别：{{ sex }}</h2>
    <button @click="sendStudentName">学生名给APP</button>
    <button @click="unbind">解绑事件</button>
  </div>
</template>

<script>
export default {
  name: "Student",
  data() {
    return {
      name: "张三",
      sex: "男",
    };
  },
  methods: {
    sendStudentName() {
      // 触发student实例上的atguigu事件
      this.$emit("atguigu", this.name);
    },
    unbind() {
      // this.$off("atguigu");
      this.$off()
    },

  },
};
</script>

<style  scoped>
.student {
  background-color: pink;
  margin-top: 30px;
  padding: 5px;
}
</style>
