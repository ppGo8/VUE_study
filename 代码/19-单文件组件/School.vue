<template>
  <!-- 组件结构 -->
  <div class="demo">
    <h2>学校名称：{{ name }}</h2>
    <h2>学校地址：{{ addr }}</h2>
  </div>
</template>

<script>
// 组件交互相关代码，如数据、方法等

// 暴露数据，其他程序才可以引入；建议默认暴露方法,因为后面引入可以简写
export default {
  name: "School", // 在这里写名字的目的,在Vue开发者工具中显示School
  data() {
    return {
      name: "尚硅谷",
      addr: "北京",
    };
  },
};
</script>

<style>
/* 组件样式代码 */
.demo {
  background-color: pink;
}
</style>

     