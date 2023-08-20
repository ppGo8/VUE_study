<template>
  <div class="school">
    <h2 class="title">学校名称：{{ name }}</h2>
    <h2>学校地址：{{ address }}</h2>
  </div>
</template>

<script>
import pubsub from "pubsub-js"; // pubsub是对象形式
export default {
  name: "School",
  data() {
    return {
      name: "尚硅谷atguigu",
      address: "北京",
    };
  },
  mounted() {
    // 订阅一个消息
    // 接受到的参数,第一个参数是消息名,第二个参数是接受到的数据
    // 和定时器类似,会返回一个唯一id
    this.pubId = pubsub.subscribe("hello", function (msgName, data) {
      console.log("有人发布hello消息,hello消息的回调执行了", msgName, data);
      // 回调函数写成普通形式,里面的This不在指向vc实例化对象
      // 回调函数写成箭头函数形式,里面的this指向vc实例化对象,不出现问题
      // 或者把回调函数写在methods中,普通函数的形式this也是指向vc实例化对象
      console.log(this);
    });
  },
  beforeDestroy() {
    // 取消订阅,定时器
    pubsub.undescribe(this.pubId);
  },
};
</script>

<style scoped>
.school {
  background-color: skyblue;
  padding: 5px;
}
</style>