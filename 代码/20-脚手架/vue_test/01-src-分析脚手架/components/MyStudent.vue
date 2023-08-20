<template>
  <div class="demo">
    <h2>学校名称：{{ name }}</h2>
    <h2>学校地址：{{ age }}</h2>
    <button @click="showName">点我显示</button>
  </div>
</template>

<script>
export default {
  name: "MyStudent",
  data() {
    return {
      name: "李华",
      age: 14,
    };
  },
  methods: {
    showName() {
      alert(this.name);
    },
  },
};
</script>